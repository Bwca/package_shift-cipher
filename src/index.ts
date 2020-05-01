export class CaesarCipher {
  private chars: string;
  private shift = 0;
  private cihpherMap: Map<string, string>;

  public encode(str: string): string {
    return str;
  }

  public decode(str: string): string {
    return str;
  }

  public set characters(chars: string) {
    if (typeof chars !== 'string') {
      throw `Type error, ${chars} is not not a string!`;
    }

    this.chars = chars;
  }

  public set shiftNumber(n: number) {
    if (Number.isNaN(n) || !Number.isInteger(n)) {
      throw `Type error, ${n} is not not a valid integer!`;
    }
    this.shift = n;
  }

  private rotateChars(str: string): string {
    return str;
  }
}
