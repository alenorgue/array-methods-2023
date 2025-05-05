/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obtener la información requerida
 *
 *  Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */
numbers.forEach((num) => console.log('Mustra por consola:', num));
/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */
const firstNumberGreaterThan10 = numbers.find((num) => num > 10 );
console.log(firstNumberGreaterThan10)
/**
 * Utliza el método some para saber si existe un número mayor de 20
 */
const numberGreaterThan20 = numbers.some((num) => num > 20 );
console.log(numberGreaterThan20)
/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */
const allNumbersAreOdd = numbers.every((num) => num % 2 !== 0);
console.log(allNumbersAreOdd);
/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */
const filteredNumbers = numbers.filter((num) => num > 3 && num < 9);
console.log(filteredNumbers)
/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */
const mapNumbers = numbers.map((num) => (num < 0 ? -1 : 1));
console.log(mapNumbers)