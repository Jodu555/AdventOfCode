const fs = require('fs');

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const data = fs.readFileSync('./src/2022/3.txt', 'utf-8').split('\r\n');

function splitStrings(string) {
	const middle = Math.floor(string.length / 2);
	return [string.substr(0, middle), string.substr(middle)];
}

//The Comp 2 strs and 3 strs could be refactored to only one func

function compareTwoStrings(string1, string2) {
	let result = false;
	string1.split('').forEach((c1) => {
		string2.split('').forEach((c2) => {
			if (c1 === c2) {
				result = c1;
			}
		});
	});
	return result;
}

function compareThreeStrings(string1, string2, string3) {
	let result = false;
	string1.split('').forEach((c1) => {
		string2.split('').forEach((c2) => {
			if (c1 === c2) {
				string3.split('').forEach((c3) => {
					if (c1 === c3) {
						result = c1;
					}
				});
			}
		});
	});
	return result;
}

function computeValue(char) {
	let result = 1;
	letters.forEach((e, i) => {
		if (e === char) {
			result += i;
		}
	});
	return result;
}

function groupArray(data, n) {
	const group = [];
	for (var i = 0, j = 0; i < data.length; i++) {
		if (i >= n && i % n == 0) j++;
		group[j] = group[j] || [];
		group[j].push(data[i]);
	}
	return group;
}

function partOne(input) {
	let total = 0;
	input.forEach((e) => {
		const splittedArr = splitStrings(e);
		const char = compareTwoStrings(splittedArr[0], splittedArr[1]);
		if (char) total = Number(total) + Number(computeValue(char));
	});
	return total;
}

function partTwo(input) {
	let total = 0;
	const grouped = groupArray(input, 3);
	grouped.forEach((e) => (total += computeValue(compareThreeStrings(e[0], e[1], e[2]))));
	return total;
}

console.log('Answer #1: ', partOne(data), partOne(data) === 8515);
console.log('Answer #2: ', partTwo(data), partTwo(data) === 2434);
