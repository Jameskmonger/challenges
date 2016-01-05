/// <reference path="./typings/gulp/gulp.d.ts"/>

const gulp = require('gulp');
const argv = require('yargs').argv;

import {ISolution} from './problems/solution.interface';

gulp.task('challenge', function() {
  if (argv.name === undefined) {
    console.log("ERROR: You must select a challenge with the --name parameter.");
    return;
  }

  var verbose: boolean = argv.loud || false;

  var challenge: string = argv.name;
  var solutionPath: string = Utilities.GetSolutionPath(challenge);

  try
  {
    var Solution = require(solutionPath).Solution;
  } catch (err) {
    console.log("ERROR: Unable to find solution file for '" + challenge + "'");
    return;
  }

  var solution = new Solution();

  var testsPath: string = Utilities.GetTestsPath(challenge);

  try
  {
    var Tests = require(testsPath).Tests;
  } catch (err) {
    console.log("ERROR: Unable to find tests file for '" + challenge + "'");
    return;
  }

  if (Tests.tests === undefined) {
    console.log("ERROR: Tests file must contain an array called 'tests'");
  }

  var totalTests = 0;
  var passedTests = 0;
  for (var test of Tests.tests) {
    totalTests++;

    var output = solution.solve(test.input);

    if (output === test.output) {
      passedTests++;

      if (verbose) {
        console.log("PASS: Test passed for input '" + test.input + "'");
      }
    } else {
      console.log("FAIL: Test failed for input '" + test.input + "'");
      console.log("    - Expected: " + test.output);
      console.log("    - Actual: " + output);
    }
  }

  console.log("FINISHED: Total tests: " + totalTests);
  console.log("FINISHED: Passed tests: " + passedTests);
  console.log("FINISHED: Failed tests: " + (totalTests - passedTests));
});

class Utilities {
  static GetSolutionPath(challengeName: string) {
    return ('./problems/' + challengeName + '/solution');
  }

  static GetTestsPath(challengeName: string) {
    return ('./problems/' + challengeName + '/tests');
  }
}
