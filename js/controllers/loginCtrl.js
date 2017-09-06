
// login controller
app.controller("loginCtrl", ['$scope', '$location', '$rootScope', function($scope , $location, $rootScope){
	
		$rootScope.named = "Madhu";
		var login = {"userEmail":"admin@gmail.com","password":"admin@123"};
		localStorage.setItem( 'userLogin', JSON.stringify(login) ); // saving the data into localStorage
		var loginDetail = JSON.parse(localStorage.getItem("userLogin")); // fatching data form localStorage
        
		/* Login function*/
		$scope.login = function(){
            if( !$scope.loginForm.$error.required )  {
				// checking the username and pwd condition
                if($scope.userEmail == loginDetail.userEmail && $scope.userPwd === loginDetail.password){
                    $scope.failed = "";
					// userName and pwd are correct then navigation to user list page
                    $location.path('/userList');
                }
                else {
                    $scope.failed = 'Authendication Failed.'; // 
                }
            }
            else {
                $scope.failed = 'All fields must be filled.';  
            }
        }
    }]);	
	
// view controller 	
app.controller("viewCtrl", ['$scope', '$location', '$rootScope','dataProvide', function($scope , $location, $rootScope, dataProvide){
	
	// alert($rootScope.named);
	// create user
	console.log('this data list got form service');
	console.log(dataProvide.getData());
	
	$scope.createUserpage =  function(){
		// naviation to create user page
		$location.path('/createUser');
	}
	
	// edit user record
	$scope.edit =  function(singleRec){
		$scope.editedUserContainer = true;
		$scope.editedUser = singleRec;
	}
	
	// save update
	$scope.saveContact =  function(){
		
		$scope.editedUserContainer = false;
	}
	
	$scope.cancelUpdate =  function(){
		
		$scope.editedUserContainer = false;
	}
	
	
	
	$scope.getList = dataProvide.getData();
		
}]);

// create user controller

app.controller('createCtrl', ['$scope', '$location','$rootScope','dataProvide', function($scope, $location, $rootScope, dataProvide){
	// alert($rootScope.named);
	$scope.createUser= function(){
		dataProvide.addData($scope.newUser);
		$location.path('/userList');
		//	alert(JSON.stringify($scope.newUser));
	}
	
	
	
}]);



app.service('dataProvide', function(){
	// create current date 
	var d = new Date();
	
	var date = d.getDate()+ d.getMonth()+1+d.getFullYear();
	var data =  [
  	{'id':1,
	'name':'Mavou',
	 'email':'Mavou@gmail.com',
	 'phone': '9795453523',
	 'age':29,
	 'gender':'M',
	 'address':'Bangalore',
	 'createdDate':date
	},
	{'id':2,
	'name':'Duncan',
	 'email':'Duncan@gmail.com',
	 'phone': '9795453523',
	 'age':29,
	 'gender':'F',
	 'address':'Bangalore',
	 'createdDate':date
	},
	{'id':3,
	'name':'Duncan',
	 'email':'Duncan@gmail.com',
	 'phone': '78878565643',
	 'age':29,
	 'gender':'M',
	 'address':'Bangalore',
	 'createdDate':date
	},
	{'id':4,
	'name':'Andy',
	 'email':'Andy@gmail.com',
	 'phone': '9787876576',
	 'age':29,
	 'gender':'F',
	 'address':'Bangalore',
	 'createdDate':date
	},
	{'id':5,
	'name':'Jon',
	 'email':'Jon@gmail.com',
	 'phone': '9787876576',
	 'age':29,
	 'gender':'F',
	 'address':'Bangalore',
	 'createdDate':date
	}
	];
	
	
	this.getData =  function(){
		return data;
		
	}
	
	this.addData =  function(d){
		d.id = data.length+1;
		data.push(d);
		
	}
	
});






