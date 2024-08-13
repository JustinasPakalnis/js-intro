

//Paskaiciuoja didziausia ir paskaiciuoja maziausia skaiciu is array
const min = function(list){
    let minNum = Infinity;
    for (const count of list) {
        // console.log(count);
        if (count < minNum) {
            minNum = count;
        }
    }
    return minNum;
}

const max = function(list){
    let maxNum = -Infinity;
    for (const count of list) {
        // console.log(count);
        if (count > maxNum) {
            maxNum = count;
        }
    }
    return maxNum;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));

console.log(max([-52, 56, 300, 29, -54, 0, -110]));

console.clear();
console.log('-------------------------------------------------------------------');
//Paskaiciuoja ivesta laika milisekundemis
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

console.clear();
console.log('-------------------------------------------------------------------');
//Array nuosekliai daugina is saves
function p0(x){
    let first = 1;
    for (const result of x) {
        first *=result;
    }
    return first;
}

console.log(p0([4, 1, 1, 1, 4]));

console.clear();
console.log('-------------------------------------------------------------------');
//Reverse string
function solution(str){
    let reverseString = '';
    for (let i = 0; i < str.length; i++) {
        reverseString = str[i] + reverseString;
    }
    return reverseString;
}

console.log(solution('Betmenas'));

console.clear();
console.log('-------------------------------------------------------------------');
//Array reverse, array join
// const array = ['Chuck', 'Liusi', 'Batman', 'Tom', 'Jerry', 'Xena'];
const array = [1, 2, 3, 4 , 5, 6, 7, 8, 9];
console.log(array);
let reverseArray = array.reverse();
console.log(reverseArray);
let joinArray = reverseArray.join('');//su kabliataskiu sujungia kaip string i vientisa/ VIetoj kabliataskiu galima ideti kitoki tarpa
console.log(joinArray);

console.clear();
console.log('-------------------------------------------------------------------');
//Who plays banjo
function areYouPlayingBanjo(name) {
    if (name[0] === 'R' || name[0] === 'r'){
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
    
  }

console.log(areYouPlayingBanjo('Adam'));
console.log(areYouPlayingBanjo('Ringo'));
console.log(areYouPlayingBanjo('Paul'));
console.log(areYouPlayingBanjo('rolf'));

console.clear();
console.log('-------------------------------------------------------------------');

//Return vowels
function getCount(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ) {
            sum += 1; 
        }
    }
    return sum;
  }

  console.log(getCount("abracadabra"));

  console.clear();
  console.log('-------------------------------------------------------------------');

//Binary array to integer number

  const binaryArrayToNumber = arr => {
   
    return parseInt(arr.join(''), 2);
  };



console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 1, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));

console.clear();
console.log('-------------------------------------------------------------------');

//Function even or odd

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(56));
console.log(evenOrOdd(40));
console.log(evenOrOdd(65));

console.clear();
console.log('-------------------------------------------------------------------');

//Function return square every digit of a number and concatenate them.

function squareDigits(num){
    let splitNum = (""+num).split("");
    let newNum = [];
    console.log(splitNum);
    for (const count of splitNum) {
        newNum.push(count*count)       
    }
    return +newNum.join('')
  }

console.log(squareDigits(765 ));

console.clear();
console.log('-------------------------------------------------------------------');

//Counting true 

function countSheeps(sheep) {
    // let sum = 0;
    // for (const count of sheep) {
    //     if (count === true) {
    //         sum += 1;
    //     }
    // }
    // return sum;
    return sheep.filter(Boolean).length;
  }



// console.log(countSheeps([undefined,null,false,true]));
// console.log(countSheeps([undefined,null,false]));
// console.log(countSheeps([false,true]));
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));

console.clear();
console.log('-------------------------------------------------------------------');

//Sum in range between a and b

function getSum(a, b){
   let sum = 0;
   if (a < b) {
   for (a ; a <= b; a++) {
    sum += a;
    }
    } else {
    for (b ; b <= a; b++) {
        sum += b;
    }
    }
return sum;
}
console.log(getSum(1, 2));
console.log(getSum(0, -5));
console.log(getSum(0, 1));
console.log(getSum(2, 2));


console.clear();
console.log('-------------------------------------------------------------------');
//Failed at paperwork

function paperwork(n, m) {
  if (n <= 0 || m <=0) {
    return 0;
  } else {
    return n*m;
  }
}

console.log(paperwork(-5,-5));
console.log(paperwork(5,-5));
console.log(paperwork(-5,5));
console.log(paperwork(5,5));


console.clear();
console.log('-------------------------------------------------------------------');
//Join array of words

function smash (words) {
    return words.join(' ')
 }

console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

console.clear();
console.log('-------------------------------------------------------------------');
//Boolean to string

function booleanToString(b){
    return b.toString();
  }

console.log(booleanToString(false));

console.clear();
console.log('-------------------------------------------------------------------');
//population grow

