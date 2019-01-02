/*

1. replaceSpaces:
This is my own personal challange to myself for a project. For search functionality,
I need to use regex to replace spaces (' ') with ('%'). Should be easy enough.

2. countSpaces:
I see an ad regularly for a Udemy or Udacity course/assesment test that has the following
prompt and multiple choice answers. I want to satiate my curiosity.
*/

function replaceSpaces(input) {
    return input.toString().replace(/\s/g, '%')
};

console.log(replaceSpaces("Dr. Boom"));
console.log(replaceSpaces("Curse of Naxrammas"));

function countSpaces(input) {
    return input.split(' ').length-1;
};

console.log(countSpaces("This string should return 5 spaces."));
console.log(countSpaces("space1-> space2-> space3-> "))
