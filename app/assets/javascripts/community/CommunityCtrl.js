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
			user = res
			if(!$scope.name || $scope.name === ""){return;}
			var id = $scope.category;
			categories.addItem(id, {
				name: $scope.name,
				corporate: false,
				owner: user.email,
				owner_id: user.id,
				neighborhood: $scope.neighborhood
			}).success(function(item){
			})
		});
	};

	$scope.selectNeighborhood = function(){
		$scope.neighborhood = $scope.newNeighborhood
	};

	$scope.map = {
		center: {
			latitude: 40.7,
			longitude: -74
		},
		zoom: 10,
	};

	$scope.markerList = [
		{
			coords: {
				latitude: 40.783,
				longitude: -73.973
			},
			idKey: 1,
			message: "Manhattan",
		},

		{
			coords: {
				latitude: 40.68,
				longitude: -73.959
			},
			idKey: 2,
			message: "Brooklyn",
		},
		{
			coords: {
				latitude: 40.725,
				longitude: -73.887
			},
			idKey: 3,
			message: "Queens",
		},
		{
			coords: {
				latitude: 40.845,
				longitude: -73.86
			},
			idKey: 3,
			message: "The Bronx",
		},
		{
			coords: {
				latitude: 40.58,
				longitude: -74.15
			},
			idKey: 3,
			message: "Staten Island",
		},
		{
			coords: {
				latitude: 40.725,
				longitude: -74.06
			},
			idKey: 3,
			message: "North Jersey",
		},
	];

}])