// ARRAY - sarašas, masyvas, matrica, listas, arėjus


// 

const empty =[];
console.log(empty);

const marks = [10, 2, 8, 4 ,6];
console.log(marks);

const sutudentNames = ['Lopas', 'Krapis', 'SventaMarija', 'Juozapas'];
console.log(sutudentNames);

const mixList = [1, 
    'a', 
    true, 
    [], 
    [2, 3, 4], 
    ['b', 'c', 'd'], 
    [false, true, false]
]
console.log(mixList);

const marksCount = marks.length;
console.log(marksCount);
console.log('------------------------------');
console.log(mixList[4]);
console.log(mixList[5]);
console.log(mixList[6]);

const dictionary = ['Labas', 'rytas', 'Lietuva'];
const word1 = dictionary [0][0];
console.log (word1);
const letter1 = word1[0];
console.log (letter1);

console.clear();

const pazymiai = [10, 2, 8, 4 ,6];

// Koks pazymiu virdukis?
const suma = pazymiai [0] + pazymiai [1] + pazymiai [2] + pazymiai [3] + pazymiai [4];
const kiekis = pazymiai.length;
const vidurkis = suma / kiekis;

console.log ('Suma: ', suma);
console.log ('Kiekis: ', kiekis);
console.log ('Vidurkis: ', vidurkis);

let tempSuma = 0;
let index = 0;

console.log(tempSuma);
tempSuma += pazymiai [index];
index = index + 1;
console.log(index, tempSuma);

tempSuma += pazymiai [index];
index++;
console.log(index, tempSuma);

tempSuma += pazymiai[index++];
console.log(index, tempSuma);

tempSuma = tempSuma + pazymiai [3];
console.log(index, tempSuma);

tempSuma = tempSuma + pazymiai [4];
console.log(index, tempSuma);


console.log('------------------------------');

const colors = ['red', 'green', 'blue'];
colorIndex = 0;
//Lovely color: red, green, blue

console.log ('Lovely colors:', colors[colorIndex++] + ', ' + colors[colorIndex++] + ', ' + colors[colorIndex++] + '!')

