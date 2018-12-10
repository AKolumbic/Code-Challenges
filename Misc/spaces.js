/*

This is my own personal challange to myself for a project. For search functionality,
I need to use regex to replace spaces (' ') with ('%'). Should be easy enough.

*/

function replaceSpaces(input) {
    return input.toString().replace(/\s/g, '%')
};

console.log(replaceSpaces("Dr. Boom"));
console.log(replaceSpaces("Curse of Naxrammas"));
