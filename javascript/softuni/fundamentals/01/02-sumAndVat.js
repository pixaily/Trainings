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

sumAndVat([1.20, 2.60, 3.50]);