/*



 */

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT2 * Math.SQRT2);

console.log(Math.abs(5));
console.log(Math.abs(-5));
console.log(Math.abs(-Infinity));

console.log(Math.cbrt(27));

console.log(Math.fround(2));
console.log(Math.fround(222222));
console.log(Math.fround(2222222222222222222));
console.log(Math.fround(21234512345));
console.log(Math.fround(2.123412341234123));

console.log(Math.hypot(3, 4)); //pytagoro teorema
console.log(Math.pow(2, 0));
console.log(Math.pow(2, 1));
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 4));
console.log(Math.pow(2, 5));

console.log(Math.sign(12));
console.log(Math.sign(-2));
console.log(Math.sign(-0));
console.log(Math.sign(0));

console.log(Math.sqrt(4));

console.clear();

console.log(Math.ceil(-4));
console.log(Math.ceil(-3.9999));
console.log(Math.ceil(-3.5));
console.log(Math.ceil(0));
console.log(Math.ceil(7));
console.log(Math.ceil(7.5));
console.log(Math.ceil(7.0001));
console.log(Math.ceil(7.999));
console.log("floor ---------------");

console.log(Math.floor(-4));
console.log(Math.floor(-3.9999));
console.log(Math.floor(-3.5));
console.log(Math.floor(0));
console.log(Math.floor(7));
console.log(Math.floor(7.5));
console.log(Math.floor(7.0001));
console.log(Math.floor(7.999));
console.log("round --------------");
console.log(Math.round(-4));
console.log(Math.round(-3.9999));
console.log(Math.round(-3.5));
console.log(Math.round(0));
console.log(Math.round(7));
console.log(Math.round(7.5));
console.log(Math.round(7.0001));
console.log(Math.round(7.999));
console.log("trunc --------------"); //numeta viska po kablelio
console.log(Math.trunc(-4));
console.log(Math.trunc(-3.9999));
console.log(Math.trunc(-3.5));
console.log(Math.trunc(0));
console.log(Math.trunc(7));
console.log(Math.trunc(7.5));
console.log(Math.trunc(7.0001));
console.log(Math.trunc(7.999));

console.log(Math.round(0.5));
// console.log(Math.max());
// console.log(Math.min());

console.clear();
const marks = [10, 2, 8, 4, 6];
console.log(Math.max(1, 2, 3));
console.log(Math.max([10, 2, 8, 4, 6]));
console.log(Math.max(...marks));
console.log(Math.max(10, 2, 8, 4, 6));
console.log(Math.min(1, 2, 3));
console.log(Math.min([10, 2, 8, 4, 6]));
console.log(Math.min(...marks));
console.log(Math.min(10, 2, 8, 4, 6));
console.clear();
console.log("Random --------------"); //random
console.log(Math.random());
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random(0, 1));
console.log(random(0, 1));
console.log(random(0, 1));
console.log(random(0, 1));

console.log(random(0, 10));
console.log(random(0, 10));
console.log(random(0, 10));
console.log(random(0, 10));

console.log(random(5, 10));
console.log(random(5, 10));
console.log(random(5, 10));
console.log(random(5, 10));

console.log(random(10, 100));
console.log(random(10, 100));
console.log(random(10, 100));
console.log(random(10, 100));
