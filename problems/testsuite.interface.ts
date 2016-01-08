import {ITest} from './tests.interface';

export interface ITestSuite<I, O> {
  getTests(): Array<ITest<I, O>>;
}
