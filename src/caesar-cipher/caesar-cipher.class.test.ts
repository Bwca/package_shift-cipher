import { CaesarCipher } from './caesar-cipher.class';
import { expect } from 'chai';

describe(`Tests for ${CaesarCipher.name}`, () => {
  let cipher: CaesarCipher;

  beforeEach(() => {
    cipher = new CaesarCipher();
  });

  it('should be created', () => {
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
