let nameValid = false;
let emailValid = false;
let cardValid = false;

function validateName()
{
    let value = document.getElementById("nameBox").value;

    if (value == "")
    {
        nameValid = false;
        return false;
    }
    else if (value.length > 15)
    {
        //turns field red
        document.getElementById("nameBox").style.color = "#cc0000";

        nameValid = false;
        return false;
    }

    //turns field green
    document.getElementById("nameBox").style.color = "#00cc00";

    nameValid = true;
    return true;
}

function validateEmail()
{
    let value = document.getElementById("emailBox").value;

    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(value.match(emailFormat))
    {
        //turns field green
        document.getElementById("emailBox").style.color = "#00cc00";

        emailValid = true;
        return true;
    }

    //turns field red
    document.getElementById("emailBox").style.color = "#cc0000";
    
    emailValid = false;
    return false;
}

function validateCard()
{
    let value = document.getElementById("cardBox").value;

    if (/[^0-9-\s]+/.test(value))
    {
        //turns field red
        document.getElementById("cardBox").style.color = "#cc0000";
        
        cardValid = false;
        return false;
    }

	let nCheck = 0, bEven = false;
	value = value.replace(/\D/g, "");

    for (var n = (value.length - 1); n >= 0; n--)
    {
		var cDigit = value.charAt(n);//,
		nDigit = parseInt(cDigit, 10);

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}

    if ((nCheck % 10) == 0)
    {
        //turns field green
        document.getElementById("cardBox").style.color = "#00cc00";
        
        cardValid = true;
        return true;
    }
    else
    {
        //turns field red
        document.getElementById("cardBox").style.color = "#cc0000";
        
        cardValid = false;
        return false;
    }
}

//Submit button
function submit()
{
    if (nameValid && emailValid && cardValid)
    {
        sendEmail();
    }
    else if (!nameValid)
    {
        alert("Please enter a valid Name");
    }
    else if (!emailValid)
    {
        alert("Please enter a valid Email Address");
    }
    else if (!cardValid)
    {
        alert("Please enter a valid Proxy Credit Card Number");
    }
}

function sendEmail()
{
    //alert("sent an email... honest!");

    let emailString = `mailto:${document.getElementById("emailBox").value}?subject=Form details&body=
    \n Name: \t ${document.getElementById("nameBox").value}
    \n Email address: \t ${document.getElementById("emailBox").value}
    \n Card Number: \t ${document.getElementById("cardBox").value}`;


    window.open(emailString);
}

//Event handler
document.onmousedown = handler;

function handler(event)
{
    if (event.target.id == "submit")
    {
        validateName();
        validateEmail();
        validateCard();
        submit();
    }
}