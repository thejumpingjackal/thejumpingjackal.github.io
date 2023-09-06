var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("uncollapse");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function aboutConfirm (ans) {
  if (ans == 1) {
    document.getElementById("confirmdiv").innerHTML = "Me too! Maybe you should also understand why this website exists as well.";
  } else if (ans == 2) {
    document.getElementById("confirmdiv").innerHTML = "Well maybe you have better things to do. It's not like I have a f*cking Nintendo Switch."
  }
}
