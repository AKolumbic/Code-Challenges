/*

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; 
in other words, it is the product of some integer with itself.

Input will always be an integer.

*/

function perfectSquare(input) {
    let num = Math.sqrt(input);

    // Note that (num * num == input) is irrelevant after already determining if the square root 
    // of the input is a whole number(num % 1 === 0), however that was my original line of thinking,
    // so I wanted to include it. It passed the tests up to a certain point where a large decimal multiplied
    // by itself did actually equal 42. 

    if ((num % 1 === 0) && (num * num == input)) {
        return true;
    } else {
        return false;
    }
};

console.log(perfectSquare(3)) // false
console.log(perfectSquare(4)) // true
console.log(perfectSquare(25)) // true
console.log(perfectSquare(26)) // false
console.log(perfectSquare(42)) // false
