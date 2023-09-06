/* Changes number of animes watched continuously */
var finishedList, listLength;
finishedList = document.getElementById("fin").getElementsByClassName("finished");
listLength = finishedList.length;
document.getElementById("animeNumber").innerHTML = listLength;
