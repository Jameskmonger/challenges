import {ISolution} from '../solution.interface';

export class Solution implements ISolution<number, string> {
  solve(input: number): string {
    return "bla";
  }

  private isSafe(number: number): boolean {
    return !(number === 13 || number.toString().indexOf("4") !== -1);
  }
}
