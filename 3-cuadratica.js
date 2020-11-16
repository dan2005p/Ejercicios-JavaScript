'use strict'
/*3. Se quiere crear un programa que resuelva la ecuación cuadrátiva tipo ax2 + bx + c. Para ello se ha estudiado el problema, que se ha planteado en pseudocódigo. 
Transformar el pseudocódigo que se muestra en código C y comprobar que el programa obtiene los resultados esperados para una serie de casos de prueba.*/

//Declarar y pedir por pantalla variables

var res1, res2;
var a = prompt("Ingresa la variable A");
var b = prompt("Ingresa la variable B");
var c = prompt("Ingresa la variable C");

if(Math.sqrt((b * b) - (4 * a * c)) > 0) {
    res1 = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    res2 = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    res3 = (b * b)

    //document.write("Resultado 1: " + res1 );
    //document.write("Resultado 2: " + res2 );
    document.write("Resultado 3: " + res3)
} 