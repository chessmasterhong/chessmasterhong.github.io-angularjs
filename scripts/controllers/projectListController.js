/* global mySite */

'use strict';

mySite.controller('projectListController', function($scope) {
    $scope.projects = [];
    $scope.projects = [
        {
            title: 'Fire Emblem: Chronicles of the Abyss',
            thumbnail_style: '',
            url_details: '6',
            url_demo: '',
            url_source: 'https://github.com/chessmasterhong/WaterEmblem',
            excerpt: 'WRITEME'
        },
        {
            title: 'Super Mario World: Koopa Krisis',
            thumbnail_style: '',
            url_details: '5',
            url_demo: 'http://drksephy.bitbucket.org',
            url_source: 'https://bitbucket.org/DrkSephy/smw-koopa-krisis',
            excerpt: 'WRITEME'
        },
        {
            title: 'MathFlash',
            thumbnail_style: '',
            url_details: '4',
            url_demo: '',
            url_source: '',
            excerpt: 'WRITEME'
        },
        {
            title: 'ImpactJS Enemy Editor',
            thumbnail_style: '',
            url_details: '3',
            url_demo: '',
            url_source: 'https://bitbucket.org/chessmasterhong/smw-koopa-krisis_enemy-editor',
            excerpt: 'WRITEME'
        },
        {
            title: 'ParallelText',
            thumbnail_style: '',
            url_details: '2',
            url_demo: 'http://parallel-text.herokuapp.com',
            url_source: '',
            excerpt: 'WRITEME'
        },
        {
            title: 'DocShare',
            thumbnail_style: '',
            url_details: '1',
            url_demo: '',
            url_source: '',
            excerpt: 'WRITEME'
        }
    ];
});
