/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const userWord = prompt('Inserisci una parola');

palindrome(userWord);
console.log(palindrome(userWord));

function palindrome(word) {
    const array = userWord.split(""); /* split word in an array */
    //console.log(array);
    const reverseArray = array.reverse(); /* create a reverse array */
    //console.log(reverseArray);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const reverseElement = reverseArray[i];
        if (element !== reverseElement) {
            return true;
        }
    } /* cycle with if to check two arrays */
    return false;
}