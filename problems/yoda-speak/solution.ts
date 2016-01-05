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

    return "yoda text output";
  }

  static EqualsAnyPronoun(input: string): boolean {
    for (var p of Solution.PRONOUNS) {
      if (p === input.toUpperCase()) {
        return true;
      }
    }

    return false;
  }
}
