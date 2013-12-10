var fs = require('fs');

var re = new RegExp("\\." + process.argv[3] + "$");

fs.readdir(process.argv[2], function(err, list){
    if (err)
        throw err;

    list.filter(function(file) {
        if (re.test(file))
            console.log(file);
    });
});
