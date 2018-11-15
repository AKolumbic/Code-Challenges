/*
Basic Command Line Methods
*/


let input = process.argv.slice();

let operation = input[2];

let a = input[3];
let b = input[4];

let methods = {
    add: function(x, y) {
        return Number(x) + Number(y);
    },
    subtract: function(x, y) {
        return Number(x) - Number(y);
    },
    multiply: function(x, y) {
        return Number(x) * Number(y);
    },
    divide: function(x, y) {
        return Number(x) / Number(y);
    }
}

if ((!methods[operation]) || (a||b == NaN)) {
    console.log("Invalid Input")
}

console.log(methods[operation](a,b));