function nbYear(p0, percent, aug, p) {
   let n = 0;
    while (p0 < p) {
    p0 += Math.floor(p0*(percent/100)+aug);
    n++;
    }
    return n;
}


console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
console.log(nbYear(1000, 2.0, 50, 1214));


console.clear();
console.log('-------------------------------------------------------------------');
//Remowe spaces from string

function noSpace(x){
    return x.replaceAll(' ', '')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));
console.log(noSpace('8aaaaa dddd r     '));

console.clear();
console.log('-------------------------------------------------------------------');
//Odd or even

function oddOrEven(array) {
    let sum = 0;
    for (const result of array) {
        sum += result;
    } if (sum % 2 === 0){
    return 'even'
    } else {
        return 'odd'
    }
 }





console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 1, 2]));
console.log(oddOrEven([1023, 1, 3]));
console.log(oddOrEven([-1023, 1, -2]));

console.clear();
console.log('-------------------------------------------------------------------');
//Is true return yea if false return no

function boolToWord( bool ){
    if (bool === true){
        return 'yes';
    } 
    return 'false';
  }

  console.clear();
  console.log('-------------------------------------------------------------------');
  //Always negative

  function makeNegative(num) {
    return -Math.abs(num);
  }

 console.log(makeNegative(5));

 console.clear();
 console.log('-------------------------------------------------------------------');
 //Min integer in array

function findSmallestInt(arr) {
    console.log(arr);
    return Math.min(...arr)
    
    
  }


console.log(findSmallestInt([78,56,232,12,8]));

console.clear();
console.log('-------------------------------------------------------------------');
//Make a program that filters a list of strings and returns a list with only your friends name in it.

function friend(friends){
    let output =[];
    for (const friend of friends) {
       if (friend.length === 4) {
        output.push(friend);
       }       
    }
    return output;
  }


console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));
console.log(friend(["Love", "Your", "Face", "1"]));

console.clear();
console.log('-------------------------------------------------------------------');
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//MANO SPREDIMAS
// function countPositivesSumNegatives(input) {
//     let newArr1 = [];
//     let newArr2 = [];
//     let sum = 0;
//     let final = [];
//     if (input === null || input.length === 0) {
//         return []; 
//     } else {
//     for (const count of input) {
//         if (count > 0) {
//             newArr1.push(count);
//         } else if (count < 0) {
//             newArr2.push(count)
//         }          
//     }
//     for (const NewArr2Sum of newArr2) {
//         sum += NewArr2Sum;
//     }
//     }
//     final.push(newArr1.length, sum);
//     return final;
//   }


//GLINIMAES
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0; i<input.length; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}



console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
console.log(countPositivesSumNegatives([]));

console.clear();
console.log('-------------------------------------------------------------------');
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


// function filter_list(l) {
//     let newList = [];
//     for (const sort of l) {

//         if (typeof sort === 'number') {
//             newList.push(sort)
//         }        
//     }
//     return newList;
//   }

  function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }



console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));

console.clear();
console.log('-------------------------------------------------------------------');
//Home work. change end of name

console.log('NAMU DARBAS vardo (bendraties forma) konvertavimas');

function converter(vardas) { 
    const result = vardas.endsWith('ė') ? vardas.slice(0, -1) + 'e'
    : vardas.endsWith('as') ? vardas.slice(0, -1) + 'i'
    : vardas.endsWith('us') ? vardas.slice(0, -2) + 'au'
    : vardas
    return 'Sveiki, ' + result + '!';
}

console.log(converter('Jonas'));
console.log(converter('Petras'));
console.log(converter('Ona'));
console.log(converter('Marytė'));
console.log(converter('Darius'));
console.log(converter('Marija'));


console.clear();
console.log('-------------------------------------------------------------------');
//sum in array


function sum (numbers) {
  let total = 0;
  if (numbers.length === 0) {
  return 0 };
  for (const count of numbers) {
    total += count;
    console.log(total);
    
  }
  return total;
}



console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);


console.clear();
console.log('-------------------------------------------------------------------');
//sort numbers

function descendingOrder(n){
  const split = Array.from(n.toString(), Number);
  console.log(split);
  const reversed = split.sort().reverse();
  console.log(reversed);
  const final = reversed.join('');
  return parseInt(final);
}







console.log(descendingOrder(123456789), 987654321);


console.clear();
console.log('-------------------------------------------------------------------');
//initials


function abbrevName(name){
  return name.split(" ").map((n)=>n[0]).join(".").toUpperCase();
  // return initials.toUpperCase()


}

console.log(abbrevName("patrick Feenan"), "P.F");

console.clear();
console.log('-------------------------------------------------------------------');
//Double each value in array

function maps(x){
  let newArr = [];
  for (const count of x) {
    newArr.push(count+count)}
    return newArr;
    
}

console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

console.clear();
console.log('-------------------------------------------------------------------');
//square sum of array

function squareSum(numbers){
  let sum = 0;
  for (const count of numbers) {
    sum += (count*count)}
    return sum;
}































