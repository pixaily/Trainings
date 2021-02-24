// 01. Sum 3 Numbers
function sumNumbers(a, b, c) {
    "use strict";
    return (a + b + c);
}
// console.log(sumNumbers(2, 3, 4));

// ======================================= //

// 02. Sum And VAT
function sumAndVat(arr) {
    "use strict";
    let sum = 0;
    const vat = 20 / 100,
        vatPrice = sum * vat;

    arr.map(function (num) {
        sum += num;
    });
    console.log(sum);
    console.log(vatPrice);
    return sum + (sum * vat);
}
// console.log(sumAndVat([1.20, 2.60, 3.50]));

// ======================================= //

// 03. Letter Occurrences in String
function letterInString(string, letter) {
    "use strict";
    const max = string.length;
    let counter = 0;
    
    string = string.toLowerCase();
    letter = letter.toLowerCase();
    
    for(let i = 0; i <= max; i += 1) {
        if(string[i] === letter) {
            counter += 1;
        }
    }
    
    return counter;
}
// console.log(letterInString('helLo', 'L'));

// ======================================= //

// 04 Filter By Age
function filterByAge(min, name1, age1, name2, age2) {
    "use strict";
    let students = [
            {
                'name': name1,
                'age': age1
            },
            {
                'name': name2,
                'age': age2
            }
        ],
        result = [];
    
    students.forEach((student)=> {
        if(student.age >= min) {
            result.push(student);
        }
    });
    result.map(student => {
        return student;
    });
}
// console.log(filterByAge(3, 'Ivan', 15, 'Asen', 9));

// ======================================= //

// 05. String of Numbers 1…N
function stringToNumbers(str){
    "use strict";
    const n = Number(str);
    
    if(isNaN(n)) {
        return;
    }
    
    let result = '';
    
    for(let i = 1; i <= n; i += 1) {
        result += i.toString();
    }
    
    return result;
}
// console.log(stringToNumbers('11'));

// ======================================= //

// 06 Figure Area

function figureArea(w1, h1, w2, h2) {
    "use strict";

    let s1 = w1 * h1,
        s2 = w2 * h2,
        areaOfCommonFigure = Math.min(w1, w2) * Math.min(h1, h2);

    return s1 + s2 - areaOfCommonFigure;
}
// console.log(figureArea(1, 1, 1.01, 1));
// console.log(figureArea(12.45, 23.266, 10.145, 28.561));
// console.log(figureArea(13, 2, 5, 8));

// ======================================= //

// 07 Next Day
function nextDay(y, m, d) {
    const curDate = new Date(y, m - 1, d),
          timeForNextDate = curDate.getTime() + (24 * 60 * 60 * 1000),
          nextDay = new Date(timeForNextDate);

    return `${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`;
}

// console.log(nextDay(1, 1, 1));


// ======================================= //

// 08 Distance between Points

function distancePoints(x1, y1, x2, y2) {
    let x = Math.pow((x2 - x1), 2),
        y = Math.pow((y2 - y1), 2);

    return Math.sqrt(x + y);
}

console.log(distancePoints(2, 4, 5, 0));