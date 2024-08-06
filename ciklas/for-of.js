/*
 FOR-OF ciklas

naudoti viduje const naujam variable ne let


 */

for(let i=0; i < 5; i++) {
    console.log(i);
}

const names = ['Jonas', 'Maryte', 'Petras', 'Ona', 'Chuck', 'Liusi', 'Batman', 'Tom', 'Jerry', 'Xena'];

for (let i = 0; i < names.length; i++) {
    const name= names[i];
    console.log(`Sveiki mano vardas yra: ${name}.`);
}

const names2 = ['Jonas', 'Maryte', 'Petras', 'Ona', 'Chuck', 'Liusi', 'Batmenas', 'Tom', 'Jerry', 'Xena'];

for (const name2 of names2) {
    console.log(`As auginu: ${name2}`);
}


// Paskutinis trumpiausio pavadinimo vardas > tom
let shortName = names2[0];
for (const veg of names2) {
    if (veg.length <= shortName.length) {
        shortName = veg;
    }
}

console.log(shortName);

//Pirmas ilgiausia pavadinimo vardas > Betmenas

let longName = names2[0];

for (const names of names2) {
    if (names.length > longName.length) {
        longName = names;
    }
}

console.log(longName);

