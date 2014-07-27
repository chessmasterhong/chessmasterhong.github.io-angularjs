/* global mySite */

'use strict';

mySite.controller('projectListController', function($scope) {
    $scope.projects = [];
    $scope.projects = [
        {
            title: 'DocShare',
            thumbnail_style: 'background: url(media/images/ds1.png) no-repeat 0px -10px content-box; background-size: 260%;',
            url_demo: '',
            url_source: '',
            excerpt: 'WRITEME'
        },
        {
            title: 'ParallelText',
            thumbnail_style: 'background: url(media/images/pt0.png) no-repeat -5px -20px content-box; background-size: 190%;',
            url_demo: 'http://parallel-text.herokuapp.com',
            url_source: '',
            excerpt: 'WRITEME'
        },
        {
            title: 'ImpactJS Enemy Editor',
            thumbnail_style: 'background: url(media/images/editor0.png) no-repeat -5px -15px content-box; background-size: 280%;',
            url_demo: '',
            url_source: 'https://bitbucket.org/chessmasterhong/smw-koopa-krisis_enemy-editor',
            excerpt: 'WRITEME'
        },
        {
            title: 'MathFlash',
            thumbnail_style: 'background: url(media/images/mf0.png) no-repeat -10px -5px content-box; background-size: 220%;',
            url_demo: '',
            url_source: '',
            excerpt: 'WRITEME'
        },
        {
            title: 'Super Mario World: Koopa Krisis',
            thumbnail_style: 'background: url(media/images/smw0.png) no-repeat -45px -45px content-box; background-size: 200%;',
            url_demo: 'http://drksephy.bitbucket.org',
            url_source: 'https://bitbucket.org/DrkSephy/smw-koopa-krisis',
            excerpt: 'WRITEME'
        },
        {
            title: 'Fire Emblem: Chronicles of the Abyss',
            thumbnail_style: 'background: url(media/images/fe1.png) -125px -20px no-repeat content-box; background-size: 200%;',
            url_demo: '',
            url_source: 'https://github.com/chessmasterhong/WaterEmblem',
            excerpt: 'WRITEME'
        }
    ];
});
