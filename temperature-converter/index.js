const convertButton = document.getElementById("convert");
const inputSection = document.getElementsByClassName("input-data")[0];
const outputSection = document.getElementsByClassName("output-data")[0];
const convertTo = document.getElementById("conversion-unit-to");
const convertFrom = document.getElementById("conversion-unit-from");

convertButton.addEventListener("click", () => {
  const cF = convertFrom.value;
  const cT = convertTo.value;
  const result = inputSection.value;

  let convertedResult;

  if (cF === "celsius" && cT === "fahrenheit") {
    convertedResult = (result * 9) / 5 + 32;
  } else if (cF === "celsius" && cT === "kelvin") {
    convertedResult = parseFloat(result) + 273.15;
  } else if (cF === "fahrenheit" && cT === "celsius") {
    convertedResult = ((result - 32) * 5) / 9;
  } else if (cF === "fahrenheit" && cT === "kelvin") {
    convertedResult = ((result - 32) * 5) / 9 + 273.15;
  } else if (cF === "kelvin" && cT === "fahrenheit") {
    convertedResult = ((result - 273.15) * 9) / 5 + 32;
  } else if (cF === "kelvin" && cT === "celsius") {
    convertedResult = result - 273.15;
  }

  outputSection.value = convertedResult;
});
