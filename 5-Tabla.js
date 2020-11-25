/*5. Hacer la tabla de los números del 1 al 10. Imprimir por pantalla de la siguiente manera:
1 * 1 = 1
1 * 2 = 2
Hasta llevar al 10 */


//Sentencia FOR
//Declaro y asigno la constante
const y = 1;


//Bloque de instrucciones
for ( i = 1; i <=10; i++ ) {
    
    document.write(y + "x" + i + "=" + (y * i) + "<br>");
}


// Sentencia WHILE
//Declaro  e inicializo constante y variable

const y = 1;
var i = 0;

//Bloque de instrucciones 
while ( i <= 10) {
    document.write(y + "*" + i + "=" + (y * i) + "<br>");
    i++;
}