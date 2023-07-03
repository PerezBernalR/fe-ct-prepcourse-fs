/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string
} 
const regresaTexto = devolverString("cadena");
console.log(regresaTexto);


// ⛔️ "X" e "Y" son números.

function suma(X, Y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return X + Y;
} 
const resultado = suma(5, 12);
console.log(resultado);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}
const resultado1 = resta(57, 109);
console.log(resultado1);


function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y;
}
const resultado2 =divide(835, 10)
console.log(resultado2);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
const resultado3 = multiplica(5, 5);
console.log(resultado3);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y
}
const resultado4 = obtenerResto(9, 3);
console.log(resultado4);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
