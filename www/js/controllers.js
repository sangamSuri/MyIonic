angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('departmentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('facilityCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {

}])
   
.controller('menuCtrl', ['$scope', '$stateParams','$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope) {

$scope.show = false;

}])
.controller('profileCtrl', ['$scope', '$stateParams','$http','userdetails', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,userdetails) {
  $scope.UserName ="";
  $scope.GetDetails = function(){
      var _userdetails = userdetails;
    var userDetails = _userdetails.getUserdetails();
      
      userDetails.userName;
      $http({
    method: "GET",
    url: "http://192.168.1.16:8080/Feedback/ListStudents/"+userDetails.userName,
    dataType: "json",
	  contentType: 'application/json',
	})
		.success(function(data){
      $scope.Branch = data[0].branch;
      $scope.SEM = data[0].sem;
      $scope.USN = data[0].studentUSN;
			$scope.EmailID = data[0].email;
      $scope.UserName = data[0].studentName;
      $scope.Mobile = data[0].mobileNo;
      alert(data);
		})
		.error(function(){
			alert("some thing went wrong");
		});

  }
    

}])
.controller('resultCtrl', ['$scope', '$stateParams','$http','userdetails', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,userdetails) {
  $scope.UserName ="";
  $scope.myResult = [];
  $scope.myResultSubName = {
    'examType':'',
    'sub1':'',
    'sub2':'',
    'sub3':'',
    'sub4':'',
    'sub5':'',
    'sub6':'',
    'sub7':'',
    'sub8':'',
    'sub9':'',
    'sub10':'',
    'CGPA':'',
    'SGPA':'',
  };

  $scope.GetDetails = function(){
      var _userdetails = userdetails;
      var userDetails = _userdetails.getUserdetails();
      var User = {
        "sem":userDetails.sem,
        "branch":userDetails.branch,
        "studentUSN":userDetails.id
      }
      userDetails.userName;
      $http({
          method: "POST",
          url: "http://192.168.1.16:8080/Feedback/result",
          dataType: "json",
          contentType: 'application/json',
          data : JSON.stringify(User)
  	})
		.success(function(data){
       
       $scope.myResultSubName.examType = "type";
       $scope.myResultSubName.sub1 = data[0].sub1Name;
       $scope.myResultSubName.sub2 = data[0].sub2Name;
       $scope.myResultSubName.sub3 = data[0].sub3Name;
       $scope.myResultSubName.sub4 = data[0].sub4Name;
       $scope.myResultSubName.sub5 = data[0].sub5Name;
       $scope.myResultSubName.sub6 = data[0].sub6Name;
       $scope.myResultSubName.sub7 = data[0].sub7Name;
       $scope.myResultSubName.sub8 = data[0].sub8Name;
       $scope.myResultSubName.sub9 = data[0].sub9Name;
       $scope.myResultSubName.sub10 = data[0].sub10Name;
       $scope.myResultSubName.CGPA = "CGPA";
       $scope.myResultSubName.SGPA = "SGPA";

       $scope.myResult = data;

		})
		.error(function(){
			alert("some thing went wrong");
		});

  }
}])

.controller('facCtrl', ['$scope', '$stateParams','$http','$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$location) {
  
  $scope.uProfile = function(){
    $location.path('/StuDetailsHome');
    $location.replace();
  }

  $scope.getfac = function(){
    $location.path('/facultiesList');
    $location.replace();
  }


}])

.controller('facultiesListFCtrl', ['$scope', '$stateParams','$http','userdetails', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,userdetails) {
  $scope.UserName ="";
  $scope.GetFaculties = function(){
    var _userdetails = userdetails;
    var userDetails = _userdetails.getUserdetails();
      
  userDetails.userName;
  $http({
    method: "GET",
    url: "http://192.168.1.16:8080/Feedback/ListFac/"+userDetails.branch,
    dataType: "json",
	  contentType: 'application/json',
	})
		.success(function(data){
      $scope.faculties = data;
		})
		.error(function(){
			alert("some thing went wrong");
		});

  }
    

}])
.controller('StuDetailCtrl', ['$scope', '$stateParams','$http','userdetails', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,userdetails) {
  $scope.UserName ="";
  $scope.students = [];

   $scope.showSelectValue = function(val){
    $scope.sem = val;
   }  
  $scope.GetStu = function(){
    
    var _userdetails = userdetails;
    var userDetails = _userdetails.getUserdetails();
      
  userDetails.userName;
  $http({
    method: "GET",
    url: "http://192.168.1.16:8080/Feedback/ListStudentDetails/"+userDetails.branch+"/sem/"+$scope.sem,
    dataType: "json",
	  contentType: 'application/json',
	})
		.success(function(data){
      $scope.students = data;
		})
		.error(function(){
			alert("some thing went wrong");
		});

  }
    

}])

