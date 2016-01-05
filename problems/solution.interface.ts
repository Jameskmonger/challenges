export interface ISolution<I, O> {
  solve(input: I): O;
}
