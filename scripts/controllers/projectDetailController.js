/* global mySite */

'use strict';

mySite.controller('projectDetailController', function($scope, $location) {
    $scope.projectDetails = '';

    var projectIndex = parseInt($location.path().split('/')[2]);
    if(projectIndex === 0) {
        $scope.projectDetails = 'fire_emblem_chronicles_of_the_abyss.md';
    } else if(projectIndex === 1) {
        $scope.projectDetails = 'super_mario_world_koopa_krisis.md';
    } else if(projectIndex === 2) {
        $scope.projectDetails = 'mathflash.md';
    } else if(projectIndex === 3) {
        $scope.projectDetails = 'impactjs_enemy_editor.md';
    } else if(projectIndex === 4) {
        $scope.projectDetails = 'paralleltext.md';
    } else if(projectIndex === 5) {
        $scope.projectDetails = 'docshare.md';
    } else {
        console.log('Project does not exist.');
    }
});
