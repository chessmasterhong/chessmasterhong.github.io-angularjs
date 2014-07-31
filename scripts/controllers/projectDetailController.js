define([
    './module'
], function(controllers) {
    'use strict';

    controllers.controller('projectDetailController', function($scope, $state) {
        $scope.projectDetails = '';
        $scope.viewTitle = '';
        $scope.slides = [];

        var projectIndex = parseInt($state.params.projectIndex);
        if(projectIndex === 0) {
            $scope.viewTitle = 'DocShare';
            $scope.projectDetails = 'docshare.html';
            $scope.slides = [
                { url: 'media/images/ds0.jpg', caption: '' },
                { url: 'media/images/ds1.jpg', caption: '' },
                { url: 'media/images/ds2.jpg', caption: '' },
                { url: 'media/images/ds3.jpg', caption: '' }
            ];
        } else if(projectIndex === 1) {
            $scope.viewTitle = 'ParallelText';
            $scope.projectDetails = 'paralleltext.html';
            $scope.slides = [
                { url: 'media/images/pt0.jpg', caption: '' },
                { url: 'media/images/pt1.jpg', caption: '' },
                { url: 'media/images/pt2.jpg', caption: '' }
            ];
        } else if(projectIndex === 2) {
            $scope.viewTitle = 'ImpactJS Enemy Editor';
            $scope.projectDetails = 'impactjs_enemy_editor.html';
            $scope.slides = [
                { url: 'media/images/editor0.jpg', caption: 'View all enemies\' data in a project through an organized table. Efficiently batch edit multiple enemy data.' },
                { url: 'media/images/editor1.jpg', caption: 'View enemy\'s data in a simple, easy to understand layout.' },
                { url: 'media/images/editor2.jpg', caption: 'Quickly edit enemy\'s data using dynamic forms parsed from the enemy\'s source code.' }
            ];
        } else if(projectIndex === 3) {
            $scope.viewTitle = 'MathFlash';
            $scope.projectDetails = 'mathflash.html';
            $scope.slides = [
                { url: 'media/images/mf0.jpg', caption: '' }
            ];
        } else if(projectIndex === 4) {
            $scope.viewTitle = 'Super Mario World: Koopa Krisis';
            $scope.projectDetails = 'super_mario_world_koopa_krisis.html';
            $scope.slides = [
                { url: 'media/images/smw0.jpg', caption: 'Title screen.' }
            ];
        } else if(projectIndex === 5) {
            $scope.viewTitle = 'Fire Emblem: Chronicles of the Abyss';
            $scope.projectDetails = 'fire_emblem_chronicles_of_the_abyss.html';
            $scope.slides = [
                { url: 'media/images/fe1.jpg', caption: 'Battle animations between a player unit and enemy unit.' },
                { url: 'media/images/fe2.jpg', caption: 'Player unit preparing to attack an enemy unit.' }
            ];
        } else {
            $state.go('404');
        }
    });
});
