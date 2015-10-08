angular.module("bumbershoot")
.controller("UsersCtrl", [
"$scope",
"userData",

function($scope, userData){
	userData.user.then(function(result){
		$scope.user = result
		userData.profileOrders(result).then(function(orders){
			$scope.orders = orders.data
		})
		userData.profileItems(result).then(function(items){
			$scope.items = items.data
		})
	})
}])