/* 
Define a function that takes in a positive integer and returns the Roman Numeral representation of that number.  
*/

function romanNumeralize(n) {
    let number = n;
    const rome = {
  // key: value
      M:  1000,
      CM:  900,
      D:   500,
      CD:  400,
      C:   100,
      XC:   90,
      L:    50,
      XL:   40,
      X:    10,
      IX:    9,
      V:     5,
      IV:    4,
      I:     1,
    };
    let returnString = '',
        key,
        count = 1;
    for (key in rome) {
      let value = rome[key];
      while (number >= value) {
        console.log(`Step #${count}`);
        console.log(`while (${number} >= ${value})`);
        console.log(`${returnString === '' ? '""' : returnString} += ${key} ---> ${returnString + key}`);
        returnString += key;
        console.log(`${number} -= ${value} ---> ${number - value}\n`);
        number -= value;
        count++;
      }
    }
    console.log(`The functions "number" variable changes: ${number}`);
    console.log(`The input argument "n" remains the same: ${n}`);
    return returnString;
  }
  console.log(romanNumeralize(1973)); // ~~~> MCMLXXIII