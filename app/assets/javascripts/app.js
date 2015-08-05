angular.module("bumbershoot", [])
.controller("MainCtrl", [
"$scope",
function($scope){
	$scope.items = [
		{name: "tent", category: "sleep", image: "Picture of a tent"},
		{name: "stove", category: "cook", image: "Picture of a stove"},
		{name: "lantern", category: "light", image: "Picture of a lantern"},
		{name: "fishing pole", category: "recreation", image: "Picture of a fishing pole"},
	]
}
])