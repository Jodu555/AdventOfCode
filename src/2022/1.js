const fs = require('fs');
const data = fs.readFileSync('./src/2022/1.txt', 'utf-8').split('\r\n');
const numbers = [];
let i = 0;
data.forEach((e) => {
	if (Number(e) != 0) {
		numbers[i] = Array.isArray(numbers[i]) ? numbers[i] : [];
		numbers[i].push(Number(e));
	} else {
		i++;
	}
});

const final = numbers.map((subArr) => {
	return subArr.reduce((a, b) => a + b);
});

//Part 1: 72718
// let biggest = -1;

// final.forEach((element) => {
// 	if (element >= biggest) {
// 		biggest = element;
// 		console.log('Change to', element);
// 	}
// });

// console.log(biggest);

//Part 2: 213089

const output = final.sort((a, b) => b - a);

console.log(output[0] + output[1] + output[2]);
