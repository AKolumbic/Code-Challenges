// Write a function that takes in a string, reverses the 'casing' of that string.

function reverseCase(str) {
    let result = str.split("").map((letter)=> {
      if (letter.toLowerCase() === letter) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    })
    return result.join("");
    }
    
reverseCase('HelloWorld');