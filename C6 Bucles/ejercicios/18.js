function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let acum = a;

  for(let i = a +1; i <= b; i++){
    acum = acum * i;
  }
   return Math.abs(acum)
  }
module.exports = productoEntreNúmeros;