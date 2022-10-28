"use strict"
function showMessage(from, text) { // parámetros: from, text
    alert(from + ': ' + text);
  }
  showMessage('Ann', '¡Hola!'); // Ann: ¡Hola! (*)
  showMessage('Ann', "¿Cómo estás?"); // Ann: ¿Cómo estás? (**)
  