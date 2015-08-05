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
		})
		.state("items", {
			url: "/items/{id}",
			templateUrl: "/items.html",
			controller: "ItemsCtrl"
		});

	$urlRouterProvider.otherwise("home");
}])

.controller("MainCtrl", [
"$scope",
"items",
function($scope, items){
	$scope.addItem = function(){
		if(!$scope.name || $scope.name === ""){return;}
		$scope.items.push({
			name: $scope.name,
			category: "Misc.",
			image: "Example Image",
			details: {
				description: "example description",
				color: "Example Colors"
			}
		});
		$scope.name = "";
	}
	$scope.items = items.items;
}])

.controller("ItemsCtrl", [
"$scope",
"$stateParams",
"items",
function($scope, $stateParams, items){
	$scope.item = items.items[$stateParams.id];
	$scope.addDetail = function(){
		if($scope.description === ""){return;}
		$scope.item.details = {
			description: $scope.description,
			size: $scope.size,
			color: $scope.color
		};
		$scope.description = "";
	}
}])

.factory("items", [function(){
	var o = {
		items: [
			{name: "tent", category: "sleep", image: "Picture of a tent", details: {color: "blue", size: "big", description: "example desc."} },
			{name: "stove", category: "cook", image: "Picture of a stove", details: {color: "blue", size: "big", description: "example desc."} },
			{name: "lantern", category: "light", image: "Picture of a lantern", details: {color: "blue", size: "big", description: "example desc."} },
			{name: "fishing pole", category: "recreation", image: "Picture of a fishing pole", details: {color: "blue", size: "big", description: "example desc."} }
		]};
	return o;
}])