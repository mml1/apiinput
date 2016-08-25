angular.module("nameFactory",[]).factory("NameFactory", function($http)
{
	var factory = {};
	var name = {};
	var allNames = [];

	factory.index = function(callback){
		console.log("in Index");
		$http.get("http://localhost:3000/users/index").success(function(names){
			console.log("return from ruby", names);
			allNames = names;
			callback(allNames)
		});
	};

	factory.create = function(name, callback){
		console.log(name);
		$http.get("http://localhost:3000/users/create/" + name).success(function(){
			console.log("came back")
			callback()
		});
	}

	return factory;

})