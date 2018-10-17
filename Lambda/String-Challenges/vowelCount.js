function vowelCount_original(str) {
    var numOfVowels = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        numOfVowels += 1;
      }
    }
    return numOfVowels;
}

function vowelCount(str) {
    let count = 0;
    const input = str.split('');

    input.forEach(letter => {
        if (letter.toLowerCase() == 'a') {
            count++;
        } else if (letter.toLowerCase() == 'e') {
            count++;
        } else if (letter.toLowerCase() == 'i') {
            count++;
        } else if (letter.toLowerCase() == 'o') {
            count++;
        } else if (letter.toLowerCase() == 'u') {
            count++;
        }
    });

    return count;
}

console.log(vowelCount('hEllo world'));
console.log(vowelCount('-bcd-fgh-jklmn-pqrst-vwxyz')); // <--- 0
console.log(vowelCount('Hello world!')); // <--- 3
console.log(vowelCount('Pinto beans')); // <--- 4
console.log(vowelCount('The quick brown fox jumped over the lazy dog.')); // <--- 12
console.log(vowelCount('Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.')); // <--- 58
console.log(vowelCount('All I have ever wanted is to be an Uber driver!')); // <--- 16
  