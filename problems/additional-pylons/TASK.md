# You must construct additional pylons

You need to build more pylons if you want to create more units.

## Units and supply cost

```
Unit            Supply Cost

Probe           1
Zealot          2
Sentry          2
Stalker         2
HighTemplar     2
DarkTemplar     2
Immortal        4
Colossus        6
Archon          4
Observer        1
WarpPrism       2
Phoenix         2
MothershipCore  2
VoidRay         4
Oracle          3
Tempest         4
Carrier         6
Mothership      8
```

## Rules

Take in a single integer `n`, followed by a space-separated list of units (see above). `n` will always be zero or greater, and the unit list will always have at least one unit - it will not contain invalid units.

`n` represents the pylon count for the player - each pylon provides 8 supply.

Calculate whether or not the player can build the units that they requested. If they can, simply output "true". If they can't tell them how many pylons they need to create.

The pylon noun must be correctly pluralised (`1 pylon`, `2 pylons`, etc)

## Examples

```
Input: 2 Probe Probe Probe Probe Stalker Zealot Carrier Probe Zealot
Output: You must construct 1 additional pylon!
```

```
Input: 5 Mothership Carrier Probe Tempest HighTemplar
Output: true
```

```
Input: 0 Mothership Colossus Zealot
Output: You must construct 2 additional pylons!
```
