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
		.state("categories",{
			url: "/categories",
			templateUrl: "categories/_categories.html",
			controller: "CategoriesCtrl"
		})
		.state("items", {
			url: "/items/{id}",
			templateUrl: "items/_items.html",
			controller: "ItemsCtrl"
		});

	$urlRouterProvider.otherwise("home");
}])





