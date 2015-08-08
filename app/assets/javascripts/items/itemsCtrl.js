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
}])