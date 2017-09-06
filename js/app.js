
var app = angular.module('sampleApp', ['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider.when('/', {
		
		templateUrl: "views/login.html",
		
	}).when('/userList', {
		templateUrl: "views/viewUsers.html",
		controller: 'viewCtrl'
		
	}).when('/createUser', {
		
		templateUrl: "views/createUser.html",
		controller: 'createCtrl'
		
	})
});








/*

angualrjs 

	index.html
		file:///D:/Others/Backup/Desktop/Angular_sample_project/index.html#!/

		
		#!/
		
controllers  
		
*/