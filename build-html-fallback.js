/**
 *  Custom HTML fallback generator for chessmasterhong.github.io
 *  Author: Kevin Chan
 */

'use strict';

var fs = require('fs'),
    path = require('path');

var charset = 'utf8';

var pathMain = path.join(__dirname, 'index.html');

fs.readFile(pathMain, charset, function(err, dataMain) {
    if(!err) {
        var index = dataMain.replace(/(data-)?ng-cloak\s*/gi, '')
                            .replace(/(href=")(?=common\/styles\/site\.min\.css")/gi, '$1../')
                            .replace(/(src=")(?=common\/scripts\/site\.min\.js")/gi, '$1../');

        var pages = ['about', 'contact', 'credits'];

        pages.forEach(function(page) {
            fs.readFile(path.join(__dirname, page, page + '.partial.html'), charset, function(err, dataView) {
                fs.writeFile(
                    path.join(__dirname, page, 'index.html'),
                    index.replace(/\s+data-ui-view(>)(?=<\/section>)/gi, '$1' + dataView)
                         .replace(new RegExp('data-ng-class="{\\s*active:\\s*isActive\\(\'' + page + '\'\\)\\s+}"', 'g'), 'class="active"')
                         .replace(/\s+(data-)?ng-.*?=".*?"/gi, ''),
                    charset);
            });
        });
    } else {
        console.log(err);
    }
});

