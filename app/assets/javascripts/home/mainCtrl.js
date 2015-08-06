angular.module("bumbershoot")
.controller("MainCtrl", [
"$scope",
"items",
function($scope, items){
	$scope.addItem = function(){
		if(!$scope.item_name || $scope.item_name === ""){return;}
		items.create({
			name: $scope.item_name,
			category_id: $scope.category,
			image: "Example Image",
			details: {
				description: "example description",
				color: "Example Colors"
			}
		});
		$scope.name = "";
		$scope.category = "";
	}
	$scope.items = items.items;
}])