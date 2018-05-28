const tableParagraph = document.getElementById("displayFullArray");
const tableSearch = document.getElementById("displaySearchArray");
var tempArray = localStorage.getItem("finalArray");
var displayArray = [];
displayArray = JSON.parse(tempArray);


if (tableParagraph) {
  var txt = "";
  txt += "<table class='table-all table' border='1'>"

  for (x in displayArray) {
    txt += "<tr><td>" + displayArray[x].name + " " + displayArray[x].lastname + "</td></tr>";
  }
  txt += "</table>"
  document.getElementById("displayFullArray").innerHTML = txt;
}
// else if (tableSearch) {
//
// }
// function searchArray() {
//   console.log("no")
//   return searchQuerry = ;
// document.getElementById("search").value
// }
function show(searchQuerry){
// if (tableSearch) {
  var txt = "";
  txt += "<table class='table-all table' border='1'>"

  for (x in displayArray) {
    if (displayArray[x].name + " " + displayArray[x].lastname == searchQuerry) {
      txt += "<tr><td>" + displayArray[x].name + " " + displayArray[x].lastname + "</td></tr>";
    }
  }
  txt += "</table>"
  console.log(txt)
  document.getElementById("displaySearchArray").innerHTML = txt;
// }
}
