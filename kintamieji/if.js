/* 
IF palyginimas
sablonai
if () {}
if () {} else {}
if () {} else if{}
if () {} else if{} else {}
if () {} ......else if{}..........
if () {} else if......{} ........else {}

Palyginimo operatoriai
visi:
>, <, >=, <=, ==, !=, ===, !==

naudotini:
>, <, >=, <=, ===, !==

nenaudotini: 
==, !=,

ZINOTINI ARBA CRAZY DALYKAI
-true yra pozityvus, false yra negatyvus
-visi skaiciai yra pozityvus iskyrus 0
-visi stringa iyra pozityvus, isskyrus tusti ('')
-visi array ([]) yra pozityvus
-visi object ({}) yra pozityvus

*/

// if (true) {
//     console.log('Logika kai true');
// }

console.log(4>2);
console.log('START');

//if
if (5*7 === 35){
    console.log('yes');
}


//IF-ELSE
if (4<2) {
        console.log('Logika kai true');
    } else {
        console.log('Logika kai false');
    }
    



console.log('END');

const diena = 5;
let dienosPavadinimas= '---';


if (diena===1){
    dienosPavadinimas = 'Pirmadienis';
} else if (diena===2){
    dienosPavadinimas = 'Antradienis';
} else if (diena===3){
    dienosPavadinimas = 'Trečiadienis';
} else if (diena===4){
    dienosPavadinimas = 'Ketvirtadienis';
} else if (diena===5){
    dienosPavadinimas = 'Penktadienis';
} else if (diena===6){
    dienosPavadinimas = 'Šeštadienis';
} else if (diena===7){
    dienosPavadinimas = 'Sekmadienis';
} else {
    dienosPavadinimas = 'Tokia diena neegzistuoja';
}

console.log(dienosPavadinimas);

console.clear();
//Tikrina tik verte/ reiksme
if (4 == '4') {
    console.log('Taip');
} else {
    console.log('Ne');
}
//TIkrina duomens tipa ir jei tipai sutampa tada tikrina verte/reiksme
if (4 === '4') {
    console.log('Taip');
} else {
    console.log('Ne');
}

if (1 == true) {
    console.log('Taip');
} else {
    console.log('Ne');
}


console.clear();




const colors = ['red', 'green', 'blue'];
const color = 'suris';

if (color === colors [0]){
    console.log('Raudona');
} else {
    if (color === colors [1]) {
        console.log('zalia');
    } else {
        if (color === colors [2]) {
            console.log('melyna');
        } else {
            console.log('Ups.....');
        }
    }
}

console.clear();



if ('') {
    console.log('Pozityvas');
} else {
    console.log('Negatyvas');
}







