/*6. Se necesita un sistema que le pida al usuario el número del cual
desea saber la tabla de multiplicar, y deberá presentarse en el mismo
formato del ejercicio anterior */

//FOR
//Declaro variable y la asigno al número que ingresa el usuario, luego se pasa a entero.
var num;
    num = prompt("Ingrese un número del cual desea conocer su tabla de multiplicar: ");
    num = parseInt(num);

//Bloque de instrucciones
    for (var i = 1; i <= 10; i++) {
        
        document.write(num  + "x" + i + "=" + (num * i) + "<br>");
    }


//WHILE
//Declaro variable y la asigno al número que ingresa el usuario, luego se pasa a entero.
var num;
    num = prompt("Ingrese un número del cual desea conocer su tabla de multiplicar: ");
    num = parseInt(num);
var i = 0;

//Bloque de instrucciones
while ( i <= 10 ) {
    i++;
    document.write(num + "*" + i + "=" + (num * i) + "<br>");
    
}