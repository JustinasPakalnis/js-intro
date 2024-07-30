/*
Object - OBJEKTAS
"Use strict"
Dinaminis reiksmiu priskyrimas



*/
// const mark1 = 10;
// const mark2 = 2;
// const mark3 = 8;
// const mark4 = 4;
// const mark5 = 6;

// const marks = [10, 2, 8, 4 ,6];


// student1 = ['Jonas', 99, true];
// student2 = ['Maryte', 88, true];
// student3 = ['Petras', 77, true];
// student4 = ['Ona', 66, true];

// const student1Name = 'Jonas';
// const student1Age = 99;
// const sutdent1IsMarried = true;



// const student2Name = 'Maryte';
// const student2Age = 88;
// const sutdent2IsMarried = false;

// const student3Name = 'Petras';
// const student3Age = 77;
// const sutdent3IsMarried = false;

// const student4Name= 'Ona';
// const student4Age = 66;
// const sutdent4IsMarried = true;

// // objektai
// // key-value poru sarasas
// const empty ={};

// const student1 = {
//     name: 'Jonas',
//     age: 99,
//     isMarried: true,
//     }

// const student2 = {
//     name: 'Maryte',
//     age: 88,
//     isMarried: false,
//     phone: '3333333333',
//     }
    
// const student3 = {
//     name: 'Petras',
//     age: 77,
//     isMarried: false,
//     adress: 'Gatve, Miestas',
//     }
    
// const student4 = {
//     name: 'Ona',
//     age: 66,
//     isMarried: true,
//     adress: 'Gatve, Miestas',
//     phone: '3333333333',
//     }
    

// console.log (student1);
// console.log (student2);
// console.log (student3);
// console.log (student4);

// // standartine sintakse
// console.log (student1['name']);
// console.log (student1['age']);

// // supaprastinta sintakse

// console.log (student4.name);
// console.log (student4.age);

const cars = [
    {
        brand: 'Audi',
        model: '80',
        color: 'red',
        price: 300,
    },
    {
        brand: 'Volvo',
        model: 's40',
        color: 'black',
        price: 1000,
    },
    {
        brand: 'Zapas',
        model: '1',
        color: 'pilkas',
        price: 777,
    },
];

//Automobilis BRAND MODEL kurio spalva yra COLOR parduodadamas uz PRICE eur

const car1 = cars[0];
console.log(car1);

const car1Sale = 'Automobilis ' + car1.brand + ' ' + car1.model + ' kurio spalva yra: ' + car1.color + ', parduodamas uz: ' + car1.price + ' kaina'
console.log(car1Sale);

const car2 = cars[2];
console.log(car2);

const car2Sale = 'Automobilis ' + car2.brand + ' ' + car2.model + ' kurio spalva yra: ' + car2.color + ', parduodamas uz: ' + car2.price + ' kaina'
console.log(car2Sale);


const car3Sale = 'Automobilis ' + cars[2].brand + ' ' + cars[2].model + ' kurio spalva yra: ' + cars[2].color + ', parduodamas uz: ' + (cars[2].price + cars[2].price) +' kaina'
console.log(car3Sale);

