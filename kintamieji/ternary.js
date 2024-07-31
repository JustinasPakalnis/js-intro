/**
 Unary - vieno operatoriaus
    const x = 5;
 Binary - dvieju operatoriu
    const y = x + 7;
 Ternary - triju operatoriu
    

 */


const age = 19;
const ageLimit = 18; 

let msg = '';

if (age >= ageLimit) {
    msg = 'Valio! turi pakankamai metu';
} else {
    msg = 'Ups.. Lauk dar kelis metus';
}

console.log('Message: ', msg);

const msg2 = age >= ageLimit ? 'Valio! turi pakankamai metu' : 'Ups.. Lauk dar kelis metus';

console.log('Message: ', msg2);

console.clear();

const a = 1 > 2 ? 3 : 4;
console.log(a);

const b = 1 < 2 ? 3 : 4;
console.log(b);

const c = 1 ? 2 : 3;
console.log(c);

const d = -1 ? -2 : -3;
console.log(d);

const e = 0 ? 1 : 2;
console.log(e);

const f = 0
    ? 1
    : 2
        ? 3
        : 4;
console.log(f);

const g = 2
    ? 1
    : 0
        ? -1
        : -2;
console.log(g);

const h = 1
    ? 2
        ? 3
        : 4
    : 5;
console.log(h);

const i = 0 
    ? 1 
        ? 2 
        : 3 
    : 4 
        ? 5 
        : 6;
console.log(i);

const i = 0 ? 1 ? 2 : 3 : 4  ? 5 : 6;
console.log(i);