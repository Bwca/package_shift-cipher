import { expect } from 'chai';

import { ShiftCipher } from './shift-cipher.class';

describe(`Tests for ${ShiftCipher.name}`, () => {
  let cipher: ShiftCipher;

  beforeEach(() => {
    cipher = new ShiftCipher();
  });

  it('should be created', () => {
    // tslint:disable-next-line:no-unused-expression
    expect(cipher).to.be.ok;
  });

  it('Hello should be encoded to Uryyb', () => {
    // Arrange
    const str = 'Hello';
    const expectedResult = 'Uryyb';

    // Act
    const result = cipher.encode(str);

    // Assert
    expect(result).equals(expectedResult);
  });

  it('Uryyb should be decoded back to Hello', () => {
    // Arrange
    const str = 'Uryyb';
    const expectedResult = 'Hello';

    // Act
    const result = cipher.decode(str);

    // Assert
    expect(result).equals(expectedResult);
  });
});

describe(`Tests for ${ShiftCipher.name} with shift lengths exceeding the number of total characters in the provided chars string`, () => {
  let cipher: ShiftCipher;

  beforeEach(() => {
    cipher = new ShiftCipher();

    const theEnglishAlphabet = 'abcdefghijklmnopqrstuvqxyz';

    const cipherSettings = {
      chars: theEnglishAlphabet,
      shift: theEnglishAlphabet.length * 10 + 13,
    };

    cipher.makeCipherMap(cipherSettings);
  });

  it('Hello should be encoded to Uryyb', () => {
    // Arrange
    const str = 'Hello';
    const expectedResult = 'Uryyb';

    // Act
    const result = cipher.encode(str);

    // Assert
    expect(result).equals(expectedResult);
  });

  it('Uryyb should be decoded back to Hello', () => {
    // Arrange
    const str = 'Uryyb';
    const expectedResult = 'Hello';

    // Act
    const result = cipher.decode(str);

    // Assert
    expect(result).equals(expectedResult);
  });
});

describe(`Tests for ${ShiftCipher.name} with a different characters set (Cyrillic)`, () => {
  let cipher: ShiftCipher;

  beforeEach(() => {
    cipher = new ShiftCipher();

    const theUkrainianAlphabet = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';

    const cipherSettings = {
      chars: theUkrainianAlphabet,
      shift: theUkrainianAlphabet.length * 10 + 13,
    };

    cipher.makeCipherMap(cipherSettings);
  });

  it('"Галя" should be encoded to "Мйшї"', () => {
    // Arrange
    const str = 'Галя';
    const expectedResult = 'Мйшї';

    // Act
    const result = cipher.encode(str);

    // Assert
    expect(result).equals(expectedResult);
  });

  it('"Мйшї" should be decoded back to "Галя"', () => {
    // Arrange
    const str = 'Мйшї';
    const expectedResult = 'Галя';

    // Act
    const result = cipher.decode(str);

    // Assert
    expect(result).equals(expectedResult);
  });
});
