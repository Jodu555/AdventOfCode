const fs = require('fs');

const actions = fs.readFileSync('./src/2021/1.txt', 'utf8').split('\r\n').map(v => Number(v));

console.log(actions.length);

// let count = 0;
// for (let i = 0; i < actions.length; i++) {
//     const prevM = actions[i - 1];
//     const m = actions[i];
//     if (prevM && m) {
//         if (Number(prevM) < Number(m)) {
//             count++;
//         }
//     }
// }

let count = 0;

for (let i = 0; i < actions.length; i++) {
    if (i >= 3 && (actions[i] + actions[i - 1] + actions[i - 2]) > (actions[i - 1] + actions[i - 2] + actions[i - 3]))
        count++;
}

console.log(actions.length, count);