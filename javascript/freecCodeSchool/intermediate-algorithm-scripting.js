// Convert To Roman
function convertToRoman(num) {
    var arrNum = String(num).split(''),
        numLength = arrNum.length,
        result = [],
        getSymbol = function(n, nLen) {
            var symbol;

            switch(nLen) {
                case 1:
                    if (n === 0) {
                        symbol = '';
                    } else if (n < 4) {
                        symbol = 'I'.repeat(n);
                    } else if(n === 4) {
                        symbol = 'IV';
                    } else if(n === 5) {
                        symbol = 'V';
                    } else if (n > 5 && n < 9) {
                        symbol = 'V' + 'I'.repeat(n - 5);
                    } else {
                        symbol = 'IX';
                    } break;
                case 2:
                    if (n <= 3) {
                        symbol = 'X'.repeat(n);
                    } else if(n >= 4 && n < 5) {
                        symbol = 'XL';
                    } else if(n >= 5 && n < 6) {
                        symbol = 'L';
                    } else if (n >= 6 && n < 9) {
                        symbol = 'L' + 'X'.repeat(n - 5);
                    } else {
                        symbol = 'XC';
                    } break;
                case 3:
                    if (n < 4) {
                        symbol = 'C'.repeat(n);
                    } else if (n >= 4 && n < 5) {
                        symbol = 'CD';
                    } else if (n === 5) {
                        symbol = 'D';
                    } else if (n > 5 && n < 9) {
                        symbol = 'D' + 'C'.repeat(n - 5);
                    } else {
                        symbol = 'CM';
                    } break;
                case 4:
                    if (n < 5) {
                        symbol = 'M'.repeat(n);
                    } break;
                default: symbol = '';
            }

            return symbol;
        };

    for(var i = 1; i <= numLength; i += 1) {
        var temp = Math.floor(num % 10),
            sym = getSymbol(temp, i);

        result.push(sym);
        num = Math.floor(num / 10);
    }

    result = result.reverse().join('');

    return result;
}

// console.log(convertToRoman(36));
// console.log(convertToRoman(3999));
console.log(convertToRoman(68));


// Sum Primes

function sumPrimes(num) {
    "use strict";
    var prime = [],
        sum;

    for(var i = 2; i <= num; i += 1) {

        prime.push(i);

        for(var j = 2; j < i; j += 1) {
            if(i % j === 0) {
                prime.pop();
                break;
            }
        }
    }
    sum = prime.reduce(function(a, b) {
        return a + b;
    });

    return sum;
}

// console.log(sumPrimes(10));

// Smallest Common Multiple

function smallestCommons(arr) {
    var scm = 0,
        tryAgain = true;

    arr.sort(function(a, b) {
        "use strict";
        return a > b;
    });

    scm = arr[0];

    while (tryAgain) {
        while(scm % arr[1] !== 0) {
            scm += arr[0];
        }

        for(var i = arr[0]; i <= arr[1]; i += 1) {
            if(scm % i !== 0) {
                scm += arr[0];
                break;
            }
            if(i === arr[1]) {
                tryAgain = false;
            }
        }
    }

    return scm;
}

// console.log(smallestCommons([5,1]));


// Finders Keepers

function findElement(arr, func) {
    var num = arr.filter(func);

    return num[0];
}

// console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));

// Drop it

function dropElements(arr, func) {
    // Drop them elements.

    var dump = arr.slice();

    while(dump.length > 0) {

        if(func(dump.shift())) {
            break;
        }
        arr.shift();
    }

    return arr;
}

// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));

// Steamroller

function steamrollArray(arr) {
    // I'm a steamroller, baby
    var result = [];

    recursion(arr);

    function recursion(el) {
        if(Array.isArray(el)) {
            for(var j = 0, maxI = el.length; j < maxI; j += 1) {
                result.concat(recursion(el[j]));
            }
        } else {
            result.push(el);
        }
    }

    return result;
}

// console.log(steamrollArray([1, [2], [3, [ [4] ] ] ] ));

// Binary Agents

function binaryAgent(str) {
    var arr = str.split(' ');

    arr = arr.map(function(el) {
        if(el) {
            return String.fromCharCode(parseInt(el, 2));
        }
        return el;
    });

    str = arr.join('');

    return str;
}

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// Everything Be True

function truthCheck(collection, pre) {
    // Is everyone being true?
    var isValid = true;

    for(var i = 0, max = collection.length; i < max; i += 1) {
        if(!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
            isValid = false;
            break
        }
    }

    return isValid;
}

// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));


// Arguments Optional

function addTogether() {
    var len = arguments.length,
        temp = arguments[0];

    if(typeof temp !== 'number') {
        return undefined;
    }

    if(len === 2) {
        if(typeof arguments[1] !== 'number') {
            return undefined;
        }

        return temp + arguments[1];
    } else if(len === 1) {
        return function() {
            if(typeof arguments[0] !== 'number') {
                return undefined;
            }
            return temp + arguments[0];
        };
    }
}

// console.log(addTogether(2, 3));
// console.log(addTogether(2)(3));