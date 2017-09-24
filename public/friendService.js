angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http({
        method: "POST",
        URL: "/api/login",
        data: user
      })/* FIX ME */
    };

    this.getFriends = function( profile ) {
    	return $http ({
        method: "GET",
        URL: "/api/profile",
        data: profile
      })/* FIX ME */
    };

});
