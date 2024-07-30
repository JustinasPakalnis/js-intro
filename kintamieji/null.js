/* 
Null - is pradziu programuotojas nezino, bet ketina suzinoti
Undefined - paaiskeja kodo vykdymo metu

Abu reiškia apie reikšmės nebuvimą/nežinojimą

*/






const person = {
    name: 'Jonas',
};


console.log(person.name);
console.log(person.age);


let tusciasString = ''; //pradines reiksme tuscias

let address = null;
console.log(address);

address = 'Gatve, Miestas';
console.log(address);

const marks = [10, 2, 8, 4, 6]; 

let sum = null;
console.log(sum);

sum += marks[0];
console.log(sum);

sum += marks[1];
console.log(sum);

//priskiriant tuscia verte geriausia to pacio tipo kaip planuoji dirbti



