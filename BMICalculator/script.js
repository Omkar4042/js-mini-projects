const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value.trim());
  const weight = parseFloat(document.querySelector("#weight").value.trim());

  // Validation
  if (isNaN(height) || height <= 0) {
    results.innerText = "Please enter a valid height (in cm)";
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerText = "Please enter a valid weight (in kg)";
    return;
  }

  // BMI Calculation
  const bmi = Number((weight / ((height * height) / 10000)).toFixed(2));

  // Category
  let category = "";

  if (bmi < 18.6) {
    category = "Underweight";
  } else if (bmi <= 24.9) {
    category = "Normal";
  } else {
    category = "Overweight";
  }

  results.innerText = `Your BMI is ${bmi} (${category})`;
});