angular.module("bumbershoot")
.controller("EquipCtrl", [
"$scope",
"categories",
function($scope, categories){
	$scope.addCategory = function(){
		if(!$scope.name || $scope.name === ""){return;}
		categories.create({
			name: $scope.name
		});
		$scope.name = "";
	};

	$scope.categories = categories.categories;
}])
