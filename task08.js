function tempToFahrenheit(celsius) {
    var tempInFahrenheit = (celsius * 1.8 ) + 32; 
    return tempInFahrenheit + " \u2109";
};

tempToFahrenheit(100);

function tempToCelsius(fahrenheit) {
    var tempInCelsius = (fahrenheit - 32) / 1.8; 
    return Math.round(tempInCelsius) + " \u2103";
};

tempToCelsius(100);

