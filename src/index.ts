import { CaesarCipher } from './caesar-cipher/caesar-cipher.class';

const cipher = new CaesarCipher();

console.log(cipher.encode('Hello'));
console.log(cipher.decode('Uryyb'));
