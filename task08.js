/*Write a function that takes in a number representing the temperature in Celsius and returns the temperature in Fahrenheit. 
Write another function that does the opposite (Fahrenheit to Celsius) */

function tempToFahrenheit(celsius) {
    var tempInFahrenheit = (celsius * 9/5) + 32; 
    console.log(tempInFahrenheit);
};

tempToFahrenheit(100);

function tempToCelsius(fahrenheit) {
    var tempInCelsius = Math.round((fahrenheit - 32) * 5/9); 
    console.log(tempInCelsius);
};

tempToCelsius(100);

