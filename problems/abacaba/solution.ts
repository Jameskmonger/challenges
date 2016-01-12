import {ISolution} from '../solution.interface';

export class Solution implements ISolution<number, string> {
  alphabet = "abcdefghijklmnopqrstuvwxyz";

  solve(input: number): string {
    let output = "";

    for (let i = 0; i < input + 1; i++) {
      output = output + this.alphabet[i] + output;
    }

    return output;
  }
}
