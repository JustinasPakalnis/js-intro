









const marks = [10, 2, 8, 4, 6];



let sum = 0;
    for (const mark of marks) {
        sum += mark;
    }

console.log(sum);



let sum2 = 0;

marks.forEach((mark) => sum2+=mark)

console.log(sum2);
let sum3 = 0;

marks.forEach((mark, i, arr) => sum3 += mark * i + arr.length)

console.log(sum3);


const dict = ['red', 'green', 'blue'];


let lights= 'Lights:';
dict.forEach((s, i, arr) => 
    lights += (i > 0 ? ', ' : ' ') + s + (i === arr.length-1 ? '.': '')
);


console.log(lights);


let lights2 = 'Lights:';
for (let i = 0 ; i<dict.length; i++) {
    const word = dict[i];
    lights2 += (i > 0 ? ', ' : ' ')
    + word
    + (dict.length - 1 === i ? '.' : '');
}

console.log(lights2);





























