function getTime(number) {
    var toHours = Math.floor(number / 60);
    var toMins = number % 60;
    return toHours + " hour(s), " + toMins + " minute(s)";
};

getTime(133);

