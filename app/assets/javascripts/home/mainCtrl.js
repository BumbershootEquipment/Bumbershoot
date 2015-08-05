angular.module("bumbershoot")
.controller("MainCtrl", [
"$scope",
"items",
function($scope, items){
	$scope.addItem = function(){
		if(!$scope.name || $scope.name === ""){return;}
		$scope.items.push({
			name: $scope.name,
			category: "Misc.",
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