/* Functions that allow for the review tabs to work */
function openReview(evt, animeName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(animeName).style.display = "block";
  evt.currentTarget.className += " active";
}
function openArchive(evt, archiveName) {
  var i, arctabcontent, tablinks;
  arctabcontent = document.getElementsByClassName("arctabcontent");
  for (i = 0; i < arctabcontent.length; i++) {
    arctabcontent[i].style.display = "none";
  }
  arctablinks = document.getElementsByClassName("arctablinks");
  for (i = 0; i < arctablinks.length; i++) {
    arctablinks[i].className = arctablinks[i].className.replace(" active", "");
  }
  document.getElementById(archiveName).style.display = "block";
  evt.currentTarget.className += " active";
}
