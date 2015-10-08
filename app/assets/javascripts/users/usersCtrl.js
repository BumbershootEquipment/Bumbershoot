angular.module("bumbershoot")
.controller("UsersCtrl", [
"$scope",
"user",

function($scope, user){
	user.user.then(function(result){
		$scope.user = result
		user.profileOrders(result).then(function(orders){
			$scope.orders = orders.data
		})
		user.profileItems(result).then(function(items){
			$scope.items = items.data
		})
	})
}])