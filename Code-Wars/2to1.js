/*

Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.

#Examples: 
a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" 

*/

// My incorrect attempt
function twoToOne(s1, s2) {
    const longer = [];
    const sorted = [];

    if (s1.length < s2.length) {
        longer.push(s2.split(''));
    } else if (s2.length < s1.length) {
        longer.push(s1.split(''));
    };
    
    longer.forEach(char => {
        if (sorted.includes(char) == false) {
            sorted.push(char);
        }
    });

    return sorted.sort().join('');
}

// working solution
function longest(s1, s2) {
	var result = [];
	return s1.concat(s2).split("").sort().filter(function(x){
		if (!result.includes(x)) {
			result.push(x);
			return x;
		}
	}).join("");
}

const a = "xyaabbbccccdefww"
const b = "xxxyyyyabklmopq"
console.log(twoToOne(a, b)) // "abcdefklmopqwxy"
console.log(longest(a, b))
