// Define HTML elements that will be used to print results
// Store localStorage into a JS array
const tableParagraph = document.getElementById("displayFullArray");
const tableSearch = document.getElementById("displaySearchArray");
var tempArray = localStorage.getItem("finalArray");
var displayArray = [];
displayArray = JSON.parse(tempArray);

// Check if HTML element is present
// Use a variable to print a table
if (tableParagraph) {
  var txt = "";
  txt += "<table class='table-all table' border='1'>"
// loops through the JS array and print each entry into a HTML table
  for (x in displayArray) {
    txt += "<tr><td>" + displayArray[x].name + " " + displayArray[x].lastname + "</td></tr>";
  }
  txt += "</table>"
  document.getElementById("displayFullArray").innerHTML = txt;
}
// function that shows the searched value in a table
function show(searchQuerry){
  var success = 0
  var txt = "";
  txt += "<table class='table-all table' border='1'>"
// loop through the JS array and print each occurence of searchQuerry
  for (x in displayArray) {
    if (displayArray[x].name + " " + displayArray[x].lastname == searchQuerry) {
      txt += "<tr><td>" + displayArray[x].name + " " + displayArray[x].lastname + "</td></tr>";
      success = 1
    }
  }
  txt += "</table>"
  // Control code
  // console.log(txt)
  // if success is 1 then print the HTML table to the HTML table
  // else print an alert
  if (success) {
    document.getElementById("displaySearchArray").innerHTML = txt;
  } else if (! success){
    alert(searchQuerry + " not found in database");
  }
}
