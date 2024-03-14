/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const userWord = prompt('Inserisci una parola');

palindrome(userWord);

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