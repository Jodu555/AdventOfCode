const fs = require('fs');
const data = fs.readFileSync('./src/2022/2.txt', 'utf-8').split('\r\n');

// const ROCK = 1;
// const PAPER = 2;
// const SCISSORS = 3;
// // Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock

// 1 for Rock, 2 for Paper, and 3 for Scissors
// 1 COL: A for Rock, B for Paper, and C for Scissors
// 2 COL: X for Rock, Y for Paper, and Z for Scissors

const lookup = {
	'A X': [4, 3],
	'A Y': [8, 4],
	'A Z': [3, 8],
	'B X': [1, 1],
	'B Y': [5, 5],
	'B Z': [9, 9],
	'C X': [7, 2],
	'C Y': [2, 6],
	'C Z': [6, 7],
};

let points = [0, 0];
data.map((entry) =>
	points.map((_, i) => {
		const result = lookup[entry][i];
		points[i] += result;
	})
);
points.map((p, i) => console.log(`Part ${i + 1}: Points: ${p}`));
