"use strict"
//MAP: --------------------------
let result = arr.map(function (item, index, array) {
    // devuelve el nuevo valor en lugar de item
});
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

//SORT(fn): ------------------------
let arr = [1, 2, 15];
// el método reordena el contenido de arr
arr.sort();
alert(arr);  // 1, 15, 2

function compare(a, b) {
    if (a > b) return 1; // si el primer valor es mayor que el segundo
    if (a == b) return 0; // si ambos valores son iguales
    if (a < b) return -1; // si el primer valor es menor que el segundo
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

arr = [1, 2, 15];
arr.sort(compareNumeric);
alert(arr);  // 1, 2, 15

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    alert(a + " <> " + b);
    return a - b;
});

arr = [1, 2, 15];
arr.sort(function (a, b) { return a - b; });
alert(arr);  // 1, 2, 15

arr.sort((a, b) => a - b);

let paises = ['Österreich', 'Andorra', 'Vietnam'];
alert(paises.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (incorrecto)
alert(paises.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (¡correcto!)


//reverse ----------------------------
let arr2 = [1, 2, 3, 4, 5];
arr2.reverse();
alert(arr2); // 5,4,3,2,1

//split y join ----------------------------------------
let nombres = 'Bilbo, Gandalf, Nazgul';
let arr3 = nombres.split(', ');
for (let name of arr3) {
    alert(`Un mensaje para ${name}.`); // Un mensaje para Bilbo  (y los otros nombres)
}

let arr4 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
alert(arr4); // Bilbo, Gandalf

let arr5 = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr5.join(';'); // une el array en una string usando ;
alert(str); // Bilbo;Gandalf;Nazgul

//Reduce reduceRight --------------
/*let value = arr.reduce(function (accumulator, item, index, array) {
    // ...
}, [initial]);*/

let arr6 = [1, 2, 3, 4, 5];
let result6 = arr6.reduce((sum, current) => sum + current);
alert(result6); // 15

arr = [];
// Error: Reduce en un array vacío sin valor inicial
// si el valor inicial existe, reduce lo devuelve en el arr vacío.
arr.reduce((sum, current) => sum + current);

//Array.isArray-------------------------
alert(typeof {}); // object
alert(typeof []); // object (lo mismo)

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

//ThisArg----------------
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg es el último argumento opcional

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};
let users = [
    { age: 16 }, { age: 20 },
    { age: 23 }, { age: 30 }
];
// encuentra usuarios para los cuales army.canJoin devuelve true
let soldiers = users.filter(army.canJoin, army);
alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

//Otros
function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}
alert(arraysEqual([1, 2], [1, 2])); // true