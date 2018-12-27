/*

A string is considered to be in title case if each word in the string is either
(a) capitalised (that is, only the first letter of the word is in upper case) 
or (b) considered to be an exception and put entirely into lower case unless it
is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional 
list of exceptions (minor words). The list of minor words will be given as a 
string with each word separated by a space. Your function should ignore the case
of the minor words string -- it should behave in the same way even if the case 
of the minor word string is changed.

###Arguments:

First argument (required): the original string to be converted.

Second argument (optional): space-delimited list of minor words 
that must always be lowercase except for the first word in the string. 
The JavaScript/CoffeeScript tests will pass undefined when this argument 
is unused.

*/

function titleCase(input, input2) {
    console.log(input)
    console.log(input2)
    // Changes empty exception argument to undefined so it doesnt crash when I have to split it. 
    if (input2 == undefined) {
        input2 = '';
    }

    const words = input.split(' ');
    console.log(words)

    const exceptions = input2.split(' ');
    console.log(exceptions)

    words.forEach(word => {
        const letters = word.split('');
        console.log(letters)

        if (letters[0] === letters[0].toLowerCase()) {
            letters[0] = letters[0].toUpperCase();
        }

        letters.join('')
    });

    return words.join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of')) // should return: 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // should return: 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')) // should return: 'The Quick Brown Fox'
