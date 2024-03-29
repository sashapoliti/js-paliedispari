/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userWord = prompt('Inserisci una parola');

palindrome(userWord);
let choice = prompt('Inserisci pari o dispari');
while (choice !== 'pari' && choice !== 'dispari'){
    choice = prompt('O pari o dispari, riprova');
}

let userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));
while (isNaN(userNum)){
    userNum = parseInt(prompt('Non è un numero, riprova'));
}
while (userNum < 1 || userNum > 5){
    userNum = parseInt(prompt("E' più piccolo di 1 o più grande di 5, riprova"));
}

const computerNum = getRndInteger(1, 5);
console.log(computerNum);
const sum = userNum + computerNum;

if ((evenOrOdd(sum) === true && choice === 'pari') || (evenOrOdd(sum) === false && choice === 'dispari')) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso..');
} /* win or lose */

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
} /* true even, false odd of a number */

function palindrome(word) {
    let wordReverse = "";    
    for (let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];        
    } /* cycle to create wordreverse */
    // console.log(word);
    // console.log(wordReverse);
    if (word === wordReverse) {
        return console.log('è palindroma');
    } /* if to check palindrome */ else {
        return console.log('non è palindroma'); /* not palindrome */
    }
}