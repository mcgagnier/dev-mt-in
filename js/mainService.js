angular.module('social').service('mainService', function() {
    this.createUser = function(user) {
        this.user = user;
    }

    this.getUser = function() {
        return this.user;
    }

})
