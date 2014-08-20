/**
 *  Custom HTML fallback generator for chessmasterhong.github.io
 *  Author: Kevin Chan
 */

var fs = require('fs'),
    path = require('path');

fs.readFile(path.join(__dirname, 'src', 'index.html'), 'utf8', function(err, dataIndex) {
    if(!err) {
        var index = dataIndex.replace(/(ng-cloak|data-ng-cloak)\s*/gi, '');
        fs.readFile(path.join(__dirname, 'src', 'partials', 'views', 'about.html'), 'utf8', function(err, dataView) {
            fs.writeFile(path.join(__dirname, 'about.html'), index.replace(/\sdata-ui-view(>)(?=<\/section>)/g, '$1' + dataView), 'utf8');
        });
    } else {
        console.log(err);
    }
});
