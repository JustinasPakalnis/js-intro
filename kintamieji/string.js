/*
String, teksas arba simboliai

string inicijavimo simboliai

' vieguba kabute
" dviguba kabute

operatoriai:
+ sujungia stringus
\ (escape) eskeipiname - funkcini simboli paverciame i spausdintina
Savybes: 
.length - grazina tekse simboliu kieki (ilgi)



INTERPRETAVIMAS

tuscias string - false
netuscias - true
*/

const single = 'labas rytas Lietuva';
console.log(single);

const single2 = "labas rytas Lietuva";
console.log(single2);

// vienguba kabute '

const kabute1 = "Vienguba (') kabute1";
console.log(kabute1);

const kabute2 = 'Dviguba (") kabute1';
console.log(kabute2);

const name = 'Chuck';
const surname = 'Norris';
const fullname = name + ' ' + surname;
console.log(name);
console.log(surname);
console.log(fullname);

// My name is not Chuck Norris, but i like it!

const chuck = "My name is not " + fullname + ", but i like it!";
console.log (chuck);

//Vienguba (') ir dviguba (") kabutes

const kabute12 = "Vienguba (') ir" + ' dviguba (") kabutes';
console.log (kabute12);

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes';
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes";
const kabute12_3 = 'Vienguba (\') ir dviguba (\") kabutes';
const kabute12_4 = "Vienguba (\') ir dviguba (\") kabutes";
console.log (kabute12_1);
console.log (kabute12_2);
console.log (kabute12_3);
console.log (kabute12_4);

// Back slash (\) simbolis

const backSlash1 = 'Back slash (\\) simbolis';
const backSlash2 = "Back slash (\\) simbolis";
console.log (backSlash1);
console.log (backSlash2);

const hi = 'Kugelis';
const ilgis = hi.length;
const textSize = 'Teksto "' + hi + '" ilgis yra ' + hi.length + ' simboliu';
const textSize2 = 'Teksto "' + hi + '" ilgis yra ' + ilgis + ' simboliu';
// Teksto "<TEKSTAS>" ilgis yra <ILGIS> simboliu.
console.log(textSize);
console.log(textSize2);
console.log("-----------------------------------------------------------");

let textSize3 = '';
console.log(1, textSize3);

textSize3 = textSize3 + 'Teksto "';
console.log(2, textSize3);

textSize3 = textSize3 + hi;
console.log(3, textSize3);

textSize3 = textSize3 + '" ilgis yra ';
console.log(4, textSize3);

textSize3 = textSize3 + ilgis;
console.log(5, textSize3);

textSize3 = textSize3 + ' simboliu.';
console.log(6, textSize3);

console.clear();

const pomidoras = 'Pomidoras';
console.log(pomidoras);

const symbol1 =  pomidoras[0];
console.log(symbol1);

const symbol2 =  pomidoras[1];
console.log(symbol2);

const symbol3 =  pomidoras[2];
console.log(symbol3);

const symbol4 =  pomidoras[3];
console.log(symbol4);

const symbol5 =  pomidoras[4];
console.log(symbol5);

const symbol100 =  pomidoras[99];
console.log(symbol100);

console.log(pomidoras[99]);
console.log(pomidoras[-1]);
console.log(pomidoras[3.14]);

console.log(pomidoras[0]);
console.log(pomidoras[1]);
console.log(pomidoras[2]);
console.log(pomidoras[3]);
console.log(pomidoras[4]);
console.log(pomidoras[5]);
console.log(pomidoras[6]);
console.log(pomidoras[7]);
console.log(pomidoras[8]);
console.log(pomidoras[9]);

const agurkas = 'Zalias agurkas!';
const agurkasFirst = agurkas [0];
console.log(agurkasFirst);

const agurkasLast = agurkas[agurkas.length-1];
console.log(agurkasLast);


const text = 'asdfasdfasdf';
const lastSymbol = text [--text.length];

console.log (lastSymbol);
console.log('-------------------------------------------------------------');
const personName = 'Vardenis';
const personSurname = 'Pavardenis';
const abbr = personName[0]+ '.' + personSurname[0] + '.';
console.log(abbr);

console.clear ();

const color1 = 'red';
const color2 = 'green';
const color3 = 'blue';

const colorMix = color1 + color2;
console.log(colorMix);
console.log(color1 + color2);






