/// <reference path="./typings/gulp/gulp.d.ts"/>

const gulp = require('gulp');
const argv = require('yargs').argv;

import {ISolution} from './problems/solution.interface';

gulp.task('challenge', function() {
  if (argv.name === undefined) {
    console.log("ERROR: You must select a challenge with the --name parameter.");
    return
  }

  var challenge: string = argv.name;
  var solutionPath: string = Utilities.GetSolutionPath(challenge);

  try
  {
    var Solution = require(solutionPath).Solution;
  } catch (err) {
    console.log("ERROR: Unable to find challenge '" + challenge + "'");
    return;
  }

  var solution = new Solution();

  console.log(solution.solve("bla"));
});

class Utilities {
  static GetSolutionPath(challengeName: string) {
    return ('./problems/' + challengeName + '/solution');
  }
}
