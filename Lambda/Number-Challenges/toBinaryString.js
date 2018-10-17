/*

Challenge: Transform a number into its Binary value

*/

function toBinaryString(number) {
    let returnValue = '';
    if(number == 0) return '0';
    while(number > 0) {
        console.log("NUMBER: ", number);
        returnValue = (number % 2) + returnValue;
        console.log("RETURN VALUE: ", returnValue);
        number = (number / 2 | 0);
    }

    return returnValue;
}
  
console.log(toBinaryString(105));