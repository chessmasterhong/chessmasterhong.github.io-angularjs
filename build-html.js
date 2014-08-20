/**
 *  Custom HTML fallback generator for chessmasterhong.github.io
 *  Author: Kevin Chan
 */

var fs = require('fs'),
    path = require('path');

fs.readFile(path.join(__dirname, 'src', 'index.html'), 'utf8', function(err, data) {
    if(!err) {
        console.log(data);
    } else {
        console.log(err);
    }
});
