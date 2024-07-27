// Boolean logine reiksme. TRUE arba FALSE
/* 
Interpretavimas
True - 1
False - 0

Operatoriai
&& and turi pirmenybe pries || skaiciuojant
|| or 
! not 
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

const devyni = true + true + true*true + true + true;
console.log(devyni);

console.log(true);

console.log('------------------------------------------------');

console.log(true && true, true * true);

console.log(true && false, true * false);

console.log(false && true, false * true);

console.log(false && false, false * false);

console.log('------------------------------------------------');

console.log(true || true, true + true);

console.log(true || false, true + false);

console.log(false || true, false + true);

console.log(false || false, false + false);

console.log('------------------------------------------------');
console.log(true && true && true);
console.log(true && true && false);
console.log(true && false && true);
console.log(false && true && true);
console.log(false && false && true);
console.log(false && true && false);
console.log(true && false && false);
console.log(false && false && false);
console.log('1--------');
console.log(true || true || true);
console.log(true || true || false);
console.log(true || false || true);
console.log(false || true || true);
console.log(false || false || true);
console.log(false || true || false);
console.log(true || false || false);
console.log(false || false || false);
console.log('2--------');
console.log(true && true || true);
console.log(true && true || false);
console.log(true && false || true);
console.log(false && true || true);
console.log(false && false || true);
console.log(false && true || false);
console.log(true && false || false);
console.log(false && false || false);
console.log('3--------');
console.log(true || true && true);
console.log(true || true && false);
console.log(true || false && true);
console.log(false || true && true);
console.log(false || false && true);
console.log(false || true && false);
console.log(true || false && false);
console.log(false || false && false);
console.log('4--------');


console.log(true && true && true && true); //true
console.log(true && true && true && false); //F
console.log(true && true && false && true); //F
console.log(true && false && true && true); //F
console.log(false && true && true && true); //F
console.log(true && false && true && false); //F
console.log(false && true && false && true); //F
console.log(true && true && false && false); //F
console.log(false && false && true && true); //F
console.log(true && false && false && true); //F
console.log(false && true && true && false); //F
console.log(false && false && false && true); //F
console.log(false && false && true && false); //F
console.log(false && true && false && false); //F
console.log(true && false && false && false); //F
console.log(false && false && false && false); //F
console.log('5--------');
console.log(true || true && true && true); //T
console.log(true || true && true && false); //T
console.log(true || true && false && true); //T
console.log(true || false && true && true); //T
console.log(false || true && true && true); //T
console.log(true || false && true && false); //T
console.log(false || true && false && true); //F
console.log(true || true && false && false); //T
console.log(false || false && true && true); //F
console.log(true || false && false && true); //T
console.log(false || true && true && false); //F
console.log(false || false && false && true); //F
console.log(false || false && true && false); //F
console.log(false || true && false && false); //F
console.log(true || false && false && false); //T
console.log(false || false && false && false); //F
console.log('6--------');
console.log(true && true || true && true); //T
console.log(true && true || true && false); //T
console.log(true && true || false && true); //T
console.log(true && false || true && true); //T
console.log(false && true || true && true); //T
console.log(true && false || true && false); //F
console.log(false && true || false && true); //F
console.log(true && true || false && false); //T
console.log(false && false || true && true); //T
console.log(true && false || false && true); //F
console.log(false && true || true && false); //F
console.log(false && false || false && true); //F
console.log(false && false || true && false); //F
console.log(false && true || false && false); //F
console.log(true && false || false && false); //F
console.log(false && false || false && false); //F
console.log('7--------');
console.log(true && true && true || true); //T
console.log(true && true && true || false); //T
console.log(true && true && false || true); //T
console.log(true && false && true || true); //T
console.log(false && true && true || true); //T
console.log(true && false && true || false); //F
console.log(false && true && false || true); //T
console.log(true && true && false || false); //F
console.log(false && false && true || true); //T
console.log(true && false && false || true); //T
console.log(false && true && true || false); //F
console.log(false && false && false || true); //T
console.log(false && false && true || false); //F
console.log(false && true && false || false); //F
console.log(true && false && false || false); //F
console.log(false && false && false || false); //F
console.log('8--------');
console.log(true || true && true || true); //T
console.log(true || true && true || false); //T
console.log(true || true && false || true); //T
console.log(true || false && true || true); //T
console.log(false || true && true || true); //T
console.log(true || false && true || false); //T
console.log(false || true && false || true); //T
console.log(true || true && false || false); //T
console.log(false || false && true || true); //T
console.log(true || false && false || true); //T
console.log(false || true && true || false); //T
console.log(false || false && false || true); //T
console.log(false || false && true || false); //F
console.log(false || true && false || false); //F
console.log(true || false && false || false); //T
console.log(false || false && false || false); //F
console.log('9--------');
console.log(true || true || true && true); //T
console.log(true || true || true && false); //T
console.log(true || true || false && true); //T
console.log(true || false || true && true); //T
console.log(false || true || true && true); //T
console.log(true || false || true && false); //T
console.log(false || true || false && true); //T
console.log(true || true || false && false); //T
console.log(false || false || true && true); //T
console.log(true || false || false && true); //T
console.log(false || true || true && false); //T
console.log(false || false || false && true); //F
console.log(false || false || true && false); //F
console.log(false || true || false && false); //T
console.log(true || false || false && false); //T
console.log(false || false || false && false); //F
console.log('10--------');
console.log(true || true || true || true); //T
console.log(true || true || true || false); //T
console.log(true || true || false || true); //T
console.log(true || false || true || true); //T
console.log(false || true || true || true); //T
console.log(true || false || true || false); //T
console.log(false || true || false || true); //T
console.log(true || true || false || false); //T
console.log(false || false || true || true); //T
console.log(true || false || false || true); //T
console.log(false || true || true || false); //T
console.log(false || false || false || true); //T
console.log(false || false || true || false); //T
console.log(false || true || false || false); //T
console.log(true || false || false || false); //T
console.log(false || false || false || false); //F

112 sprendinių























