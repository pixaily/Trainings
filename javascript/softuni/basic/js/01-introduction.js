function CurrentDateAndTime() {
    var date = new Date();
    console.log(date.toUTCString());
}

function CircleArea() {
    //var r1 = prompt("Enter a radius of an circle:")
    var r1 = 7,
        r2 = 1.5,
        r3 = 20,
        result = (document).getElementById('results'),
        p1 = document.createElement('p'),
        p2 = document.createElement('p'),
        p3 = document.createElement('p');

    result.innerHTML = '';

    p1.innerHTML = 'r1 = ' + r1 + '; area1 = ' + calcCircleArea(r1);
    result.appendChild(p1);

    p2.innerHTML = 'r2 = ' + r2 + '; area2 = ' + calcCircleArea(r2);
    result.appendChild(p2);

    p3.innerHTML = 'r2 = ' + r3 + '; area3 = ' + calcCircleArea(r3);
    result.appendChild(p3);
}

function calcCircleArea(r) {
    return Math.PI * Math.pow(r, 2);
}

function DecimalToHex() {
    var decimal = parseInt(prompt("Entter the decimal number:")),
        hex = decimal.toString(16).toUpperCase();
    alert(hex);
}

function ShowClock() {
    var clockHolder = (document).getElementById('clock-wrapper');

    //setInterval(getCurrentTime(), 1000);
    setTimeout(getCurrentTime(), 1000);
}

function getCurrentTime() {
    var date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();

    //return h + ":" + m +":" + "s";
    console.log(h + ":" + m +":" + s);
}

function TicTacToe() {
    var table = (document).getElementById('tic-tac-toe'),
        ceil = table.getElementsByTagName('td'),
        ceilCount = table.getElementsByTagName('td').length,
        clicks = 0;

    for (var i = 0; i < ceilCount; i++) {
        ceil[i].addEventListener('click', function () {
            //if (this.innerHTML)
            clicks++;
            console.log(this.innerHTML);

            if(clicks % 2 === 0) {
                this.innerHTML = 'O';
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', function() {
   TicTacToe();
});