angular.module("dashboardsCtrl",[]).controller("DashboardsController", function($scope,NameFactory){
	// NameFactory.index(function(names){
	// 	$scope.names = names;
	// });
	$scope.addName = function(){
		console.log("in controller", $scope.name)

		NameFactory.create($scope.name, function(){
			console.log("back")
			NameFactory.index(function(names){
				console.log(names)
				$scope.names = names; 
			});
		});
		$scope.name = ""
	}

})
