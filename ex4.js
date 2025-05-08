// Lee el enunciado del siguiente algoritmo. 
// URL: https://www.codewars.com/kata/55908aad6620c066bc00002a - Kyu 7

    function XO(str) {
        const lowerStr = str.toLowerCase();
        const xCount = [...lowerStr].filter(char => char === 'x').length;
        const oCount = [...lowerStr].filter(char => char === 'o').length;
        return xCount === oCount;
      }
 

console.log(XO('xo'));                  // true
console.log(XO('XO'));                  // true
console.log(XO('xxxoo'));               // false
console.log(XO('xxOo'));                // true
console.log(XO(''));                     // true
console.log(XO('asdafdgsd'))             // true
console.log(XO("xadsdadsadsadsaoasdasdasdo")) //false
