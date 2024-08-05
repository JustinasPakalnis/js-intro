console.log(typeof 123);
console.log(typeof 'Labas');
console.log(typeof true);
console.log(typeof []);
console.log(typeof {});

console.log(Array.isArray(['Labas', 'rytas']));
console.log( Array.isArray([1, 2, 3]));
console.log(Array.isArray([]));

console.log(Array.isArray(true));
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray('asdasd'));

console.log('---------------------------------');
console.log(null === null);
function arTikrasObjektas(item){
    if (typeof item !== 'object'
        || item === null
        || Array.isArray(item)
    ){
        return false;
    }
    return true;
}
console.log (arTikrasObjektas(1));
console.log (arTikrasObjektas('s'));
console.log (arTikrasObjektas(true));
console.log (arTikrasObjektas(undefined));
console.log (arTikrasObjektas(null));
console.log (arTikrasObjektas(arTikrasObjektas));
console.log (arTikrasObjektas([]));
console.log (arTikrasObjektas({}));

