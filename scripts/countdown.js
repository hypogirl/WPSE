// https://stackoverflow.com/a/9335296

var end = dateToday;
end.setHours(0,0,0,0);
end.setDate(dateToday.getDate() + 1);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';
        return;
    }

    var hours = Math.floor(distance / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    if (hours.toString().length == 1) hours = "0" + String(hours);
    if (minutes.toString().length == 1) minutes = "0" + String(minutes);
    if (seconds.toString().length == 1) seconds = "0" + String(seconds);

    document.getElementById('countdown').innerHTML = hours + ':';
    document.getElementById('countdown').innerHTML += minutes + ':';
    document.getElementById('countdown').innerHTML += seconds;
}

timer = setInterval(showRemaining, 1000);