"use strict";
// Scopes de las variables:
/*
Con "let" se confina una variable en el entorno que tiene:

let mensaje = "hola";

if(true){
    let mensaje = "adios";    ->mensaje es otra variable que funciona dentro del scope del if.
}
console.log(mensaje);    -> valor es "hola"

Typescript se encarga, al compilar el js resultante de cambiar los nombres de las variables
de la forma que corresponda.
*/
let mensaje = "hola";
if (true) {
    let mensaje = "adios";
}
console.log(mensaje);
/**
 *     Las constantes se hacen con "const", es convencion
 *     que los nombre de las mismas sean todos mayusculas.
 *     El valor asignado ya no puede ser cambiado.
 *     Se inicializan al momento de la creacion de la misma variable.
 *     Dentro de otro scope se puede crear otra const del mismo nombre,
 *     al igual que con let.
 */
const OPCIONES = "todas";
if (true) {
    const OPCIONES = "ninguna";
}
console.log(OPCIONES);