fs.readFile(pathMain, charset, function(err, dataMain) {
    if(!err) {
        var index = dataMain.replace(/(data-)?ng-cloak\s*/gi, '')
                            .replace(/(href=")(?=common\/styles\/site\.min\.css")/gi, '$1../')
                            .replace(/(src=")(?=common\/scripts\/site\.min\.js")/gi, '$1../')
                            .replace(/data-ng-class="{\s*active:\s*isActive\('projects'\)\s+}"/g, 'class="active"');

        fs.readFile(path.join(__dirname, 'projects', 'projectList.partial.html'), charset, function(err, dataView) {
            var showcaseTemplate = dataView.match(/<div\s+data-ng-repeat="project\s+in\s+projects(.*)(?=<\/div>.*<h2>Other\sworks)/gi)[0],
                otherworksTemplate = dataView.match(/<span\s+data-ng-repeat="project\s+in\s+projects(.*)(?=<\/div>)/gi)[0];

            var view = dataView.replace(/(<div\s+data-ng-repeat="project\s+in\s+projects).*(?=<\/div>.*<h2>Other\sworks)/gi, '')
                               .replace(/<span\s+data-ng-repeat="project\s+in\s+projects.*(?=<\/div>)/gi, '');

            fs.readFile(path.join(__dirname, 'projects', 'projects.json'), charset, function(err, dataJSON) {
                var json = JSON.parse(dataJSON.replace(/\)]}',/, '')).reverse();

                var row = 0;
                json.forEach(function(project, projIndex) {
                    projIndex = projIndex.toString();

                    fs.readFile(path.join(__dirname, 'projects', projIndex, projIndex + '.partial.html'), charset, function(err, dataView) {
                        fs.writeFile(
                            path.join(__dirname, 'projects', projIndex, 'index.html'),
                            index.replace(/\s+data-ui-view(>)(?=<\/section>)/gi, '$1<h1>Projects &raquo; ' + project.title + '</h1>' + dataView)
                                 .replace(/(?=\.\.\/common)/gi, '../')
                                 .replace(/\s+(data-)?ng-.*?=".*?"/gi, ''),
                            charset
                        );
                    });

                    if(project.showcase === true) {
                        view = view.replace(/(<h2>Showcase<\/h2>*<div\s*class="projects">)/gi, '$1' +
                            showcaseTemplate.replace(/data-ng-class-even="'views-row\s+views-row-even'"\s+data-ng-class-odd="'views-row\s+views-row-odd'"/gi, 'class="views-row views-row-' + (row++ % 2 ? 'even' : 'odd') + '"')
                                            .replace(/\{\{\s*project\.projectIndex\s*}}/g, projIndex)
                                            .replace(/\{\{\s*project\.title\s*}}/g, project.title)
                                            .replace(/\{\{\s*project\.thumbnail\s*}}/g, project.thumbnail)
                                            .replace(/(href=")\/#(?=\/.*?")/gi, '$1')
                                            .replace(/\{\{\s*project\.urlDemo\s*}}/g, project.urlDemo)
                                            .replace(/\{\{\s*project\.urlSource\s*}}/g, project.urlSource)
                                            .replace(/\s*data-ng-bind="project\.title"(>)/g, '$1' + project.title)
                                            .replace(/\s*data-ng-bind="project\.excerpt"(>)/g, '$1' + project.excerpt)
                                            .replace(/data-ng-(?=src)/g, '')
                                            .replace(/<span\s+class="spacer"\s+data-ng-show="project.urlDemo"><\/span>(.*?)<\/a>/gi, project.urlDemo ? '<span class="spacer"></span>$1</a>' : '')
                                            .replace(/<span\s+class="spacer"\s+data-ng-show="\(project\.urlDemo\s*\&\&\s*project\.urlSource\)\s*\|\|\s*project\.urlSource"><\/span>(.*?)<\/a>/gi, project.urlSource ? '<span class="spacer"></span>$1</a>' : '')
                            );
                    } else {
                        view = view.replace(/(<h2>Other works<\/h2>*<div\s*class="projects">)/gi, '$1' +
                            otherworksTemplate.replace(/data-ng-class="'views-row'"/gi, 'class="views-row"')
                                              .replace(/\{\{\s*project\.projectIndex\s*}}/g, projIndex)
                                              .replace(/\{\{\s*project\.title\s*}}/g, project.title)
                                              .replace(/\{\{\s*project\.thumbnail\s*}}/g, project.thumbnail)
                                              .replace(/(href=")\/#(?=\/.*?")/gi, '$1')
                                              .replace(/data-ng-(?=src)/g, '')
                            );
                    }
                });

                fs.writeFile(
                    path.join(__dirname, 'projects', 'index.html'),
                    index.replace(/\s+data-ui-view(>)(?=<\/section>)/gi, '$1' + view)
                         .replace(/\s+(data-)?ng-.*?=".*?"/gi, ''),
                    charset
                );
            });
        });
    } else {
        console.log(err);
    }
});

fs.readFile(pathMain, charset, function(err, dataMain) {
    if(!err) {
        var index = dataMain.replace(/(data-)?ng-cloak\s*/gi, '')
                            .replace(/(href=")(?=common\/styles\/site\.min\.css")/gi, '$1../')
                            .replace(/(src=")(?=common\/scripts\/site\.min\.js")/gi, '$1../')
                            .replace(/data-ng-class="{\s*active:\s*isActive\('resources'\)\s+}"/g, 'class="active"');

        fs.readFile(path.join(__dirname, 'resources', 'resourceList.partial.html'), charset, function(err, dataView) {
            fs.writeFile(
                path.join(__dirname, 'resources', 'index.html'),
                index.replace(/\s+data-ui-view(>)(?=<\/section>)/gi, '$1' + dataView)
                     .replace(/\s+(data-)?ng-.*?=".*?"/gi, ''),
                charset
            );
        });
    } else {
        console.log(err);
    }
});

fs.readFile(pathMain, charset, function(err, dataMain) {
    if(!err) {
        var index = dataMain.replace(/(data-)?ng-cloak\s*/gi, '');

        fs.readFile(path.join(__dirname, 'home', 'home.partial.html'), charset, function(err, dataView) {
            fs.writeFile(
                pathMain,
                index.replace(/(\s+data-ui-view>)(?=<\/section>)/gi, '$1' + dataView),
                     //.replace(/data-ng-class="{\s*active:\s*isActive\('home'\)\s+}"/g, 'class="active"');
                charset
            );
        });
    } else {
        console.log(err);
    }
});
