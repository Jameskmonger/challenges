import {ISolution} from '../solution.interface';

export class Solution implements ISolution<string, string> {
  static PRONOUNS: string[] = [
    "I", "YOU", "HE", "SHE", "IT", "WE", "THEY"
  ];

  static INVALID: string = "Too difficult, this sentence is.";

  solve(input: string) {
    var parts = input.split(' ');
    if (!Solution.EqualsAnyPronoun(parts[0])) {
      return Solution.INVALID;
    }

    var rearranged = Solution.RearrangeParts(parts);

    rearranged = Solution.FinishWithFullStopIfNeeded(rearranged);

    var end = rearranged.join(" ");

    return Solution.CapitaliseString(end);
  }

  static EqualsAnyPronoun(input: string): boolean {
    for (var p of Solution.PRONOUNS) {
      if (p === input.toUpperCase()) {
        return true;
      }
    }

    return false;
  }

  static RemoveEndingSymbols(input: string[]): string[] {
    var lastPart = input[input.length - 1];

    var lastCharacter = lastPart[lastPart.length - 1];
    if (lastCharacter === ',' || lastCharacter === '.' || lastCharacter === '!') {
      input[input.length - 1] = lastPart.substr(0, lastPart.length - 1);
    }

    return input;
  }

  static RearrangeParts(input: string[]): string[] {
    input = Solution.RemoveEndingSymbols(input);

    var parts = [];
    for (var i = 2; i < input.length; i++) {
      parts.push(input[i]);
    }

    parts = Solution.AddCommaToLastPart(parts);

    parts.push(input[0]);
    parts.push(input[1]);

    return parts;
  }

  static AddCommaToLastPart(input: string[]): string[] {
    var pointer = input.length - 1;

    input[pointer] = input[pointer] + ',';

    return input;
  }

  static FinishWithFullStopIfNeeded(input: string[]): string[] {
    var pointer = input.length - 1;
    var value = input[pointer];
    var valuePointer = value.length - 1;

    if (value[valuePointer] === '.') {
      return input;
    }

    value = value + '.';

    input[pointer] = value;
    return input;
  }

  static CapitaliseString(input: string): string {
    input = Solution.ReplaceAt(input, input[0].toUpperCase(), 0);

    return input;
  };

  static ReplaceAt(input: string, replace: string, index: number): string {
    return input.substr(0, index) + replace + input.substr(index + replace.length);
  }
}
