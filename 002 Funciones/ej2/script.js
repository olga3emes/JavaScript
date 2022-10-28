"use strict"

function showMessage() {
    let message = "Hola, ¡Soy JavaScript!"; // variable local
  
    alert( message );
  }
  
  showMessage(); // Hola, ¡Soy JavaScript!
  
  alert( message ); // <-- ¡Error! La variable es local para la función, no para el código externo.

  