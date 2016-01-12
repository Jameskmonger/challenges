import {ITestSuite} from '../testsuite.interface';
import {ITest} from '../test.interface';

export class Tests implements ITestSuite<number, string> {
  public getTests(): Array<ITest<number, string>> {
    return [];
  }
}
