/*

FOR-IN ciklas nedirba su masyvais ir stringais
dirba su objektais

*/


const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    phone: 862342344,
    address: {
        city: 'Miestas',
        street: 'Gatve',
        number: 123,
        zip: 98765,
    },
    marks: [10, 2, 8, 4, 6],
};


// 1.
const keys = Object.keys(person);

for (let i = 0; i<keys.length;i++) {
    const key = keys[i];
    console.log(i, key, person[key]);
}

// 2.
console.log('--------------------------');
const keys2 = Object.keys(person);

for (const key of keys2) {
    console.log(key, person[key]);
}

// 3.
console.log('--------------------------');


for (const key in person) {
    console.log(key, person[key]);
}

console.clear ();

const abc = {
    a: 'arbuzas',
    b: 'bulve',
    c: 'cukinija',
    d: 'dilgele',
}

for (const key in abc) {
    console.log(key, '>>>', abc[key]);
}




function past(h, m, s){
    let h1 = 0;
    let m1 = 0;
    let s1 = 0;
    if (h >= 0 && h <= 59) {
      h1 = h*3600000;
    }
    if (m >= 0 && m <= 59) {
      m1 = m*60000;
    }    
    if (s >= 0 && s <= 59) {
      s1 = s*1000;
    }
     return h1+m1+s1; 
      
      
  }


  console.log(past(1, 1, 1));