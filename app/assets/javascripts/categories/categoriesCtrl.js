angular.module("bumbershoot")
.controller("CategoriesCtrl", [
"$scope",
"categories",
"category",
function($scope, categories, category){
	$scope.category = category;
	$scope.addItem = function(){
		if(!$scope.name || $scope.name === ""){return;}
		categories.addItem(category.id, {
			name: $scope.name,
		}).success(function(item){
			$scope.category.items.push(item);
		});
		$scope.name = "";
	};
}])