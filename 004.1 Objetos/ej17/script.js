"use strict"
/*// id es un symbol con la descripción "id"
let id = Symbol("id");
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false*/

/*let id = Symbol("id");
alert(id); // TypeError: No puedes convertir un valor Symbol en string*/
/*alert(id.toString()); // Symbol(id), ahora sí funciona
alert(id.description); // id
*/
/*
let user = { // pertenece a otro código
    name: "John"
};
let id = Symbol("id");
user[id] = 1;
alert(user[id]); 
// podemos accesar a la información utilizando el symbol como nombre de clave
*/
/*
let user = { name: "John" };
// Nuestro script usa la propiedad "id"
user.id = "Nuestro valor id";
// ...Otro script también quiere usar "id"  ...
user.id = "Su valor de id"
// Boom! sobreescrito por otro script!
*/

/*let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // no "id": 123
};*/
/*
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};
for (let key in user) alert(key); // nombre, edad (no aparecen symbols)
// el acceso directo por medio de symbol funciona
alert( "Direct: " + user[id] ); // Direct: 123
*/
/*
let id = Symbol("id");
let user = {
  [id]: 123
};
let clone = Object.assign({}, user);
alert( clone[id] ); // 123*/

// leer desde el registro global
let id = Symbol.for("id"); // si el símbolo no existe, se crea
// léelo nuevamente (tal vez de otra parte del código)
let idAgain = Symbol.for("id");
// el mismo symbol
alert( id === idAgain ); // true

// tomar symbol por nombre
let sym = Symbol.for("nombre");
let sym2 = Symbol.for("id");

// tomar name por symbol
alert( Symbol.keyFor(sym) ); // nombre
alert( Symbol.keyFor(sym2) ); // id

let globalSymbol = Symbol.for("nombre");
let localSymbol = Symbol("nombre");
alert( Symbol.keyFor(globalSymbol) ); // nombre, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, no global
alert( localSymbol.description ); // nombre