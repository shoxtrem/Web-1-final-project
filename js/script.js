var tempArray = localStorage.getItem("finalArray");
var displayArray = [];
displayArray = JSON.parse(tempArray);

var txt = "";
txt += "<table border='1'>"

  for (x in displayArray) {
      txt += "<tr><td>" + displayArray[x].name + " " + displayArray[x].lastname + "</td></tr>";
  }
  txt += "</table>"
  document.getElementById("demo").innerHTML = txt;
