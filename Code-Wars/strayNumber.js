function stray(numbers) {
    const firstNum = numbers[0];

    for (let i=0; i<numbers.length; i++) {
        // the thinking behind this IF statement is that if the first number is the stray
        // then then it will match the iteration, and the 2nd and 3rd iteration will match. 
        // Unfortunetly this only solves that particular edge case
        if (numbers[i] == firstNum && numbers[i+1] == numbers[i+2]) {
            return numbers[i];
        } 
        // else if (numbers[i] != firstNum) {
        //     return numbers[i];
        // } 
    }
}

// console.log(stray([17, 17, 17, 17, 3, 17, 17])) // returns 3
console.log(stray([8, 1, 1, 1, 1, 1 ])) // returns 3
