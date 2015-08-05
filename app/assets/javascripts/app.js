angular.module("bumbershoot", ["ui.router"])
.config([
"$stateProvider",
"$urlRouterProvider",
function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state("home", {
			url: "/home",
			templateUrl: "/home.html",
			controller: "MainCtrl"
		});
	$urlRouterProvider.otherwise("home");
}])

.controller("MainCtrl", [
"$scope",
"items",
function($scope, items){
	$scope.items = items.items;
}])

.factory("items", [function(){
	var o = {
		items: [
			{name: "tent", category: "sleep", image: "Picture of a tent"},
			{name: "stove", category: "cook", image: "Picture of a stove"},
			{name: "lantern", category: "light", image: "Picture of a lantern"},
			{name: "fishing pole", category: "recreation", image: "Picture of a fishing pole"}
		]};
	return o;
}])