/*
Challenge: take a string as input, and return the letters postition in the alphabet
*/

function alphabetPosition(input) {
    const text = input.split('');
    const output = []

    text.forEach(letter => {
        if (letter.toLowerCase() == 'a') {
            output.push('1');
        } else if (letter.toLowerCase() == 'b') {
            output.push('2');
        } else if (letter.toLowerCase() == 'c') {
            output.push('3');
        } else if (letter.toLowerCase() == 'd') {
            output.push('4');
        } else if (letter.toLowerCase() == 'e') {
            output.push('5');
        } else if (letter.toLowerCase() == 'f') {
            output.push('6');
        } else if (letter.toLowerCase() == 'g') {
            output.push('7');
        } else if (letter.toLowerCase() == 'h') {
            output.push('8');
        } else if (letter.toLowerCase() == 'i') {
            output.push('9');
        } else if (letter.toLowerCase() == 'j') {
            output.push('10');
        } else if (letter.toLowerCase() == 'k') {
            output.push('11');
        } else if (letter.toLowerCase() == 'l') {
            output.push('12');
        } else if (letter.toLowerCase() == 'm') {
            output.push('13');
        } else if (letter.toLowerCase() == 'n') {
            output.push('14');
        } else if (letter.toLowerCase() == 'o') {
            output.push('15');
        } else if (letter.toLowerCase() == 'p') {
            output.push('16');
        } else if (letter.toLowerCase() == 'q') {
            output.push('17');
        } else if (letter.toLowerCase() == 'r') {
            output.push('18');
        } else if (letter.toLowerCase() == 's') {
            output.push('19');
        } else if (letter.toLowerCase() == 't') {
            output.push('20');
        } else if (letter.toLowerCase() == 'u') {
            output.push('21');
        } else if (letter.toLowerCase() == 'v') {
            output.push('22');
        } else if (letter.toLowerCase() == 'w') {
            output.push('23');
        } else if (letter.toLowerCase() == 'x') {
            output.push('24');
        } else if (letter.toLowerCase() == 'y') {
            output.push('25');
        } else if (letter.toLowerCase() == 'z') {
            output.push('26');
        }
    });
    return output.join(' ');
};

console.log(alphabetPosition("Andrew Kolumbic"))
