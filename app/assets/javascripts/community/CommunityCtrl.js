angular.module('bumbershoot')
.controller("CommunityCtrl", [
"$scope",
"categories",
function($scope, categories){
	$scope.addCommunityItem = function(){
		if(!$scope.name || $scope.name === ""){return;}
		var id = $scope.category;
		categories.addItem(id, {
			name: $scope.name,
			corporate: false
		}).success(function(item){
			console.log("Item added")
		})
	};

	$scope.map = {
		center: {
			latitude: 40.7,
			longitude: -74
		},
		zoom: 12,
	};

	$scope.marker = {
		coords: {
			latitude: 40.715,
			longitude: -73.987
		}
	};
}])