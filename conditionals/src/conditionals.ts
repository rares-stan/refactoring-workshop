export class ExampleConditionals {
  static invert(x: number): number {
    if (x != 3) {
      return 3;
    } else {
      return 4;
    }
  }

  static redundant_else(x: number): number {
    if (x < 3) {
      return 1;
    } else if (x < 10) {
      return 10;
    }
    if (x < 30) {
      return 30;
    }
    return 0;
  }

  static deMorgan(x: number): boolean {
    return !(x != 5 && x != 7);
  }

  static join_AND(x: number, y: number): number {
    if (x == 3) {
      if (y == 4) {
        return x + y;
      }
    }
    return 0;
  }

  static split_AND(x: number, y: number): number {
    if (x == 3 && y == 4) {
      return x + y;
    } else {
      return 0;
    }
  }

  static join_OR(x: number, y: number): boolean {
    if (x >= 0) {
      return true;
    }
    if (y <= 3) {
      return true;
    }
    return y == 10;
  }

  static split_OR(x: number, y: number): boolean {
    if (x >= 0 || y <= 3 || y == 10) {
      return true;
    }
    return false;
  }

  static join_statements(x: number, y: number): number {
    let result: number = 0;
    let factor: number = 1;
    if (x > 3) {
      factor = x;
    }
    if (x > 3) {
      result += y * 3;
    }
    return result * factor;
  }

  static split_statements(x: number, y: number): number {
    let result: number = 0;
    let factor: number = 1;
    if (x > 3) {
      result += y * 3;
      factor = x;
    }
    return result * factor;
  }

  static normalize(s1: string, s2: string): number {
    if (s1 !== 'hello') {
      if (s2 !== 'world') {
        if (s1 !== 'foo') {
          return 6;
        }
        return 1;
      } else if (s1 !== 'foo') {
        return 2;
      }
    } else {
      if (s2 === 'bar') {
        return 3;
      } else if (s2 !== 'world') {
        return 4;
      }
      return 5;
    }
    return 0;
  }
}
