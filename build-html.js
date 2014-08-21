/**
 *  Custom HTML fallback generator for chessmasterhong.github.io
 *  Author: Kevin Chan
 */

var fs = require('fs'),
    path = require('path');

var charset = 'utf8';

//fs.readFile(path.join(__dirname, 'src', 'index.html'), charset, function(err, dataIndex) {
//    if(!err) {
//        var index = dataIndex.replace(/(ng-cloak|data-ng-cloak)\s*/gi, '')
//                             .replace(/<!--\s*build:remove\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/g, '')
//                             .replace(/<!--\s*build:css\s+styles\/site\.min\.css\s*-->(\n.*?)*<!--\s*\/build\s*-->/gi, '<link rel=stylesheet href="../styles/site.min.css">')
//                             .replace(/<!--\s*build:js\s+scripts\/site\.min\.js\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/gi, '');
//
//        var pages = ['about', 'contact', 'credits'];
//
//        pages.forEach(function(page) {
//            fs.readFile(path.join(__dirname, 'src', 'partials', 'views', page + '.html'), charset, function(err, dataView) {
//                var dest = path.join(__dirname, page, 'index.html');
//
//                fs.exists(dest, function(exists) {
//                    if(!exists) {
//                        fs.mkdir(page);
//                    }
//
//                    fs.writeFile(dest, index.replace(/\sdata-ui-view(>)(?=<\/section>)/gi, '$1' + dataView), charset);
//                });
//            });
//        });
//    } else {
//        console.log(err);
//    }
//});

fs.readFile(path.join(__dirname, 'src', 'index.html'), charset, function(err, dataIndex) {
    if(!err) {
        var index = dataIndex.replace(/(ng-cloak|data-ng-cloak)\s*/gi, '')
                             .replace(/<!--\s*build:remove\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/gi, '')
                             .replace(/<!--\s*build:css\s+styles\/site\.min\.css\s*-->(\n.*?)*<!--\s*\/build\s*-->/gi, '<link rel=stylesheet href="../styles/site.min.css">')
                             .replace(/<!--\s*build:js\s+scripts\/site\.min\.js\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/gi, '');

        fs.readFile(path.join(__dirname, 'src', 'partials', 'views', 'projectList.html'), charset, function(err, dataView) {
            var projTemplate = dataView.match(/(<div\s+data-ng-repeat="project\s+in\s+projects)(.*\n)*(?=<\/div>(\n.*)*<h2>Other\sworks)/gi)[0];
            var view = dataView.replace(/(<div\s+data-ng-repeat="project\s+in\s+projects)(.*\n)*(?=<\/div>(\n.*)*<h2>Other\sworks)/gi, '');

            fs.readFile(path.join(__dirname, 'src', 'data', 'projects.json'), charset, function(err, dataJSON) {
                var json = JSON.parse(dataJSON.replace(/\)]}',\n/, '')).reverse();

                json.forEach(function(project, index) {
                    if(project.showcase === true) {
                        var proj = projTemplate.replace(/\{\{\s*project\.projectIndex\s*}}/g, index)
                                               .replace(/\{\{\s*project\.title\s*}}/g, project.title)
                                               .replace(/\{\{\s*project\.thumbnail\s*}}/g, project.thumbnail)
                                               .replace(/\{\{\s*project\.urlDemo\s*}}/g, project.urlDemo)
                                               .replace(/\{\{\s*project\.urlSource\s*}}/g, project.urlSource)
                                               .replace(/\s*data-ng-bind="project\.title"(>)/g, '$1' + project.title)
                                               .replace(/\s*data-ng-bind="project\.excerpt"(>)/g, '$1' + project.excerpt)
                                               .replace(/data-ng-(?=src)/g, '');

                        view = view.replace(/(<h2>Showcase<\/h2>\n*<div\s*class="projects">)/gi, '$1' + proj);
                    }
                });

                var dest = path.join(__dirname, 'projects', 'index.html');

                fs.exists(dest, function(exists) {
                    if(!exists) {
                        fs.mkdir('projects');
                    }

                    fs.writeFile(dest, index.replace(/\sdata-ui-view(>)(?=<\/section>)/gi, '$1' + view), charset, function(err) {
                        if(!err) {

                        }
                    });
                });
            });
        });
    } else {
        console.log(err);
    }
});