/*ND Reikalingas sarasas prekiu.
Kiekviena preke yra aprasoma: pavadinimu, kaina uz vieneta ir norimu pirkti kiekiu
Reikia isspausdinti: 
1 sablonas: 'Prekiu krepselyje yra [count] prekiu;
2 sablonas: prekiu kreselis
------
1 pavadinimas (kaina uz vieneta eur) - kiekis
2 pavadinimas (kaina uz vieneta eur) - kiekis

n pavadinimas (kaina uz vieneta eur) - kiekis

c sablonas:
prekiu krepselio verte yra total kaina eur



*/
console.log('----------------------------------------------');
const prekes = [
    {
        prekesPavadinimas: 'Agurkas',
        prekesKaina: 1.99,
        prekiuKiekis: 1,
        prekesSvoris: 300,
    },
    {
        prekesPavadinimas: 'Saslykas',
        prekesKaina: 8.99,
        prekiuKiekis: 2,
        prekesSvoris: 1000,
    },
    {
        prekesPavadinimas: 'Ryziai',
        prekesKaina: 3.99,
        prekiuKiekis: 3,
        prekesSvoris: 1500,
    },
    {
        prekesPavadinimas: 'Krn-brg Blanch',
        prekesKaina: 2.19,
        prekiuKiekis: 24,
        prekesSvoris: 330,
    },
    {
        prekesPavadinimas: 'Jaggermeister',
        prekesKaina: 17.99,
        prekiuKiekis: 5,
        prekesSvoris: 700,
    },
    {
        prekesPavadinimas: 'Tepalas',
        prekesKaina: 28.49,
        prekiuKiekis: 5,
        prekesSvoris: 1000,
    },
    {
        prekesPavadinimas: 'Atsuktuvas',
        prekesKaina: 14.29,
        prekiuKiekis: 3,
        prekesSvoris: 100,
    },
    {
        prekesPavadinimas: 'Anglys',
        prekesKaina: 10.49,
        prekiuKiekis: 2,
        prekesSvoris: 2000,
    },
    {
        prekesPavadinimas: 'Ziebtuvelis',
        prekesKaina: 0.99,
        prekiuKiekis: 3,
        prekesSvoris: 30,
    },
    {
        prekesPavadinimas: 'Maiselis',
        prekesKaina: 0.19,
        prekiuKiekis: 2,
        prekesSvoris: 5,
    },
];

let index = 0;

// let totalKiekis = 0;
// console.log ('----------------------------------------------');
// for (let i=0; i < prekes.length; i++){
//     totalKiekis = totalKiekis + prekes[i]['prekiuKiekis'];
//     console.log (totalKiekis);
   
// }



let totalKiekis = prekes[index].prekiuKiekis;
index++;
totalKiekis = totalKiekis + prekes[index].prekiuKiekis;
index++;
totalKiekis = totalKiekis + prekes[index].prekiuKiekis;
index++;
totalKiekis = totalKiekis + prekes[index].prekiuKiekis;
index++;
totalKiekis = totalKiekis + prekes[index].prekiuKiekis;
index++;
totalKiekis = totalKiekis + prekes[index].prekiuKiekis;
index++;
totalKiekis = totalKiekis + prekes[index].prekiuKiekis;
index++;
totalKiekis = totalKiekis + prekes[index].prekiuKiekis;
index++;
totalKiekis = totalKiekis + prekes[index].prekiuKiekis;
index++;
totalKiekis = totalKiekis + prekes[index].prekiuKiekis;
index++;

