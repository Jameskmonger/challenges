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

## Setup
Create a folder in the `problems` directory with your challenge name.

Create a `solution.ts` file which exports a class `Solution` that implements `ISolution<TInputType, TOutputType>`. (You will need to implement the method `solve(input: TInputType): TOutputType`.)

Create a `tests.ts` file, which exports a class `Tests`. The only required property on this class is the array of tests, for example:

    public static tests: any[] = [
    {
        input: "You have to win this code challenge",
        output: "To win this code challenge, you have."
    }

`input` is the input provided to the `solve` method in the solution, and `output` is the required output for the test to pass.
