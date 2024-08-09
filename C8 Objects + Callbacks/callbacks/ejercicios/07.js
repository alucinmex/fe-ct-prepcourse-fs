function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   return arrayOfStrings.filter(function(str) {
      return str.toLowerCase().startsWith("a");
   });
}

module.exports = filter;
