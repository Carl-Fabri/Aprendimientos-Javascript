alert('Condicionales en Javascript');

//Condicionales en Javascript

plabraSecreta = "Aforismos";

//Si:Se ejecutara si se cumple el valor definido
if (plabraSecreta == "Aforismos"){

    document.write("La frase secreta es "+ palabraSecreta);
}

//Si no: Se ejecutara si no se cumple la primera condicion pero se cumple la que este lleva adentro.
else if (palabraSecreta == "Excelsior"){
    document.write("La frase secreta es "+ palabraSecreta);
}

//No: Se ejecutara si ninguno de las condiciones es cumplida, por lo tanto un else no necesitara de llevar una condicion
else{
    document.write('Perdon pero te equivocaste de frase')
}

//Se pueden añadir bastantes condiciones tanto if como else if



