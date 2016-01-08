import {ISolution} from '../solution.interface';

export class Solution implements ISolution<string, string> {
  solve(x: string): string {
    for (var i = 0, c = "0123456789abcdef", p = {}; i < 16; i++) {
      p[c[i]] = c[15 - i];
    }

    return "#" + p[x[1]] + p[x[2]]
                + p[x[3]] + p[x[4]]
                + p[x[5]] + p[x[6]];
  }
}
