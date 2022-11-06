"use strict"
//Foreach
/*arr.forEach(function (item, index, array) {
    // ... hacer algo con el elemento
});*/

// para cada elemento ejecuta alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});