.controller('StuHomeCtrl',[ '$scope', '$stateParams','$location',
function($scope, $stateParams,$location) {
  
  $scope.uProfile = function(){
    $location.path('/side-menu21/profile');
    $location.replace();
  }
  $scope.faculty = function(){
    $location.path('/facultiesList');
    $location.replace();
  } 

  $scope.exams = function(){
    $location.path('/side-menu21/page11');
    $location.replace();
  }

  $scope.sports = function(){
    $location.path('/side-menu21/page10');
    $location.replace();
  }
  $scope.placement = function(){
    $location.path('/side-menu21/page6');
    $location.replace();
  }
  $scope.myResult = function(){
    $location.path('/resultCtrl');
    $location.replace();
  }
}])
.controller('logoutCtrl',
function($scope,$rootScope,$location){
    $rootScope.isUserLoggedIn = false;
    window.location.href='#/side-menu21/page4';
  }
)
.controller('loginCtrl', ['$scope', '$stateParams','$ionicPopup','$location','$http', '$rootScope','userdetails',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup,$location,$http,$rootScope,userdetails) {

var _userdetails = userdetails;
$scope.who = function(){
  $scope.favorite = { 'User': 'Student' };
     var myPopup = $ionicPopup.show({
    template: `<ion-list>
        <ion-radio ng-model="favorite.User" ng-value="'Student'">Student</ion-radio>
        <ion-radio ng-model="favorite.User" ng-value="'Faculty'">Faculty</ion-radio>
    </ion-list>`,
    title: 'login',
    subTitle: '',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.favorite.User) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
             
          } else {
            return $scope.favorite.User;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    $scope.role = res;
  });
};

$scope.User = {
  "username":'',
  "password":'',
  "role": '' 
}
if($scope.role === undefined){
  $scope.role = 'Student';
}
$rootScope.profile = true;
$scope.Login = function(User){
  User.role = $scope.role;
  $http({
    method: "POST",
    url: "http://192.168.1.16:8080/Feedback/Login",
    dataType: "json",
	  contentType: 'application/json',
  	data : JSON.stringify(User)
	})
		.success(function(data){
      if(data[0].status){
         _userdetails.setUserDetails(data[0].id,data[0].branch,data[0].sem);
         var test = _userdetails.getUserdetails();
        //  alert(test.id);
        $rootScope.isUserLoggedIn = true;
			if(data[0].role === 'Lecturer' || data[0].role === 'HOD'){
			//window.location.replace("home.html");	
			alert("welcome ");
        $location.path('/side-menu21/FacHome');
        $location.replace();
			}else if(data[0].role === 'Student'){
      alert("welcome ");
        window.location.href='#/StuHome'
      }
      }else{
				//window.location.replace("index.html");
        $rootScope.isUserLoggedIn = null;
        alert("Check with your admin");
        window.location.href='#/side-menu21/page4'
			}
			
		})
		.error(function(){
      $rootScope.isUserLoggedIn = null;
			//window.location.replace("index.html");
			alert("some thing went wrong");
		});
}


  $scope.showPopup = function() {
  $scope.favorite = { 'User': 'Student' };

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: `<ion-list>
        <ion-radio ng-model="favorite.User" ng-value="'Student'">Student</ion-radio>
        <ion-radio ng-model="favorite.User" ng-value="'Faculty'">Faculty</ion-radio>
    </ion-list>`,
    title: 'Registration',
    subTitle: '',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.favorite.User) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
             
          } else {
            return $scope.favorite.User;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    if(res === "Faculty"){
      window.location.href='#/page9'
    }else{
      window.location.href='#/page5'
    }
    console.log('Tapped!', res);
  });

   
 };
}])
   
