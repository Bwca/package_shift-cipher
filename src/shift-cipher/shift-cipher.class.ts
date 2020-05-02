import { CipherMap } from './models/cipher-map.model';
import { CipherSettings } from './models/cipher-settings.model';

export class ShiftCipher {
  private cipherMap!: CipherMap;

  constructor() {
    this.makeCipherMap({
      chars: 'abcdefghijklmnopqrstuvqxyz',
      shift: 13,
    });
  }

  public encode(str: string): string {
    return this.rotateChars(str, this.cipherMap);
  }

  public decode(str: string): string {
    return this.rotateChars(str, this.reversedCipherMap);
  }

  public makeCipherMap({ chars, shift }: CipherSettings): void {
    shift %= chars.length;

    let shiftedChars = chars.slice(shift) + chars.slice(0, shift);

    shiftedChars += shiftedChars.toUpperCase();
    chars += chars.toUpperCase();

    this.cipherMap = new Map(chars.split('').map((i, j) => [i, shiftedChars[j]]));
  }

  private get reversedCipherMap(): CipherMap {
    const reversedChars: [string, string][] = [...this.cipherMap.entries()].map((i) => i.reverse() as [string, string]);
    return new Map(reversedChars);
  }

  private rotateChars(str: string, cipherMap: CipherMap): string {
    return str
      .split('')
      .map((i) => cipherMap.get(i) || i)
      .join('');
  }
}
