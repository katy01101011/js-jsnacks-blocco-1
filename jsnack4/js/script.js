// Chiedi un numero di 4 cifre all'utente
const userNumber = prompt('Inserisci un numero a 4 cifre');
console.log(userNumber);

// e calcola la somma di tutte le cifre che compongono il numero.
const numberArray = [];
let stringNumber = '';
let somma = 0;

for (let i = 0; i < 4; i++) {
    stringNumber = parseInt(userNumber.charAt(i));
    console.log(stringNumber);
    
    numberArray.push(stringNumber)

    somma += stringNumber;
}

console.log(numberArray);
console.log(somma);