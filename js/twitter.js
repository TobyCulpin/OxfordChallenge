//loads the widgets
twttr.widgets.load()

//converts the HTML into a widget
twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "Oxford University"
  }
);