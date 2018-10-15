/* 
Challenge: Reverse a String's Casing.
- Write a function that takes in a string as input, 
- reverse the 'casing' of that string.
*/

function reverseCase(str) {
    // we split the input string into an array of individual characters("letter") and then
    // map over each "letter" since we will be changing them. All of the logic is put onto
    // a variable aptly named "result"
    let result = str.split("").map((letter)=> {
        // make all letters lowercase and check if they are already lowercase
        if (letter.toLowerCase() === letter) {
            // if the letter was originally lowercase, make it uppercase
            return letter.toUpperCase();
        } else {
            // If it was originally uppercase, make it lowercase
            return letter.toLowerCase();
        }
    })
    // return the result, joined back together since it became an array in the logic above.
    return result.join("");
}
    
reverseCase('HelloWorld');