//Isskleidizia masyva. Pasalina viduj esancius. Tik pirmam lygyje

const marks = [[10, 2], [8, 4], [1, [2, 3, 5, 6]], 6];
console.log(marks);
console.log(marks.flat());
console.log(marks.flat().flat());

const family = [{ name: "Jonas" }, [{ name: "Maryte" }, [{ name: "Petras" }]]];

console.log(family.flat());
