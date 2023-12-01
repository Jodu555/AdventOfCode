const fs = require('fs');
const data = fs.readFileSync('./src/2023/1.txt', 'utf-8').split('\r\n');

let sum = 0;

data.forEach((line) => {
	const re = /\d/gim;
	const arr = line.match(re);
	if (arr.length > 1) {
		let internalSum = new String(arr[0] + arr[arr.length - 1]);

		console.log(line, internalSum);
		sum += parseInt(internalSum);
	} else {
		sum += parseInt(new String(arr[0] + arr[0]));
	}
});

console.log(sum);
