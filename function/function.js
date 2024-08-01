/*
FUNCTION - perpanaudojamas logikos blokas




*/
console.log('-----------------------------------------------------------------------------');
const students = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Maryte',
        marks: [9, 8, 7, 6, 5],
    },
    {
        name: 'Petras',
        marks: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    },
    {
        name: 'Ona',
        marks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
];

















console.log('-----------------------------------------------------------------------------');

//Studento, vardu Jonas, pazymiu vidurkis yra 6.
//Studento, vardu Maryte, pazymiu vidurkis yra 6.
let sumJonas = 0;
sumJonas += students[0].marks[0];
sumJonas += students[0].marks[1];
sumJonas += students[0].marks[2];
sumJonas += students[0].marks[3];
sumJonas += students[0].marks[4];

const averageJonas = sumJonas/ students[0].marks.length;


let sumMaryte = 0;
sumMaryte += students[1].marks[0];
sumMaryte += students[1].marks[1];
sumMaryte += students[1].marks[2];
sumMaryte += students[1].marks[3];
sumMaryte += students[1].marks[4];
const averageMaryte = sumMaryte/ students[1].marks.length;



const msgJonas = 'Studento, vardu ' + students[0].name + ', pazymiu vidurkis yra ' + averageJonas;
console.log(msgJonas);

const msgMaryte = 'Studento, vardu ' + students[1].name + ', pazymiu vidurkis yra ' + averageMaryte ;
console.log(msgMaryte);

const a = (7 + 5)/2;
const b = (11 + 5)/2;
const c = (11 + 7)/2;
const d = (13 + 66)/2;

function emptyFunc() {
    // tuscia funkcija kuri nieko nedaro nes jos logikos blokas yra tuscias
    // bet visos funkcijos grazina savo darbo rezultata
}

function giveMefive() {
    return 5;
}
console.log(giveMefive());

function hello(a) {
    return 'Labas as: ' + a + '!';
}

console.log(hello('Krapas'));
console.log(hello('Suris'));
console.log(hello('Anubis'));

function twoNumbersAverage (a, b) {
    return (a+b)/arguments.length;
}


console.log(a, b, c, d);
console.log (twoNumbersAverage(7, 5));
console.log (twoNumbersAverage(11, 5));
console.log (twoNumbersAverage(11, 7));
console.log (twoNumbersAverage(13, 66));

function love(color) {
    return 'I love '+color+' color';
    return `I love ${color} color`;
}

console.log(love('green'));

function evenOdd(number) {
    if (number % 2 === 0){
        return `Skaicius ${number} Yra lyginis`;
    } else {
        return `Skaicius ${number} Yra nelyginis`;
    }
}
console.log(evenOdd(2));
console.log(evenOdd(3));
console.log(evenOdd(4));
console.log(evenOdd(5));
console.log(evenOdd(6));


function evenOdd2(number) {
        return `Skaicius ${number} Yra ${number % 2 === 0 ? '' : 'ne'}lyginis`;
    }

console.log(evenOdd2(4));
console.log(evenOdd2(5));
console.log(evenOdd2(6));










