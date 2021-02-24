// 01. Hello, JavaScript!

// ======================================= //

function helloJavascript(name) {
    "use strict";
    return `Hello, ${name}, I am JavaScript!`;
}

// console.log(helloJavascript('Pesho'));
// console.log(helloJavascript('Bill Gates'));


// 02. Area and Perimeter

// ======================================= //

function areaPerimeter(a, b) {
    "use strict";

    const area = a * b,
        perimeter = 2 * a + 2 * b;

    console.log(area);
    console.log(perimeter);
}

// areaPerimeter(2, 2);
// areaPerimeter(1, 3);
// areaPerimeter(2.5, 3.14);

// 03. Distance over Time

// ======================================= //

function distanceOverTime(arr) {
    "use strict";

    const distance = Math.abs(arr[0] - arr[1]),
        time = arr[2] / (60 * 60);

    return (distance * time) * 1000;
}

// console.log(distanceOverTime([0, 60, 3600]));
// console.log(distanceOverTime([11, 10, 120]));
// console.log(distanceOverTime([5, -5, 40]));

// 04 Circle Area

// ======================================= //

// function


// 05. Triangle Area

// ======================================= //


// 06 Cone

// ======================================= //


// 07 Odd / Even

// ======================================= //


// 08 Fruit or Vegetable

// ======================================= //


// 09 Colorful Numbers

// ======================================= //


// 10 Chessboard

// ======================================= //


// 11 Binary Logarithm

// ======================================= //


// 12 Prime Number Checker

// ======================================= //