const fs = require('fs');
const data = fs.readFileSync('./src/2022/2.txt', 'utf-8').split('\r\n');

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock

function translate(v) {
	if (v === 'A' || v === 'X') return ROCK;
	if (v === 'B' || v === 'Y') return PAPER;
	if (v === 'C' || v === 'Z') return SCISSORS;
}

const out = data.map((round) => {
	const opp = translate(round[0]);
	const pro = translate(round[2]);
	console.log(opp, pro);
	if ((pro == ROCK && opp == SCISSORS) || (pro == SCISSORS && opp == PAPER) || (pro == PAPER && opp == ROCK)) {
		//WIN The value from the item + 6 for the win
		console.log('WIN', pro, 6);
		return pro + 6;
	} else if (pro === opp) {
		//DRAW
		console.log('DRAW', pro, opp);
		return pro + opp;
	} else {
		//LOSS
		console.log('LOSS', pro, 0);
		return pro + 0;
	}
});

console.log(out);
console.log(out.reduce((a, b) => a + b));

// 1 for Rock, 2 for Paper, and 3 for Scissors
// 1 COL: A for Rock, B for Paper, and C for Scissors
// 2 COL: X for Rock, Y for Paper, and Z for Scissors
