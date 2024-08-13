









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






































