import {ITestSuite} from '../testsuite.interface';
import {ITest} from '../test.interface';

export class Tests implements ITestSuite<number, string> {
  public getTests(): Array<ITest<number, string>> {
      return [
        {
          input: 14,
          output: "15 16\n11  12\n9 10\n7 8\n5  6\n2  3\n-1 1\n"
        },
        {
          input: 2,
          output: "-1 1"
        }
      ];
  }
}
