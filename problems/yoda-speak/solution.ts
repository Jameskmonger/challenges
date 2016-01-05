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

    var end = rearranged.join(" ");

    return end;
  }

  static EqualsAnyPronoun(input: string): boolean {
    for (var p of Solution.PRONOUNS) {
      if (p === input.toUpperCase()) {
        return true;
      }
    }

    return false;
  }

  static RearrangeParts(input: string[]): string[] {
    var parts = [];
    for (var i = 2; i < input.length; i++) {
      parts.push(input[i]);
    }

    parts[parts.length - 1] = parts[parts.length - 1] + ',';

    parts.push(input[0]);
    parts.push(input[1]);

    return parts;
  }
}
