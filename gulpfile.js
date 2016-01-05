var gulp = require('gulp');
var argv = require('yargs').argv;
gulp.task('challenge', function () {
    if (argv.name === undefined) {
        console.log("ERROR: You must select a challenge with the --name parameter.");
        return;
    }
    var challenge = argv.name;
    var solutionPath = Utilities.GetSolutionPath(challenge);
    try {
        var Solution = require(solutionPath).Solution;
    }
    catch (err) {
        console.log("ERROR: Unable to find challenge '" + challenge + "'");
        return;
    }
    var solution = new Solution();
    console.log(solution.solve("bla"));
});
var Utilities = (function () {
    function Utilities() {
    }
    Utilities.GetSolutionPath = function (challengeName) {
        return ('./problems/' + challengeName + '/solution');
    };
    return Utilities;
})();
