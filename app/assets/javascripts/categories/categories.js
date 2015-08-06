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
		}
		o.create = function(category){
			return $http.post("/categories.json", category).success(function(data){
				o.categories.push(data);
			});
		}
	return o;
}]);