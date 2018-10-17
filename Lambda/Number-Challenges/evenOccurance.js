function evenOccurrence(arr) {
	const obj = {};
	let first = null;
	arr.forEach(item => {
		if (obj[item] === undefined) return obj[item] = 1;
		if (obj[item] === 1) return obj[item] = 2;
		if (obj[item] === 2) return obj[item] = 1;
	});
	arr.forEach(item => {
		if (obj[item] === 2 && first === null) first = item;
	});
	return first;
}