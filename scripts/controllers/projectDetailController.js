define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectDetailController', ['$scope', '$state', function($scope, $state) {
        $scope.projectDetails = '';
        $scope.viewTitle = '';
        $scope.slides = [];

        var projectIndex = parseInt($state.params.projectIndex);
        if(projectIndex === 0) {
            $scope.viewTitle = 'DocShare';
            $scope.projectDetails = CONFIG.PATH.POST.PROJ + 'docshare.html';
            $scope.slides = [
                { image: CONFIG.PATH.IMG + 'ds0.jpg', caption: '' },
                { image: CONFIG.PATH.IMG + 'ds1.jpg', caption: '' },
                { image: CONFIG.PATH.IMG + 'ds2.jpg', caption: '' },
                { image: CONFIG.PATH.IMG + 'ds3.jpg', caption: '' }
            ];
        } else if(projectIndex === 1) {
            $scope.viewTitle = 'ParallelText';
            $scope.projectDetails = CONFIG.PATH.POST.PROJ + 'paralleltext.html';
            $scope.slides = [
                { image: CONFIG.PATH.IMG + 'pt0.jpg', caption: '' },
                { image: CONFIG.PATH.IMG + 'pt1.jpg', caption: '' },
                { image: CONFIG.PATH.IMG + 'pt2.jpg', caption: '' }
            ];
        } else if(projectIndex === 2) {
            $scope.viewTitle = 'ImpactJS Enemy Editor';
            $scope.projectDetails = CONFIG.PATH.POST.PROJ + 'impactjs_enemy_editor.html';
            $scope.slides = [
                { image: CONFIG.PATH.IMG + 'editor0.jpg', caption: 'View all enemies\' data in a project through an organized table. Efficiently batch edit multiple enemy data.' },
                { image: CONFIG.PATH.IMG + 'editor1.jpg', caption: 'View enemy\'s data in a simple, easy to understand layout.' },
                { image: CONFIG.PATH.IMG + 'editor2.jpg', caption: 'Quickly edit enemy\'s data using dynamic forms parsed from the enemy\'s source code.' }
            ];
        } else if(projectIndex === 3) {
            $scope.viewTitle = 'MathFlash';
            $scope.projectDetails = CONFIG.PATH.POST.PROJ + 'mathflash.html';
            $scope.slides = [
                { image: CONFIG.PATH.IMG + 'mf0.jpg', caption: '' }
            ];
        } else if(projectIndex === 4) {
            $scope.viewTitle = 'Super Mario World: Koopa Krisis';
            $scope.projectDetails = CONFIG.PATH.POST.PROJ + 'super_mario_world_koopa_krisis.html';
            $scope.slides = [
                { image: CONFIG.PATH.IMG + 'smw0.jpg', caption: 'Title screen.' }
            ];
        } else if(projectIndex === 5) {
            $scope.viewTitle = 'Fire Emblem: Chronicles of the Abyss';
            $scope.projectDetails = CONFIG.PATH.POST.PROJ + 'fire_emblem_chronicles_of_the_abyss.html';
            $scope.slides = [
                { image: CONFIG.PATH.IMG + 'fe1.jpg', caption: 'Battle animations between a player unit and enemy unit.' },
                { image: CONFIG.PATH.IMG + 'fe2.jpg', caption: 'Player unit preparing to attack an enemy unit.' }
            ];
        } else {
            $state.go('404');
        }
    }]);
});
