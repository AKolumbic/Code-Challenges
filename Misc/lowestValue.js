/*
Return the lowest valued integer in a list of numbers
*/

function lowestValue(arr) {
    const ordered = [arr[0]];
  
    arr.forEach(value => {
        if(value < ordered[ordered.length-1]) {
            ordered.push(value)
        }
    });
  
    return ordered[ordered.length-1];
  
}

const arr = [ 3, 6, 9, 1, 5, 4, 7, 2, 8];

console.log(lowestValue(arr)); // correct answer: 1
