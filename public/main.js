// Planets array
const planets = [
  ["Pluto", 0.06],
  ["Neptune", 1.148],
  ["Uranus", 0.917],
  ["Saturn", 1.139],
  ["Jupiter", 2.64],
  ["Mars", 0.3895],
  ["Moon", 0.1655],
  ["Earth", 1],
  ["Venus", 0.9032],
  ["Mercury", 0.377],
  ["Sun", 27.9]
];

const dropdown = document.getElementById('planets');

// Populate the dropdown with planet names
planets.forEach(([name]) => {
  const option = document.createElement('option');
  option.value = name;
  option.textContent = name;
  dropdown.appendChild(option);
});

// Calculates weight on a given planet
function calculateWeight(weight, planet) {
  const match = planets.find(([name]) => name === planet);
  return match ? (weight * match[1]).toFixed(2) : null;
}

// Handles button click
function handleClickEvent() {
  const weight = parseFloat(document.getElementById('user-weight').value);
  const planet = document.getElementById('planets').value;
  const output = document.getElementById('output');
  const result = calculateWeight(weight, planet);


  output.textContent = `If you were on ${planet}, you would weigh ${result}lbs!`;
}


// Attach the event listener to the button
document.getElementById('calculate-button').addEventListener('click', handleClickEvent);