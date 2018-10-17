function toCamelCase(str) {
    let arr = str.split('');
    for (let i = 0; i< arr.length; i++) {
      if (arr[i] === '_' || arr[i] === '-') {
        arr[i] = '';
        arr[i+1] = arr[i+1].toUpperCase();
    }
  }
  return arr.join('');
  
  }
  
  toCamelCase("the-Stealth-Warrior")