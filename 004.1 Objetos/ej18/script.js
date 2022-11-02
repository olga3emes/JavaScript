"use strict"
// salida
alert(obj);
// utilizando un objeto como clave
anotherObj[obj] = 123;

// conversión explícita
let num = Number(obj);
// matemáticas (excepto + binario)
let n = +obj; // + unario
let delta = date1 - date2;
// comparación menor que / mayor que
let greater = user1 > user2;

// + binario utiliza la sugerencia "default"
let total = obj1 + obj2;
// obj == número utiliza la sugerencia "default"
//if (user == 1) { ... };

obj[Symbol.toPrimitive] = function (hint) {
    // aquí va el código para convertir este objeto a un primitivo
    // debe devolver un valor primitivo
    // hint = "sugerencia", uno de: "string", "number", "default"
};
/*
let user = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        alert(`sugerencia: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// demostración de conversiones:
alert(user); // sugerencia: string -> {name: "John"}
alert(+user); // sugerencia: number -> 1000
alert(user + 500); // sugerencia: default -> 1500
*/
/*
let user = {name: "John"};
alert(user); // [object Object]
alert(user.valueOf() === user); // true
*/
/*
let user = {
    name: "John",
    money: 1000,
    // para sugerencia="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
    // para sugerencia="number" o "default"
    valueOf() {
      return this.money;
    }
  };
  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500
*/
let user = {
    name: "John",
    toString() {
        return this.name;
    }
};
alert(user); // toString -> John
alert(user + 500); // toString -> John500

let obj = {
    toString() {
      return "2";
    }
  };
  alert(obj * 2); // 4, objeto convertido a valor primitivo "2", luego la multiplicación lo convirtió en un número
  alert(obj + 2); // 22 ("2" + 2), la conversión a valor primitivo devolvió un string => concatenación