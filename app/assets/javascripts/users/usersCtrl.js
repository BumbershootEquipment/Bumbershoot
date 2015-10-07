angular.module("bumbershoot")
.controller("UsersCtrl", [
"$scope",
"user",
"profileFactory"
function($scope, user, profileFactory){
	$scope.user = user;
}])