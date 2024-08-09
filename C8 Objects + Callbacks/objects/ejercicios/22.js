function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   const limpiarYOrdenar = str => str.replace(/\s+/g,'').toLowerCase().split('').sort().join('');
   return limpiarYOrdenar(str1) === limpiarYOrdenar(str2);
}

module.exports = esAnagrama;
