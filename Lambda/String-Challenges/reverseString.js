/*
Challenge: Reverse String
- Write a function called reverseString that accepts a string.
- Return a reversed copy of the string.
*/

function reverseString(string) {
    // Simple one-liner:
    // 1. split('') seperates each character of the input string, and puts it in an array
    // 2. reverse() flips the order of the individual characters in the array made by split
    // 3. join('') brings the characters back into a single string.
    // since we are returning this line, thats all we need to do.
    return string.split('').reverse().join('');
}

console.log(reverseString('Hello World!'))