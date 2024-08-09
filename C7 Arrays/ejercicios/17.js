function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  //Inicializamos una variable para almacenar la suma
  // let suma = 0;
  //Recorremos el array y sumamos cada elemento a la variable suma
  // for(let i = 0; i < arrayOfNums.length; i++) {
  //   suma += arrayOfNums[i];
  // }
  //Devolvemos el resultado de la suma
  // return suma;

  //Usamos el metodo reduce para sumar todos los elementos del array
  return arrayOfNums.reduce((acumulador,actual) => acumulador + actual, 0);
}

module.exports = agregarNumeros;
