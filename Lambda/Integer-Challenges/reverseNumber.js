/* 
Reverse Number Challenge
Write a function called reverseNumber that reverses a number.

example input: 12345 / example output: 54321
*/

function reverseNumber(n) {
    let reversed = 0;

    while(n !==0) {
        reversed*= 10;
        reversed+= n % 10;
        n -= n % 10;
        n /= 10;
    }

    return reversed;
}

function forloop_reverseNumber(n) {
    for (let reversed=0; n; n = Math.floor(n / 10)) {
        reversed *= 10;
        reversed += n % 10;
    }

    return reversed;
}

console.log(reverseNumber(12345));
console.log(forloop_reverseNumber(12345));
