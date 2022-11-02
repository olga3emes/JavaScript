"use strict"
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = structuredClone(user);
alert(user.sizes === clone.sizes); // false, objetos diferentes
// ahora user y clone están totalmente separados
user.sizes.width = 60;    // cambia una propiedad de un lugar
alert(clone.sizes.width); // 50, no están relacionados

let user2 = {};
// hagamos una referencia circular
// user2.me referencia user a sí mismo
user2.me = user;

let clone2 = structuredClone(user2);
alert(clone2.me === clone2); // true

// error
structuredClone({
    f: function () { }
});