
angular.module('social').controller('mainCtrl', function($scope, mainService) {
    // $scope.test = "WORKING";
    var pages = ['view', 'find', 'update'];
    $scope.view = true;

    $scope.togglePage = function (clickedNavView){
        pages.forEach(function(page){
            if (page === clickedNavView){
            $scope[page] = true;
        } else {
            $scope[page] = false;
        }
        })
    }

    $scope.createUser = function(user) {
        mainService.createUser(user);
    }

});
