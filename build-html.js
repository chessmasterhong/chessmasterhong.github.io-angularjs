/**
 *  Custom HTML fallback generator for chessmasterhong.github.io
 *  Author: Kevin Chan
 */

var fs = require('fs'),
    path = require('path');

var charset = 'utf8';

fs.readFile(path.join(__dirname, 'src', 'index.html'), charset, function(err, dataIndex) {
    if(!err) {
        var index = dataIndex.replace(/(ng-cloak|data-ng-cloak)\s*/g, '')
                             .replace(/<!--\s*build:remove\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/g, '');
        fs.readFile(path.join(__dirname, 'src', 'partials', 'views', 'about.html'), charset, function(err, dataView) {
            var dest = path.join(__dirname, 'about', 'index.html');

            fs.exists(dest, function(exists) {
                if(!exists) {
                    fs.mkdir('about');
                }

                fs.writeFile(
                    dest,
                    index.replace(/\sdata-ui-view(>)(?=<\/section>)/g, '$1' + dataView),
                    charset
                );
            });
        });
    } else {
        console.log(err);
    }
});
