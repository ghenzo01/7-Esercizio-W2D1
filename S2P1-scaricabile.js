//ESERCIZI SUGLI IF: 





/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const number1 = prompt("Insert first number");
const number2 = prompt("Insert second number");

console.log("Greater number is:");

if(number1>number2) {
  console.log(number1);}
else {
  console.log(number2);}
*/





/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const number = prompt("Insert a number");

if(number<5) {
  console.log("Tiny");}
else if (number<10){
  console.log("Small");}
else if (number<15){
  console.log("Medium");}
else if (number<20){
  console.log("Large");}
else if (number>=20){
  console.log("Huge");}
*/



//ESERCIZI SUI CICLI: 





/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
for (let i = 0; i < 11; i++) {
  if (i===3 || i===8){
    continue;}
  else{
    console.log(i);
  }

  }
  */





/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia
   pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
for (let i = 0; i < 16; i++) {
  let evenOdd = i%2===0? "even":"odd"
  console.log(`value ${i} is ${evenOdd}`);
  }
*/
  




//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione
  sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function verify(number1, number2) //funzione che non ritorna niente
{
if(number1===8 || number2 === 8){
  console.log("at least one of the numbers is equal to 8");
}
if(number1+number2 === 8){
  console.log("the sum of the numbers is 8");
}

if(number1-number2 === 8){
  console.log("difference first number - second number is 8");
}

if(number2-number1 === 8){
  console.log("difference second number - first number is 8");
}

}

//occhio: se non metto parseInt prende gli input come stringhe e non calcola niente...
//nemmeno number1===8 e number2===8 viene verificata
let number1 = parseInt(prompt("Insert first number"));
let number2= parseInt(prompt("Insert second number"));

verify(number1, number2);
*/



/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha
 un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = 46;

function getAmount(total){
  
  let shipmentCost = 10;
  if (total > 50 ){
    return `Hai diritto alla spedizione gratuita, la spesa totale compresa spedizione è ${total}€`;
  }
  else{
    return `La spesa totale compresa spedizione è ${total+shipmentCost}€`;

  }
}

console.log(getAmount(totalShoppingCart));

*/


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, 
  se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = 62;

function getAmount(total){
  
  let shipmentCost = 10;
  if (total > 50 ){
    return `Hai diritto a sconto Black Friday e spedizione gratuita, la spesa totale compresa spedizione è ${total}€`;
  }
  else{
    return `Hai diritto a sconto Black Friday. La spesa totale compresa spedizione è ${total+shipmentCost}€`;

  }
}

let totalBlackFriday = totalShoppingCart - ((totalShoppingCart)/100)*20;
console.log(totalBlackFriday);
console.log(getAmount(totalBlackFriday));
*/




/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let isMale = false;
let gender = isMale===true? "male":"female";
console.log(gender);
*/





/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!),
  stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
for (let i = 1; i < 101; i++) {
 if(i%3===0 && i%5===0){
  console.log("FizzBuzz");
 } else if(i%3===0) {
  console.log("Fizz");
 } else if(i%5===0) {
  console.log("Buzz");
 }
 else{
  console.log(i);
 }
  }
*/