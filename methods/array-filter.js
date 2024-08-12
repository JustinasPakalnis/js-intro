






const marks = [-1, 10, 2,3.14, 8, 'Desimt' , true , 4, 12, [10, 2, 8, 4, 6] ,6, NaN, Infinity, {}]

const validMarks = [];

for (const mark of marks) {
    if (!Number.isInteger(mark) // ar tai sveikasis skaicius
        || mark < 1
        || mark > 10
    ) {
        console.log('Atmetam: ', mark);        
        continue; // eik i sekancia iteracija
    }
    validMarks.push(mark)
}


console.log(validMarks);

const validMarks2 = marks
    .filter(mark => Number.isInteger(mark)) //integer sveikasis skaicius
    .filter(mark => mark > 1)
    .filter(mark => mark <= 10)

console.log(validMarks2);


const validMarks3 = marks
    .filter(mark => Number.isInteger(mark) 
    && mark > 0 
    && mark <= 10)

console.log(validMarks3);


console.log(Array.prototype.every);
console.log(Array.prototype.forEach);
console.log(Array.prototype.some);
console.log(Array.prototype.sort);
console.log(Array.prototype.reduce);


















