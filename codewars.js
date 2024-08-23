//Paskaiciuoja didziausia ir paskaiciuoja maziausia skaiciu is array
const min = function (list) {
  let minNum = Infinity;
  for (const count of list) {
    // console.log(count);
    if (count < minNum) {
      minNum = count;
    }
  }
  return minNum;
};

const max = function (list) {
  let maxNum = -Infinity;
  for (const count of list) {
    // console.log(count);
    if (count > maxNum) {
      maxNum = count;
    }
  }
  return maxNum;
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));

console.log(max([-52, 56, 300, 29, -54, 0, -110]));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Paskaiciuoja ivesta laika milisekundemis
function past(h, m, s) {
  let h1 = 0;
  let m1 = 0;
  let s1 = 0;
  if (h >= 0 && h <= 59) {
    h1 = h * 3600000;
  }
  if (m >= 0 && m <= 59) {
    m1 = m * 60000;
  }
  if (s >= 0 && s <= 59) {
    s1 = s * 1000;
  }
  return h1 + m1 + s1;
}

console.log(past(1, 1, 1));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Array nuosekliai daugina is saves
function p0(x) {
  let first = 1;
  for (const result of x) {
    first *= result;
  }
  return first;
}

console.log(p0([4, 1, 1, 1, 4]));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Reverse string
function solution(str) {
  let reverseString = "";
  for (let i = 0; i < str.length; i++) {
    reverseString = str[i] + reverseString;
  }
  return reverseString;
}

console.log(solution("Betmenas"));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Array reverse, array join
// const array = ['Chuck', 'Liusi', 'Batman', 'Tom', 'Jerry', 'Xena'];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);
let reverseArray = array.reverse();
console.log(reverseArray);
let joinArray = reverseArray.join(""); //su kabliataskiu sujungia kaip string i vientisa/ VIetoj kabliataskiu galima ideti kitoki tarpa
console.log(joinArray);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Who plays banjo
function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("rolf"));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);

//Return vowels
function getCount(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      sum += 1;
    }
  }
  return sum;
}

console.log(getCount("abracadabra"));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);

//Binary array to integer number

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 1, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);

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
console.log(
  "-------------------------------------------------------------------"
);

//Function return square every digit of a number and concatenate them.

function squareDigits(num) {
  let splitNum = ("" + num).split("");
  let newNum = [];
  console.log(splitNum);
  for (const count of splitNum) {
    newNum.push(count * count);
  }
  return +newNum.join("");
}

console.log(squareDigits(765));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);

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
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);

//Sum in range between a and b

