/*

    Write a function toWeirdCase that accepts a string,
and returns the same string with all even indexed characters in each word
upper cased, and all odd indexed characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. 
Words will be separated by a single space(' ').

*/

// This was my first go at it.
function incorrectMethod(input) {
    const inputArr = input.split('');
    const output = [];

    for(let i=0; i<inputArr.length; i+= 2) {
        for(let j=1; j<inputArr.length; j+=2) {
            output.push(inputArr[i].toUpperCase());
            output.push(inputArr[j].toLowerCase());
        }
    }
    return output.join('')
}


// Unable to figure it out by myself after a while, I looked up a solution.
function toWeirdCase(string){
    var wordArray = string.split(' ');
    var weirdArray = wordArray.map(function(item){
        var tempArray = item.split('');
        var capArray = tempArray.map(function(char, i){
        if(i % 2 === 0){
        return char.toUpperCase();
      }
        else return char.toLowerCase();
      });
      return capArray.join('');
    });
    return weirdArray.join(' ');
}

console.log("\n");
console.log("Incorrect Function's Output: ")
console.log(incorrectMethod( "String" ));
console.log(incorrectMethod( "Weird string case" ));
console.log("\n");
console.log("Correct Output: ")
console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));//=> returns "WeIrD StRiNg CaSe"
console.log("\n");
