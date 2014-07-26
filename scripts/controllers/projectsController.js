/* global mySite */

'use strict';

mySite.controller('projectsController', function($scope) {
    $scope.projects = [];
    $scope.projects = [
        {
            title: 'Fire Emblem: Chronicles of the Abyss',
            thumbnail_style: '',
            url_details: '',
            url_demo: '',
            url_source: 'https://github.com/chessmasterhong/WaterEmblem'
        },
        {
            title: 'Super Mario World: Koopa Krisis',
            thumbnail_style: '',
            url_details: '',
            url_demo: 'http://drksephy.bitbucket.org',
            url_source: 'https://bitbucket.org/DrkSephy/smw-koopa-krisis'
        },
        {
            title: 'MathFlash',
            thumbnail_style: '',
            url_details: '',
            url_demo: '',
            url_source: ''
        },
        {
            title: 'ImpactJS Enemy Editor',
            thumbnail_style: '',
            url_details: '',
            url_demo: '',
            url_source: 'https://bitbucket.org/chessmasterhong/smw-koopa-krisis_enemy-editor'
        },
        {
            title: 'ParallelText',
            thumbnail_style: '',
            url_details: '',
            url_demo: 'http://parallel-text.herokuapp.com',
            url_source: ''
        },
        {
            title: 'DocShare',
            thumbnail_style: '',
            url_details: '',
            url_demo: '',
            url_source: ''
        }
    ];
});
