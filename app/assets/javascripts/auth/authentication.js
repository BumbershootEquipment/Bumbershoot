angular.module("bumbershoot")
.factory("authentication", [
	"$http",
	function($http){
		var o = {
			authenication: []
		};
		o.registerEmail = function(user){
			return $http.post("/register", user);
		};
	return o;
}]);