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

		o.communityItemEmail = function(user){
			return $http.get("/community_item/"+ user.id);
		};
	return o;
}]);