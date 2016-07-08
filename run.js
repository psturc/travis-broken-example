var exec = require('child_process').exec;

var runningScript = exec('test.sh');

runningScript.stdout.on('data', function(data) {
  console.log(data);
});
runningScript.stderr.on('data', function(data) {
  console.log(data);
});
