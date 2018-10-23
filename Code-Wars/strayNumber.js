function stray(numbers) {
    console.log("Input: ", numbers);
    // sort the input into an array
    var sortedNums = numbers.sort();
    console.log("Sorted Input: ", sortedNums)
    
    // return the last number of the sorted array
    console.log("Last Number: ", sortedNums[sortedNums.length-1])
    return sortedNums[sortedNums.length-1]
}

console.log(stray([17, 17, 17, 17, 3, 17, 17])) // returns 3
console.log(stray([8, 1, 1, 1, 1, 1 ])) // returns 8
