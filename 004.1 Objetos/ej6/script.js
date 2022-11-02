"use strict"
/*let fruit = prompt("¿Qué fruta comprar?", "Manzana");
let bag = {
    [fruit]: 5, // El nombre de la propiedad se obtiene de la variable fruit
};
alert(bag.apple); // 5 si fruit es="apple"
*/
//Igual pero más bonito :)
let fruit = prompt("¿Qué fruta comprar?", "Manzana");
let bag = {};
// Toma el nombre de la propiedad de la variable fruit
bag[fruit] = 5;

let fruta = 'apple';
let bag = {
  [fruta + 'Computers']: 5 // bag.appleComputers = 5
};