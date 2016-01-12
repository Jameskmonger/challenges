import {ITestSuite} from '../testsuite.interface';
import {ITest} from '../test.interface';

export class Tests implements ITestSuite<string, string> {
  public getTests(): Array<ITest<string, string>> {
    return [];
  }
}
