angular.module("bumbershoot")
.controller("CategoriesCtrl", [
"$scope",
"Upload",
"categories",
"category",
function($scope, Upload, categories, category){
	$scope.category = category;
	$scope.addCorporateItem = function(){
		if(!$scope.name || $scope.name === ""){return;}
		categories.addItem(category.id, {
			name: $scope.name,
			corporate: true
		}).success(function(item){
			$scope.category.items.push(item);
		});
		$scope.name = "";
	};

}])