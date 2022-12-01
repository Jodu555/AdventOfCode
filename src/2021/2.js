const fs = require('fs');

const actions = fs.readFileSync('./src/2021/2.txt', 'utf8').split('\r\n');


const position = {
    h: 0,
    d: 0,
    a: 0
}

actions.forEach(action => {
    const count = Number(action.split(' ')[1]);
    // if (action.includes('up')) {
    //     position.d -= count;
    // }
    // if (action.includes('down')) {
    //     position.d += count;
    // }
    // if (action.includes('forward')) {
    //     position.h += count;
    // }
    if (action.includes('up')) {
        position.a -= count;
    }
    if (action.includes('down')) {
        position.a += count;
    }
    if (action.includes('forward')) {
        position.h += count;
        position.d += position.a * count;
    }
});

console.log(position);

console.log(position.d * position.h);