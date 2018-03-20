// Adds new name and lastname from form to localStorage
function populateStorage() {
  var finalArray = [
    // {"name":"John","lastname":"Doe"}
  ];
  // Create temporary array to hold previous localStorage data
  var standInArray = [];

  // Check if localStorage isn't empty
  if (localStorage.length != 0) {
    // place localStorage content (strings) in standInArray then parse into finalArray (array)
    standInArray = localStorage.getItem("finalArray");
    finalArray = JSON.parse(standInArray);
  }

  // push new data from form to the end of the finalArray
  finalArray.push({
    "name": document.getElementById('name').value,
    "lastname": document.getElementById('lastname').value
  });
  // turn array into strings to place finalArray in localStorage
  localStorage.setItem("finalArray", JSON.stringify(finalArray));
  // Control code
  // console.log(finalArray,localStorage);

}
