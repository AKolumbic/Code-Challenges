/*

Write a method to replace all spaces in a string with '%20'.
You may assume that the string has sufficient space at the end to hold the 
additional characters, and that you are givn the "true" length of the string.

NOTE: This is essentially the same as my own challenge I gave to myself in Misc/spaces.js

STEPS:
1. Since I'm told that the input is a string, there's no need to .toString()
2. I can use .replace() on input. replace() takes two params, the 'original',
   and what to replace the 'original' with.
3. REGEX, the best way to pick out specific things with strings, in this case, spaces.
4. For this case '/\s/g' picks out spaces, our 'original' in replace().
5. '%20' is what we want to replace our spaces with, so thats the second param.
6. I can return all those steps in one clean line.

*/

function URLify(input) {
    return input.replace(/\s/g, '%20');
}

console.log(URLify("Mr John Smith"));
console.log(URLify("This string must needs lose its spaces"));
