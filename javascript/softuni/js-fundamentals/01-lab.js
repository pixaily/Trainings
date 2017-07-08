// 01. Sum 3 Numbers
function sumNumbers(a, b, c) {
    "use strict";
    return (a + b + c);
}
// sumNumbers(2, 3, 4);

// ======================================= //

// 02. Sum And VAT
function sumAndVat(arr) {
    "use strict";
    let sum = 0;
    const vat = 20 / 100;
    
    arr.map(function (num) {
        sum += num;
    });
    console.log(sum);
    console.log(sum * vat);
    console.log(sum + (sum * vat));
}
// sumAndVat([1.20, 2.60, 3.50]);

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
    
    console.log(counter);
}
// letterInString('helLo', 'L');

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
        console.log(student);
    });
}
// filterByAge(3, 'Ivan', 15, 'Asen', 9);

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
    
    console.log(result);
}
stringToNumbers('11');

// ======================================= //

// 06 Figure Area

// ======================================= //

// 07 Next Day

// ======================================= //

// 08 Distance between Points
