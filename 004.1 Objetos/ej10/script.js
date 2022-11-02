"use strict"

for (key in object) {
    // se ejecuta el cuerpo para cada clave entre las propiedades del objeto
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // claves
    alert(key);  // name, age, isAdmin
    // valores de las claves
    alert(user[key]); // John, 30, true
}


let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}


let user2 = {
    name: "John",
    surname: "Smith"
  };
  user2.age = 25; // Se agrega una propiedad más
  
  // Las propiedades que no son enteras se enumeran en el orden de creación
  for (let prop in user2) {
    alert( prop ); // name, surname, age
  }

  