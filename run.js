var exec = require('child_process').exec;

var runningScript = exec('test.sh', function(err) {
  if (err) {
    console.error("Error when running the script: ", err);
    process.exit(1);
  }
});

runningScript.stdout.on('data', function(data) {
  console.log(data);
});
runningScript.stderr.on('data', function(data) {
  console.log(data);
});
