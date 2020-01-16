"use strict";
// let nombre = "Peter";
// nombre = 132;
// En typescript se explicita el tipo de variable
//    Ayuda a cometer la menor cantidad de errores posible.
var nombre = "Peter";
var numero = 651;
var booleano = true;
var hoy = new Date();
console.log(hoy);
// el tipo "any" puede recibir cualquier otro tipo
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
// Objetos
// Typescript genera un tipo de variable personalizado
// Si quiero cambiar algo de spiderman, da error a menos que cumpla
// con lo ya definido para spiderman.
var spiderman = {
    nombre: "Peter",
    edad: 20
};
spiderman = {
    nombre: "asd",
    edad: 12
};
// Templates literales    ////////////////////////////////////////////
var nombre1 = "Juan";
var apellido = "Perez";
var edad = 32;
// let texto = "hola " + nombre1 + " " + apellido + "(" + edad + ")";
// usa `` para definir templates literales.
var texto = "Hola , " + nombre + " " + apellido + " (" + edad + ").";
// tambien se pueden usar como multilinea
var texto1 = "Hola ,\n " + nombre + " " + apellido + " \n (" + edad + ").";
console.log(texto);
console.log(texto1);
// Lo que esta dentro de ${} es javascript puro
function getNombre() {
    return "Fernando";
}
var texto2 = "Hola " + getNombre() + " , como est\u00E1s?";
console.log(texto2);
/**
 * Parametros opcionales, obligatorios y por defecto.
 */
// Parametro obligatorio, por defecto , opcionales
function activar(persona, objeto, momento) {
    if (objeto === void 0) { objeto = "la señal"; }
    var mensaje;
    if (momento) {
        mensaje = persona + " activ\u00F3 " + objeto + " en la " + momento;
    }
    else {
        mensaje = persona + " activ\u00F3 " + objeto;
    }
    console.log(mensaje);
}
;
activar("Flash Gordon");
// Si mando el opcional, estoy obligado a mandar los otros objetos anteriores.
activar("Gordon", "la campana", "tarde");
/**
 * Funciones de Flecha
 */
var miFuncion = function (a) {
    return a;
};
// Ingresa a y retorna a.
var miFuncionFlecha = function (a) { return a; };
var miFunction2 = function (a, b) {
    return a + b;
};
var miFuncion2Flacha = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3Flecha = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
// Por que es mejor una function flecha?
var hulk = {
    nombre: "Hulk",
    smash: function () {
        console.log(this.nombre + " smash!!");
    }
};
// this no es afectado cuando esta dentro de ptra funcion.
hulk.smash();
/**
 * Destructuracion de objetos y arreglos
 */
var avenger = {
    nombre4: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
/*
let nombre = avenger.nombre;
let clave = avenger.clave;
*/
var nombre4 = avenger.nombre4, clave = avenger.clave, poder = avenger.poder;
/**
 * En la destructuracion se pueden dar alias a las variables que
 * destructuramos
 * let {nombre4:avengerName, clave, poder} = avenger;
 * avengerName ahora tiene el valor de avenger.name.
 * A las variables no puede darseles el tipo,
 * let {nombre4:string, clave, poder} = avenger;
 * Ahora string es un alias de avenger.nombre
 */
console.log(nombre4, clave, poder);
/**
 * Destrucuturacion de arrays es más simple todavía
 */
var avengers = ["thor", "steve", "tony"];
// En los arreglos la destructuracion si es secuencial, la posicion de cada elemento
// importa.
var thor = avengers[0], steve = avengers[1], tony = avengers[2];
// let [,, tony] = avengers; tambien funciona para sacar el tercer elemento.
console.log(thor, steve, tony);
/**
 * Promesas : permiten ejecutar un codigo cuando una tarea sincrona es terminada.
 */
// resolve y reject son convenciones.
