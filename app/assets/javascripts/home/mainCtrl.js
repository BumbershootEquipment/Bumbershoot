angular.module("bumbershoot")
.controller("MainCtrl", [
"$scope",
"Auth",
function($scope, Auth){
	$scope.signedIn = Auth.isAuthenticated;
	$scope.checkAdmin = Auth.isAdminAuthenticated;
}])










