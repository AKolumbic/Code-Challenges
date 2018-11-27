/*

Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the 
missing second character of the final pair with an underscore ('_').

*/

function solution(input) {
    const arr = input.split('');
    const output = [];
    
    for (let i=0; i<arr.length; i=i+2) { 
        const pairs = [];

        pairs.push(arr[i], arr[i+1]);
        if (pairs[1] === undefined) {
            pairs[1] = '_';
        }
        output.push(pairs.join(''))
    }

    return output;
};

console.log(solution('abc')); // should return ['ab', 'c_']
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']