console.log ('Prekių krepšelyje yra: ' + prekes.length + ' skirtingų prekių, bei viso: ' + totalKiekis + ' pirkiniai.');
let index2 = 0;
console.log ('Prekė: ' + prekes[index2]['prekesPavadinimas'].padEnd(15) + ' | Prekės kaina: ' + prekes[index2]['prekesKaina'] + ' eur |' + ' Prekių kiekis: ' + prekes[index2]['prekiuKiekis'] + ' | Suma: ' + Math.round((prekes[index2]['prekesKaina']*prekes[index2]['prekiuKiekis'])*100)/100 + ' eur');
index2++;
console.log ('Prekė: ' + prekes[index2]['prekesPavadinimas'].padEnd(15) + ' | Prekės kaina: ' + prekes[index2]['prekesKaina'] + ' eur |' + ' Prekių kiekis: ' + prekes[index2]['prekiuKiekis'] + ' | Suma: ' + Math.round((prekes[index2]['prekesKaina']*prekes[index2]['prekiuKiekis'])*100)/100 + ' eur');
index2++;
console.log ('Prekė: ' + prekes[index2]['prekesPavadinimas'].padEnd(15) + ' | Prekės kaina: ' + prekes[index2]['prekesKaina'] + ' eur |' + ' Prekių kiekis: ' + prekes[index2]['prekiuKiekis'] + ' | Suma: ' + Math.round((prekes[index2]['prekesKaina']*prekes[index2]['prekiuKiekis'])*100)/100 + ' eur');
index2++;
console.log ('Prekė: ' + prekes[index2]['prekesPavadinimas'].padEnd(15) + ' | Prekės kaina: ' + prekes[index2]['prekesKaina'] + ' eur |' + ' Prekių kiekis: ' + prekes[index2]['prekiuKiekis'] + ' | Suma: ' + Math.round((prekes[index2]['prekesKaina']*prekes[index2]['prekiuKiekis'])*100)/100 + ' eur');
index2++;
console.log ('Prekė: ' + prekes[index2]['prekesPavadinimas'].padEnd(15) + ' | Prekės kaina: ' + prekes[index2]['prekesKaina'] + ' eur |' + ' Prekių kiekis: ' + prekes[index2]['prekiuKiekis'] + ' | Suma: ' + Math.round((prekes[index2]['prekesKaina']*prekes[index2]['prekiuKiekis'])*100)/100 + ' eur');
index2++;
console.log ('Prekė: ' + prekes[index2]['prekesPavadinimas'].padEnd(15) + ' | Prekės kaina: ' + prekes[index2]['prekesKaina'] + ' eur |' + ' Prekių kiekis: ' + prekes[index2]['prekiuKiekis'] + ' | Suma: ' + Math.round((prekes[index2]['prekesKaina']*prekes[index2]['prekiuKiekis'])*100)/100 + ' eur');
index2++;
console.log ('Prekė: ' + prekes[index2]['prekesPavadinimas'].padEnd(15) + ' | Prekės kaina: ' + prekes[index2]['prekesKaina'] + ' eur |' + ' Prekių kiekis: ' + prekes[index2]['prekiuKiekis'] + ' | Suma: ' + Math.round((prekes[index2]['prekesKaina']*prekes[index2]['prekiuKiekis'])*100)/100 + ' eur');
index2++;
console.log ('Prekė: ' + prekes[index2]['prekesPavadinimas'].padEnd(15) + ' | Prekės kaina: ' + prekes[index2]['prekesKaina'] + ' eur |' + ' Prekių kiekis: ' + prekes[index2]['prekiuKiekis'] + ' | Suma: ' + Math.round((prekes[index2]['prekesKaina']*prekes[index2]['prekiuKiekis'])*100)/100 + ' eur');
index2++;
console.log ('Prekė: ' + prekes[index2]['prekesPavadinimas'].padEnd(15) + ' | Prekės kaina: ' + prekes[index2]['prekesKaina'] + ' eur |' + ' Prekių kiekis: ' + prekes[index2]['prekiuKiekis'] + ' | Suma: ' + Math.round((prekes[index2]['prekesKaina']*prekes[index2]['prekiuKiekis'])*100)/100 + ' eur');
index2++;
console.log ('Prekė: ' + prekes[index2]['prekesPavadinimas'].padEnd(15) + ' | Prekės kaina: ' + prekes[index2]['prekesKaina'] + ' eur |' + ' Prekių kiekis: ' + prekes[index2]['prekiuKiekis'] + ' | Suma: ' + Math.round((prekes[index2]['prekesKaina']*prekes[index2]['prekiuKiekis'])*100)/100 + ' eur');
index2++;

let index3= 0;
sumTotal = (prekes[index3]['prekiuKiekis'])*(prekes[index3]['prekesKaina']);
index3++;
sumTotal =sumTotal + (prekes[index3]['prekiuKiekis'])*(prekes[index3]['prekesKaina']);
index3++;
sumTotal =sumTotal + (prekes[index3]['prekiuKiekis'])*(prekes[index3]['prekesKaina']);
index3++;
sumTotal =sumTotal + (prekes[index3]['prekiuKiekis'])*(prekes[index3]['prekesKaina']);
index3++;
sumTotal =sumTotal + (prekes[index3]['prekiuKiekis'])*(prekes[index3]['prekesKaina']);
index3++;
sumTotal =sumTotal + (prekes[index3]['prekiuKiekis'])*(prekes[index3]['prekesKaina']);
index3++;
sumTotal =sumTotal + (prekes[index3]['prekiuKiekis'])*(prekes[index3]['prekesKaina']);
index3++;
sumTotal =sumTotal + (prekes[index3]['prekiuKiekis'])*(prekes[index3]['prekesKaina']);
index3++;
sumTotal =sumTotal + (prekes[index3]['prekiuKiekis'])*(prekes[index3]['prekesKaina']);
index3++;
sumTotal =sumTotal + (prekes[index3]['prekiuKiekis'])*(prekes[index3]['prekesKaina']);
index3++;

