/*

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without 
any elements with the same value next to each other and preserving the original order of elements.

input is either a string or array.

example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]


STEPS/PLAN:
1. Check if input is array or string.
    * If String:
    * Split the input into an array.

2. init a cache with the first value in the split input.(call this output)
3. loop over input
    * if input interation is not in output, push it into output.

4. return output.

*/

function uniqueInOrder(input) {
    let inputArr = [];
    const output = [];
    
    if(Array.isArray(input) == true) {
        inputArr = input;
    } else { 
        inputArr = input.split('');
    }

    inputArr.forEach(item => {
        if (output.includes(item) == false) {
            output.push(item);
        }
    });

    return output;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3]))
console.log(uniqueInOrder('ABBCcAD'))
