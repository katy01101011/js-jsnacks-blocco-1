// Calcola la somma e la media dei primi 10 numeri.
tenNumbers = [];

let somma = 0;

for (let i = 1; i <=10; i++) {
    console.log(i);

    somma += i;
}

console.log(somma);

const media = (somma / 10);
console.log(media);