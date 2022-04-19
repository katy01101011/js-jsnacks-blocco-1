// Crea un array vuoto.
const oddNumbers = [];

// Chiedi per 6 volte all'utente di inserire un numero,
let userNumber = '';

for (let i = 0; i < 6; i++) {
    userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);

    if (userNumber % 2 === 1) {
        oddNumbers.push(userNumber)
    }
}

// se è dispari inseriscilo nell'array.
console.log(oddNumbers);