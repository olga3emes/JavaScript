"use strict"
let message = "Hello!";
let phrase = message;

let user = {
    name: "John"
};

let user2 = { name: "John" };
let admin = user2; // copia la referencia


admin.name = 'Peter Parker'; // cambiado por la referencia "admin"
alert(user.name); // 'Peter Parker', los cambios se ven desde la referencia "user"