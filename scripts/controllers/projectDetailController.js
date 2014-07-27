'use strict';

mySite.controller('projectDetailController', function($scope, $location) {
    $scope.projectDetails = '';
    $scope.viewTitle = '';
    $scope.slides = [];

    var projectIndex = parseInt($location.path().split('/')[2]);
    if(projectIndex === 0) {
        $scope.viewTitle = 'DocShare';
        $scope.projectDetails = 'docshare.md';
        $scope.slides = [
            { url: 'media/images/ds0.png', caption: '' },
            { url: 'media/images/ds1.png', caption: '' },
            { url: 'media/images/ds2.png', caption: '' },
            { url: 'media/images/ds3.png', caption: '' }
        ];
    } else if(projectIndex === 1) {
        $scope.viewTitle = 'ParallelText';
        $scope.projectDetails = 'paralleltext.md';
        $scope.slides = [
            { url: 'media/images/pt0.png', caption: '' },
            { url: 'media/images/pt1.png', caption: '' },
            { url: 'media/images/pt2.png', caption: '' }
        ];
    } else if(projectIndex === 2) {
        $scope.viewTitle = 'ImpactJS Enemy Editor';
        $scope.projectDetails = 'impactjs_enemy_editor.md';
        $scope.slides = [
            { url: 'media/images/editor0.png', caption: 'View all enemies\' data in a project through an organized table. Efficiently batch edit multiple enemy data.' },
            { url: 'media/images/editor1.png', caption: 'View enemy\'s data in a simple, easy to understand layout.' },
            { url: 'media/images/editor2.png', caption: 'Quickly edit enemy\'s data using dynamic forms parsed from the enemy\'s source code.' }
        ];
    } else if(projectIndex === 3) {
        $scope.viewTitle = 'MathFlash';
        $scope.projectDetails = 'mathflash.md';
        $scope.slides = [
            { url: 'media/images/mf0.png', caption: '' }
        ];
    } else if(projectIndex === 4) {
        $scope.viewTitle = 'Super Mario World: Koopa Krisis';
        $scope.projectDetails = 'super_mario_world_koopa_krisis.md';
        $scope.slides = [
            { url: 'media/images/smw0.png', caption: 'Title screen.' }
        ];
    } else if(projectIndex === 5) {
        $scope.viewTitle = 'Fire Emblem: Chronicles of the Abyss';
        $scope.projectDetails = 'fire_emblem_chronicles_of_the_abyss.md';
        $scope.slides = [
            { url: 'media/images/fe1.png', caption: 'Battle animations between a player unit and enemy unit.' },
            { url: 'media/images/fe2.png', caption: 'Player unit preparing to attack an enemy unit.' }
        ];
    } else {
        console.log('Project does not exist.');
    }
});
