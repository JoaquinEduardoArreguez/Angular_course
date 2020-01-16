"use strict";
// El nombre tiene que ser un string plano.
function saludar(nombre) {
    console.log("Hola " + nombre);
}
// Variable que es un objeto / struct.
var wolverine = {
    nombre: "Logan"
};
saludar(wolverine.nombre);
