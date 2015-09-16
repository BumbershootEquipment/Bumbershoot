angular.module("bumbershoot")
.controller("UsersCtrl", [
"$scope",
"user",
function($scope, user){
	$scope.user = user;
}])