.controller('signupCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {

$scope.student = {
'studentName':'',
'stuuserName':'',
'password':'',
'mobileNo':'',
'email':'',
'studentUSN':'',
'branch':'',
'sem':''
}
$scope.StudentCreate = function(Student){

$http({
    method: "POST",
    url: "http://192.168.1.16:8080/Feedback/RegisterStudent",
    dataType: "json",
	contentType: 'application/json',
	data : JSON.stringify(Student)
	})
		.success(function(data){
			//login
			if(data){
			//window.location.replace("home.html");	
			alert("welcome ");
        window.location.href='#/side-menu21/page4'
			}else{
				//window.location.replace("index.html");
        alert("Something went wrong");
        window.location.href='#/side-menu21/page4'
			}
			
		})
		.error(function(){
			//window.location.replace("index.html");
			alert("some thing went wrong");
		});
};
  


}])
.controller('signupFCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {
  $scope.Staff = {
    'fname':'',
    'lname':'',
    'password':'',
    'fmobile':'',
    'usn_id':'',
    'desination':'',
    'dept':'',
    'email':''
  }
  $scope.StaffCreate = function(Staff){


$http({
    method: "POST",
    url: "http://192.168.1.16:8080/Feedback/RegisterFac",
    dataType: "json",
	contentType: 'application/json',
	data : JSON.stringify(Staff)
	})
		.success(function(data){
			//login
			if(data){
			//window.location.replace("home.html");	
			alert("welcome ");
        window.location.href='#/side-menu21/page4'
			}else{
				//window.location.replace("index.html");
        alert("Something went wrong");
        window.location.href='#/side-menu21/page4'
			}
			
		})
		.error(function(){
			//window.location.replace("index.html");
			alert("some thing went wrong");
		});
  };

}])
   
