interface CipherSettings {
  chars: string;
  shift: number;
  isUpperCaseNeeded: boolean;
}

type CipherMap = Map<string, string>;

export class CaesarCipher {
  private chars: string;
  private shift = 13;
  private cipherMap: CipherMap;
  private isUpperCaseNeeded: boolean;

  constructor(
    payload: CipherSettings = {
      chars: 'abcdefghijklmnopqrstuvqxyz',
      isUpperCaseNeeded: true,
      shift: 13,
    }
  ) {
    this.cipherSettings = payload;
  }

  public encode(str: string): string {
    return this.rotateChars(str, this.cipherMap);
  }

  public decode(str: string): string {
    return this.rotateChars(str, this.reversedCipherMap);
  }

  public set cipherSettings({
    chars,
    isUpperCaseNeeded,
    shift,
  }: CipherSettings) {
    this.shift = shift;
    this.chars = chars;
    this.isUpperCaseNeeded = isUpperCaseNeeded;
    this.makeCipherMap();
  }

  private get reversedCipherMap(): CipherMap {
    const reversedChars: [string, string][] = [...this.cipherMap.entries()].map(
      (i) => i.reverse() as [string, string]
    );
    return new Map(reversedChars);
  }

  private makeCipherMap(): void {
    let shiftedChars =
      this.chars.slice(this.shift) + this.chars.slice(0, this.shift);

    if (this.isUpperCaseNeeded) {
      shiftedChars += shiftedChars.toUpperCase();
      this.chars += this.chars.toUpperCase();
    }

    this.cipherMap = new Map(
      this.chars.split('').map((i, j) => [i, shiftedChars[j]])
    );
  }

  private rotateChars(str: string, cipherMap: CipherMap): string {
    return str
      .split('')
      .map((i) => cipherMap.get(i) || i)
      .join('');
  }
}
