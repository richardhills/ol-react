var exec = require('child_process').exec
var stat = require('fs').stat

stat('lib', function(error, stat) {
  if (error || !stat.isDirectory()) {
    exec('npm run compile', function(error, stdout, stderr) {
      if (error) {
        console.error(error)
        
      }
      if (stdout) {
        console.log(stdout)
      }
      if (stderr) {
        console.log(stderr)
      }
    })
  }
})