.controller('trainingPlacementCtrl', ['$scope', '$stateParams','userdetails','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,userdetails,$http) {
  $scope.PlacementText = true;

  $scope.showPlacement = function(){
    if($scope.PlacementText){
      $scope.PlacementText = false;
    }else{
      $scope.PlacementText = true;
    }
  }

  $scope.loadImages = function(){
    var details = userdetails.getUserdetails();
    var user = {
      'sem':'',
      'branch':''
    }
    $scope.images = [];
    $scope.textNotify = [];
    user.sem = details.sem;
    user.branch = details.branch;

$http({
    method: "POST",
    url: "http://192.168.1.16:8080/Feedback/placement",
    dataType: "json",
	contentType: 'application/json',
	data : JSON.stringify(user)
	})
		.success(function(data){
			//login
			if(data){
        angular.forEach(data, function(value,index){
            $scope.images.push(
              {
                src: "http://192.168.1.16:8080/acs/image/users/"+value.image,
                id : value.image
              }
              );
        });
        // $scope.placementImage = data;
			}else{
        alert("no updates yet!");
			}
			
		})
		.error(function(){
			//window.location.replace("index.html");
			alert("some thing went wrong");
		});

$http({
    method: "POST",
    url: "http://192.168.1.16:8080/Feedback/placementText",
    dataType: "json",
	contentType: 'application/json',
	data : JSON.stringify(user)
	})
		.success(function(data){
			//login
			if(data){
        angular.forEach(data, function(value,index){
            $scope.textNotify.push(
              {
                src: value.image
              }
              );
        });
        // $scope.placementImage = data;
			}else{
        alert("no updates yet!");
			}
			
		})
		.error(function(){
			//window.location.replace("index.html");
			alert("some thing went wrong");
		});


    // angular.forEach($scope.placementImage,function(index,value){
    //     if(value)
    //     $scope.images.push({src: value});
    // })
    // console.log(JSON.stringify($scope.images)); //
  //   $scope.images = [
  // {
  //   src:"http://192.168.1.4:8084/acs/image/users/"+details.branch+details.sem,
  //   sub: 'This is a <b>subtitle</b>'
  // }
  //   ]
  }
}])
.controller('examCtrl', ['$scope', '$stateParams','userdetails','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,userdetails,$http) {
  
  $scope.ExamText = true;

  $scope.showExam = function(){
    if($scope.ExamText){
      $scope.ExamText = false;
    }else{
      $scope.ExamText = true;
    }
  }

  $scope.loadImages = function(){
    var details = userdetails.getUserdetails();
    var user = {
      'sem':'',
      'branch':''
    }
    $scope.images = [];
    $scope.textNotify = [];

    user.sem = details.sem;
    user.branch = details.branch;
$http({
    method: "POST",
    url: "http://192.168.1.16:8080/Feedback/exams",
    dataType: "json",
	contentType: 'application/json',
	data : JSON.stringify(user)
	})
		.success(function(data){
			//login
			if(data){
        angular.forEach(data, function(value,index){
            $scope.images.push(
              {
                src: "http://192.168.1.16:8080/acs/image/users/"+value.image
              }
              );
        });
        // $scope.placementImage = data;
			}else{
        alert("no updates yet!");
			}
			
		})
		.error(function(){
			//window.location.replace("index.html");
			alert("some thing went wrong");
		});

    $http({
    method: "POST",
    url: "http://192.168.1.16:8080/Feedback/examsText",
    dataType: "json",
	contentType: 'application/json',
	data : JSON.stringify(user)
	})
		.success(function(data){
			//login
			if(data){
        angular.forEach(data, function(value,index){
            $scope.textNotify.push(
              {
                src: value.image
              }
              );
        });
        // $scope.placementImage = data;
			}else{
        alert("no updates yet!");
			}
			
		})
		.error(function(){
			//window.location.replace("index.html");
			alert("some thing went wrong");
		});
  }
}])
.controller('trainingPlacementCtrl1',
function($scope){
 $scope.images = [];
 
    $scope.loadImages = function() {
       
            $scope.images = [
              
  {
    src:'img/pl1.png',
    id:'pl1.png',
    sub: '' /* Not showed */
  },
  {
    src:'img/pl2.png',
    id:'pl2.png',
    thumb:''
  },
  {
    src:'img/pl3.png',
    id:'pl3.png',
    thumb:''
  }
   
            ]
       
    }

})
.controller('sportsCtrl', ['$scope', '$stateParams','userdetails','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,userdetails,$http) {
  
  $scope.SportText = true;

  $scope.sportsExam = function(){
    if($scope.SportText){
      $scope.SportText = false;
    }else{
      $scope.SportText = true;
    }
  }

  $scope.loadImages = function(){
    var details = userdetails.getUserdetails();
    var user = {
      'sem':'',
      'branch':''
    }
    $scope.images = [];
    $scope.textNotify = [];
    user.sem = details.sem;
    user.branch = details.branch;
$http({
    method: "POST",
    url: "http://192.168.1.16:8080/Feedback/sports",
    dataType: "json",
	contentType: 'application/json',
	data : JSON.stringify(user)
	})
		.success(function(data){
			//login
			if(data){
        angular.forEach(data, function(value,index){
            $scope.images.push(
              {
                src: "http://192.168.1.16:8080/acs/image/users/"+value.image,
                id : value.image
              }
              );
        });
        // $scope.placementImage = data;
			}else{
        alert("no updates yet!");
			}
			
		})
		.error(function(){
			//window.location.replace("index.html");
			alert("some thing went wrong");
		});
    $http({
    method: "POST",
    url: "http://192.168.1.16:8080/Feedback/sportsText",
    dataType: "json",
	contentType: 'application/json',
	data : JSON.stringify(user)
	})
		.success(function(data){
			//login
			if(data){
        angular.forEach(data, function(value,index){
            $scope.textNotify.push(
              {
                src: value.image
              }
              );
        });
        // $scope.placementImage = data;
			}else{
        alert("no updates yet!");
			}
			
		})
		.error(function(){
			//window.location.replace("index.html");
			alert("some thing went wrong");
		});
  }
}])
   
.controller('galaryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.images = [];
 
    $scope.loadImages = function() {
       
            $scope.images = [
              
  {
    src:'img/1.jpg',
    id:'1.jpg',
    sub: '' /* Not showed */
  },
  {
    src:'img/1.jpg',
    id:'1.jpg',
    thumb:''
  },
   {
    src:'img/sangamesh.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'img/1.jpg',
    id:'1.jpg',
    sub: '' /* Not showed */
  },
  {
    src:'img/1.jpg',
    id:'1.jpg',
    thumb:''
  }
            ]
       
    }

}])
.controller("MyController", function($scope, $state, $stateParams,$http, $location ) {
   $scope.images = [];  
   $scope.fullid=$stateParams.fullid;
  //  alert($stateParams.fullid);
    $scope.images = "http://192.168.1.16:8080/acs/image/users/"+$scope.fullid;
       //   console.log('Success', resp);
  $scope.back = function(){
    $location.back();
  }  
})
.controller("localimage", function($scope, $state, $stateParams,$http, $location ) {
   $scope.imageList = [];  
   $scope.fullid=$stateParams.fullid;
  //  alert($stateParams.fullid);
    $scope.imageList = 'img/'+$scope.fullid;
       //   console.log('Success', resp);
  $scope.back = function(){
    $location.back();
  }  
})
.controller('contactCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 