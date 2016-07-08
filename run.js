var exec = require('child_process').exec;

var runningScript = exec('test.sh', function(err) {
  if (err) {
    throw new Error('oh no!');
    return false;
  }
});

runningScript.stdout.on('data', function(data) {
  console.log(data);
});
runningScript.stderr.on('data', function(data) {
  console.log(data);
});
