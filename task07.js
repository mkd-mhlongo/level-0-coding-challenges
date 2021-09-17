function getTime(number) {
    var toHours = number / 60;
    var hours = Math.floor(toHours);
    var toMins = (toHours - hours) * 60;
    var mins = Math.round(toMins);
    console.log(hours + " hour(s), " + mins + " minute(s)")
};

getTime(1);