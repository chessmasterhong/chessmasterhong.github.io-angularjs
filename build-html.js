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
                             .replace(/<!--\s*build:remove\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/g, '')
                             .replace(/<!--\s*build:css\s+styles\/site\.min\.css\s*-->(\n.*?)*<!--\s*\/build\s*-->/g, '<link rel=stylesheet href="../styles/site.min.css">')
                             .replace(/<!--\s*build:js\s+scripts\/site\.min\.js\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/g, '');

        var pages = ['about', 'contact', 'credits'];

        pages.forEach(function(page) {
            fs.readFile(path.join(__dirname, 'src', 'partials', 'views', page + '.html'), charset, function(err, dataView) {
                var dest = path.join(__dirname, page, 'index.html');

                fs.exists(dest, function(exists) {
                    if(!exists) {
                        fs.mkdir(page);
                    }

                    fs.writeFile(
                        dest,
                        index.replace(/\sdata-ui-view(>)(?=<\/section>)/g, '$1' + dataView),
                        charset
                    );
                });
            });
        });
    } else {
        console.log(err);
    }
});
