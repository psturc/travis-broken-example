var exec = require('child_process').exec;

var runningScript = exec('test.sh', function(err) {
  if (err) {
    console.log("Error when running a script: ", err);
    return false;
  }
});

runningScript.stdout.on('data', function(data) {
  console.log(data);
});
runningScript.stderr.on('data', function(data) {
  console.log(data);
});
