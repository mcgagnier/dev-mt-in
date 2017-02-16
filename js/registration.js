function RegistrationController($scope) {
    // var Profile = function(profileName, profileTagLine, profileImage, profileBio) {
    //     this.profileName = profileName;
    //     this.profileTagline = profileTagLine;
    //     this.profileImage = profileImage;
    //     this.profileBio = profileBio;
    // }
    //
    // Profile.prototype.toString = function() {
    //     return this.profileName;
    // }
    //
    // var myProfile = new Profile(profileName, profileTagline, profileImage, profileBio);
    // myProfile.toString();

    function createProfile(profileName, profileTagline, profileImage, profileBio) {
        return {
            profileName: profileName,
            profileTagline: profileTagline,
            profileImage: profileImage,
            profileBio: profileBio
        };
    }

    $scope.user = createProfile("", "", "", "");
}

angular.module('social').component('registration', {
    bindings: {
        onSave: '&'
    },
    templateUrl: 'registration.html',
    controller: RegistrationController
});
