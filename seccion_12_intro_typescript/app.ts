// let nombre = "Peter";
// nombre = 132;


// En typescript se explicita el tipo de variable
//    Ayuda a cometer la menor cantidad de errores posible.

let nombre: string = "Peter";
let numero: number = 651;
let booleano: boolean = true;

let hoy: Date = new Date();

console.log(hoy);

// el tipo "any" puede recibir cualquier otro tipo
let cualquiera: any;

cualquiera = nombre;
cualquiera = numero;

// Objetos
// Typescript genera un tipo de variable personalizado
// Si quiero cambiar algo de spiderman, da error a menos que cumpla
// con lo ya definido para spiderman.

let spiderman = {
    nombre: "Peter",
    edad: 20
}

spiderman = {
    nombre: "asd",
    edad: 12
}


// Templates literales    ////////////////////////////////////////////

let nombre1: string = "Juan";
let apellido: string = "Perez";
let edad: number = 32;

// let texto = "hola " + nombre1 + " " + apellido + "(" + edad + ")";
// usa `` para definir templates literales.
let texto = `Hola , ${nombre} ${apellido} (${edad}).`;

// tambien se pueden usar como multilinea
let texto1 = `Hola ,
 ${nombre} ${apellido} 
 (${edad}).`;


console.log(texto);
console.log(texto1);

// Lo que esta dentro de ${} es javascript puro
function getNombre() {
    return "Fernando";
}
let texto2: string = `Hola ${
    getNombre()
} , como estás?`;

console.log(texto2);


/**
 * Parametros opcionales, obligatorios y por defecto.
 */

// Parametro obligatorio, por defecto , opcionales
function activar(persona: string, objeto: string = "la señal", momento ?:string) {
    let mensaje: string;

    if (momento) {
        mensaje = `${persona} activó ${objeto} en la ${momento}`;
    } else {
        mensaje = `${persona} activó ${objeto}`;
    }

    console.log(mensaje);
};

activar("Flash Gordon");

// Si mando el opcional, estoy obligado a mandar los otros objetos anteriores.
activar("Gordon", "la campana", "tarde");


/**
 * Funciones de Flecha
 */

let miFuncion = function (a: any) {
    return a;
}

// Ingresa a y retorna a.
let miFuncionFlecha = (a : any) => a;

let miFunction2 = function (a: number, b: number) {
    return a + b;
}

let miFuncion2Flacha = (a : number, b : number) => a + b;


let miFuncion3 = function (nombre: string) {
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3Flecha = (nombre : string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}


// Por que es mejor una function flecha?

let hulk = {
    nombre: "Hulk",
    smash() {
        console.log(this.nombre + " smash!!");
    }
}

// this no es afectado cuando esta dentro de ptra funcion.

hulk.smash();


/**
 * Destructuracion de objetos y arreglos
 */

let avenger = {
    nombre4: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}

/*
let nombre = avenger.nombre;
let clave = avenger.clave;
*/

let {nombre4, clave, poder} = avenger;

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

let avengers: string[] = ["thor", "steve", "tony"];

// En los arreglos la destructuracion si es secuencial, la posicion de cada elemento
// importa.

let [thor, steve, tony] = avengers;

// let [,, tony] = avengers; tambien funciona para sacar el tercer elemento.

console.log(thor, steve, tony);


/**
 * Promesas : permiten ejecutar un codigo cuando una tarea sincrona es terminada.
 */

// resolve y reject son convenciones.
