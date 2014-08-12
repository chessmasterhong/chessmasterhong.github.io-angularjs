$scope.openDialog = function(projectIndex) {
    $scope.projectIndex = $scope.projects.length - projectIndex - 1;
    ngDialog.open({
        template: CONFIG.PATH.TMPL + 'dialogBox-projectList.html',
        scope: $scope
    });
};
