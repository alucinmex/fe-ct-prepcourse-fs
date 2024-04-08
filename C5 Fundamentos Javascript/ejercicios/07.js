function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  if(valor === "string") {
    return string;
  } else if(valor === "number") {
    return number;
  } else if(valor === "boolean") {
    return boolean;
  } else if(valor === "object") {
    return object;
  }
}

module.exports = esTipoDato;