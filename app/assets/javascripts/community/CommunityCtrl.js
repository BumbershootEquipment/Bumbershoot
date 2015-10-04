angular.module('bumbershoot')
.controller("CommunityCtrl", [
"$scope",
"categories",
"Auth",
"communityItems",
function($scope, categories, Auth, communityItems){

	$scope.items = communityItems.data;
	$scope.addCommunityItem = function(){
		var user; 
		Auth.currentUser().then(function(res){
			console.log(res.email)
			user = res
			if(!$scope.name || $scope.name === ""){return;}
			var id = $scope.category;
			categories.addItem(id, {
				name: $scope.name,
				corporate: false,
				owner: user.email,
				neighborhood: $scope.neighborhood
			}).success(function(item){
				console.log("Item added")
			})
		});
	};

	$scope.map = {
		center: {
			latitude: 40.7,
			longitude: -74
		},
		zoom: 12,
	};

	$scope.markerList = [
		{
			coords: {
				latitude: 40.715,
				longitude: -73.987
			},
			idKey: 1,
			message: "neighregs",
		},

		{
			coords: {
				latitude: 40.74,
				longitude: -73.987
			},
			idKey: 2,
			message: "neighregs",
		},
	];

}])