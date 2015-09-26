angular.module("bumbershoot", ["ui.router", "templates", "Devise", "ngFileUpload", "uiGmapgoogle-maps"])
.config([
"$stateProvider",
"uiGmapGoogle-maps"
"$urlRouterProvider",
function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state("home", {
			url: "/home",
			templateUrl: "home/_home.html",
			controller: "MainCtrl",
		})
		.state("about", {
			url: "/about",
			templateUrl: "about/_about.html",
		})
		.state("community", {
			url: "/community",
			templateUrl: "community/_community.html",
			controller: "CommunityCtrl",
		})
		.state("equipment", {
			url: "/equipment",
			templateUrl: "equipment/_equipment.html",
			controller: "EquipCtrl",
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
			url: "/categories/{cat_id}/items/{item_id}",
			templateUrl: "items/_items.html",
			controller: "ItemsCtrl",
			resolve: {
				item: ["$stateParams", "items", function($stateParams, items){
					return items.get($stateParams.cat_id, $stateParams.item_id);
				}]
			}
		})
		.state("profile", {
			url: "/profile",
			templateUrl: "users/_profile.html",
			controller: "UsersCtrl",
			resolve:{
				user: ["$state", "Auth", function($state, Auth){
					return Auth.currentUser()
				}]
			}
		})
		.state("login", {
			url: "/login",
			templateUrl: "auth/_login.html",
			controller: "AuthCtrl",
			onEnter: ["$state", "Auth", function($state, Auth){
				Auth.currentUser().then(function (){
					$state.go("profile")
				})
			}]
		})
		.state("register", {
			url: "/register",
			templateUrl: "auth/_register.html",
			controller: "AuthCtrl",
			onEnter: ["$state", "Auth", function($state, Auth){
				Auth.currentUser().then(function (){
					$state.go("home");
				})
			}]
		});
	$urlRouterProvider.otherwise("home");
}])



