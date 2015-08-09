angular.module("bumbershoot")
.controller("ItemsCtrl", [
"$scope",
"Upload",
"items",
"item",
function($scope, Upload, items, item){
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