var name = "Joe";
var height = "74";

if (name === "AZ") {
  console.log("The name is correct");
} else {
  console.log("Expected the name to be AZ");
  var name = "Joey";
  console.log(name);
}

if (name === "AZ") {
  console.log("The name is correct");
} else {
  console.log("Expected the name to be AZ");
  var name = "AZ";
  console.log(name);
}

// Don't worry about this
module.exports = { name, height
};