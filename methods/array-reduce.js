//Reduce is viso masyvo suveda viena atsakyma
/*
[1,2 ,3] > 123
[true, false] > true

*/

const marks = [10, 2, 8, 4, 6];

const marksSum = marks.reduce((a, b) => a + b, 0);
console.log(marksSum);

// console.log([1, 2, 3, 4, 5]);
// console.log([1, 2, 3, 4, 5].reduce((t, n) => t + n));
// console.log([1, 2, 3, 4, 5].reduce((t, n) => t + n, 0));
// console.log([1, 2, 3, 4, 5].reduce((t, n) => t - n, 0));

// console.log([1, 2, 3, 4, 5].reduce((t, n) => t - n));
// console.log([1, 2, 3, 4, 5].reduce((t, n) => t * n, 0));
// console.log([1, 2, 3, 4, 5].reduce((t, n) => t * n));

console.log([1, 2, 3, 4, 5].reduce((t, n) => (t > n ? t : n), 0));
console.log([-1, -2, -3, -4, -5].reduce((t, n) => (t > n ? t : n), -Infinity));

// console.log([1, 2, 3].map((n, index, array) => array[0]));
