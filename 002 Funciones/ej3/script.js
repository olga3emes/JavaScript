"use strict"

//Variables externas
/*let userName = 'Matilda';

function showMessage() {
  let message = 'Hola, ' + userName;
  alert(message);
}

showMessage(); // Hola, Matilda
*/

let userName = 'Peter Parker';

function showMessage() {
  userName = "Spiderman"; // (1) Cambió la variable externa

  let message = 'Hola, ' + userName;
  alert(message);
}

alert( userName ); // Peter Parker antes de llamar la función
showMessage();
alert( userName ); // Spiderman, el valor fué modificado por la función

let cartoon = 'Peppa Pig';
function showMessage() {
  let cartoon = "Pocoyo"; // declara variable local
  let message = 'Hello, ' + cartoon; // Pocoyo
  alert(message);
}
// la función crea y utiliza su propia variable local userName
showMessage();

alert( userName ); // Peppa Pig, se mantiene, la función no accedió a la variable externa