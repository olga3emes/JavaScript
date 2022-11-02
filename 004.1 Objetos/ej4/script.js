"use strict"
let user = {};
// asignando
user["likes birds"] = true;
// obteniendo
alert(user["likes birds"]); // true
// eliminando
delete user["likes birds"];

let key = "likes birds";
// Tal cual: user["likes birds"] = true;
user[key] = true;
