export class Tests {
  static TOO_DIFFICULT: string = "Too difficult, this sentence is.";

  public static tests: any[] = [
    {
      input: "You have to win this code challenge",
      output: "To win this code challenge, you have."
    },
    {
      input: "He won this code challenge",
      output: "This code challenge, he won."
    },
    {
      input: "I ate an ice cream earlier!",
      output: "An ice cream earlier, I ate."
    },
    {
      input: "I liked the Star Wars original trilogy more than the prequel’s one.",
      output: "The Star Wars original trilogy more than the prequel’s one, I liked."
    },
    {
      input: "I find your lack of faith disturbing",
      output: "Your lack of faith disturbing, I find."
    },
    {
      input: "I think we are done with the examples",
      output: "We are done with examples, I think."
    },
    {
      input: "He is your son, Vader",
      output: "Your son, Vader, he is."
    },
    {
      input: "I think they’ll add new features",
      output: "They’ll add new features, I think."
    },
    {
      input: "I made a fantastic code challenge (I hope)",
      output: "A fantastic code challenge (I hope), I made."
    },
    {
      input: "I love constants like π",
      output: "Constants like π, I love."
    },
    {
      input: "I’ll be the next President, I swear!",
      output: Tests.TOO_DIFFICULT
    },
    {
      input: "This challenge is great!",
      output: Tests.TOO_DIFFICULT
    },
    {
      input: "Is this challenge great?",
      output: Tests.TOO_DIFFICULT
    },
    {
      input: "Luke is not ready for this task",
      output: Tests.TOO_DIFFICULT
    },
    {
      input: "Somebody loves constants like π",
      output: Tests.TOO_DIFFICULT
    },
    {
      input: "",
      output: Tests.TOO_DIFFICULT
    }
  ];
}
