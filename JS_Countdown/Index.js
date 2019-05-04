'use strict';
var intervalStarted = false, interval;

function startTimer(date) {
    let estimatedDate = setDate(date);
    if (estimatedDate <= new Date() && intervalStarted === false) {
        alert('Неверное Время!');
    } else if (estimatedDate <= new Date() && intervalStarted === true) {
        clearInterval(interval);
        alert('Время истекло!');
    } else {
        document.getElementById('contInput').style.display = 'none';
        document.getElementById('contTimer').style.display = 'block';
        var dateDifference = estimatedDate - new Date();
        var daysLeft = dateDifference,
            hoursLeft = dateDifference % (1000 * 60 * 60 * 24),
            minutesLeft = hoursLeft % (1000 * 60 * 60),
            secondsLeft = minutesLeft % (1000 * 60);
        document.getElementById('txtDays').innerText = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
        document.getElementById('txtHours').innerText = Math.floor(hoursLeft / (1000 * 60 * 60));
        document.getElementById('txtMinutes').innerText = Math.floor(minutesLeft / (1000 * 60));
        document.getElementById('txtSeconds').innerText = Math.floor(secondsLeft / 1000);

        if (!intervalStarted) {
            document.getElementById('contTimer').title = 'До ' + setDate(date).toLocaleString();
            interval = setInterval(startTimer, 1000, date);
            intervalStarted = true;
        }
    }   
}

function setDate(datetime) {
    return new Date(Date.parse(datetime)) != 'Invalid Date' ? new Date(Date.parse(datetime)) : new Date();
}