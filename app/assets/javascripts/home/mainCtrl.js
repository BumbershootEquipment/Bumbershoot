angular.module("bumbershoot")
.controller("MainCtrl", [
"$scope",
"categories",
function($scope, categories){
	$scope.addCategory = function(){
		if(!$scope.name || $scope.name === ""){return;}
		categories.create({
			name: $scope.name
		});
		$scope.name = "";
	}
	$scope.categories = categories.categories
}])







	// $scope.category = categories[$stateParams.id];
	// $scope.addItem = function(){
	// 	if(!$scope.item_name || $scope.item_name === ""){return;}
	// 	items.create(
	// 		{name: $scope.item_name,
	// 		category: $scope.category}
	// 	);
	// 	$scope.item_name = "";
	// }
	// $scope.items = items.items;





