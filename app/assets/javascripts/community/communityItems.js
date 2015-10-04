angular.module("bumbershoot")
.factory("communityItems", [
	"$http",
	function($http){
		var o = {
			items: []
		};
		o.getAll = function(){
			return $http.get("/categories/0/items.json").success(function(data){
				angular.copy(data, o.items)
			});
		};
	return o;
}]);