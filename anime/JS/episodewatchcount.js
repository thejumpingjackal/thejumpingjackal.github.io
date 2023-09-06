function episodesToWatch(anime, japName, num) {
  if (anime === "Haikyuu!!") {
    alert(anime + " (" + japName + ") cannot be watched on Netflix.\nIt can only be watched during the day at 4anime.to");
    var yes, no;
    yes = [
      "Yes",
      "yes",
      "Yep",
      "yep",
      "Y",
      "y"
    ];
    no = [
      "No",
      "no",
      "N",
      "n"
    ];
    var timeBoolean = prompt("Are you currently watching at night?");
    if (no.indexOf(timeBoolean) > -1) {
      alert("Great! You may continue watching " + anime + " (" + japName + ").");
    } else if (yes.indexOf(timeBoolean) > -1) {
      alert("Consider watching " + anime + " (" + japName + ") at another time.");
    } else {
      alert("Invalid Response");
    }
  } else {
    if (num > 1) {
      alert("For " + anime + " (" + japName + "), you must watch " + num + " episodes in a row.");
    } else {
      alert("For " + anime + " (" + japName + "), you must watch " + num + " episode.");
    }
  }
}
