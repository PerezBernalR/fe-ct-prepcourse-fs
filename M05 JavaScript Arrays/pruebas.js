function agregarNumeros(arrayOfNums) {
    let sumaDeNumeros = arrayOfNums.reduce((a, b) => a + b, 0);
    return sumaDeNumeros;
 }