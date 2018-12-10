/* 

Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?

Plan:
1. Ask if input is ALWAYS a string, if not, then toString()
2. 
*/

function isUnique(input) {
    const array = input.split('');
    const hashTable = {};

    for (let i = 0; i < array.length; ++i) {
        let value = array[i];
        if (value in hashTable) {
            return false;
        }
        hashTable[value] = false;
    }
    return true;
}

function one_liner(input) {
    const arr = input.split('')

    return (new Set(arr)).size == arr.length;
}

console.log(isUnique("abcdefghijklmnop")); // returns true
console.log(isUnique("ABSSSSSDFS")); // returns false
console.log(isUnique("aBc")); //returns true
console.log("\n")
console.log(one_liner("abcdefghijklmnop")) //true
console.log(one_liner("ABSSSSSDFS")) // false
console.log(one_liner("aBc")) // true
