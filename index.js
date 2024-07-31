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

// function skaitmenuKiekisSkaiciuje (a){
    
//     if (a == Number) {
//         return (a)
//     } else {
//         return ('Pateikta netinkamo tipo reikšmė.');
//     }
// }
// console.log( skaitmenuKiekisSkaiciuje( 5  ) );
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// console.log( skaitmenuKiekisSkaiciuje( "asd" ) );
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );













