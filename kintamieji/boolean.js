// Boolean logine reiksme. TRUE arba FALSE
/* 
Interpretavimas
True - 1
False - 0

Operatoriai
&& and / ir turi pirmenybe pries ||
|| or / arba
! not / ne
*/
const arSviaciaSaule = true;
const arNaktis = false;

console.log(arSviaciaSaule);
console.log(arNaktis);

const a = true + true;
console.log(a);

const b = false + false;
console.log(b);

const c = true + false;
console.log(c);

const keturi = (true + true)*(true + true);
console.log(keturi);

const devyni = (true + true + true)*(true + true + true);
console.log(devyni);

console.log(true);

console.log('------------------------------------------------');

console.log(true && true, true * true);

console.log(true && false, true * false);

console.log(false && true, false * true);

console.log(false && false, false * false);

console.log('------------------------------------------------');

console.log(true || true);

console.log(true || false);

console.log(false || true);

console.log(false || false);

console.log('------------------------------------------------');

console.log(true && true && true);

console.log(true && true && false);

console.log(true && false && true);

console.log(false && false && true);

console.log('------------------------------------------------');

console.log(true && true || true);

console.log(true && true || false);

console.log(true && false || true);

console.log(false && false || true);

console.log(true && true && true && true);








