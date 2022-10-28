"use strict"
function showMessage(from, text) {
    from = '*' + from + '*'; // hace que "from" se vea mejor
    alert( from + ': ' + text );
  }
  
  let from = "Ann";
  showMessage(from, "Hola"); // * Ann *: Hola
  // el valor de "from" es el mismo, la función modificó una copia local
  alert( from ); // Ann

  showMessage("Ann");

  function showMessage(from, text = "sin texto") {
    alert( from + ": " + text );
  }
  showMessage("Ann"); // Ann: sin texto
  showMessage("Ann", undefined); // Ann: sin texto

  function showMessage(from, text = anotherFunction()) {
    // anotherFunction() solo se ejecuta si text no fue asignado
    // su resultado se convierte en el valor de texto
  }

  function sum(a, b) {
    return a + b;
  }
  
  let result = sum(1, 2);
  alert( result ); // 3

  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('¿Tienes permiso de tus padres?');
    }
  }
  
  let age = prompt('¿Qué edad tienes?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Acceso otorgado' );
  } else {
    alert( 'Acceso denegado' );
  }

  function showMovie(age) {
    if ( !checkAge(age) ) {
      return;
    }
    alert( "Mostrando la película" ); // (*)
    // ...
  }

function doNothing() { /* empty */ }
alert( doNothing() === undefined ); // true

function doNothing() {
    return;
  }
  alert( doNothing() === undefined ); // true

