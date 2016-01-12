import {ITestSuite} from '../testsuite.interface';
import {ITest} from '../test.interface';

export class Tests implements ITestSuite<number, string> {
  public getTests(): Array<ITest<number, string>> {
    return [
      {
        input: 0,
        output: "a"
      },
      {
        input: 1,
        output: "aba"
      },
      {
        input: 2,
        output: "abacaba"
      },
      {
        input: 3,
        output: "abacabadabacaba"
      },
      {
        input: 4,
        output: "abacabadabacabaeabacabadabacaba"
      },
      {
        input: 5,
        output: "abacabadabacabaeabacabadabacabafabacabadabacabaeabacabadabacaba"
      },
      {
        input: 6,
        output: "abacabadabacabaeabacabadabacabafabacabadabacabaeabacabadabacabagabacabadabacabaeabacabadabacabafabacabadabacabaeabacabadabacaba"
      },
      {
        input: 7,
        output: "abacabadabacabaeabacabadabacabafabacabadabacabaeabacabadabacabagabacabadabacabaeabacabadabacabafabacabadabacabaeabacabadabacabaha" +
                "bacabadabacabaeabacabadabacabafabacabadabacabaeabacabadabacabagabacabadabacabaeabacabadabacabafabacabadabacabaeabacabadabacaba"
      }
    ];
  }
}
