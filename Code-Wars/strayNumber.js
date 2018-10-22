function stray(numbers) {
    const firstNum = numbers[0];

    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] != firstNum) {
            return numbers[i];
        }
    }
}

console.log(stray([8, 1, 1, 1, 1, 1 ])) // should return 3