function getSum(a, b) {
  let sum = 0;
  if (a < b) {
    for (a; a <= b; a++) {
      sum += a;
    }
  } else {
    for (b; b <= a; b++) {
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
console.log(
  "-------------------------------------------------------------------"
);
//Failed at paperwork

function paperwork(n, m) {
  if (n <= 0 || m <= 0) {
    return 0;
  } else {
    return n * m;
  }
}

console.log(paperwork(-5, -5));
console.log(paperwork(5, -5));
console.log(paperwork(-5, 5));
console.log(paperwork(5, 5));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Join array of words

function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Boolean to string

function booleanToString(b) {
  return b.toString();
}

console.log(booleanToString(false));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//population grow

function nbYear(p0, percent, aug, p) {
  let n = 0;
  while (p0 < p) {
    p0 += Math.floor(p0 * (percent / 100) + aug);
    n++;
  }
  return n;
}

console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
console.log(nbYear(1000, 2.0, 50, 1214));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Remowe spaces from string

function noSpace(x) {
  return x.replaceAll(" ", "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace("8aaaaa dddd r     "));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Odd or even

function oddOrEven(array) {
  let sum = 0;
  for (const result of array) {
    sum += result;
  }
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 1, 2]));
console.log(oddOrEven([1023, 1, 3]));
console.log(oddOrEven([-1023, 1, -2]));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Is true return yea if false return no

function boolToWord(bool) {
  if (bool === true) {
    return "yes";
  }
  return "false";
}

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Always negative

function makeNegative(num) {
  return -Math.abs(num);
}

console.log(makeNegative(5));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Min integer in array

function findSmallestInt(arr) {
  console.log(arr);
  return Math.min(...arr);
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Make a program that filters a list of strings and returns a list with only your friends name in it.

function friend(friends) {
  let output = [];
  for (const friend of friends) {
    if (friend.length === 4) {
      output.push(friend);
    }
  }
  return output;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
);
console.log(friend(["Love", "Your", "Face", "1"]));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
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
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0; i < input.length; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
console.log(countPositivesSumNegatives([]));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
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
  return l.filter(function (v) {
    return typeof v == "number";
  });
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Home work. change end of name

console.log("NAMU DARBAS vardo (bendraties forma) konvertavimas");

function converter(vardas) {
  const result = vardas.endsWith("ė")
    ? vardas.slice(0, -1) + "e"
    : vardas.endsWith("as")
    ? vardas.slice(0, -1) + "i"
    : vardas.endsWith("us")
    ? vardas.slice(0, -2) + "au"
    : vardas;
  return "Sveiki, " + result + "!";
}

console.log(converter("Jonas"));
console.log(converter("Petras"));
console.log(converter("Ona"));
console.log(converter("Marytė"));
console.log(converter("Darius"));
console.log(converter("Marija"));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//sum in array

function sum(numbers) {
  let total = 0;
  if (numbers.length === 0) {
    return 0;
  }
  for (const count of numbers) {
    total += count;
    console.log(total);
  }
  return total;
}

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//sort numbers

function descendingOrder(n) {
  const split = Array.from(n.toString(), Number);
  console.log(split);
  const reversed = split.sort().reverse();
  console.log(reversed);
  const final = reversed.join("");
  return parseInt(final);
}

console.log(descendingOrder(123456789), 987654321);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//initials

function abbrevName(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join(".")
    .toUpperCase();
  // return initials.toUpperCase()
}

console.log(abbrevName("patrick Feenan"), "P.F");

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Double each value in array

function maps(x) {
  let newArr = [];
  for (const count of x) {
    newArr.push(count + count);
  }
  return newArr;
}

console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//square sum of array

function squareSum(numbers) {
  let sum = 0;
  for (const count of numbers) {
    sum += count * count;
  }
  return sum;
}

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//REDUCE training

// const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, initialValue,
// );

// console.log(sumWithInitial);

const array2 = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array2.reduce(reducer);

const result1 = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(result1 / array2.length);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Exes and Ohs

// function XO(str) {
//   let countX = 0;
//   let countO = 0;
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] === 'O' || str[i] === 'o') {
//       countO++;

//     } else if (str[i] === 'X' || str[i] === 'x') {
//       countX++;

//     }
//   }
//   return countO === countX;
// }

function XO(str) {
  console.log(str.toLowerCase().split());

  return (
    (str = str.toLowerCase()), str.split("o").length == str.split("x").length
  );
}

console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("xo"), true);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Regex validate PIN code

function validatePIN(pin) {
  let regex = /^[-+]?[0-9]+\.[0-9]+$/;
  let isValidated = regex.test(pin);

  if (isValidated === "false") {
    return false;
  }
  if (
    (typeof pin === "string" && !isNaN(pin) && pin.length === 4) ||
    pin.length === 6
  ) {
    return true;
  }
  return false;
}

// function validatePIN (pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }

console.log(validatePIN("123456"), true);
console.log(validatePIN("a256"), false);
console.log(validatePIN("1256"), true);
console.log(validatePIN(1232), false);
console.log(validatePIN("-1.234"), false);

// console.log(!isNaN('-1.234'));

// console.log(Number.isInteger(parseFloat('-1.234')));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//People on the bus

const number = function (busStops) {
  let numPeople = 0;
  for (const people of busStops) {
    console.log(people);
    numPeople += people[0] - people[1];
  }
  return numPeople;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ]),
  5
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ]),
  17
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ]),
  21
);
console.log(number([[0, 0]]), 0);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Get the Middle Character

