"use strict"
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...otras propiedades
    };
}

let user = makeUser("John", 30);
alert(user.name); // John

function makeUser2(name, age) {
    return {
        name, // igual que name:name
        age,  // igual que age:age
        // ...
    };
}

let user2 = {
    name,  // igual que name:name
    age: 30
};