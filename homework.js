const a = 5;
console.log(a);
const b = 8;
console.log(b);
const c = 2000;
console.log(c);



const ta = 'Krapas';
console.log(ta);
const tb = 'Suopis';
console.log(tb);
const tc = 'Suris';
console.log(tc);

const sa = [16, 8, 4, 2, 1];
console.log(sa);
const sb = [432, 666, 999, 567, 123];
console.log(sb);
const sc = [10, 20, 20, 30, 40];
console.log(sc);

const tsa = ['Namas', 'Kambarys', 'Langas', 'Siena', 'durys'];
console.log(tsa);
const tsb = ['Automobilis', 'Variklis', 'Komforto Blokas', 'CanBUS', 'Android'];
console.log(tsb);
const tsc = ['Kiemas', 'Sandeliukas', 'Veja', 'Terasa', 'Trinkeles'];
console.log(tsc);

let sumSkc = a + b + c;
console.log(sumSkc);
let sumSkc1 = sa[0] +  sa[1] +  sa[2] +  sa[3] +  sa[4];
console.log(sumSkc1);
let sumSkc2 = sb[0] +  sb[1] +  sb[2] +  sb[3] +  sb[4];
console.log(sumSkc2);
let sumSkc3 = sc[0] +  sc[1] +  sc[2] +  sc[3] +  sc[4];
console.log(sumSkc3);
let sumTotal = sumSkc + sumSkc1 + sumSkc2 + sumSkc3;
console.log('Susumuoti visus skaičiaus tipo kintamuosius-----------------------------------------');
console.log(sumTotal);
console.log('------------------------------------------------------------------------------------');
let text = ta + ' ' + tb + ' ' + tc;

let text1 = tsa[0] + ' ' + tsa[1] + ' ' + tsa[2] + ' ' + tsa[3] + ' ' + tsa[4];

let text2 = tsb[0] + ' ' + tsb[1] + ' ' + tsb[2] + ' ' + tsb[3] + ' ' + tsb[4];

let text3 = tsc[0] + ' ' + tsc[1] + ' ' + tsc[2] + ' ' + tsc[3] + ' ' + tsc[4];

let textFull = text + ' ' + text1 + ' ' + text2 + ' ' + text3;
console.log('Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas----');
console.log('------------------------------------------------------------------------------------');

console.log(textFull);
console.log('------------------------------------------------------------------------------------');
console.log('Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5');
console.log('------------------------------------------------------------------------------------');

let sumSkcL = sa[0] -  sa[1] +  sa[2] -  sa[3] +  sa[4];
console.log(sumSkc1);
let sumSkcL1 = sb[0] -  sb[1] +  sb[2] -  sb[3] +  sb[4];
console.log(sumSkc2);
let sumSkcL2 = sc[0] -  sc[1] +  sc[2] -  sc[3] +  sc[4];
console.log(sumSkc3);
console.log('------------------------------------------------------------------------------------');
console.log('Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas');
console.log('------------------------------------------------------------------------------------');

let textFull1 = tsa[4] + ', ' + tsa[3] + ', ' + tsa[2] + ', ' + tsa[1] + ', ' + tsa[0];

let textFull2 = tsb[4] + ', ' + tsb[3] + ', ' + tsb[2] + ', ' + tsb[1] + ', ' + tsb[0];

let textFull3 = tsc[4] + ', ' + tsc[3] + ', ' + tsc[2] + ', ' + tsc[1] + ', ' + tsc[0];

let textFullTotal = textFull3 + ', ' + textFull2 + ', ' + textFull1;
console.log(textFullTotal);
console.log('------------------------------------------------------------------------------------');
console.log('Kintamųjų palyginimas');
console.log('------------------------------------------------------------------------------------');


const pirmas = 5;
const antras = 9;


if (pirmas > antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmas < antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmas === antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmas != antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmas >= antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmas <= antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}


console.log('------------------------------------------------------------------------------------');
const pirmasText = ('Mano sandeliuke gyvena daug voru');
const antrasText = ('Kai atidarau duris, jie visi pabega i skirtingas puses');
console.log(pirmasText.length);
console.log(antrasText.length);

