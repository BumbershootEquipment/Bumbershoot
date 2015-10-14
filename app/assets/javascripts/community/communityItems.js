angular.module("bumbershoot")
.factory("communityItems", [
	"$http",
	function($http){
	var o = {
		communityItems: []
	};

	o.getAll = function(){
		return $http.get("/categories/0/items.json").success(function(data){
			angular.copy(data, o.items)
		});
	};
	
	return o;
}])