import {ITestSuite} from '../testsuite.interface';
import {ITest} from '../test.interface';

export class Tests implements ITestSuite<string, string> {
  public getTests(): Array<ITest<string, string>> {
      return [
        {
          input: "#ffffff",
          output: "#000000"
        },
        {
          input: "#abcdef",
          output: "#543210"
        },
        {
          input: "#badcab",
          output: "#452354"
        },
        {
          input: "#133742",
          output: "#ecc8bd"
        },
        {
          input: "#a1b2c3",
          output: "#5e4d3c"
        },
        {
          input: "#7f7f80",
          output: "#80807f"
        }
      ];
  }
}
