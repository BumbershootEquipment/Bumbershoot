angular.module("bumbershoot", ["ui.router", "templates"])
.config([
"$stateProvider",
"$urlRouterProvider",
function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state("home", {
			url: "/home",
			templateUrl: "home/_home.html",
			controller: "MainCtrl",
			resolve: {
				categoryPromise: ["categories", function(categories){
					return categories.getAll();
				}]
			}
		})
		.state("categories", {
			url: "/categories/{id}",
			templateUrl: "categories/_categories.html",
			controller: "CategoriesCtrl",
			resolve: {
				category: ["$stateParams", "categories", function($stateParams, categories){
					return categories.get($stateParams.id);
				}]
			}
		})
		.state("items", {
			url: "/items/{id}",
			templateUrl: "items/_items.html",
			controller: "ItemsCtrl"
		});

	$urlRouterProvider.otherwise("home");
}])





