/* 
Challenge: Find Longest String
- Write a function that accepts an array of strings.
- Return the longest string in the array.
*/

function findLongestString(arr) {
    // Initialize the "longest string" with the first value in the input array.
    // Use "let" instead of "const" because its value will change in the for loop.
    let longestStr = arr[0];
    // Loop over the input array.
    for(let i=0; i<arr.length; i++) {
        // Assign the string at the current position in the loop to a variable.
        let currentStr = arr[i];
        // Compare lengths of the current longest string to the current iteration.
        if(currentStr.length > longestStr.length) {
            // If the current iteration is longer than the current longest string,
            // overwrite the longestStr with the current iteration. 
            longestStr = currentStr;
        }
    }
    // When the loop is completed, return the value of the longest string. 
    return longestStr;
}

const arrOfStrings = ['Andrew', 'Sea of Thieves', 'supercalifragilisticexpialidocious', 'Gary', 'Bert', 'one'];
// expected output: supercalifragilisticexpialidocious
console.log(findLongestString(arrOfStrings));
