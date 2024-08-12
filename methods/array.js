/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



 */


console.log(Array.isArray);
console.log(Array.isArray([]));
console.log(Array.isArray([123]));
console.log(Array.isArray(['asd']));
console.log(Array.isArray());
console.log(Array.isArray('asdf'));
console.log(Array.isArray(123));

const marks = [10, 2, 8, 4, 6];

const simtasZuikiu = new Array(100).fill('zuikis'); //sukuria masyva su tam tikru kiekiu pirminiu reiksmiu
console.log(simtasZuikiu);


console.log(Array.prototype.at);
console.log([10, 2, 8, 4, 6].at(0));
console.log([10, 2, 8, 4, 6].at(1));
console.log([10, 2, 8, 4, 6].at(2));
console.log([10, 2, 8, 4, 6].at(3));
console.log([10, 2, 8, 4, 6].at(4));
console.log([10, 2, 8, 4, 6].at(5));
console.log([10, 2, 8, 4, 6].at(-1));
console.log([10, 2, 8, 4, 6].at(-2));
console.log([10, 2, 8, 4, 6].at(-3));



console.log([1, 2, 3].concat([4, 5, 6]));
console.log([1, 2, 3].concat([4, 5, 6], 7, 8));

console.log(Array.prototype.includes);

console.log([10, 2, 8, 4, 6].includes(10));
console.log([10, 2, 8, 4, 6].includes(2));
console.log([10, 2, 8, 4, 6].includes(8));
console.log([10, 2, 8, 4, 6].includes(5));


console.log(Array.prototype.indexOf); // indeksas tam tikros reiksmes

console.log([10, 2, 8, 4, 6].indexOf(10));
console.log([10, 2, 8, 4, 6].indexOf(2));
console.log([10, 2, 8, 4, 6].indexOf(8));
console.log([10, 2, 8, 4, 6].indexOf(5));

console.log(Array.prototype.join);

const text = 'Labas rytas Lietuva';
const words = text.split(' ');
console.log(words);

console.log(words.join()); //sujungia kableliu
console.log(words.join('')); //sujungia be tarpu kableliu
console.log(words.join(' ')); //sujungia su tarpais

console.log(Array.prototype.reverse);


const number3 = [1, 2, 3];
console.log(number3);

number3.reverse() // reversa modofikuoja visam laikui. Geriau pasidaryti kopija ir ja apsukti

console.log(number3);

const agurkas = 'Agurkas'.split('').reverse().join('');
console.log(agurkas);


console.log(Array.prototype.slice);
const double = [11, 22, 33, 44, 55, 66 , 77]
console.log(double.slice(1));
console.log(double.slice(2));
console.log(double.slice(3));
console.log(double.slice(1, 3));
console.log(double.slice(1, -3));

console.log(Array.prototype.push);
console.log(Array.prototype.pop);
console.log(Array.prototype.shift);
console.log(Array.prototype.unshift);



console.clear();

const marks1 = [10, 2, 8, 4, 6];
console.log(marks1);
marks1.push(5);
console.log(marks1);
marks1.push(7);
console.log(marks1);
marks1.push(9);
console.log(marks1);
marks1.pop();
console.log(marks1);
marks1.pop();
console.log(marks1);
marks1.unshift(1); // itraukia reiksme i pradzia
console.log(marks1);
marks1.unshift(2);
console.log(marks1);
marks1.unshift(3);
console.log(marks1);
marks1.shift(); //nuima pirma rieksme
console.log(marks1);

                     //   4     8                 
const jonoPazymiai = [10, 2, 8, 4, 6];

const geresnisJonoPazymiai = [];
for (const pazymys of jonoPazymiai) {
    if (pazymys < 5) {
        geresnisJonoPazymiai.push(pazymys * 2);
    } else {
        geresnisJonoPazymiai.push(pazymys);
    }
    
    
}
console.log(geresnisJonoPazymiai);


console.clear(); 












