var http = require('http');
var bl = require('bl');

var list = [process.argv[2], process.argv[3], process.argv[4]];
var collector = [];
var acc = list.length;

var output = function(results){
    results.forEach(function(value){
        console.log(value);
    });
};

var async = function(list, callback, output) {
    list.forEach(function(value, index){
        callback(value, function(response){
            response.pipe(bl(function (err, data){
                if (err)
                    return console.error(data);

                collector[index] = data.toString();
                acc -= 1;

                if (acc === 0) {
                    output(collector);
                }
            }));
        });
    });
};

async(list, http.get, output);
