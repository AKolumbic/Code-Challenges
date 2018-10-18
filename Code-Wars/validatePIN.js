/*

Challenge: ATM machines allow 4 or 6 digit PIN codes and PIN codes 
          cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/


function validatePIN (pin) {
  const readable = pin.toString();
  const regex = /^(\d{4}|\d{6})$/gm;

  if (readable.match(regex)) {
    return true;
  } else {
    return false;
  }
    
}

console.log(validatePIN(123));
console.log(validatePIN(1234));
console.log(validatePIN(12345));
console.log(validatePIN(123456));
console.log(validatePIN(1234567));

console.log("\n");



const oneLine_validatePIN = pin => /^(\d{4}|\d{6})$/gm.test(pin);

console.log(oneLine_validatePIN(123));
console.log(oneLine_validatePIN(1234));
console.log(oneLine_validatePIN(12345));
console.log(oneLine_validatePIN(123456));
console.log(oneLine_validatePIN(1234567));