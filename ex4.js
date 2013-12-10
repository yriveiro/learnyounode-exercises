var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];

var re = new RegExp("\\." + ext + "$");

fs.readdir(dir, function(err, list){
    if (err) throw err;

    list.forEach(function(file) {
        if (re.test(file)) {
            console.log(file);
        }
    });
});
