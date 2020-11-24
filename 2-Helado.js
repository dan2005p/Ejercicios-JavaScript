/*2. Escribe un programa que responda a un usurio que quiere comparar u helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
- El helado sin topping cuesta 1.90€
- El topping de oreo cuesta 1€
- El topping de Kitkat cuesta 1.50€
- El topping de brownie cuesta 0.75€
- El topping de lacasitos cuesta 0.95€
- En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla "No tenemos este topping, lo sentimos." y a continuación informar del precio del helado sin ningún topping.

Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).*/

//Declaro y asigno variables

var topping = window.prompt("Que topping quieres?");
var precio = 0.00;
var helado = 1.90;
var precioFinal = 0.00;

//Condicional IF-ELSE

if(topping == "oreo") {
    precio = 1;
} else if(topping == "kitkat") {
    precio = 1.50;
    } else if(topping == "brownie") {
        precio = 0.75;
    } else if(topping == "lacasitos") {
        precio= 0.95;
    }else {
        document.write("no tenemos este topping, lo sentimos. ");
        precio = 0;
}

//Ecuacion y respuesta por pantalla

precioFinal = helado + precio;
document.write("El helado cuesta " + precioFinal + " €");

//Condicional SWITCH

switch(topping) {
    case "oreo":
        precio = 1;
    break;
    case "kitkat":
        precio = 1.50;
    break;
    case "brownie":
        precio = 0.75;
    break;
    case "lacasitos":
        precio = 0.95;
    break;
    default:
        document.write("No tenemos este topping, lo sentimos. ");
        precio = 0;
    break;
}