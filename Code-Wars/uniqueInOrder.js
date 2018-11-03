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
    // if (input = String) {
        const spliced = input.split('');
        console.log(spliced[0]);
        const output = [spliced[0]];

        for(let i=0; i<spliced.length; i++) {
            for(let j=0; j<spliced.length; j++) {
                // console.log("I", input[i]);
                // console.log("J", input[j]);
            }
        }


        return output;
    // }
    // } else if (input = Array) {
    //     console.log("You're seeing this because input is an array");
    // }
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// console.log(uniqueInOrder([1,2,2,3,3]) )