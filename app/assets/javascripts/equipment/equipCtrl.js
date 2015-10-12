angular.module("bumbershoot")
.controller("EquipCtrl", [
"$scope",
"categories",
"Auth",
function($scope, categories, Auth){
	$scope.addCategory = function(){
		if(!$scope.name || $scope.name === ""){return;}
		categories.create({
			name: $scope.name
		});
		$scope.name = "";
	};

	$scope.categories = categories.categories;

	$scope.checkAdmin = Auth.isAdminAuthenticated;
}])
