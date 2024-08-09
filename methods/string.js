/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String




 */

//Naudojant at() su minusu galima paimti is galo. nekreipia demesio kas uz kablelio

const str1 = 'Pomidoras';
console.log(str1.at(0), str1[0]);
console.log(str1.at(1), str1[1]);
console.log(str1.at(2), str1[2]);
console.log(str1.at(3), str1[3]);
console.log(str1.at(3.5), str1[3.5]);
console.log(str1.at(0), str1[0]);
console.log(str1.at(-1), str1[-1]);
console.log(str1.at(-2), str1[-2]);
console.log(str1.at(-3), str1[-3]);
console.log(str1.at(-3.5), str1[-3.5]);


console.log(String.prototype.charAt);
//charAt su neigiamais nedraugauja

console.log(str1.charAt(0), str1[0]);
console.log(str1.charAt(-1), str1[-1]);
console.log(str1.charAt(-2), str1[-2]);
console.log(str1.charAt(-3), str1[-3]);
console.log(str1.charAt(-3.5), str1[-3.5]);

const str3 = 'Svogunas';
console.log(str3.charCodeAt(0), str3[0]);
console.log(str3.charCodeAt(1), str3[1]);
console.log(str3.charCodeAt(2), str3[2]);
console.log(str3.charCodeAt(3), str3[3]);
console.log(str3.charCodeAt(4), str3[4]);
console.log(str3.charCodeAt(5), str3[5]);
console.log(str3.charCodeAt(6), str3[6]);
console.log(str3.charCodeAt(7), str3[7]);
console.log(str3.charCodeAt(8), str3[8]);


for (let i = 0; i < 110; i++) {
    console.log(i, String.fromCharCode(i));
    
}

const array = ['Chuck', 'Liusi', 'Batman', 'Tom', 'Jerry', 'Xena'];
console.log(String.prototype.concat);
console.log('Labas'.concat('rytas'));

console.log('Labas'.concat(...array));


console.clear();
console.log(String.prototype.startsWith);
console.log('Labas'.startsWith('A'));
console.log('Labas'.startsWith('a'));
console.log('Labas'.startsWith('b'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('l'));


console.log(String.prototype.endsWith);
console.log('Labas'.endsWith('A'));
console.log('Labas'.endsWith('a'));
console.log('Labas'.endsWith('b'));
console.log('Labas'.endsWith('L'));
console.log('Labas'.endsWith('as'));


function isQuestion(str) {
    return str.endsWith('?');
}

console.log(isQuestion('Labas'));
console.log(isQuestion('ka tu'));
console.log(isQuestion('Ka tu?'));


console.log(String.prototype.includes);
console.log('Labas'.includes('A'));
console.log('Labas'.includes('a'));
console.log('Labas'.includes('b'));
console.log('Labas'.includes('L'));
console.log('Labas'.includes('as'));


console.log(String.prototype.indexOf); // jei neranda tokio duoda -1
console.log('Labas'.indexOf('A'));
console.log('Labas'.indexOf('a', 3));
console.log('Labas'.indexOf('b'));
console.log('Labas'.indexOf('L'));
console.log('Labas'.indexOf('as'));

console.log(String.prototype.repeat);
console.log('Labas'.repeat('1'));
console.log('Labas'.repeat('2'));
console.log('Labas'.repeat('3'));
console.log('Labas'.repeat('5'));
console.log('Labas'.repeat('6'));




console.clear();
console.log(String.prototype.replace);

console.log('Aaaaaaaa'.replace('aa', '---'));
console.log('Vasara'.replace('a', '---'));
console.log('Jonas'.replace('s', 'i'));

console.log('Vasara'.replaceAll('a', '#'));


console.log(String.prototype.slice);

console.log('Pomidoras'.slice(2));
console.log('Pomidoras'.slice(-2));
console.log('Pomidoras'.slice(-1));
console.log('Pomidoras'.slice(0, 4));
console.log('Pomidoras'.slice(1, 3));
console.log('Pomidoras'.slice(1, 7));

console.log(String.prototype.split);

console.log('Labas'.split('a'));
console.log('Labas'.split('b'));
console.log('Labas'.split('s'));
console.log('Labas'.split('L'));
console.log('Bananas'.split('a'));
console.log('Bananas'.split(''));
console.log('Bananas'.split('')[3]);


const str = 'Labas rytas Lietuva';
const dict = str.split(' '); //dazniausia naudojamas


console.log(dict);
console.log('Zodziu kiekis ' + dict.length);

console.log(String.prototype.toLowerCase);

console.log('Labas'.toLowerCase());
console.log('Labas'.toLowerCase());
console.log('Labas'.toLowerCase());
console.log('Labas'.toLowerCase());
console.log('Labas'.toLowerCase());
console.log('Labas'.toLowerCase());
console.log('Labas'.toLowerCase());

console.log(String.prototype.toLocaleUpperCase);

console.log('Labas'.toUpperCase());
console.log('Labas'.toUpperCase());
console.log('Labas'.toUpperCase());
console.log('Labas'.toUpperCase());
console.log('Labas'.toUpperCase());
console.log('Labas'.toUpperCase());
console.log('Labas'.toUpperCase());

console.log('Labas'.toLocaleUpperCase());
console.log('Labas'.toLocaleLowerCase());


function isUpperCaseWord(str) {
    if (str[0] === str[0].toUpperCase()) {
        return true;
    }

    return false;
}
console.log(isUpperCaseWord('Krapas'));
console.log(isUpperCaseWord('krapas'));

console.log(String.prototype.trim);

console.log(`"${'Labas'.trim()}"`);// trimina tapus pradzioj ir gale
console.log('           Labas'.trimEnd());
console.log('Labas          '.trimStart());
console.log('Labas'.trim());
console.log('Labas'.trim());
console.log('Labas'.trim());
console.log('Labas'.trim());




