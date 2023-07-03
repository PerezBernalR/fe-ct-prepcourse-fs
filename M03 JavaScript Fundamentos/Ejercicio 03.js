/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
  if (x == y) return true
  else return false
}
const retornaTrue = sonIguales()
console.log(retornaTrue)


function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1.length == str2.length) return true;
   else return false
}
const stringlong = tienenMismaLongitud("muycorto", "corto");
const stringlong2 = tienenMismaLongitud("corto", "corto");

console.log(stringlong);
console.log(stringlong2);


function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   return num < 90;
}
const menosque = menosQueNoventa(89);
console.log(menosque)


function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   return num > 50
}
const mayorQue = mayorQueCincuenta(49);
console.log(mayorQue)


function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 === 0) return true;
   else (num % 2 > 0); return false;

}
const par= esPar(4)
const par2= esPar(3) 
console.log(par)
console.log(par2)


function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num %2 > 0) return true;
   else (num %2 === 0); return false;
}
const imPar =esImpar(3);
const imPar2 =esImpar(2);
console.log(imPar)
console.log(imPar2)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
