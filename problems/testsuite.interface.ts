import {ITest} from './test.interface';

export interface ITestSuite<I, O> {
  getTests(): Array<ITest<I, O>>;
}
