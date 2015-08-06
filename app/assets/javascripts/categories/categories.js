angular.module("bumbershoot")
.factory("categories", [
	"$http",
	function($http){
		var o = {
			categories: []
		};
		o.getAll = function(){
			return $http.get("/categories.json").success(function(data){
				angular.copy(data, o.categories)
			});
		};
		o.create = function(category){
			return $http.post("/categories.json", category).success(function(data){
				o.categories.push(data);
			});
		};
		o.get = function(id) {
			return $http.get("/categories/" + id +".json").then(function(res){
				return res.data;
			});
		};
		o.addItem = function(id, item){
			return $http.post("/categories/" + id + "/items.json", item);
		};
	return o;
}]);