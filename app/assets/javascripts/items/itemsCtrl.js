angular.module("bumbershoot")
.controller("ItemsCtrl", [
"$scope",
"items",
"item",
function($scope, items, item){
	$scope.item = item;
	$scope.addDescription = function(){
		if($scope.body === ""){return;}
		items.addDescription(item.category_id, item.id, {
			body: $scope.body,
		}).success(function(data){
			console.log(data)
			$scope.item.description = data
		});
		$scope.body = "";
	};

	$scope.placeOrder = function(){
		$scope.offline = true;
		items.placeOrder(item.category_id, item.id, {
			user_id: user.id,
			comments: ($scope.comments) ? $scope.comments : "Standard Order",
		}).then(function(){
			items.corporateOrderEmail(
				user
			).success(function(data){
				console.log("order email")
			});
		});
	};

}])