





















function suma(a, b) {
    //1 Atejusios informacijos (params) validavimas
    //2 logika
    if (typeof a !== 'number' ) {
        return 'Error: pirma reiksme turi buti skaicius' ;
    }
    if (typeof a === Infinity || a === -Infinity ) {
        return 'Error: pirma reiksme turi buti normalus skaicius';
    }
    if (isNaN(a)) {
        return 'Error: pirma reiksme turi buti normalus skaicius';
    }
    if (a % 1 !== 0) {
        return 'Error: pirma reiksme turi buti sveikasis skaicius';
    }


    if (typeof b !== 'number' ) {
        return 'Error: antra reiksme turi buti skaicius';
    }
    if (typeof b === Infinity || b === -Infinity ) {
        return 'Error: antra reiksme turi buti skaicius';
    }
    if (isNaN(b)) {
        return 'Error: antra reiksme turi buti skaicius';
    }
    if (b % 1 !== 0) {
        return 'Error: antra reiksme turi buti sveikasis skaicius';
    }

    if (a > b) {
        return 'Error: Pirmasis skaicius negali buti didesnis uz antraji';
    }


    let suma = 0;
    for (a; a <= b; a++){
        suma += a;
        }
    //3. Logikoje gauto rezultato validavimas
    //4. Rezultato grazinimas
    return suma;
}

console.log(suma(0, 4));
console.log(suma(-50, 50));
console.log(suma(0, 100));
console.log(suma(-70, 30));
console.log(suma(574, 815));
console.log(suma(0, 0));































