/* 
Reverse Number Challenge
Write a function called reverseNumber that reverses a number.

example input: 12345 / example output: 54321
*/

function reverseNumber(n) {
    let num = n;
    let reversedNum = 0;

    while(num !==0) {
        reversedNum *= 10;
        reversedNum += num % 10;
        num -= num % 10;
        num /= 10;
    }

    return reversedNum;
}