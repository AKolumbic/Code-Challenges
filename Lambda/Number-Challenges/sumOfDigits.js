// v1.0 - everyone loves for loops!
function sumOfDigits (num) {
    const integerStrings = ('' + num).split('');     // does the same thing as the next line
    // const integerStrings = String(num).split(''); // I find this reads better
    console.log(integerStrings);                     // <--- should return an array of strings
    console.log(typeof(integerStrings));             // <--- 'object' (JS arrays are special kinds of objects - Everything Is Objects!!!)
    // declaring variables to be used in the for loop
    const len = integerStrings.length;
    let i = 0,
      sum = 0;
    // For-Loop Love!
    for (i; i < len; i++) {
      sum += Number(integerStrings[i]); // <--- turns each string into type: integers
      console.log(sum);                 // <--- sum of adding up all ints in the array of ints
    }
    return sum;
  }
  
  // // v2.0 - ES5 using .split(), .map() and .reduce()
  // function sumOfDigits (num) {
  //   const stringIntegers = String(num).split('');
  //   // console.log(`stringIntegers.length: ${stringIntegers.length}, the stringIntegers ${stringIntegers} are type: ${typeof(stringIntegers[0])}`);
  //   const integers = stringIntegers.map(function(n) {
  //     return Number(n);
  //   });
  //   // console.log(`integers: ${integers} are type: ${typeof(integers[0])}`);
  //   const sum = integers.reduce(function(sum, n) {return sum + n}, 0);
  //   return sum;
  // }
  
  // // v2.1 - ES5 using .split(), .map() and .reduce() with dot chaining
  // function sumOfDigits (num) {
  //   const stringIntegers = String(num)
  //     .split('')
  //     .map(function(n) {
  //       return Number(n);
  //     })
  //     .reduce(function(sum, n) {return sum + n}, 0);
  //   return stringIntegers;
  // }
  
  // // v3.1 ES6 w/dot chaining and parseInt()
  // function sumOfDigits(num) {
  //   const digits = (String(num)).split('')
  //     .map(n => parseInt(n))
  //     .reduce((sum, n) => sum + n);
  //   return digits;
  // }
  
  // // v3.2 different type coercion example
  // function sumOfDigits(num) {
  //   const digits = (num + '').split('').map(n => parseInt(n));
  //   const sum = digits.reduce((sum, n) => sum + n);
  //   return sum;
  // }
  
  // // v3.3 just return it!
  // function sumOfDigits(num) {
  //   return (String(num)).split('')
  //     .map(n => parseInt(n))
  //     .reduce((sum, n) => sum + n);
  // }
  
  // // v4.0
  // function sumOfDigits(num) {
  //   let totalSum = 0;
  //   while (num !== 0) {
  //     let lastDigit = num % 10;     // Get the last digit in a variable
  //     totalSum += lastDigit;        // Add the last digit up
  //     num = (num - lastDigit) / 10; // Extract the last digit from num
  //   }
  //   return totalSum;
  // }
  
  // // v4.1 -= /=
  // function sumOfDigits(num) {
  //   let totalSum = 0;
  //   while (num !== 0) {
  //     console.log(`${num} % 10 ---> ${num % 10}`);
  //     let lastDigit = num % 10;
  //     console.log(`${totalSum} += ${lastDigit} ---> ${totalSum + lastDigit}`);
  //     totalSum += lastDigit;
  //     console.log(`${num} - ${lastDigit} ---> ${num - lastDigit}`);
  //     num -= lastDigit;
  //     console.log(`${num} /= 10 ---> ${num / 10}`);
  //     num /= 10;
  //     console.log(`num: ${num}\n`);
  //   }
  //   return totalSum;
  // }
  
  // TEST SUITE
  const x = 12345;
  console.log(sumOfDigits(x));           // ~~~> 15
  // console.log(sumOfDigits(23));          // ~~~> 5
  // console.log(sumOfDigits(496));         // ~~~> 19
  // console.log(typeof(sumOfDigits(496))); // ~~~> number
  // console.log(typeof(Number(x)));        // <--- number
  // console.log(typeof(String(x)));        // <--- string
  // console.log(typeof(parseInt(x)));      // <--- number
  // console.log(String(x).split(''));      // <--- [ '1', '2', '3', '4', '5' ]
  