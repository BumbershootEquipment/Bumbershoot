angular.module("bumbershoot")
.controller("CategoriesCtrl", [
"$scope",
"categories",
function($scope, categories){
	$scope.addCategory = function(){
		if(!$scope.category_name || $scope.category_name === ""){return;}
		categories.create({
			name: $scope.category_name,
		});
		$scope.category_name = "";
	}
	$scope.categories = categories.categories;
}])