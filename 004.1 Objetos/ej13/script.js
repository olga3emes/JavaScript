"use strict"
let user = {
    name: "John",
    age: 30
};

let clone = {}; // el nuevo objeto vacío
// copiemos todas las propiedades de user en él
for (let key in user) {
    clone[key] = user[key];
}
// ahora clone es un objeto totalmente independiente con el mismo contenido
clone.name = "Peter"; // cambiamos datos en él
alert(user.name); // John aún está en el objeto original

//Object.assign(dest, ...sources)

let user2 = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copia todas las propiedades desde permissions1 y permissions2 en user
Object.assign(user2, permissions1, permissions2);

// ahora es user2 = { name: "John", canView: true, canEdit: true }
alert(user2.name); // John
alert(user2.canView); // true
alert(user2.canEdit); // true

let user3 = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user3);
alert(clone.name); // John
alert(clone.age); // 30

let user4 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
alert(user4.sizes.height); // 182

let clone4 = Object.assign({}, user4);
alert( user4.sizes === clone4.sizes ); // true, el mimo objeto
// user y clone comparten sizes
user4.sizes.width = 60;       // cambia la propiedad en un lugar
alert(clone4.sizes.width); // 60, obtiene el resultado desde el otro