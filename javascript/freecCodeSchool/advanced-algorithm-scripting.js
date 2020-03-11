// Validate US Telephone Numbers

function telephoneCheck(str) {
    // Good luck!
    var
        // fistOptional = '(\\(?1?\\s?)',
        // threeDigits = '[0-9]{3}',
        // secondOptional = '(\\-?\\)?\\s?)',
        // thirdOptional = '(\\-?\\s?)',
        // fourDigits = '[0-9]{4}',
        // regEx = fistOptional + threeDigits + secondOptional + threeDigits + thirdOptional + fourDigits,
        reg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]\d{3}[\s\-]\d{4}$/;
        // result = str.match(/(1\s)*(\(\d{3}\)|\d{3})(\-|\s)*\d{3}(\-|\s)*\d{4}/);

    return reg.test(str);
}


// console.log(telephoneCheck("1 (555) 555-5555"));
// console.log(telephoneCheck("27576227382"));
// console.log(telephoneCheck("(6505552368)"));
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555


// Record Collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    var curObj;
    if(collection.hasOwnProperty(id)) {
        curObj = collection[id];

        if(curObj.hasOwnProperty(prop)) {
            if (value) {
                if(prop === 'tracks') {
                    curObj[prop].push(value);
                } else {
                    curObj[prop] = value;
                }
            } else {
                delete curObj[prop];
            }
        } else {
            if (value) {
                if(prop === 'tracks') {
                    curObj[prop] = [];
                    curObj[prop].push(value);
                } else {
                    curObj[prop] = value;
                }
            }
        }
    }

    return collection;
}

// Alter values below to test your code
// console.log(updateRecords(5439, "artist", "ABBA"));
// console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(2548, "artist", ""));

// Symmetric Difference

function sym(args) {
    var args = Array.prototype.slice.call(arguments);

    function symDiff(arr1, arr2) {
        "use strict";
        var result = [];

        for(var i = 0, max1 = arr1.length; i < max1; i += 1) {
            if(arr2.indexOf(arr1[i]) < 0 && result.indexOf(arr1[i])) {
                result.push(arr1[i]);
            }
        }

        for(var j = 0, max2 = arr2.length; j < max2; j += 1) {
            if(arr1.indexOf(arr2[j]) < 0 && result.indexOf(arr2[j]) < 0) {
                result.push(arr2[j]);
            }
        }

        console.log(result);

        return result;
    }

    return args.reduce(symDiff);
}

// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
// console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));

// Exact Change

function checkCashRegister(price, cash, cid) {
    var change = [],
        // Here is your change, ma'am.
        changeVal = (cash - price).toFixed(2),
        deskObj = {},
        changeArr = [],
        deskValue = 0,
        temp = 0;

    for(var i = 0, max = cid.length; i < max; i += 1) {
        var singleValue = 0,
            curName = cid[i][0],
            curValue = cid[i][1];
            deskValue += curValue;

        switch(curName) {
            case 'PENNY': singleValue = 0.01; break;
            case 'NICKEL': singleValue = 0.05; break;
            case 'DIME': singleValue = 0.10; break;
            case 'QUARTER': singleValue = 0.25; break;
            case 'ONE': singleValue = 1.00; break;
            case 'FIVE': singleValue = 5.00; break;
            case 'TEN': singleValue = 10.00; break;
            case 'TWENTY': singleValue = 20.00; break;
            case 'ONE HUNDRED': singleValue = 100.00; break;
            default: break;
        }

        deskObj[curName] = {
            value: singleValue,
            amount: Number((curValue / singleValue).toFixed(0)),
            sum: curValue,
        };
    }

    deskValue = deskValue.toFixed(2);

    changeVal = Number(changeVal);
    deskValue = Number(deskValue);

    if(changeVal === deskValue) {
        return 'Closed';
    } else if(changeVal > deskValue) {
        return 'Insufficient Funds';
    }

    for(var key in deskObj) {
        var cur = deskObj[key];
        if(changeVal >= cur['value']) {
            cur.name = key;
            changeArr.push(cur);
            temp += cur.sum
        }
    }

    if(temp < changeVal) {
        return 'Insufficient Funds';
    }

    for (var j = changeArr.length - 1; j >= 0; j -= 1) {
        var count = 0,
            curEl = changeArr[j];

        while (changeVal >= curEl.value) {
            if (curEl.amount === 0) {
                break;
            }

            changeVal = (changeVal - curEl.value).toFixed(2);
            count += 1;
            curEl.amount -= 1;
        }

        if (count !== 0) {
            change.push([curEl.name, count * curEl.value]);
        }

        if (changeVal === 0) {
            break;
        }
    }

    return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));


