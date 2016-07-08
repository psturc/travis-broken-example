var exec = require('child_process').exec;

var runningScript = exec('test.sh', function(err) {
  if (err) {
    throw new Error('Error when running the script.');
  }
});

runningScript.stdout.on('data', function(data) {
  console.log(data);
});
runningScript.stderr.on('data', function(data) {
  console.log(data);
});
