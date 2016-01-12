import {ISolution} from '../solution.interface';

export class Solution implements ISolution<string, string> {
  units = {
    "Probe": 1,
    "Zealot": 2,
    "Sentry": 2,
    "Stalker": 2,
    "HighTemplar": 2,
    "DarkTemplar": 2,
    "Immortal": 4,
    "Colossus": 6,
    "Archon": 4,
    "Observer": 1,
    "WarpPrism": 2,
    "Phoenix": 2,
    "MothershipCore": 2,
    "VoidRay": 4,
    "Oracle": 3,
    "Tempest": 4,
    "Carrier": 6,
    "Mothership": 8
  };

  solve(input: string): string {
    let pylonValue = 8;

    let supply = parseInt(input.split(' ')[0]) * pylonValue;

    for (let u of input.split(' ').slice(1)) {
      supply -= this.units[u];
    }

    if (supply >= 0) {
      return "true";
    }

    let pylonsRequired = Math.ceil((supply * -1) / pylonValue);

    return "You must construct " + pylonsRequired + " additional " + (pylonsRequired === 1 ? "pylon" : "pylons") + "!";
  }
}