if (pirmasText.length > antrasText.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmasText.length < antrasText.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmasText.length === antrasText.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmasText.length != antrasText.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmasText.length >= antrasText.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmasText.length <= antrasText.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
console.log('------------------------------------------------------------------------------------');
const list1 = ['Voras', 'Bega', 'Pamates', 'Sviesa'];
const list2 = ['Voras', 'Grizta', 'Kai', 'Sviesa', 'Sandeliuke', 'Dingsta'];

if (list1.length > list2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (list1.length < list2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (list1.length === list2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (list1.length != list2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (list1.length >= list2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (list1.length <= list2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('------------------------------------------------------------------------------------');
console.log('Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus');

function tusciaFunkcija(){
    return (false);
}
console.log( tusciaFunkcija() );


console.log('------------------------------------------------------------------------------------');

const skaicius1 = 5;
const skaicius2 = 7;
const skaicius3 = 9;
function daugyba(a, b){
    let sandauga = a*b;
    return (sandauga);
}
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );

console.log('------------------------------------------------------------------------------------');













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

// const pasirinkimas = 'Jonas';
// let tValue = 0;

// for (let i=0; i<students.length; i++) { //Ciklas vykdys tiek kartu kiek yra objekte keys ir patikrina visuose keys ar egzistuoja toks studentas
//     if (students[i]['name'] === pasirinkimas) { //Jei pasirinktas studento vardas yra objekte
//         for (let a=0; a < students[i]['marks'].length; a++) { //Vykdomas sis ciklas tiek kartu kiek parinkto objekto yra key values 
//             tValue = tValue + students[i]['marks'][a]; //sumuojama visi pazymiai
//         }
//         console.log('Studento '+ students[i]['name'] + ' pazymiu vidurkis yra: ' + tValue / students[i]['marks'].length);//Isvedamas atsakymas i console
//         } else {
//             console.log(students[i]['name'] + ' yra lopai');//vistiek isvedamas nors tikiuosi jog isves tik tuo atveju jeigu neatitiks salyga ar yra studentas objekte
//         }
// }




// console.log(students[index]['name']); //Log name
// console.log(students[index]['marks'].length); //Log marks count
// console.log(students.length); //log object count
// console.log('Studento '+ students[i]['name'] + ' pazymiu vidurkis yra: ' );




   
function vidurkis(pasirinkimas){
let tValue = 0;
for (let i=0; i<students.length; i++) { //Ciklas vykdys tiek kartu kiek yra objekte keys ir patikrina visuose keys ar egzistuoja toks studentas
    if (students[i]['name'] === pasirinkimas) { //Jei pasirinktas studento vardas yra objekte
        for (let a=0; a < students[i]['marks'].length; a++) { //Vykdomas sis ciklas tiek kartu kiek parinkto objekto yra key values 
            tValue = tValue + students[i]['marks'][a]; //sumuojama visi pazymiai
        }
        return('Studento '+ students[i]['name'] + ' pazymiu vidurkis yra: ' + tValue / students[i]['marks'].length); //Isvedamas atsakymas i console
        } 
}
}
console.log(vidurkis('Jonas'));

console.clear();

function skaitmenuKiekisSkaiciuje (a){
    if (typeof a !== 'number' ) {
        return 'Error: Pateikta netinkamo tipo reiksme' ;
    }
    if (isNaN(a)) {
        return 'Error: Pateikta netinkamo tipo reiksme';
    }

    let kiekis = 0;
    for (let i = 0; i<a.toString().length; i++)
    kiekis += 1;
    return kiekis;
}




console.log( skaitmenuKiekisSkaiciuje( 5  ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( "asd" ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( 4.32 ) );

console.clear(); 


let sum = 0;
let suma1= 0;
let suma2= 0;
for (let i = 0; i <= 11; i++) {
        if (i % 3 === 0) {
        sum += 1;
    }
    {
        if (i % 5 === 0) {
        suma1 += 1;
    }
    if (i % 7 === 0) {
        suma2 += 1;
    }
}
}
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra' , sum, 'vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra' , suma1, 'vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra' , suma2, 'vienetai.');


let suma1a= 0;
let suma2a= 0;
let sum1 = 0;
for (let i = 8; i <= 31; i++) {
        if (i % 3 === 0) {
        sum1 += 1;
    }
    {
        if (i % 5 === 0) {
        suma1a += 1;
    }
    if (i % 7 === 0) {
        suma2a += 1;
    }
}
}
console.log('Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra' , sum1, 'vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra' , suma1a, 'vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra' , suma2a, 'vienetai.');

let suma1b= 0;
let suma2b= 0;
let sum2 = 0;
for (let i = -18; i <= 18; i++) {
        if (i % 3 === 0) {
        sum2 += 1;
    }
    {
        if (i % 5 === 0) {
        suma1b += 1;
    }
    if (i % 7 === 0) {
        suma2b += 1;
    }
}
}
console.log('Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 3 yra' , sum2, 'vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra' , suma1b, 'vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra' , suma2b, 'vienetai.');

console.clear(); 



 

function didziausiasSkaiciusSarase(skc) {
    if (typeof skc === 'string') {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if (skc.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }
  let max = -Infinity;
    for (let i = 0; i <= skc.length; ++i) {
    if (skc[i] > max) {
        max = skc[i];
    }
  }
  return max;
}


console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) )
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );





console.log('-----------------------------------------');

function isrinktiRaides(raides, skaicius ) {
    if (typeof raides != 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if (raides.length === 0 || raides.length > 100) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }
    if (typeof skaicius != 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if (skaicius <= 0 ) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }
    if (skaicius > raides.length ) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }
    let atrusiuota = '';
        for (let i = skaicius - 1;  i < raides.length;i += skaicius) {
        atrusiuota += raides[i];
        }
    return ('Rezultatas: ' + atrusiuota);
}


console.log( isrinktiRaides( 'abcdefg', 2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );

