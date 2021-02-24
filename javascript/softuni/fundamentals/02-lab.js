// 01. Multiply Numbers

// ======================================= //

function multiplyNumbers(a, b) {
    "use strict";

    return a * b;
}

console.log(multiplyNumbers(3, 2));
console.log(multiplyNumbers(23632.36, -12.3249));

// 02. Boxes and Bottles

// ======================================= //

function boxesBottles(a, b) {
    "use strict";

    return Math.ceil(a / b);
}

console.log(boxesBottles(20, 5));
console.log(boxesBottles(15, 7));
console.log(boxesBottles(5, 10));

// 03. Leap Year

// ======================================= //

function leapYear(y) {
    "use strict";

    if((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
        return 'yes';
    } else {
        return 'no';
    }
}

console.log(leapYear(1999));
console.log(leapYear(2000));
console.log(leapYear(1900));

// 04 Circle Area

// ======================================= //

function circleArea(r) {
    "use strict";
    const area = Math.PI * (r * r);

    console.log(area);

    return area.toFixed(2);
}

console.log(circleArea(5));

// 05. Triangle Area

// ======================================= //

function triangleArea(a, b, c) {
    "use strict";
    const s = (a + b + c) / 2;

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(triangleArea(2, 3.5, 4));

// 06 Cone

// ======================================= //

function cone(r, h) {
    "use strict";

    const vol = (Math.PI * h * (r * r)) / 3,
        s = Math.sqrt(r * r + h * h),
        surface = Math.PI * r * s + Math.PI * r * r;

    console.log(vol);

    return surface;
}

console.log(cone(3, 5));

// 07 Odd / Even

// ======================================= //

function oddEven(n) {
    "use strict";

    if(n % 1 === 0) {
        if(n % 2 === 0) {
            return 'even';
        } else {
            return 'odd';
        }
    } else {
        return 'invalid';
    }
}

console.log(oddEven(5));
console.log(oddEven(8));
console.log(oddEven(1.5));

// 08 Fruit or Vegetable

// ======================================= //

function fruitVegetable(str) {
    "use strict";
    const fruit = [ 'banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach' ],
        vegetable = [ 'tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley' ];

    if(fruit.indexOf(str) !== -1) {
        return 'fruit';
    } else if(vegetable.indexOf(str) !== -1) {
        return 'vegetable';
    } else {
        return 'unknown';
    }
}

console.log(fruitVegetable('banana'));
console.log(fruitVegetable('cucumber'));
console.log(fruitVegetable('pizza'));

// 09 Colorful Numbers

// ======================================= //

function colorfulNumbers(n) {
    "use strict";

    let html = '<ul>\n\r',
        color = 'green';

    for(let i = 1; i <= n; i += 1) {
        if(i % 2 === 0) {
            color = 'blue';
        } else {
            color = 'green';
        }

        html += `<li><span style="color: ${color}">${i}</span></li>\n\r`;
    }
    html += '</ul>';

    return html;
}

console.log(colorfulNumbers(10));

// 10 Chessboard

// ======================================= //

function chessboard(n) {
    "use strict";

    let chessboard = '<div class="chessboard">\n';

    for (let i = 1; i <= n; i += 1) {
        let row = '\t<div>\n';

        for (let j = 1; j <= n; j += 1) {
            let color = 'black';

            if(i % 2 === 0) {
                color = 'white';
                if(j % 2 === 0) {
                    color = 'black';
                }
            } else {
                if(j % 2 === 0) {
                    color = 'white';
                }
            }

            row += `\t\t<span class="${color}"></span>\n`;
        }

        row += '\t</div>\n';
        chessboard += row;
    }

    chessboard += '</div>';

    return chessboard;
}

console.log(chessboard(3));

// 11 Binary Logarithm

// ======================================= //


function binaryLogarithm(arr) {
    "use strict";

    arr.forEach(function(value) {
        console.log(Math.log2(value));
    });
}

console.log(binaryLogarithm([ 3, 2 ]));

// 12 Prime Number Checker

// ======================================= //

function primeNumberChecker(n) {
    "use strict";
    const half = n / 2;
    let isPrime = true;

    if(n < 2) {
        isPrime = false;
    }

    for(let i = 2; i <= half; i += 1) {
        if(n % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

console.log(primeNumberChecker(7));
console.log(primeNumberChecker(8));
console.log(primeNumberChecker(81));