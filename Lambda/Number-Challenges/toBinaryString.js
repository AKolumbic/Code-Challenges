/*

Challenge: Transform a number into its Binary value

*/

// function toBinaryString(number) {
//     let returnValue = '';
//     if(number == 0) return '0';
//     while(number > 0) {
//         console.log("NUMBER: ", number);
//         returnValue = (number % 2) + returnValue;
//         console.log("RETURN VALUE: ", returnValue);
//         number = (number / 2 | 0);
//     }
//     return returnValue;
// }

function toBinaryString(number) {
  let result = '';
  while (number > 0) {
    console.log(`number starts: ${number}`);
    // Conditional Ternary Operator
    // SYNTAX (if this conditino is true) ? (do this) : (otherwise do that)
    const bit = (Math.floor(number % 2) !== 0) ? '1' : '0';
    console.log(`bit          : ${bit}`);
    result = bit + result;
    console.log(`the return is: ${result} <--- it's GROWING`);
    number = Math.floor(number / 2);
    console.log(`number is now: ${number}\n`);
    }
  console.log('COUNTING IN BINARY IS SO MUCH FUN!!!!!');
  return result;
}

console.log(toBinaryString(105));