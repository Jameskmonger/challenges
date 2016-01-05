var gulp = require('gulp');
var argv = require('yargs').argv;
gulp.task('challenge', function () {
    if (argv.chosenChallenge === undefined) {
        console.log("ERROR: You must select a challenge with the --challenge parameter.");
        return;
    }
});
