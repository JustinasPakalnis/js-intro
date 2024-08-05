// function stringReverse(str) {
//     if (typeof str !== 'string') {
//         return 'Error: reikia duoti string tipo reiksme'
//     }
//     if (str === '') {
//         return 'Error: duota reiksme negali buti tuscias string'
//     }
//     let reverseString = '';
//     for (let i = str.length-1; i >= 0; i--) {
//         console.log(i, str[i]);
//     }
//     return undefined;
// }
function stringReverse(str) {
    if (typeof str !== 'string') {
        return 'Error: reikia duoti string tipo reiksme'
    }
    if (str === '') {
        return 'Error: duota reiksme negali buti tuscias string'
    }
    let reverseString = '';
    for (let i = 0; i < str.length; i++) {
        reverseString = str[i] + reverseString;
    }
    return reverseString;
}



console.log(stringReverse(1));
console.log(stringReverse(true));
console.log(stringReverse(null));
console.log(stringReverse([]));
console.log(stringReverse({}));
console.log(stringReverse(undefined));
console.log(stringReverse());
console.log(stringReverse(stringReverse));
console.log(stringReverse(''));



console.log(stringReverse('labas'), '>>>> sabal');
console.log(stringReverse('sedek'), '>>>> kedes');
console.log(stringReverse('edek uzu kedes'), '>>>> sedek uzu kedes');
console.log(stringReverse('alus'), '>>>> sula');
console.log(stringReverse('taco cat'), '>>>> tac ocat');
console.log(stringReverse('sigis'), '>>>> sigis');












