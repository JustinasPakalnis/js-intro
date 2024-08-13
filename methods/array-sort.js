

const abc = ['a', 'g', 't', 'b', 'e'];
console.log(abc);

abc.sort();
console.log(abc);

const dict = ['asiuklis', 'zirniai', 'asilas', 'asla', 'duona', 'as']

console.log(dict);
dict.sort()
console.log(dict);

const marks = [10, 2, 8, 4, 6];
console.log(marks);
marks.sort((a, b) => a - b)
console.log(marks);

marks.sort((a, b) => b - a)
console.log(marks);

//Objektu nesortina be default nes pakeicia viska i string 
const family = [
    {name: 'Jonas', age: 88, marks: [10, 10, 6]},
    {name: 'Maryte', age: 66, marks: []},
    {name: 'Petras', age: 77, marks: [7, 6, 5, 4]},
    {name: 'Ona', age: 99, marks: [10, 2, 8, 4, 6]},
]

console.log(family);
family.sort((a, b) => a.age - b.age) //pagal amziu galima surikiuoti
console.log(family);
family.sort((a, b) => a.name < b.name ? -1 : a.name ===b.name? 0 : 1) //pagal vardus galima surikiuoti
console.log(family);

family.sort((a, b) => b.marks.length - a.marks.length)
console.log(family);

function average(marks) {
    if (marks.length === 0 ) {
        return 0;
    }
    let sum = 0;
    for (const mark of marks) {
        sum += mark;
    }
    return sum / marks.length
}

family.sort((a, b) => average(b.marks) - average(a.marks))
console.log(family);






















