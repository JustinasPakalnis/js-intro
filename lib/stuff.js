// const students = [
//     {
//         name: 'Jonas',
//         marks: [10, 2, 8, 4, 6],
//     },
//     {
//         name: 'Maryte',
//         marks: [9, 8, 7, 6, 5],
//     },
//     {
//         name: 'Petras',
//         marks: [8, 8, 8, 8, 8, 8, 8, 8, 8],
//     },
//     {
//         name: 'Ona',
//         marks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     },
// ];

export function vidurkis(pasirinkimas, studentai){
    let tValue = 0;
    for (let i=0; i<studentai.length; i++) {
        if (studentai[i]['name'] === pasirinkimas) {
            for (let a=0; a < studentai[i]['marks'].length; a++) {
                tValue = tValue + studentai[i]['marks'][a];
            }
            return('Studento '+ studentai[i]['name'] + ' pazymiu vidurkis yra: ' + tValue / studentai[i]['marks'].length);
            } 
    }
    }




// export function visaKaina(kaina, kiekis) {
//     return kaina * kiekis + ' bus tokia bendra kaina';
    
// }



// export const veikejai = ['Betmenas', 'Jokeris', 'Galvanosis', 'Suris'];
// export const veikejai2 = ['Betmenas', 'Jokeris', 'Galvanosis', 'Suris'];

// export function rinkejas(a) {
//     return veikejai2[a]
// }