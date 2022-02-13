
alert('Practicas de Concatenacion y tipos de operadores')
////////////     Concatenacion en Javascript

numero1 = '2';

numero2 = 1;

let ValoresCambiados1 = "KDSD" + numero1 + numero2;
//lo que pasara es que los valores enteros ahora seran valores string

document.write(ValoresCambiados1 + '\n');


//Concatenando valores por medio de el metodo concat
let ValoresCambiados2 = numero1.concat(numero2); //El meotodo concat solo puede colocarse en elementos string


document.write(ValoresCambiados2 + '\n');

//Concatenando mediante Backticks
//Con backtiscks se pude utilizar codigo html como tambien escribir strings

palabra1 = "Hola";
palabra2 = "Adios";

palabraCombinadas = `${palabra1} que bonito dia ahora ${palabra2} `;//Esta manera es la mejor opcion para concatenar valores



document.write(palabraCombinadas + '\n');


////////Operadores de Comparacion

let valor1 = 21,
valor2 = 15;

let valor3="21",
valor4 = "texto";

/* 
    document.write(valor1 == valor2); //Compara si los valores son iguales

    document.write(valor1 === valor2); //Compara si son estrictamente iguales
    //si pertenecen al mismo tipo de datos y su magnitud es igual

    document.write(valor1 !== valor3); //Compara si son estrictamente diferentes

    document.write(valor1 != valor2); //Compara si los valores son diferentes

    document.write(valor1 < valor2);//Compara si los datos son menor a mayores

    //Otros operadores
    >=
    <=
*/

////////////////////Operadores Logicos
//Los Operadores logicos se pueden utilizar solo en booleanos 

let variable1 = true,
variable2 = true;

let resultado1 = variable1 && variable2; //AND: Compara si los 2 booleanos son verdaderos
let resultado2 = variable1 || variable2; //OR: Si uno de los booleanos es verdadero, entonces sera true
let resultado3 = !variable1;//NOT: muestra lo contrario del booleano

val1 = 12 ;
val2 = 14;
val3 = 25;
val4 = 12;

afirmacion1 = val1 > val2;
afirmacion2 = val1 != val2;

operacion=(val1 < val2 || val1 == val4) && (!(val3 == val3) && val1 != val4);

document.write(operacion);


