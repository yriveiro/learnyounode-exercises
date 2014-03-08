var fs = require('fs');

module.exports = function(dir, ext, callback) {
    var re = new RegExp("\\." + ext + "$");

    fs.readdir(dir, function(err, list){
        if (err)
            return callback(err);

        list = list.filter(function(file) {
            return re.test(file);
        });

        return callback(null, list);
    });
};
