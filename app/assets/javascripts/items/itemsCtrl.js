angular.module("bumbershoot")
.controller("ItemsCtrl", [
"$scope",
"items",
"item",
function($scope, items, item){
	$scope.item = item;
	$scope.addDetail = function(){
		if($scope.description === ""){return;}
		$scope.item.details = {
			description: $scope.description,
			size: $scope.size,
			color: $scope.color
		};
		$scope.description = "";
	}
}])