// v1.0
function collatzSequence(n) {
    let m = n; // leaves the argument alone & "un-mutated"
    const arr = [ m ];
    console.log(`an array with ${m} in it:`, arr);
    
    while (m !== 1) {
      if (m % 2 === 0) {
        m /= 2;
      } else {
        m = (m * 3) + 1;
      }
      arr.push(m);
    }

    console.log(`original number unchanged: ${n}`);
    console.log(`but this variable mutated: ${m}`);
    return arr;
}

console.log(collatzSequence(23));
  