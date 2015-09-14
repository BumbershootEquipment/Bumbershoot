angular.module("bumbershoot")
.controller("AuthCtrl", [
"$scope",
"$state",
"Auth",
"authentication",
function($scope, $state, Auth, authentication){
	$scope.login = function(){
		Auth.login($scope.user).then(function(){
			$state.go("home");
		});
	};
	$scope.register = function(){
		Auth.register($scope.user).then(function(){
			authentication.registerEmail(
				$scope.user
			).success(function(){
				console.log("Email sent")
			});
			$state.go("home");
		});
	};
}]);