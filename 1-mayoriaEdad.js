/*1. Escribe un programa que pregunte al usuario si es mayor de edad o no.
Asumoiremos que:
- En caso afirmitivo el usuario responderá sí
- En caso contrario responderá no.

Si el usuario respondesi, se imprimirá por pantalla lo siguiente "Entonces puedes ir a la disco!"
Si el usuario responde no, se imprimirá por pantalla "Lo siento, no puedes ir a la disco"
Si el usuario elige una opción diferente, se deberá imprimir por pantalla: "Lo siento, la opción indicada no es válida."*/

var mayorDeEdad = window.prompt("Es usted mayor de edad?"); 

    if (mayorDeEdad == "si")
    {
        document.write("Entonces puedes ir a la disco");
    } else 
        if (mayorDeEdad == "no")
            {
                document.write("Lo siento, no puedes ir a la disco");
            } else
            {
                document.write("Lo siento, la opcion indicada no es válida");
            }