angular.module("bumbershoot")
.controller("NavCtrl", [
"$scope",
"Auth",
function($scope, Auth){
	$scope.signedIn = Auth.inAuthenticated;
	$scope.logout = Auth.logout;
	Auth.currentUser().then(function (user){
		$scope.user = user;
	});
	$scope.$on("devise:new-registration", function (e, user){
		$scope.user = user;
	});
	$scope.$on("devise:login", function (e, user){
		$scope.user = user;
	});
	$scope.$on("devise:logout", function (e, user) {
		$scope.user = {};
	});
}])