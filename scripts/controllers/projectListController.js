define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectListController', ['$scope', 'ngDialog', function($scope, ngDialog) {
        $scope.projects = [];
        $scope.projects = [
            {
                title: 'DocShare',
                thumbnail: CONFIG.IMG_DIR_THUMB + 'ds.thumb.jpg',
                url_demo: '',
                url_source: '',
                excerpt: 'DocShare is a web application designed to allow users to create, modify, search, and share text documents. Think of text editing with a revision control system built in. Users can decide whom to share their documents with, assign read or write permissions to their documents, and view previous versions of their documents. Users with escalated privileges can be assigned to moderate the system. Built using PHP, MySQL, and HTML.'
            },
            {
                title: 'ParallelText',
                thumbnail: CONFIG.IMG_DIR_THUMB + 'pt.thumb.jpg',
                url_demo: 'http://parallel-text.herokuapp.com',
                url_source: '',
                excerpt: 'ParallelText is a web application built using Python on top of the Django web framework. This application enables users to read a text in two different languages in parallel. This allows users to compare a translation with an original version of a text. The idea of parallel editions of a text has a long history in publishing. Our goal was to create a web-based tool to easily create parallel texts. In essence, our project was an extension and generalization of this project previously attempted by one of our project members.'
            },
            {
                title: 'ImpactJS Enemy Editor',
                thumbnail: CONFIG.IMG_DIR_THUMB + 'editor.thumb.jpg',
                url_demo: '',
                url_source: 'https://bitbucket.org/chessmasterhong/smw-koopa-krisis_enemy-editor',
                excerpt: 'The ImpactJS Enemy Editor originally started out as a specialized tool designed for the Super Mario World: Koopa Krisis to assist us in quickly creating enemies. I later realized that this tool can be further extended to ImpactJS games in general. The aim is to provide a generic tool for ImpactJS developers to easily view and edit enemy files (either in bulk or as an individual file), quickly create new enemies, and to provide consistent code layout throughout files. This tool was heavily built on PHP, while utilizing some HTML5, CSS3, and JavaScript.'
            },
            {
                title: 'MathFlash',
                thumbnail: CONFIG.IMG_DIR_THUMB + 'mf.thumb.jpg',
                url_demo: '',
                url_source: '',
                excerpt: 'MathFlash is a web-based system designed to address existing problems regarding how mathematical content is displayed on the Internet. It attempts to remedy some of these problems by use of various methods to improve how content is presented and how to get the necessary information across to the user and retaining their learned material more effectively. This project was both an extension of my long-awaited personal desire to create such a system as well as my one-year undergraduate Computer Science capstone project at the City College of New York. The research topics incorporated into this project include adaptive response time-based sequencing and perceptual learning. MathFlash was built using PHP, Python (and a Python library), MySQL, and JavaScript (along with two JavaScript libraries), as well as utilizing HTML5 and CSS3 technologies.'
            },
            {
                title: 'Super Mario World: Koopa Krisis',
                thumbnail: CONFIG.IMG_DIR_THUMB + 'smw.thumb.jpg',
                url_demo: 'http://drksephy.bitbucket.org',
                url_source: 'https://bitbucket.org/DrkSephy/smw-koopa-krisis',
                excerpt: 'Super Mario World: Koopa Krisis is a remake of the original Super Mario World platformer for the Super Nintendo Entertainment System. The game was built using JavaScript on top of the ImpactJS game engine. The project was developed under the City College of New York chapter of the Association for Computing Machinery Game Development Student Interest Group for educational purposes only. The goals for this project were to create a web browser version of one of the Nintendo\'s most popular games, to understand how to use ImpactJS, and to learn JavaScript.'
            },
            {
                title: 'Fire Emblem: Chronicles of the Abyss',
                thumbnail: CONFIG.IMG_DIR_THUMB + 'fe.thumb.jpg',
                url_demo: '',
                url_source: 'https://github.com/chessmasterhong/WaterEmblem',
                excerpt: 'Fire Emblem: Chronicles of the Abyss is a web-based remake of Fire Emblem: Blazing Sword, a turn-based strategy role playing game for the Game Boy Advance, but with a different main character and plot twist. The game was built solely for educational purposes under the City College of New York chapter of the Association for Computing Machinery Game Development Student Interest Group. The game was developed in JavaScript utilizing the HTML5 canvas using the ImpactJS game engine. The main goals of this project are to recreate a game that we enjoyed playing, to create a fully completed, quality game, and to give back to the ImpactJS community by open-sourcing the code so as to assist other developers on how to create similar features in their own game. Furthermore, we wanted to see what ImpactJS was truly capable of and to push the limits of the game engine beyond what we had initially thought was possible.'
            }
        ];

        $scope.projects.reverse();

        $scope.openDialog = function(projectIndex) {
            $scope.projectIndex = parseInt(projectIndex);

            ngDialog.open({
                template: 'partials/templates/dialogBox.html',
                scope: $scope
            });
        }
    }]);
});
