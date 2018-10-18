/*
Challenge:
Your task is to sort a given string. 
Each word in the String will contain a single number. 
This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input String is empty, return an empty String. 
The words in the input String will only contain valid consecutive numbers.
For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/

// an incredibly brute force solution. o^n2 time complexity because of nested loops.
function order(input) {
    // Empty string edge case
    if (input == " ") {
        return " ";
    };
    // output array we will return at the end of the function
    const output = [];
    // split the input into words we can loop over to find the number for ordering
    let words = input.split(' ');
    // loop over each word, and then loop over each character in that word to find
    // the number. 9 loops, each for 1-9. Can defintely be done in a more concise way,
    // but this meets all criteria to pass the challenge.
    words.forEach(word => {
        const chars = word.split('');

        for (let i=0; i < chars.length; i++) {
            if (chars[i] == '1') {
                output.push(word);
            } 
        }
    });

    words.forEach(word => {
        const chars = word.split('');

        for (let i=0; i < chars.length; i++) {
            if (chars[i] == '2') {
                output.push(word);
            } 
        }
    });

    words.forEach(word => {
        const chars = word.split('');

        for (let i=0; i < chars.length; i++) {
            if (chars[i] == '3') {
                output.push(word);
            } 
        }
    });

    words.forEach(word => {
        const chars = word.split('');

        for (let i=0; i < chars.length; i++) {
            if (chars[i] == '4') {
                output.push(word);
            } 
        }
    });

    words.forEach(word => {
        const chars = word.split('');

        for (let i=0; i < chars.length; i++) {
            if (chars[i] == '5') {
                output.push(word);
            } 
        }
    });

    words.forEach(word => {
        const chars = word.split('');

        for (let i=0; i < chars.length; i++) {
            if (chars[i] == '6') {
                output.push(word);
            } 
        }
    });

    words.forEach(word => {
        const chars = word.split('');

        for (let i=0; i < chars.length; i++) {
            if (chars[i] == '7') {
                output.push(word);
            } 
        }
    });

    words.forEach(word => {
        const chars = word.split('');

        for (let i=0; i < chars.length; i++) {
            if (chars[i] == '8') {
                output.push(word);
            } 
        }
    });

    words.forEach(word => {
        const chars = word.split('');

        for (let i=0; i < chars.length; i++) {
            if (chars[i] == '9') {
                output.push(word);
            } 
        }
    });

    return output.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order(" "));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
