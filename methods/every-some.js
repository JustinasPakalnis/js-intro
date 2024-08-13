

const a = [10, 2, 3.14, NaN, Infinity, -2];
console.log(a.every(n => typeof n === 'number'));



const b = [10, 2, 3.14, NaN, Infinity, '-2'];
console.log(b.every(n => typeof n === 'number'));



const c = [10, 2, 3.14, NaN, Infinity, '-2'];
console.log(c.every(n => typeof n === 'number' || typeof n === 'string'));



const d = [10, 2, true, 3.14, NaN, Infinity, '-2'];
console.log(d.every(n => typeof n === 'number' || typeof n === 'string'));


const marks = [10, 2, 8, 4, 6];
console.log(marks.every(n=> Number.isInteger(n) && n > 0 & n < 11));


//--------------------------------------------------SOME
console.log('-----------------------------------------------');

const e = [10, 2, '2'];

console.log(e.some(n => typeof n === 'number')); // tikrina ar bent vienas yra tokios reiksmes

































