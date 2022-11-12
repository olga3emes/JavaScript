"use strict"

let fecha = new Date();
//crea un nuevo objeto de fecha cuyo valor inicial serán la fecha y hora actuales

fecha = new Date(año, mes, día, hora, minutos, segundos);
let bdate = new Date(1995, 11, 17, 3, 24, 0);
let bdate2 = new Date("December 17, 1995, 03:24:00");


let start = Date.now(); // milisegundos transcurridos a partir del 1° de Enero de 1970
// la función realiza su trabajo
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // listo
alert( `El bucle tardó ${end - start} ms` ); // restamos números en lugar de fechas

alert(`La carga de la página comenzó hace ${performance.now()}ms`);
// Devuelve algo así como: "La carga de la página comenzó hace 34731.26000000001ms"
// los dígitos .26 son microsegundos (260 microsegundos)
// Sólo los 3 primeros dígitos después del punto decimal son correctos, los demás son errores de precisión.
