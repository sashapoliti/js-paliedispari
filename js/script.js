/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const userWord = prompt('Inserisci una parola');

palindrome(userWord);

function palindrome(word) {
    const array = userWord.split(""); /* split word in an array */
    console.log(array);
}