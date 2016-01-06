import {ISolution} from '../solution.interface';

export class Solution implements ISolution<string, string> {
  static CHARS = "0123456789abcdef";

  solve(input: string) {
    var pairs = {};
    for (var c = 0; c < Solution.CHARS.length; c++) {
      pairs[Solution.CHARS[c]] = Solution.CHARS[Solution.CHARS.length - 1 - c];
    }

    return "#" + pairs[input[1]] + pairs[input[2]]
                + pairs[input[3]] + pairs[input[4]]
                + pairs[input[5]] + pairs[input[6]];
  }
}
