/* 



 */


console.log(Array.prototype.map); // ciklas eina per masyva isitruakia kiekvinea reiksme ir ka nors atlieka

const a = [10, 2, 8, 4, 6]
console.log(a);


const a2 = a.map(n => n*2);
console.log(a2);


const a3 = a.map(n => n + 3);
console.log(a3);

const a32 = a.map((n) => n + 3);
console.log(a32);

const a33 = a.map((n) =>  { return n + 3 } );
console.log(a33);

const a34 = a.map(function (n) { return n + 3 } );
console.log(a34);



function plusThree (n) {
    return n + 3 } ; 
const a35 = a.map(plusThree);
console.log(a35);


const names = [
    'Jonas Jonaitis', 
    'Marytė Marytaitė', 
    'Petras Petraitis', 
    'Ona Onaitė']
const abbr2 =[];

for (const name of names) {

    abbr2.push(
    name
        .split(' ')
        .map(word => word[0]+'.')
        .join(''));
}

console.log(abbr2);


const abbr3 =names.map(
    name => name
    .split(' ')
    .map(word => word[0]+'.')
    .join(''));



console.log(abbr3);


/* 
Kaip is pilno vardo gaunami inicialai
Inicialai yra zodziu pirmos raides

Pilnas vardas isskaidoams atskirais zodziais
is kiekvieno zodzio pasiliekama tik pirma raide
Po kiekvino simbolio pridedame po taska
viska sujungiame


1. 
Jonas Jonaitis
2. split (' ')
['Jonas', 'Jonaitis']
3. for() {} + [0]+ '.'
['J.', 'J.']
join ('')
'J. J.'
 */














