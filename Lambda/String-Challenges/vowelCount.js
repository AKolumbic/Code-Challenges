function vowelCount(str) {
    var numOfVowels = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        numOfVowels += 1;
      }
    }
    return numOfVowels;
}
  
console.log(vowelCount('hEllo world'));
  