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

for (let i=marks.length - 1; i>=0; i--){
    console.log(i, '-->', marks[i]);
    sum += marks[i];
}
