console.log('Viso krepšelio suma: ' + Math.round((sumTotal)*100)/100 + ' Eur');

index4 = 0;
svorisTotal = (prekes[index4]['prekesSvoris'])*(prekes[index4]['prekiuKiekis']);
index4++;
svorisTotal = svorisTotal + (prekes[index4]['prekesSvoris'])*(prekes[index4]['prekiuKiekis']);
index4++;
svorisTotal = svorisTotal + (prekes[index4]['prekesSvoris'])*(prekes[index4]['prekiuKiekis']);
index4++;
svorisTotal = svorisTotal + (prekes[index4]['prekesSvoris'])*(prekes[index4]['prekiuKiekis']);
index4++;
svorisTotal = svorisTotal + (prekes[index4]['prekesSvoris'])*(prekes[index4]['prekiuKiekis']);
index4++;
svorisTotal = svorisTotal + (prekes[index4]['prekesSvoris'])*(prekes[index4]['prekiuKiekis']);
index4++;
svorisTotal = svorisTotal + (prekes[index4]['prekesSvoris'])*(prekes[index4]['prekiuKiekis']);
index4++;
svorisTotal = svorisTotal + (prekes[index4]['prekesSvoris'])*(prekes[index4]['prekiuKiekis']);
index4++;
svorisTotal = svorisTotal + (prekes[index4]['prekesSvoris'])*(prekes[index4]['prekiuKiekis']);
index4++;
svorisTotal = svorisTotal + (prekes[index4]['prekesSvoris'])*(prekes[index4]['prekiuKiekis']);

console.log('Viso krepšelio Svoris: ' + svorisTotal/1000 + ' kg');


console.clear();

const pc = {
    monitor: {
        width: 1980,
        height: 1080,
    },
    ram: 16,
    hd: 100,
    keyboard: 'en',
    mouse: true,
    power: false,
};

console.log (pc.ram);
console.log (pc['power']);

const param = 'power';
// i param isideda pc > power
//Jei yra arba nera kabuciu jei nera kabuciu ima is kintamojo o su kabutem is object
console.log (pc[param]);
console.log (pc['power']);

console.log (pc['monitor']['height']);
console.log (pc.monitor.width);

console.clear();

const crazy = {
    title: 'Some crazy ...',
    description: 'Prepare yourself!',
    'crazy marks': [10, 2, 8, 4, 6],
    123: {
        one: true,
        two: true,
        three: true,
    }
};

console.log(crazy);
console.log(crazy.title);
console.log(crazy['description']);
console.log(crazy.title.description);
console.log(crazy['crazy marks']);
console.log(crazy['123']);
console.log(crazy.title.length);
//String = supaprastintas array, array = supaprastintas object

console.clear();

const house = {
    width: 16,
    height: 3,
    depth: 5,
};
console.log(house);

const houseKeys = Object.keys(house)
console.log(houseKeys);
// SUrandame visus raktus esamus objekte, mums grazina masyva
console.log(Object.keys(house));

console.clear();

const zoo = {
    liutas: 2,

};

console.log(zoo.liutas);

zoo.liutas += 3;
console.log(zoo.liutas);

zoo.dramblys = 1;
console.log(zoo.dramblys);

zoo.dramblys += 2;
console.log(zoo.dramblys);

console.log(zoo);

//const zoo? kodel constanta pakeicia. Nepeeraso is esmes o tik papildo

zoo.lape = 4;
console.log(zoo.lape);

console.log(zoo);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

console.log(marks[0]);
marks[1]=10;

console.log(marks);

console.log(marks[1]);






