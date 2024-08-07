/*
 
Arrow-function


 */


const n1=7;
const n2=5;

// standartine funkcija
function sum(a, b) {
    return a+b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// Kintamajam priskirta funkcija anonimine
const diff = function(a, b) {
    return a-b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

//

function multi(a, b) {
    return a*b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);


const multi2 = function (a, b) {
    return a*b;
}
console.log(`${n1} * ${n2} = ${multi2(n1, n2)}`);

// rodykline funkcija

const multi3 = (a, b) => {return a*b};
    

console.log(`${n1} * ${n2} = ${multi3(n1, n2)}`);

// rodykline funkcija. Jeigu logikos lboke yra tik viena procedura tai galima nerasyti {return}
const multi4 = (a, b) => a*b;
    

console.log(`${n1} * ${n2} = ${multi4(n1, n2)}`);


// rodykline funkcija. Jeigu param lboke yra tik vienas parametras tai galima nerasyti ()


const sqr = a => a*a;

console.log(`${n1} * ${n1} = ${sqr(n1)}`);
console.log(`${n2} * ${n2} = ${sqr(n2)}`);


console.log('Paskutinis: \t ', lastSymbol('Betmenas'));
console.log('Pirmas: \t ',firstSymbol('Drunkmen'));

function lastSymbol(text) {
    return text[text.length-1];
}

function firstSymbol(text) {
    return text[0];
}












