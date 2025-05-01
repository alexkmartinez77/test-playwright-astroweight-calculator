// Define the planets with their gravity factors
var planets = [
  ["Sun", 27.9],
  ["Mercury", 0.377],
  ["Venus", 0.9032],
  ["Earth", 1],
  ["Moon", 0.1655],
  ["Mars", 0.3895],
  ["Jupiter", 2.64],
  ["Saturn", 1.139],
  ["Uranus", 0.917],
  ["Neptune", 1.148],
  ["Pluto", 0.06],
];

// Populate the dropdown element with the data found in the planets array.
function populatePlanetsDropdown() {
  var planetSelect = document.getElementById("planets");
  // Clear existing options if any
  planetSelect.innerHTML = "";

  planets.forEach(function (planet) {
    var option = document.createElement("option");
    option.value = planet[0];
    option.textContent = planet[0];
    planetSelect.appendChild(option);
  });
}

// Function to calculate weight
function calculateWeight(weight, planetName) {
  var gravityFactor = planets.find((planet) => planet[0] === planetName)[1];
  return weight * gravityFactor;
}

// Handle button click event
function handleClickEvent(e) {
  // Declare a variable called userWeight
  var userWeight = parseFloat(document.getElementById("user-weight").value);
  // Declare a variable called planetName
  var planetName = document.getElementById("planets").value;
  // Calculate weight
  if (isNaN(userWeight) || userWeight <= 0) {
    document.getElementById("output").textContent =
      "Please enter a valid weight.";
    return;
  }

  var result = calculateWeight(userWeight, planetName);

  // Correctly format the output
  let formattedResult = result.toFixed(2);

  // Display the message
  document.getElementById(
    "output"
  ).textContent = `If you were on ${planetName}, you would weigh ${formattedResult}lbs!`;
}

// Set the #calculate-button element's onclick method
document.getElementById("calculate-button").onclick = handleClickEvent;

// Automatically populate dropdown on load
populatePlanetsDropdown();

//Page background code
function stars() {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  document.body.appendChild(e);
  e.style.left = Math.random() * +innerWidth + "px";

  let size = Math.random() * 12;
  let duration = Math.random() * 3;

  e.style.fontSize = 12 + "px";
  e.style.animationDuration = 2 + duration + "s";
  setTimeout(function () {
    document.body.removeChild(e);
  }, 5000);
}

setInterval(function () {
  stars();
}, 50);
// Page background Code End