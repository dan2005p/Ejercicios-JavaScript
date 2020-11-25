/*4. Transformar en código el siguiente psedocódigo, relativo a determinar la naturaleza par o impar de un número. Nota: El procedimiento a emplear será basado en el uso del operador módulo, % */

//Declaramos variables y pedimos el número al usuario

var numero = prompt("Introduzca un numero");
var resultado = parImpar(numero);
alert("El numero " + numero + " es " + resultado);

//Creamos una funcion con parámetro el número que ingresa el usuario y establecemos las condiciones: si el módulo es 0 nos dira que es par, y si el módulo es diferente de 0, nos dirá que el número es impar
function parImpar(numero) {
    if(numero % 2 == 0) {
        return "par";
    } if(numero % 2 != 0) {
        return "impar";
    }
}