angular.module("bumbershoot", ["ui.router", "templates"])
.config([
"$stateProvider",
"$urlRouterProvider",
function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state("home", {
			url: "/home",
			templateUrl: "home/_home.html",
			controller: "MainCtrl"
		})
		.state("items", {
			url: "/items/{id}",
			templateUrl: "items/_items.html",
			controller: "ItemsCtrl"
		});

	$urlRouterProvider.otherwise("home");
}])





