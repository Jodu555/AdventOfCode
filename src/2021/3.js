const fs = require('fs');

const actions = fs.readFileSync('./src/2021/3.txt', 'utf8').split('\r\n').map(v => v.split('').map(n => Number(n)));

const obj = {};

actions[0].forEach((e, i) => {
    obj[i] = 0;
});

actions.forEach(row => {
    row.forEach((e, i) => {
        if (row[i] == 1) {
            obj[i] = obj[i] + 1;
        }
    });
});

let num = '';
Object.keys(obj).forEach(idx => {
    num += (obj[idx] > actions.length / 2 ? '1' : '0')
});


const otherNum = num.split('').map(v => v == '1' ? '0' : '1').join('');

const decNum = parseInt(num, 2);
const decOtherNum = parseInt(otherNum, 2);

console.log(decNum, decOtherNum, decNum * decOtherNum);
