angular.module("bumbershoot")
.factory("items", [
	"$http",
	function($http){
	var o = {
		items: []
	};

	o.get = function(cat_id, item_id) {
		return $http.get("/categories/" + cat_id + "/items/" + item_id + ".json").then(function(res){
			return res.data;
		});
	};

	o.addDescription = function(cat_id, item_id, description) {
		return $http.post("/categories/" + cat_id + "/items/" + item_id + "/descriptions.json", description);
	};


	o.placeOrder = function(cat_id, item_id, order) {
		return $http.post("categories/" + cat_id + "/items/" + item_id + "/orders.json", order); 
	};

	o.corporateOrderEmail = function(user){
		return $http.get("/corporate_order/"+ user);
	};

// 	o.getAll = function(){
// 		return $http.get("/categories/0/items.json").success(function(data){
// 			angular.copy(data, o.items)
// 		})
// 	};
// 	o.create = function(item) {
// 		return $http.post("/categories/0/items.json", item).success(function(data){
// 			o.items.push(data);
// 		});
// 	};
	return o;
}])



