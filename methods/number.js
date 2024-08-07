/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number










 */

console.log(isFinite);
console.log(isFinite(-5));
console.log(isFinite(5));
console.log(isFinite(0));
console.log(isFinite(5.123));
console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(undefined));
console.log('----------------------------------');
console.log(isFinite(''));
console.log(isFinite('asdasd'));
console.log(isFinite(true));
console.log(isFinite(false));
console.log(isFinite(null));
console.log(isFinite(undefined));
console.log(isFinite([]));
console.log(isFinite({}));
console.log(isFinite({name: 'Jonas'}));
console.log(isFinite([1, 2, 3]));









console.log(Number.isFinite);
console.log(Number.isFinite(-5));
console.log(Number.isFinite(5));
console.log(Number.isFinite(0));
console.log(Number.isFinite(5.123));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(undefined));

console.log('----------------------------------');
console.log(Number.isFinite('asdasd'));
console.log(Number.isFinite(''));
console.log(Number.isFinite(true));
console.log(Number.isFinite(false));
console.log(Number.isFinite(null));
console.log(Number.isFinite(undefined));
console.log(Number.isFinite([]));
console.log(Number.isFinite({}));
console.log(Number.isFinite({name: 'Jonas'}));
console.log(Number.isFinite([1, 2, 3]));

console.log('----------------------------------');

console.log(Number.isInteger);

console.log(Number.isInteger);
console.log(Number.isInteger(-5));
console.log(Number.isInteger(5));
console.log(Number.isInteger(0));
console.log(Number.isInteger(5.123));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log(Number.isInteger(undefined));

console.log('----------------------------------');
console.log(Number.isInteger('asdasd'));
console.log(Number.isInteger(''));
console.log(Number.isInteger(true));
console.log(Number.isInteger(false));
console.log(Number.isInteger(null));
console.log(Number.isInteger(undefined));
console.log(Number.isInteger([]));
console.log(Number.isInteger({}));
console.log(Number.isInteger({name: 'Jonas'}));
console.log(Number.isInteger([1, 2, 3]));

console.clear();
console.log('----------------------------------');

console.log(parseInt);

console.log(parseInt(1));
console.log(parseInt(1.23));
console.log(parseInt(1.99));

console.log(parseInt(-1));
console.log(parseInt(-1.23));
console.log(parseInt(-1.99));
console.log(parseInt(NaN));
console.log(parseInt(-Infinity));
console.log(parseInt(Infinity));
console.log(parseInt(true));
console.log(parseInt(null));
console.log(parseInt());
console.log(parseInt([]));
console.log(parseInt([1]));
console.log(parseInt([7, 3, 4]));
console.log(parseInt([3, 2, 4]));

//numeta viska po kablelio. is masvyo grazina pirmaji nari
console.log(parseInt(''));
console.log(parseInt('Alio labadiena'));
console.log(parseInt('Alio labadiena212341234'));
console.log(parseInt('Alio labadiena212341234asdfasdf'));
console.log(parseInt('212341234.6666asdfasdf'));
console.log(parseInt('-212341234.6666asdfasdf'));
console.log(parseFloat(''));
console.log(parseFloat('Alio labadiena'));
console.log(parseFloat('Alio labadiena212341234'));
console.log(parseFloat('5e6'));
console.log(parseFloat('212341234.6666asdfasdf'));
console.log(parseFloat('-212341234.6666asdfasdf'));
//Jei imanoma istraukia sveikaji skaiciu is stringo pradzios. tik is pradzios.


console.clear();
console.log('----------------------------------');


console.log(Number(5));
console.log(5);

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


const n1 = 7;
const n2 = 5.4;
const n3 = 5.43;
const n4 = 5.432;
const n5 = 5.54321;

console.log(n1.toFixed(2));
console.log(n1.toFixed(3));
//^ returnina stringa
console.log(n2.toFixed(1));
console.log(n2.toFixed(2));
console.log(n3.toFixed(1));
console.log(n3.toFixed(2));
console.log(n4.toFixed(1));
console.log(n4.toFixed(2));
console.log(n5.toFixed(1));
console.log(n5.toFixed(2));


// console.log(crazy1.toFixed(10));
// console.log(Number.parseFloat(crazy1.toFixed(10)));
console.log('----------------------------------');

function sum(a, b) {
    return Number.parseFloat((a + b).toFixed(10));
}
const crazy1 = sum(0.1, 0.2);
console.log(crazy1);










