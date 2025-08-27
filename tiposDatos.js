/* Hola mundo/ incrustación variable
let saludo = "Hola Mundo!";
let nombreUsuario = "Carlos";
let mensajeCompleto = `Hola ${nombreUsuario}! como estas?` ;
nombreUsuario = "Luna";
console.log(mensajeCompleto);*/


/* operación matemática
let precio = 99.90;
let iva = 2.1;
let resultado = precio + iva;
console.log(resultado);*/

/* Condicional
let edad = 11;
let puedeVotar = (edad >= 18) ? "Sí puede votar": "No puede votar";
console.log(puedeVotar);*/

/* Comparación
console.log(5 == '5'); comparación débil
console.log(5 === '5'); comparación absoluta (valor y tipo)
console.log(10 > 5);
console.log(7 <= 7);*/

/* Lógicos -or -and -not
let tieneCoche = true;
let tieneCarnet = false;
console.log(tieneCarnet && tieneCoche);
console.log(tieneCoche || tieneCarnet);
console.log(!tieneCarnet);*/

/* Switch
let diaSemana = "Miercoles";
switch (diaSemana){
    case "Lunes":
        console.log("Comienzo de semana");
        break;
    case "Viernes":
        console.log("Fin de la semana!");
        break;
    case "Domingo":
        console.log("Apunto de comenzar la semana!");
        break;
    default:
        console.log("Día normal!");
}*/

/*Bucle While
let contador = 0;
while(contador < 3) {
    console.log("Repitiendo " + contador);
    contador++;
}*/

/*
let frutas = ["Manzana","Fresa","Pera","Melocotón"];
let numeros = [3,5,7];
let mezclado = [1, "Hola", true, {clave : "valor"}];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[frutas.length-1]);
console.log(frutas.length);

frutas[0] = "Mango";
console.log(frutas[0]);
frutas.push("Naranja");
frutas.unshift("Cereza");
console.log(frutas);

frutas.pop();
frutas.shift();
console.log(frutas);

let indiceFresa = frutas.indexOf("Fresa");
console.log(indiceFresa);

frutas.splice(1,1);
console.log(frutas);

let copiaFrutas = frutas.slice();
let subFrutas = frutas.slice(0,1);
let masFrutas = ["Uva","Kiwi"];
let todasFrutas = frutas.concat(masFrutas);
console.log(todasFrutas); */


/* Iterrar Array
for(let i = 0; i < frutas.length; i++){
    console.log(`Fruta en índice ${i}: ${frutas[i]}`);
}*/


/*for (const fruta of frutas){
    console.log(`Me gusta la ${fruta}`);
}

frutas.forEach(function(fruta, indice){
    console.log(`La fruta ${fruta} está en el índice ${indice}`);
});*/

/* Array de alto orden
const numerosOriginales = [1,2,3];
const numerosDuplicados = numerosOriginales.map(num => num * 2);
console.log(numerosDuplicados);

const pares = numerosOriginales.filter(num => num % 2 === 0);
console.log(pares);

const sumaTotal = numerosOriginales.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(sumaTotal);*/

/* Declaración objeto literal

let persona = {
    nombre: "Julia",
    apellido: "Naranjo",
    edad: 28, 
    ocupacion: "Estudiante",
    hobbies: ["jugar", "viajar", "deporte"],
    direccion: {
        calle: "Matías Vela n3",
        ciudad: "Sevilla",
        cp: "41120"
    },
    saludar: function() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    },
    presentarse() {
        console.log(`Mi ocupación es ${this.ocupacion}`);
    }
};

persona.saludar();
persona.presentarse();
persona.ocupacion = "Pastelera";
console.log(persona.ocupacion);
persona.email = "juliaGimena00@gmail.com";
console.log(persona.email);
delete persona.hobbies;
console.log(persona.hobbies);

for (const clave in persona) {
    console.log(`${clave} : ${persona}`);
}

console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));*/
