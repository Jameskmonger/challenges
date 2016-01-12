import {ITestSuite} from '../testsuite.interface';
import {ITest} from '../test.interface';

export class Tests implements ITestSuite<string, string> {
  public getTests(): Array<ITest<string, string>> {
    return [
      {
        input: "2 Probe Probe Probe Probe Stalker Zealot Carrier Probe Zealot",
        output: "You must construct 1 additional pylon!"
      },
      {
        input: "5 Mothership Carrier Probe Tempest HighTemplar",
        output: "true"
      },
      {
        input: "0 Mothership Colossus Zealot",
        output: "You must construct 2 additional pylons!"
      }
    ];
  }
}
