import {ISolution} from '../solution.interface';

export class Solution implements ISolution<string, string> {
  static PAIRS = {
    '0': 'f',
    '1': 'e',
    '2': 'd',
    '3': 'c',
    '4': 'b',
    '5': 'a',
    '6': '9',
    '7': '8',
    '8': '7',
    '9': '6',
    'a': '5',
    'b': '4',
    'c': '3',
    'd': '2',
    'e': '1',
    'f': '0'
  };

  solve(input: string) {
    var output = "#";

    for (var i = 1; i < 7; i++) {
      output += Solution.PAIRS[input[i]];
    }

    return output;
  }
}
