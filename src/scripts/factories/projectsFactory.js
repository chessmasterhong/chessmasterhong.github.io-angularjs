define([
    'factories/module'
], function(factories) {
    'use strict';

    factories.factory('projectsFactory', function() {
        var projects = [
            {
                title: 'Impact Atmospheric System Plugin',
                thumbnail: CONFIG.PATH.IMG + '0BzK_sWmObWZgdGhDT20yRmVWbzQ',
                urlDetails: CONFIG.PATH.POST.PROJ + 'impact_atmospheric_system_plugin.html',
                urlDemo: 'http://chessmasterhong.bitbucket.org/projects/impact-atmosphere/',
                urlSource: 'https://github.com/chessmasterhong/impact-atmosphere',
                excerpt: 'A plugin for the Impact game engine that simulates an atmospheric weather system, day/night cycles and seasonal cycles based on configurable real-world date, time, and geographical coordinates.',
                slides: [
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgSXZqNzJUemt1V3M', caption: 'It\'s a rainy day.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgY3A2UnpmRUVDaDQ', caption: 'Sunset.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgaXl0UUJiZmVLVG8', caption: 'Nighttime.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgNFZvMFp5d1lsNGM', caption: 'Fog effect using Perlin Noise.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgSXBMNjFBX1lUZ00', caption: 'Let it snow!' }
                ]
            },
            {
                title: 'Fire Emblem: Chronicles of the Abyss',
                thumbnail: CONFIG.PATH.IMG + '0BzK_sWmObWZgd1hLaDg2MHNJVVk',
                urlDetails: CONFIG.PATH.POST.PROJ + 'fire_emblem_chronicles_of_the_abyss.html',
                urlDemo: '',
                urlSource: 'https://github.com/chessmasterhong/WaterEmblem',
                excerpt: 'Fire Emblem: Chronicles of the Abyss is a web-based remake of Fire Emblem: Blazing Sword, a turn-based strategy role playing game for the Game Boy Advance, but with a different main character and plot twist. Developed in JavaScript utilizing the HTML5 canvas using the ImpactJS game engine. The main goals of this project are to recreate a game that we enjoyed playing, to create a fully completed, quality game, and to give back to the ImpactJS community by open-sourcing the code so as to assist other developers on how to create similar features in their own game. Furthermore, we wanted to see what ImpactJS was truly capable of and to push the limits of the game engine beyond what we had initially thought was possible.',
                slides: [
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgak81MzBFN0dlWVU', caption: 'Player unit preparing to attack an enemy unit.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgZGNNVHNkTDQ3UGM', caption: 'Battle animations between a player unit and enemy unit.' }
                ]
            },
            {
                title: 'Super Mario World: Koopa Krisis',
                thumbnail: CONFIG.PATH.IMG + '0BzK_sWmObWZgNWJFNnYtTk1pMjA',
                urlDetails: CONFIG.PATH.POST.PROJ + 'super_mario_world_koopa_krisis.html',
                urlDemo: 'http://drksephy.bitbucket.org',
                urlSource: 'https://bitbucket.org/DrkSephy/smw-koopa-krisis',
                excerpt: 'Super Mario World: Koopa Krisis is a remake of the original Super Mario World platformer for the Super Nintendo Entertainment System. Built using JavaScript on top of the ImpactJS game engine. The goals for this project were to create a web browser version of one of the Nintendo\'s most popular games, to understand how to use ImpactJS, and to learn JavaScript.',
                slides: [
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgZEZJdHhzYW5rQTg', caption: 'Title screen.' }
                ]
            },
            {
                title: 'MathFlash',
                thumbnail: CONFIG.PATH.IMG + '0BzK_sWmObWZgR0Q1TFdPdnBqWHc',
                urlDetails: CONFIG.PATH.POST.PROJ + 'mathflash.html',
                urlDemo: '',
                urlSource: '',
                excerpt: 'MathFlash is a web-based system designed to address existing problems regarding how mathematical content is displayed on the Internet. It attempts to remedy some of these problems by use of various methods to improve how content is presented and how to get the necessary information across to the user and retaining their learned material more effectively. Research topics include adaptive response time-based sequencing and perceptual learning. Awarded the 2014 Computer Science Outstanding Project Implementation Award at the City College of New York. MathFlash was built using PHP, Python, JavaScript, and MySQL, as well as utilizing HTML5 and CSS3 technologies.',
                slides: [
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgejZ6ZGxtOVZiNTQ', caption: 'Table of contents of topics.' }
                ]
            },
            {
                title: 'ImpactJS Enemy Editor',
                thumbnail: CONFIG.PATH.IMG + '0BzK_sWmObWZgQ1YyVHhrYU93dkk',
                urlDetails: CONFIG.PATH.POST.PROJ + 'impactjs_enemy_editor.html',
                urlDemo: '',
                urlSource: 'https://bitbucket.org/chessmasterhong/smw-koopa-krisis_enemy-editor',
                excerpt: 'The ImpactJS Enemy Editor originally started out as a specialized tool designed for the Super Mario World: Koopa Krisis to assist us in quickly creating enemies. I later realized that this tool can be further extended to ImpactJS games in general. The aim is to provide a generic tool for ImpactJS developers to easily view and edit enemy files (either in bulk or as an individual file), quickly create new enemies, and to provide consistent code layout throughout files. This tool was heavily built on PHP, while utilizing some HTML5, CSS3, and JavaScript.',
                slides: [
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgRjQ5aUxxTXlHR0E', caption: 'View all enemies\' data in a project through an organized table. Efficiently batch edit multiple enemy data.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgQXY5LWx0b1dRWVE', caption: 'View enemy\'s data in a simple, easy to understand layout.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgQThiRlBFZ1Q2cXM', caption: 'Quickly edit enemy\'s data using dynamic forms parsed from the enemy\'s source code.' }
                ]
            },
            {
                title: 'ParallelText',
                thumbnail: CONFIG.PATH.IMG + '0BzK_sWmObWZgLWs3a2pabG9yWms',
                urlDetails: CONFIG.PATH.POST.PROJ + 'paralleltext.html',
                urlDemo: 'http://parallel-text.herokuapp.com',
                urlSource: '',
                excerpt: 'ParallelText is a web application built using Python on top of the Django web framework. This application enables users to read a text in two different languages in parallel. This allows users to compare a translation with an original version of a text. The idea of parallel editions of a text has a long history in publishing. Our goal was to create a web-based tool to easily create parallel texts. In essence, our project was an extension and generalization of this project previously attempted by one of our project members.',
                slides: [
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgM1h5aWlyWmZ1b1U', caption: 'Home page.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgZEs0Ym1tWklVMm8', caption: 'Select a text, a chapter of the specified text, and the languages to display on the left-hand-side and right-hand-side.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgc0FrQ0xqQmNpeTQ', caption: 'The resulting text displayed in parallel in two different languages' }
                ]
            },
            {
                title: 'DocShare',
                thumbnail: CONFIG.PATH.IMG + '0BzK_sWmObWZgTTJHZGl2Y3F3Rjg',
                urlDetails: CONFIG.PATH.POST.PROJ + 'docshare.html',
                urlDemo: '',
                urlSource: '',
                excerpt: 'DocShare is a web application designed to allow users to create, modify, search, and share text documents. Think of text editing with a revision control system built in. Users can decide whom to share their documents with, assign read or write permissions to their documents, and view previous versions of their documents. Users with escalated privileges can be assigned to moderate the system. Built using PHP, MySQL, and HTML.',
                slides: [
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgWVc1anBmUU4yUE0', caption: 'Users will be notified of important events related to themselves or their documents via the notification system.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgY21IcDl2N2xMVzA', caption: 'Users are able to edit documents, grant access, or delete documents based on their current privilege on the document.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgaTZxT3pxS0lWRGM', caption: 'Users are able to iew their invitations to specific documents and decide whether to accept or decline.' },
                    { image: CONFIG.PATH.IMG + '0BzK_sWmObWZgdG1iMzdDQ2FWNTg', caption: 'Users are able to view their own or another user\'s profile.' }
                ]
            }
        ];

        return {
            getProjects: function(projectIndex) {
                if(typeof projectIndex !== 'undefined') {
                    projectIndex = parseInt(projectIndex);
                    if(projectIndex >= 0 && projectIndex < projects.length) {
                        return projects[projectIndex];
                    } else {
                        return null;
                    }
                } else {
                    return projects;
                }
            },

            getProjectCount: function() {
                return projects.length;
            }
        };
    });
});
