/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num>0) return "Es positivo";
   else if(num<0) return "Es negativo";
   (num == 0); return false
}
const positive = esPositivo(-3)
console.log(positive)


function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   return str + "!";
}
const simboloEx = agregarSimboloExclamacion("Hello world")
console.log(simboloEx)


function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   return nombre + ' ' +apellido;
}
const NomAp=combinarNombres("Soy", "Henry");
console.log(NomAp);



function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return "Hola" + ' ' + nombre + "!";
}
const ObS= obtenerSaludo("Rodrigo");
console.log(ObS);



function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   return alto * ancho;
}
const area= obtenerAreaRectangulo(10, 2);
console.log(area);

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   return lado * 4;
}
const perimetro= retornarPerimetro(10);
console.log(perimetro);


function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   return base * altura / 2;
}
const areaT= areaDelTriangulo(3,7);
console.log(areaT);



function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   return 1.20 * euro;
}
const EuAD= deEuroAdolar(37);
console.log(EuAD);


function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if (letra == "a", "e", "i", "o", "u"){ return "Es vocal";}
    else {
      
    return "Dato incorrecto";}
   }
 const siVocal= esVocal("m");
 console.log(siVocal);


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
