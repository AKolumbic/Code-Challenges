/*
Challenge: Money Formatting
- Given a positive float number, write a function called 
  moneyFormat that formats the float into a string.
- Example input: moneyFormat(2310000.159897) / Example output: should return '2 310 000.16'
*/

function moneyFormat(float) {
    var string = float.toFixed(2); 
    var arr = string.split('');
    var i;
    var j;
    for (i=0; i< arr.length; i++){
      if (arr[i] == '.') {
        for (j = i - 3; j > 0; j = j - 3) {
          arr.splice(j, 0, " ");
        }
        i = arr.length;
      }
    }
    return arr.join("");
}


function moneyFormat2(float) {
	// Select the last 2 digits and round them down
	let end = Math.round((float % 1) / 0.01) || '00';
	// if the last 2 digits are between 0 and 9,
	// add a 0 to it to make them 2 digits
	if (0 < end && end < 10) end = '0' + end;
	// extracting the left part of the float
	let left = Math.floor(float).toString();
	// combine the firt 3 left digits with the end 2 digits.
	let str = `${left.slice(-3)}.${end}`;
	// delete out the part that we already have combined
	left = left.slice(0, -3);
	// for the remaining digits if more than 3
		// add a space to str and then the 3 digits
		// delete the 3 digits from left
		// stop iterating when left is less than 3 digits.
	while(left.length > 3) {
	    const nextThree = left.slice(-3);
	    str = `${nextThree} ${str}`;
	    left = left.slice(0, -3);
	}
	// combine str + left and return str
	str = `${left} ${str}`;
    return str;
}

function moneyFormat3(float) {
  return float.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


console.log(moneyFormat(2310000.159897));
console.log(moneyFormat2(2310000.159897));
console.log(moneyFormat3(2310000.159897));