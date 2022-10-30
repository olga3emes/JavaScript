"use strict"
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
function showOk() {
    alert("Estás de acuerdo.");
}
function showCancel() {
    alert("Cancelaste la ejecución.");
}
// uso: las funciones showOk, showCancel son pasadas como argumentos de ask
ask("Estás de acuerdo?", showOk, showCancel);


ask(
    "Estás de acuerdo?",
    function () { alert("Estás de acuerdo"); }, //showOk
    function () { alert("Cancelaste la ejecución."); } //showCancel
);