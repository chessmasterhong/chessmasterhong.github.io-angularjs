'use strict';

mySite.controller('projectDetailController', function($scope, $location) {
    $scope.projectDetails = '';
    $scope.viewTitle = '';

    var projectIndex = parseInt($location.path().split('/')[2]);
    if(projectIndex === 0) {
        $scope.viewTitle = 'DocShare';
        $scope.projectDetails = 'docshare.md';
    } else if(projectIndex === 1) {
        $scope.viewTitle = 'ParallelText';
        $scope.projectDetails = 'paralleltext.md';
    } else if(projectIndex === 2) {
        $scope.viewTitle = 'ImpactJS Enemy Editor';
        $scope.projectDetails = 'impactjs_enemy_editor.md';
    } else if(projectIndex === 3) {
        $scope.viewTitle = 'MathFlash';
        $scope.projectDetails = 'mathflash.md';
    } else if(projectIndex === 4) {
        $scope.viewTitle = 'Super Mario World: Koopa Krisis';
        $scope.projectDetails = 'super_mario_world_koopa_krisis.md';
    } else if(projectIndex === 5) {
        $scope.viewTitle = 'Fire Emblem: Chronicles of the Abyss';
        $scope.projectDetails = 'fire_emblem_chronicles_of_the_abyss.md';
    } else {
        console.log('Project does not exist.');
    }
});
