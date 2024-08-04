/* 
FOR - standartinis (tevinis) ciklas, (pasikartojanti seka).



*/


for (let i=0; i < 5; i++) {
console.log(i);

}


const dict = ['Labas', 'rytas', 'Lietuva']


for (let i=0; i < dict.length; i++) {
    console.log(i + 1 +') '+ dict[i]);
    
    }

console.clear();

for (let j=20; j < 40; j +=2) {
    console.log('--', j);
}

const marks = [10, 2, 8, 4, 6];
let sum = 0;

for (let i=0; i<marks.length; i++){
    console.log(i, '-->', marks[i]);
    sum += marks[i];
}
console.log(sum);

console.log(marks.length);
 console.clear();

 
for (let z = 1; z <= 100; z++){
    if (z % 3 === 0 && z % 5 === 0) {
        console.log('FizzBuzz');
    } else if (z % 3 === 0 ) {
        console.log('Fizz');
    } else if ( z % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(z);
    }
}
console.clear ();
console.log('--------------------------------------------');
console.log('>>>>>>>>' , marks.length);

for (let i=marks.length-1; i >= 0; i--){
    console.log(marks[i]);
}

let b = marks.length-1;
for (; b >=0 ; b--) {
    console.log(marks[b]);
}

let c = marks.length-1;
for (; c >=0 ;) {
    console.log(marks[c]);
    c--;
}

let d = 4; 
for (; d >= 0;) {
    console.log(marks[d]);
    d--;
}















