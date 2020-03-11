// Given the triangle of consecutive odd numbers:
//
//             1
//          3     5
//       7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
//
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(row) {
    let indexOfOdd = 0, // Start number of
        count = 0,
        i,
        j,
        max,
        n = 1,
        result = 0;

    for(i = 0; i < row; i += 1) {
        indexOfOdd += i;
    }

    max = indexOfOdd + row;

    while(count <= max) {
        n += 1;
        if(n % 2 != 0) {
            count++;
            if(count >= indexOfOdd && count < max) {
                result += n;
            }
        }
    }

    return result;
}

console.log(rowSumOddNumbers(5));

function rowSumOddNumbersShort(n) {
    return Math.pow(n,3);
}

console.log(rowSumOddNumbersShort(5));