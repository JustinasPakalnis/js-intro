

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
function grow(x){
    let first = 1;
    for (const result of x) {
        first *=result;
    }
    return first;
}

console.log(grow([4, 1, 1, 1, 4]));

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





























