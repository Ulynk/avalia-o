/**
 * Subtrai valores numéricos
 * @param  {...number} numeros Valores a serem subtraídos
 * @returns Total da subtração
 */
export function subtrairNumeros(...numeros) {
  return numeros.reduce((total, proximo) => total - proximo, 0);
}

/**
 * Subtrai, como valores numéricos, valores presentes em um array de strings
 * @param {number} numeros Valores a serem substraídos
 * @returns Total da subtração
 */
export function subtrairStringsArray(numeros) {
  const valores = numeros.map((n) => Number(n));
  return subtrairNumerosArray(valores);
}
