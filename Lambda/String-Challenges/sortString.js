/*
Challenge: Sort A string in Alphabetical order.
- Write a function called sortString that returns a passed string 
  with letters in alphabetical order.
*/ 

function sortString(str) {
    // One-liner:
    // 1. split seperates each character of the input string, and puts it in an array
    // 2. sort('') sorts into an alphabetical order.
    // NOTE: sort() does not sort integers in a way u think it might.
    // 3. join('') brings the characters back into a single sting.
    return str.split('').sort().join('');
}
  
console.log(sortString('zycxbwa'));