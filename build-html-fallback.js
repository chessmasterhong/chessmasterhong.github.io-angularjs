/**
 *  Custom HTML fallback generator for chessmasterhong.github.io
 *  Author: Kevin Chan
 */

'use strict';

var fs = require('fs'),
    path = require('path');

var charset = 'utf8';

fs.readFile(path.join(__dirname, 'src', 'index.html'), charset, function(err, dataMain) {
    if(!err) {
        var index = dataMain.replace(/(ng-cloak|data-ng-cloak)\s*/gi, '')
                            .replace(/<!--\s*build:remove\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/g, '')
                            .replace(/<!--\s*build:css\s+common\/styles\/site\.min\.css\s*-->(\n.*?)*<!--\s*\/build\s*-->/gi, '<link rel=stylesheet href="../common/styles/site.min.css">')
                            .replace(/<!--\s*build:js\s+common\/scripts\/site\.min\.js\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/gi, '');

        var pages = ['about', 'contact', 'credits'];

        pages.forEach(function(page) {
            fs.readFile(path.join(__dirname, 'src', page, page + '.partial.html'), charset, function(err, dataView) {
                var dest = path.join(__dirname, page, 'index.html');
                fs.writeFile(dest, index.replace(/\sdata-ui-view(>)(?=<\/section>)/gi, '$1' + dataView), charset);
            });
        });
    } else {
        console.log(err);
    }
});

fs.readFile(path.join(__dirname, 'src', 'index.html'), charset, function(err, dataMain) {
    if(!err) {
        var index = dataMain.replace(/(ng-cloak|data-ng-cloak)\s*/gi, '')
                            .replace(/<!--\s*build:remove\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/gi, '')
                            .replace(/<!--\s*build:css\s+common\/styles\/site\.min\.css\s*-->(\n.*?)*<!--\s*\/build\s*-->/gi, '<link rel=stylesheet href="../common/styles/site.min.css">')
                            .replace(/<!--\s*build:js\s+common\/scripts\/site\.min\.js\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/gi, '');

        fs.readFile(path.join(__dirname, 'src', 'projects', 'projectList.partial.html'), charset, function(err, dataView) {
            var showcaseTemplate = dataView.match(/<div\s+data-ng-repeat="project\s+in\s+projects(.*\n)*(?=<\/div>(\n.*)*<h2>Other\sworks)/gi)[0],
                otherworksTemplate = dataView.match(/<span\s+data-ng-repeat="project\s+in\s+projects(.*\n)*(?=<\/div>)/gi)[0];

            var view = dataView.replace(/(<div\s+data-ng-repeat="project\s+in\s+projects)(.*\n)*(?=<\/div>(\n.*)*<h2>Other\sworks)/gi, '')
                               .replace(/<span\s+data-ng-repeat="project\s+in\s+projects(.*\n)*(?=<\/div>)/gi, '');

            fs.readFile(path.join(__dirname, 'src', 'projects', 'projects.json'), charset, function(err, dataJSON) {
                var json = JSON.parse(dataJSON.replace(/\)]}',\n/, '')).reverse();

                var row = 0;
                json.forEach(function(project, projIndex) {
                    fs.readFile(path.join(__dirname, 'src', 'projects', projIndex.toString(), projIndex.toString() + '.partial.html'), charset, function(err, dataView) {
                        fs.writeFile(
                            path.join(__dirname, 'projects', projIndex.toString(), 'index.html'),
                            index.replace(/\sdata-ui-view(>)(?=<\/section>)/gi, '$1<h1>Projects &raquo; ' + project.title + '</h1>' + dataView)
                                 .replace(/(?=\.\.\/common)/gi, '../'),
                            charset
                        );
                    });

                    if(project.showcase === true) {
                        view = view.replace(/(<h2>Showcase<\/h2>\n*<div\s*class="projects">)/gi, '$1' +
                            showcaseTemplate.replace(/data-ng-class-even="'views-row\s+views-row-even'"\s+data-ng-class-odd="'views-row\s+views-row-odd'"/gi, 'class="views-row views-row-' + (row++ % 2 ? 'even' : 'odd') + '"')
                                            .replace(/\{\{\s*project\.projectIndex\s*}}/g, projIndex)
                                            .replace(/\{\{\s*project\.title\s*}}/g, project.title)
                                            .replace(/\{\{\s*project\.thumbnail\s*}}/g, project.thumbnail)
                                            .replace(/\{\{\s*project\.urlDemo\s*}}/g, project.urlDemo)
                                            .replace(/\{\{\s*project\.urlSource\s*}}/g, project.urlSource)
                                            .replace(/\s*data-ng-bind="project\.title"(>)/g, '$1' + project.title)
                                            .replace(/\s*data-ng-bind="project\.excerpt"(>)/g, '$1' + project.excerpt)
                                            .replace(/data-ng-(?=src)/g, '')
                                            .replace(/<span\s+class="spacer"\s+data-ng-show="project.urlDemo"><\/span>((\n.*?)*)<\/a>/gi, project.urlDemo ? '<span class="spacer"></span>$1</a>' : '')
                                            .replace(/<span\s+class="spacer"\s+data-ng-show="\(project\.urlDemo\s*\&\&\s*project\.urlSource\)\s*\|\|\s*project\.urlSource"><\/span>((\n.*?)*)<\/a>/gi, project.urlSource ? '<span class="spacer"></span>$1</a>' : '')
                            );
                    } else {
                        view = view.replace(/(<h2>Other works<\/h2>\n*<div\s*class="projects">)/gi, '$1' +
                            otherworksTemplate.replace(/data-ng-class="'views-row'"/gi, 'class="views-row"')
                                              .replace(/\{\{\s*project\.projectIndex\s*}}/g, projIndex)
                                              .replace(/\{\{\s*project\.title\s*}}/g, project.title)
                                              .replace(/\{\{\s*project\.thumbnail\s*}}/g, project.thumbnail)
                                              .replace(/data-ng-(?=src)/g, '')
                            );
                    }
                });

                var dest = path.join(__dirname, 'projects', 'index.html');
                fs.writeFile(dest, index.replace(/\sdata-ui-view(>)(?=<\/section>)/gi, '$1' + view), charset);
            });
        });
    } else {
        console.log(err);
    }
});

fs.readFile(path.join(__dirname, 'src', 'index.html'), charset, function(err, dataMain) {
    if(!err) {
        var index = dataMain.replace(/(ng-cloak|data-ng-cloak)\s*/gi, '')
                            .replace(/<!--\s*build:remove\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/gi, '')
                            .replace(/<!--\s*build:css\s+common\/styles\/site\.min\.css\s*-->(\n.*?)*<!--\s*\/build\s*-->/gi, '<link rel=stylesheet href="../common/styles/site.min.css">')
                            .replace(/<!--\s*build:js\s+common\/scripts\/site\.min\.js\s*-->(\n.*?)*<!--\s*\/build\s*-->\n\s*/gi, '');

        fs.readFile(path.join(__dirname, 'src', 'resources', 'resourceList.partial.html'), charset, function(err, dataView) {
            var dest = path.join(__dirname, 'resources', 'index.html');
            fs.writeFile(dest, index.replace(/\sdata-ui-view(>)(?=<\/section>)/gi, '$1' + dataView), charset);
        });
    } else {
        console.log(err);
    }
});
