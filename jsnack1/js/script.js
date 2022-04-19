// L'utente inserisce due parole in successione, con due prompt.
const firstWord = prompt('Inserisci una parola')
console.log(firstWord);

const secondWord = prompt('Inserisci un\'altra parola')
console.log(secondWord);

// Il software stampa prima la parola più corta, poi la parola più lunga.
if (firstWord.length < secondWord.length) {
    console.log(firstWord, secondWord);
} else if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
}