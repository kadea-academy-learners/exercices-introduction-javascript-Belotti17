// Exercice 5
// Écrivez votre code ici

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log("25°C =", celsiusToFahrenheit(25) + "°F");

module.exports = { celsiusToFahrenheit };
