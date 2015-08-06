angular.module("bumbershoot")
.factory("items", [
	"$http",
	function($http){
	var o = {
		items: [
			{name: "tent", category: "sleep", image: "Picture of a tent", details: {color: "blue", size: "big", description: "example desc."} },
			{name: "stove", category: "cook", image: "Picture of a stove", details: {color: "blue", size: "big", description: "example desc."} },
			{name: "lantern", category: "light", image: "Picture of a lantern", details: {color: "blue", size: "big", description: "example desc."} },
			{name: "fishing pole", category: "recreation", image: "Picture of a fishing pole", details: {color: "blue", size: "big", description: "example desc."} }
		]};
	o.getAll = function(){
		return $http.get("/items.json").success(function(data){
			angular.copy(data, o.items)
		})
	}
	return o;
}])