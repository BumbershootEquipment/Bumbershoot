angular.module("bumbershoot", [])
.controller("MainCtrl", [
"$scope",
function($scope){
	$scope.items = [
		"item1",
		"item2",
		"item3",
		"item4",
		"item5"
	]
}
])