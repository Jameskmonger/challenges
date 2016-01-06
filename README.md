# challenges
Programming challenges from around the universe with a super funky test suite.

## Running
To run a solution, type:
```
gulp challenge --name=name
```

For example, to run the **yoda-speak** challenge, type:
```
gulp challenge --name=yoda-speak
```

This will run all the tests found in `./problems/yoda-speak/tests.ts` through the solution in `./problems/yoda-speak/solution.ts`.

By default, you only get information on failing tests, along with the test count at the bottom. To see information about passing tests as well, apply the `loud` argument.

```
gulp challenge --name=yoda-speak --loud
```
