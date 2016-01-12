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
    let pylons = parseInt(input.split(' ')[0]);
    let units = input.split(' ').slice(1);

    return units.join(' ');
  }
}
