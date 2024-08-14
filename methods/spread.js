/*
... - "spread" operatorius

... - "rest" operatorius
tik i tapati duomenu tipa objektas i objekta |||| array i array
 */



//primityviu reiksmiu kopijavimas. Number, string, boolean
let n = 7;
let m = n;

console.log(n, m);
m = 777;
console.log(n, m);
m = 'aaaaaa';
console.log(n, m);
m = 777;


//Kompleksiniu reiksmiu kopijavimas. Array, Object
const a = [1, 2];
const b = a;

console.log('a', a);
console.log('b', b);

a[0]= 111;

console.log('a', a);
console.log('b', b);


console.clear();


const m1 = [10, 2];
const m2 = [...m1]


console.log(m1);
console.log(m2);

m1[0] = 10000000;


console.log(m1);
console.log(m2);



const m3 = [1, 2, ...m1, 333, 444]

console.log(m3);


const objName = {name: 'Jonas'};
const objAge = {age: 99};
const objIsMarried = {isMarried: true};

console.log(objName);
console.log(objAge);
console.log(objIsMarried);

const fullHouse = {...objAge, ...objIsMarried, ...objName};

console.log(fullHouse);


const audi = {
    brand: 'Audi',
    model: '90',
};

const version = {
    color: '#ff0000',
    fuel: 'benzinas',
}

const bulka = {...audi, ...version};

console.log(bulka);



const raudonaBulka = {...audi, color: version.color};

console.log(raudonaBulka);



















