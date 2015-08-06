angular.module("bumbershoot")
.controller("MainCtrl", [
"$scope",
"items",
function($scope, items){
	$scope.addItem = function(){
		if(!$scope.name || $scope.name === ""){return;}
		items.create({
			name: $scope.name,
			category: $scope.category,
			image: "Example Image",
			details: {
				description: "example description",
				color: "Example Colors"
			}
		});
		$scope.name = "";
	}
	$scope.items = items.items;
}])