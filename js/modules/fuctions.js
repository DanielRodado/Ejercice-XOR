"use strict";

/**
 * Realiza la operación XOR entre dos números.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} - El resultado de la operación XOR.
 */
const xor = (a, b) => a ^ b;

/**
 * Desencripta un mensaje cifrado utilizando la operación XOR y una clave secreta.
 * @param {number[]} messageXOR - El mensaje cifrado en forma de una lista de números resultado de la operación XOR.
 * @param {number[]} keys - La clave secreta utilizada para desencriptar el mensaje.
 * @returns {number[]} - El mensaje desencriptado en forma de una lista de códigos ASCII.
 */
export const decryptXOR = (messageXOR, keys) => {
    let messageASCII = [];
    let index = 0;
    for (const xorItem of messageXOR) {
        messageASCII.push(xor(xorItem, keys[index]));
        index === 3 ? (index = 0) : index++;
    }
    return messageASCII;
};

/**
 * Convierte una lista de códigos ASCII en caracteres legibles.
 * @param {number[]} messageASCII - El mensaje en forma de una lista de códigos ASCII.
 * @returns {string} - El mensaje desencriptado como una cadena de caracteres legibles.
 */
export const convertFromASCIICode = (messageASCII) =>
    messageASCII.map((xor) => String.fromCharCode(xor)).join("");

// -------------------------------------------------------------------------------
// Las siguentes funciones no se usan para lograr decifrar el mensaje pero formaron parte del ejercicio.

/**
 * Genera un número aleatorio entre 0 y el número máximo dado (exclusivo).
 * @param {number} max - El número máximo (exclusivo) para el rango de números aleatorios.
 * @returns {number} - El número aleatorio generado.
 */
const ramdonNumber = (max) => Math.floor(Math.random() * max);

/**
 * Genera una clave secreta de longitud especificada.
 * @param {number} leng - La longitud deseada para la clave secreta.
 * @returns {number[]} - La clave secreta generada como una lista de números.
 */
function generateKey(leng) {
    let keys = [];
    for (let i = 0; i < leng; i++) {
        /* Genera un número aleatorio dentro del rango de valores ASCII correspondientes a letras
        minúsculas del alfabeto inglés (97-122) y lo agrega a la lista de claves. */
        keys.push(Math.floor(Math.random() * (122 - 97 + 1) + 97));
    }
    return keys;
}

/**
 * Valida posibles combinaciones de números ASCII y claves para la operación XOR.
 * Imprime las combinaciones que producen el resultado dado.
 * @param {number} xor - El resultado deseado de la operación XOR.
 */
export function validateXOR(xor) {
    for (let i = 0; i < 1000; i++) {
        let asscii = ramdonNumber(225);
        /* Para reutiliar código, se llama a la funcion para que nos devuelve una lista con un solo elemento
        y se accede a el mediante su indice, '0' */
        let key = generateKey(1)[0];
        if ((asscii ^ key) === xor)
            console.log({ asscii, key, letter: String.fromCharCode(asscii) });
    }
}