function getMiddle(s) {
  let index = s.length / 2;
  let index2 = (s.length - 1) / 2;
  // console.log(index2);

  if (s.length % 2 === 0) {
    return s[index - 1] + s[index];
  } else if (s.length % 2 === 1) {
    return s[index2];
  }
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Replace With Alphabet Position

function alphabetPosition(text) {
  let newText = text.split("");

  let textFilter = newText.filter((char) => /[a-zA-Z]/.test(char));

  let newArr = [];
  for (const log of textFilter) {
    if (log === "a" || log === "A") {
      newArr.push("1");
    } else if (log === "b" || log === "B") {
      newArr.push("2");
    } else if (log === "c" || log === "C") {
      newArr.push("3");
    } else if (log === "d" || log === "D") {
      newArr.push("4");
    } else if (log === "e" || log === "E") {
      newArr.push("5");
    } else if (log === "f" || log === "F") {
      newArr.push("6");
    } else if (log === "g" || log === "G") {
      newArr.push("7");
    } else if (log === "h" || log === "H") {
      newArr.push("8");
    } else if (log === "i" || log === "I") {
      newArr.push("9");
    } else if (log === "j" || log === "J") {
      newArr.push("10");
    } else if (log === "k" || log === "K") {
      newArr.push("11");
    } else if (log === "l" || log === "L") {
      newArr.push("12");
    } else if (log === "m" || log === "M") {
      newArr.push("13");
    } else if (log === "n" || log === "N") {
      newArr.push("14");
    } else if (log === "o" || log === "O") {
      newArr.push("15");
    } else if (log === "p" || log === "P") {
      newArr.push("16");
    } else if (log === "q" || log === "Q") {
      newArr.push("17");
    } else if (log === "r" || log === "R") {
      newArr.push("18");
    } else if (log === "s" || log === "S") {
      newArr.push("19");
    } else if (log === "t" || log === "T") {
      newArr.push("20");
    } else if (log === "u" || log === "U") {
      newArr.push("21");
    } else if (log === "v" || log === "V") {
      newArr.push("22");
    } else if (log === "w" || log === "W") {
      newArr.push("23");
    } else if (log === "x" || log === "X") {
      newArr.push("24");
    } else if (log === "y" || log === "Y") {
      newArr.push("25");
    } else if (log === "z" || log === "Z") {
      newArr.push("26");
    }
  }
  return newArr.join(" ");
}

console.log(
  alphabetPosition("The sunset sets at twelve o' clock."),
  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
);
console.log(
  alphabetPosition("The narwhal bacons at midnight."),
  "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
);

console.log("Z".charCodeAt(0));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//You only need one - Beginner

function check(a, x) {
  if (a.includes(x)) {
    return true;
  } else {
    return false;
  }
}

console.log(check([101, 45, 75, 105, 99, 107], 107));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Array.diff

function arrayDiff(a, b) {
  let res = a.filter((item) => !b.includes(item));
  return res;
}

console.log(arrayDiff([1, 2], [1])); //[2], "a was [1,2], b was [1]"
console.log(arrayDiff([1, 2, 2], [1])); //[2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1, 2, 3], [1, 2])); //[3], "a was [1,2,3], b was [1,2]")

// const marks = [-1, 10, 2,3.14, 8, 'Desimt' , true , 4, 12, [10, 2, 8, 4, 6] ,6, NaN, Infinity, {}]

// const validMarks = [];

// for (const mark of marks) {
//     if (!Number.isInteger(mark) // ar tai sveikasis skaicius
//         || mark < 1
//         || mark > 10
//     ) {
//         console.log('Atmetam: ', mark);
//         continue; // eik i sekancia iteracija
//     }
//     validMarks.push(mark)
// }

// console.log(validMarks);

// const validMarks2 = marks

//     .filter(mark => mark !== 10)

// console.log(validMarks2);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Detect Pangram

function isPangram(string) {
  let newText = string.split("");
  let textFilter = newText.filter((char) => /[a-zA-Z]/.test(char));
  let newArr = [...new Set(textFilter)];
  if (newArr.length >= 26) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Detect DECIMAL STRING

console.log("1.234");

function arTuSveikas() {
  return true;
}

console.log(arTuSveikas("1.234"));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//String ends with?

function solution1(str, ending) {
  if (ending === "") {
    return true;
  }
  return str.slice(-ending.length) === ending ? true : false;
}

console.log(solution1("abcde", "cde"));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Counting Duplicates

function duplicateCount(text) {
  const arr = text.split("");
  console.log(arr);
  const arrLower = arr.map((v) => v.toLowerCase());
  console.log(arrLower);

  const filterArr = arrLower.filter(
    (a, i, aa) => aa.indexOf(a) === i && aa.lastIndexOf(a) !== i
  );
  console.log(filterArr);
  return filterArr.length;
}

console.log(duplicateCount("IndivisibilitieS"));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Find the odd int

function findOdd(A) {
  const counts = {};
  A.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  for (const key in counts) {
    if (counts[key] % 2 === 1) {
      return parseInt(key);
    }
  }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Categorize New Member

function openOrSenior(data) {
  let newArr = [];
  for (const log of data) {
    console.log(log);
    if (log[0] >= 55 && log[1] > 7) {
      newArr.push("Senior");
    } else {
      newArr.push("Open");
    }
  }
  return newArr;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Simple Pig Latin

function pigIt(str) {
  let newArr = str.split(" ");
  let letters = /^[A-Za-z]+$/;

  let result = [];
  for (const roll of newArr) {
    if (roll.match(letters)) {
      result.push(roll.slice(1, roll.length) + roll[0] + "ay");
    } else {
      result.push(roll.slice(1, roll.length) + roll[0]);
    }
  }
  return result.join(" ");
}

console.log(pigIt("Pig latin is cool")); //'igPay atinlay siay oolcay'
console.log(pigIt("This is my string")); //'hisTay siay ymay tringsay'
console.log(pigIt("Hello o world !")); // elloHay orldway !

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Human Readable Time

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  // console.log(hours);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  // console.log(minutes);
  let second = seconds - hours * 3600 - minutes * 60;
  // console.log((seconds / 60 - hours * 60));

  return (
    hours.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    ":" +
    minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    ":" +
    second.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  );
}

console.log(humanReadable(0, "00:00:00"));
console.log(humanReadable(59, "00:00:59"));
console.log(humanReadable(60, "00:01:00"));
console.log(humanReadable(90, "00:01:30"));
console.log(humanReadable(3599, "00:59:59"));
console.log(humanReadable(3600, "01:00:00"));
console.log(humanReadable(45296, "12:34:56"));
console.log(humanReadable(86399, "23:59:59"));
console.log(humanReadable(86400, "24:00:00"));
console.log(humanReadable(359999, "99:59:59"));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Human Readable Time

// function alphanumeric(string){
//   if (string.length === 0 ) {
//     return false;
//   }
//     let arrFilter = string.toLowerCase().split('').filter(char => !/[a-zA-Z]/.test(char));

//     let array = arrFilter.filter(function (a) {
//       return !/^\d+$/.test(a);
//   });
//   if (array.length === 0) {
//     return true;
//   }
//   return false;
// }

function alphanumeric(string) {
  return /^[0-9a-z]+$/i.test(string);
}

console.log(alphanumeric("Mazinkaiser"), true);
console.log(alphanumeric("hello world_"), false);
console.log(alphanumeric("PassW0rd"), true);
console.log(alphanumeric(""), false);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Extract the domain name from a URL

// function domainName(url){
//   if (url.startsWith('http://www.')) {
//     return url.slice('http://www.'.length).split('.')[0]
//   }
//   if (url.startsWith('https://www.')) {
//     return url.slice('https://www.'.length).split('.')[0]
//   }
//   if (url.startsWith('http://')) {
//     return url.slice('http://'.length).split('.')[0]
//   }
//   if (url.startsWith('https://')) {
//     return url.slice('https://'.length).split('.')[0]
//   }
//   if (url.startsWith('www.')) {
//     return url.slice('www.'.length).split('.')[0]
//   }
//   return url.split('.')[0]
// }

function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://www.google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Beeramid

var beeramid = function (bonus, price) {
  let totalCans = Math.trunc(bonus / price);

  let level = 0;
  let count = 1;
  if (totalCans < 1) {
    return 0;
  }
  if (totalCans < 5) {
    return 1;
  }
  for (let i = 0; i < totalCans; ) {
    level++;
    i += count * count;
    count++;

    if (i > totalCans) {
      level--;
    }
  }
  return level;
};

console.log(beeramid(454, 5), 5);
console.log(beeramid(9, 2), 1);
console.log(beeramid(21, 1.5), 3);
console.log(beeramid(455, 5), 6);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Sum Strings as Numbers

// function sumStrings(a,b) {
//   return a >= 9007199254740992 - 1 || b >= 9007199254740992 - 1 ? bigInt(a,b) : (a*1 + b*1) + '';
// }

// function bigInt(a,b){
//   var c = '';
//   var d = 0;

//   var zero = new Array((Math.abs(a.length - b.length))+1).join('0')

//   a.length >= b.length ? b = zero + b : a = zero + a;

//   for(var i = b.length-1; i >= 0; i--){
//    var sum = (a[i]*1 + b[i]*1) + d;
//    if(sum >= 10){
//     sum = sum - 10;
//     d = 1;
//    }else{
//     d = 0;
//    }
//    c = sum + c;
//   }

//   return d > 0 ? d + c : c;

function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(sumStrings("123", "456"));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Perimeter of squares in a rectangle

function perimeter(n) {
  if (n === 0) {
    return 4;
  }
  if (n === 1) {
    return 8;
  }
  let count = [1, 1];
  let index = 0;
  for (let i = 2; i <= n; ) {
    count.push(count[index] + count[index + 1]);
    i++;
    index++;
  }
  return (
    count.reduce((accumulator, currentValue) => accumulator + currentValue) * 4
  );
}

console.log(perimeter(0), 4);
console.log(perimeter(5), 80);
console.log(perimeter(7), 216);
console.log(perimeter(20), 114624);
console.log(perimeter(30), 14098308);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Calculating with Functions

const zero = (a) => (a ? a(0) : 0);
const one = (a) => (a ? a(1) : 1);
const two = (a) => (a ? a(2) : 2);
const three = (a) => (a ? a(3) : 3);
const four = (a) => (a ? a(4) : 4);
const five = (a) => (a ? a(5) : 5);
const six = (a) => (a ? a(6) : 6);
const seven = (a) => (a ? a(7) : 7);
const eight = (a) => (a ? a(8) : 8);
const nine = (a) => (a ? a(9) : 9);

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => b - a;
const dividedBy = (a) => (b) => Math.floor(b / a);
const times = (a) => (b) => a * b;

console.log(seven(times(five()))); //35
console.log(eight(dividedBy(three())), 13);
console.log(zero(dividedBy(two())), 5);

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Find the missing term in an Arithmetic Progression

// var findMissing = function (list) {
//   let stepSize = (list[list.length-1] - list[0])/list.length;
//   console.log('>>>', list);

//   let newList = [];
//   if (list[list.length-1] > list[0]) {
//   for (let i = list[0]; i <= list[list.length-1]; ) {
//     if (!list.includes(i)) {
//        newList.push(i);
//     }
//     i+=stepSize;
//     }
//   } else if (list[list.length-1] < list[0]) {
//     for (let i = list[0]; i >= list[list.length-1]; ) {
//       if (!list.includes(i)) {
//         newList.push(i);
//       }
//       i+=stepSize;
//       }
//   }
// return parseInt(newList);
// }

var findMissing = function (list) {
  let listLen = list.length;
  let step = (list[listLen - 1] - list[0]) / listLen;
  console.log(step);

  for (let i = 0; i < listLen; i++) {
    console.log(">>", list[i]);
    console.log(">>", list[i + 1]);
    let next = list[i] + step;

    if (next !== list[i + 1]) {
      return next;
    }
  }
};

console.log(findMissing([-8, -16, -20]));

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//ARRAY REDUCE TRAINING

let arr = [10, 2, 16, 8, 4];
let objArr = [{ x: 1 }, { x: 5 }, { x: 3 }, { x: 14 }];

console.log(arr.reduce((a, b) => a + b)); //sum
console.log(arr.reduce((a, b) => a + b) / arr.length); //average
console.log(arr.reduce((a, b) => a + b * 2, 0)); //every number multiplied by 2
console.log(arr.reduce((a, b) => (a > b ? a : b))); //max
console.log(arr.reduce((a, b) => (a < b ? a : b))); //min

console.log(objArr.reduce((a, b) => a + b.x, 0)); //sum
console.log(objArr.reduce((a, b) => a + b.x, 0) / arr.length); //average
console.log(objArr.reduce((a, b) => a + b.x * 2, 0)); //every number multiplied by 2
console.log(objArr.reduce((a, b) => (a > b.x ? a : b.x))); //max
console.log(objArr.reduce((a, b) => (a < b.x ? a : b.x))); //min

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
//Count IP Addresses

function ipsBetween(start, end) {
  let newStart = start.split(".");
  console.log(newStart);
  let newEnd = end.split(".");
  console.log(newEnd);
  let calcArr = [];
  for (let i = 0; i < 4; i++) {
    calcArr.push(newEnd[i] - newStart[i]);
  }
  return (
    calcArr[0] * 16777216 + calcArr[1] * 65536 + calcArr[2] * 256 + calcArr[3]
  );
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1", 1));
console.log(ipsBetween("10.0.0.0", "10.0.0.50", 50));
console.log(ipsBetween("20.0.0.10", "20.0.1.0", 246));
console.log(ipsBetween("160.0.0.0", "160.0.1.0", 256));
console.log(ipsBetween("170.0.0.0", "170.1.0.0", 65536));

console.clear();
console.log("-----------------------------------------------------");
//What century it is

function whatCentury(year) {
  let century = Math.ceil(year / 100).toString();
  console.log(century);

  return century > 10 && century <= 20
    ? century + "th"
    : century.endsWith("1")
    ? century + "st"
    : century.endsWith("2")
    ? century + "nd"
    : century.endsWith("3")
    ? century + "rd"
    : century + "th";
}

console.log(whatCentury("2000"));
console.log(whatCentury("1999"));
console.log(whatCentury("2011"));
console.log(whatCentury("1054"));
console.log(whatCentury("02"));

console.clear();
console.log("-----------------------------------------------------");

// const doubleNum = (num) => {
//   return console.log(num * 2);
// };
// doubleNum(2);

// const greet = (name) => {
//   return console.log(`Sveikas ${name}!`);
// };
// greet("Mantas");

// const isEven = (num) => {
//   console.log(num % 2 === 1 ? "False" : "True");
// };
// isEven(4);

console.log("anas"[0].toUpperCase());
console.log("anas"[0]);
const str = "Namas";
console.log(str[0] === str[0].toUpperCase());

console.clear();
console.log("-----------------------------------------------------");

/*
1. Skaičiaus lygumas
Parašyk funkciją, kuri priima skaičių ir grąžina "Even", jei skaičius yra 
lyginis, ir "Odd", jei skaičius yra nelyginis.
 */

function lyginis(skaicius) {
  // if (skaicius % 2 === 0) {
  //   return "lyginis";
  // } else {
  //   return "nelyginis";
  // }
  return skaicius % 2 === 0 ? "lyginis" : "nelyginis";
}
console.log(lyginis(40));
console.log("-----------------------------------------------------");
/*
2. Pasukant tekstą atvirkščiai
Parašyk funkciją, kuri priima eilutę (tekstą) ir grąžina tą eilutę atvirkštine tvarka.
 */
function reverse(tekstas) {
  return tekstas.split("").reverse().join("");
}
console.log(reverse("Laba diena BIT"));
// .reverse().join("");
console.log("-----------------------------------------------------");
/*
3. Skaičių kvadratai
Parašyk funkciją, kuri priima masyvą skaičių ir grąžina naują masyvą, kurio kiekvienas elementas yra
atitinkamo pradinio masyvo elemento kvadratas.
*/

function kvadratu(array) {
  return array.map((a) => a * a);
}
console.log(kvadratu([10, 2, 6, 4, 8, 8, 10, 16]));
console.log("-----------------------------------------------------");
/*
4. Skaičių suma
Parašyk funkciją, kuri priima du skaičius ir grąžina jų sumą.
*/
function suma(a, b) {
  return a + b;
}
console.log(suma(2, 3));

console.log("-----------------------------------------------------");
/*
5. Kelių skaičių suma
Parašyk funkciją, kuri priima masyvą skaičių ir grąžina jų sumą.
*/

function reduce(skaiciai) {
  return skaiciai.reduce((a, b) => a + b);
}
console.log(reduce([10, 2, 6, 4, 8, 8, 10, 16]));
console.log("-----------------------------------------------------");
/*
6. Teksto simbolių skaičiavimas
Parašyk funkciją, kuri priima eilutę ir grąžina objektą, kuriame yra skirtingų simbolių skaičius.
*/
// function diff(text) {
//   const array = text.split("");
//   console.log(array);
// let index = 0;
//   for (const count of array) {
//     for ()
//   }
// }
function diff(text) {
  const characterCount = {};
  for (let char of text) {
    if (characterCount[char]) {
      characterCount[char]++;
    } else {
      characterCount[char] = 1;
    }
  }
  return characterCount;
}
console.log(diff("Laba diena su vistiena"));

console.log("-----------------------------------------------------");
/*
7. Didžiausias skaičius
Parašyk funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių iš masyvo.
*/

function didziausias(skaiciai) {
  return skaiciai.reduce((a, b) => (a > b ? a : b));
}
console.log(didziausias([10, 2, 6, 4, 8, 8, 10, 16]));
console.log("-----------------------------------------------------");
/*
8. Mažiausias skaičius
Parašyk funkciją, kuri priima masyvą skaičių ir grąžina mažiausią skaičių iš masyvo.
*/
function maziausias(skaiciai) {
  return skaiciai.reduce((a, b) => (a < b ? a : b));
}
console.log(maziausias([10, 2, 6, 4, 8, 8, 10, 16]));
console.log("-----------------------------------------------------");
/*
9. Daugkartiniai žodžiai
Parašyk funkciją, kuri priima žodį ir skaičių, ir grąžina tą žodį, kartotą tiek kartų, kiek nurodytas skaičius.
*/
function pakartotasZodis(zodis, skaicius) {
  return zodis.repeat(skaicius);
}
console.log(pakartotasZodis("Mokomes ", 5));
console.log("-----------------------------------------------------");
/*
10. Fibonacci seka
Parašyk funkciją, kuri grąžina pirmuosius n Fibonacci sekos skaičius.
*/
function fibonacciGenerator(n) {
  let output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
console.log(fibonacciGenerator(10));
console.log("-----------------------------------------------------");
/*
11. Masyvo elementų skaičiavimas
Parašyk funkciją, kuri priima masyvą ir grąžina jo ilgį (elementų skaičių).
*/
function arrayLength(array) {
  return array.length;
}
console.log(arrayLength([10, 2, 6, 4, "Pavadinimas", "zodis"]));
console.log("-----------------------------------------------------");
/*
12. Filtravimas pagal sąlygas
Parašyk funkciją, kuri priima masyvą skaičių ir grąžina naują masyvą, kuriame yra tik teigiami skaičiai.
*/
function teigiami(skaiciai) {
  return skaiciai.filter((skc) => skc > 0);
}
console.log(teigiami([10, -2, 6, -4, 8, 8, -10, 16]));
console.log("-----------------------------------------------------");
/*
13. Rask eilutės ilgį
Parašyk funkciją, kuri priima eilutę ir grąžina tos eilutės ilgį.
*/
function ilgis(eilute) {
  return eilute.length;
}
console.log(ilgis("labadiena su vistiena"));
