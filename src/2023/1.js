const fs = require('fs');
const data = fs.readFileSync('./src/2023/1.txt', 'utf-8').split('\r\n');

let sum = 0;

//Part 1
// data.forEach((line) => {
// 	const re = /\d/gim;
// 	const arr = line.match(re);
// 	if (arr.length > 1) {
// 		let internalSum = new String(arr[0] + arr[arr.length - 1]);

// 		console.log(line, internalSum);
// 		sum += parseInt(internalSum);
// 	} else {
// 		sum += parseInt(new String(arr[0] + arr[0]));
// 	}
// });
// console.log(sum);

//Part 2
const map = {
	one: '1',
	two: '2',
	three: '3',
	four: '4',
	five: '5',
	six: '6',
	seven: '7',
	eight: '8',
	nine: '9',
};
//This was too ez i guess

// function remap(x) {
// 	if (map[x] != undefined) return map[x];
// 	return x;
// }

// data.forEach((line) => {
// 	const re = /\d|one|two|three|four|five|six|seven|eight|nine/gim;
// 	const reD = /\d/gim;
// 	const arr = line.match(re);
// 	console.log(line, '========');
// 	console.log(arr.length);
// 	if (arr.length > 1) {
// 		arr[0] = remap(arr[0]);
// 		arr[arr.length - 1] = remap(arr[arr.length - 1]);
// 		console.log(arr);
// 		let internalSum = new String(arr[0] + arr[arr.length - 1]);

// 		console.log(line, internalSum);
// 		sum += parseInt(internalSum);
// 	} else {
// 		sum += parseInt(new String(remap(arr[0]) + remap(arr[0])));
// 	}
// });

const result = data.forEach((element) => {
	const pairMatrix = [
		[Infinity, 0],
		[-Infinity, 0],
	];
	Object.keys(map).forEach((numWord) => {
		const numDigit = parseInt(map[numWord]);
		const indices = [
			element.indexOf(String(numDigit)),
			element.lastIndexOf(String(numDigit)),
			element.indexOf(numWord),
			element.lastIndexOf(numWord),
		];

		if (indices[0] >= 0 && indices[0] < pairMatrix[0][0]) {
			pairMatrix[0] = [indices[0], numDigit];
		}
		if (indices[1] > pairMatrix[1][0]) {
			pairMatrix[1] = [indices[1], numDigit];
		}
		if (indices[2] >= 0 && indices[2] < pairMatrix[0][0]) {
			pairMatrix[0] = [indices[2], numDigit];
		}
		if (indices[3] > pairMatrix[1][0]) {
			pairMatrix[1] = [indices[3], numDigit];
		}
	});

	console.log(pairMatrix);

	sum += parseInt(`${pairMatrix[0][1]}${pairMatrix[1][1]}`);
});

console.log(sum);
