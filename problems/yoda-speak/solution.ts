import {ISolution} from '../solution.interface';

export class Solution implements ISolution<string, string> {
  solve(input: string) {
    return "yoda text output";
  }
}
