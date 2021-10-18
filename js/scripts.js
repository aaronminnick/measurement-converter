function gallonsToLiters(gallons) {
  return 3.78541 * gallons;
}

function litersToGallons(liters) {
  return 0.264172 * liters;
}

const number1 = parseInt(prompt("Enter gallons to convert to liters:"));
alert(gallonsToLiters(number1));

const number2 = parseInt(prompt("Enter liters to convert to gallons:"));
alert(litersToGallons(number2));