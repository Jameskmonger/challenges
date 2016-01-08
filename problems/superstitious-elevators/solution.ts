import {ISolution} from '../solution.interface';

export class Solution implements ISolution<number, string> {
  solve(input: number): string {
    let floors = [], pointer = -1;
    while (floors.length != input) {
      if (this.isSafe(pointer)) {
        floors.push(pointer);
      }
      pointer++;
    }

    let out = "", counter = 0;
    for (let f of floors) {
      counter++;

      if (counter === 1) {
        out = out + f + " ";
      } else if (counter === 2) {
        out = out + f + "\n";
        counter = 0;
      }
    }
    return out.split("\n").reverse().slice(1).join("\n") + "\n";
  }

  private isSafe(number: number): boolean {
    return !(number === 0 || number === 13 || number.toString().indexOf("4") !== -1);
  }
}