// Inventory Update
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    for(var i = 0, max1 = arr2.length; i < max1; i += 1) {
        var item = arr2[i],
            itemName = item[1],
            temp = [];

        for(var j = 0, max2 = arr1.length; j < max2; j += 1) {
            var inventoryItem = arr1[j];

            if(itemName === inventoryItem[1]) {
                arr1[j][0] += item[0];
                temp = [];
                break;
            }
            temp = item;
        }

        if(temp.length > 0 || arr1.length === 0) {
            arr1.push(item);
        }
    }

    arr1.sort(function(a, b) {
        "use strict";
        return a[1] > b[1];
    });

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

// Result
// [
//  [88, "Bowling Ball"],
//  [2, "Dirty Sock"],
//  [3, "Hair Pin"],
//  [3, "Half-Eaten Apple"],
//  [5, "Microphone"],
//  [7, "Toothpaste"]
// ]

// console.log(updateInventory(curInv, newInv));
// console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]] ));

// No repeats please

function permAlone(str) {
    var arr = str.split(''),
        counter = 0,
        len = arr.length,
        regEx = /([a-z])\1+/,
        permutations = [];


    function generate(n) {
        "use strict";
        console.log(arr);
        if(n === 1) {
            if(!regEx.test(arr.join(''))) {
                counter++;
            }
            permutations.push(arr.join(''));
        } else {
            for(var i = 0; i !== n ; i += 1) {
                generate(n - 1);
                if(n % 2 === 0) {
                    swap(i, n - 1);
                } else {
                    swap(0, n - 1);
                }
            }
        }
    }


    function swap(a,b) {
        "use strict";
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    generate(len);

    console.log(permutations);

    return counter;
}

// console.log(permAlone('aab'));
// console.log(permAlone('abfdefa'));
// console.log(permAlone('aaaaaab'));


// Make a Person

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    // var arrayNames = firstAndLast.split(' '),
    //     firstName = arrayNames[0],
    //     lastName = arrayNames[1],
    //     fullName = firstName + ' ' + lastName;

    var firstName, lastName, fullName;

    this.getFullName = function() {
        "use strict";
        return this.getFirstName() + ' ' + this.getLastName();
    };
    this.getFirstName = function() {
        "use strict";
        return firstName;
    };
    this.getLastName = function() {
        "use strict";
        return lastName;
    };
    this.setFirstName = function(first) {
        "use strict";
        firstName = first;
    };
    this.setLastName = function(last) {
        "use strict";
        lastName = last;
    };
    this.setFullName = function(firstAndLast) {
        "use strict";
        var arrayNames = firstAndLast.split(' ');

        this.setFirstName(arrayNames[0]);
        this.setLastName(arrayNames[1]);

        fullName = firstName + ' ' + lastName;
    };

    this.setFullName(firstAndLast);

    return firstAndLast;
};

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

var bob = new Person('Bob Ross');
bob.getFullName();

// console.log(Object.keys(bob).length);
// console.log(bob.firstName);
// console.log(bob.lastName);
// console.log(bob.getFirstName());
// bob.setFirstName("Haskell");
// console.log(bob.getFirstName());
// console.log(bob.getFullName());
// bob.setFullName("Haskell Curry");
// console.log(bob.getFullName());

// Map the Debris

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    for(var i = 0, max = arr.length; i < max; i += 1) {
        arr[i].orbitalPeriod = Math.round(2 * Math.PI * (Math.sqrt(Math.pow((arr[i].avgAlt + earthRadius), 3) / GM)));

        delete arr[i].avgAlt;
    }

    return arr;
}

// console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

// Pairwise

function pairwise(arr, arg) {
    var result = [];

    for(var i = 0, max = arr.length; i < max; i += 1) {
        var el = arr[i];

        for(var j = i + 1, maxI = arr.length; j < maxI; j += 1) {
            var next = arr[j];
            if((el + next) === arg) {
                if(result.indexOf(i) < 0 && result.indexOf(j) < 0) {
                    result.push(i, j);
                }
            }
        }
    }

    return result.reduce(function(sum, el) {
        return sum + el;
    }, 0);
}

// console.log(pairwise([1,4,2,3,0,5], 7));
// console.log(pairwise([1, 3, 2, 4], 4));
// console.log(pairwise([1, 1, 1], 2));