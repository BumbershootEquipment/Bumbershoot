angular.module("bumbershoot")
.controller("ItemsCtrl", [
"$scope",
"$stateParams",
"items",
function($scope, $stateParams, items){
	$scope.item = items.items[$stateParams.id];
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