/* 
Define a function that takes in a positive integer and returns the Roman Numeral representation of that number.  
*/

// function romanNumeralize(num) {
//     var roman ="";
  
//     var values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//     var literals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  
  
//     for(i=0;i<values.length;i++){
//         console.log(values[i])
//         console.log(num)
//         console.log(roman)
//       if(num>=values[i]){
//         if(5<=num && num<=8) num -= 5;
//         else if(1<=num && num<=3) num -= 1;
//         else num -= values[i];
//         roman += literals[i];
//         i--;
//       }
//     }

//    return roman;
// }
  
  
// console.log(romanNumeralize(1874));

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