function MainController($scope) {
    // $scope.test = "WORKING";
    var pages = ['view', 'find', 'update'];
    $scope.view = true;
    $scope.register = true;

    $scope.togglePage = function (clickedNavView){
        pages.forEach(function(page){
            if (page === clickedNavView){
            $scope[page] = true;
        } else {
            $scope[page] = false;
        }
        })
    }

    $scope.onSave = function (value) {
        console.log(value);
        console.log('Here');
        $scope.register = false;
    }
}

angular.module('social').component('main', {
    templateUrl: 'main.html',
    controller: MainController
});
