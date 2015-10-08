angular.module("bumbershoot")
.factory("profileFactory", [
	"$http",
	function($http){
		var o = {
			orders: [],
			items: []
		};
		o.getOrders = function(id){
			return $http.get("/profile/orders/" + id +".json").success(function(data){
				angular.copy(data, o.orders)
			});
		};
		o.getItems = function(id){
			return $http.get("/profile/items/" + id +".json").success(function(data){
				angular.copy(data, o.items)
			});
		};
	return o;
}]);