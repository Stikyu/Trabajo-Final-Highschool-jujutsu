/* clase 10 */
const nombre = "Satoru";
const apellido = "Gojo";

console.log(nombre);
console.log(apellido);

console.log(nombre + " " + apellido);

const num1 = 1;
const num2 = 2;
const suma = num1 + num2;

console.log(suma);

const num3 = suma + 4;

console.log(num3);

/* clase 11 */
/* if */
const toppingElegidoCliente = "Oreo";

const valorHelado = 100;

const toppingKitKat = {
  nombre: "kitkat",
  precio: 15,
};
const toppingOreo = {
  nombre: "oreo",
  precio: 15,
};
const toppingKinder = {
  nombre: "kinder",
  precio: 15,
};
let precioFinal = 0;

if (toppingElegidoCliente.toLowerCase() === toppingKitKat.nombre) {
  /*  */
  precioFinal = valorHelado + toppingKitKat.precio;
  console.log(`El total a pagar es de : $ ${precioFinal}`);
  /*  */
} else if (toppingElegidoCliente.toLowerCase() === toppingOreo.nombre) {
  /*  */
  precioFinal = valorHelado + toppingOreo.precio;
  console.log(`El total a pagar es de : $ ${precioFinal}`);
  /*  */
} else if (toppingElegidoCliente.toLowerCase() === toppingKinder.nombre) {
  /*  */
  precioFinal = valorHelado + toppingKinder.precio;
  console.log(`El total a pagar es de : $ ${precioFinal}`);
  /*  */
} else {
  console.log("El topping elegido no es válido.");
}

/* Switch */
const comidaDelUsuario = "ensalada";
const bebidas = ["vino tinto", "vino blanco", "agua"];
switch (comidaDelUsuario) {
  case "carne":
    {
      console.log(
        `Con ${comidaDelUsuario} la mejor opción es un ${bebidas[0]}`
      );
    }

    break;
  case "pescado":
    {
      console.log(
        `Con ${comidaDelUsuario} la mejor opción es un ${bebidas[1]}`
      );
    }

    break;
  case "pasta":
    {
      console.log(
        `Con ${comidaDelUsuario} la mejor opción es un ${bebidas[2]}`
      );
    }

    break;

  default:
    {
      console.log("le ofrezco una mejor opción, hay carne, pescado o pasta");
    }

    break;
}

/* For */
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayNumeros.push(20);

console.log(arrayNumeros);

for (let i = 0; i < arrayNumeros.length; i++) {
  const element = arrayNumeros[i];

  console.log(element);
}

/* While */
let numero = 0;
const findelCiclo = 11;

while (numero <= findelCiclo) {
  console.log(numero);

  numero++;
}

/* Funciones */

function Whatsapp(MandarAWhatsapp) {
  console.log("Hola compañero");
}

/* convocar la función */

Whatsapp();

/* Funcion Flecha */

/* const sumaFlecha = (num1, num2) => num1 + num2

console.log(sumaFlecha(4, 10)); */

/* const numero1 = 10;
const numero2 = 30;

const resta = (num1, num2) => num1 - num2;

console.log(resta(numero2, numero1)); */

const persona = {
  nombre: "Sukuna",
  edad: 30,
  saludar: (otraPersona) => {
    console.log(`Hola ${otraPersona}`);
  },
};
console.log(persona.saludar("Sukuna"));

/* window.alert("Hola gente bonita"); */

const userName = prompt("ingrese su Nombre");

console.log(userName);

if (userName) {
  alert("Ahora formas parte del grupo Jujutsu");
} else {
  alert("Ingrese su Nombre, Por favor");
}

/* const respuestaUsuario = confirm("Satoru le gana a Sukuna");

console.log(respuestaUsuario); */
