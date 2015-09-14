angular.module("bumbershoot")
.factory("authentication", [
	"$http",
	function($http){
		var o = {
			authenication: []
		};
		o.registerEmail = function(user){
			return $http.post("/welcome_email", user);
		};
	return o;
}]);