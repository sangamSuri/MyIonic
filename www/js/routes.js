angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.department', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/department.html',
        controller: 'departmentCtrl'
      }
    }
  })

  .state('menu.facility', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/facility.html',
        controller: 'facilityCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })
  
  .state('signupFac', {
    url: '/page9',
    templateUrl: 'templates/signUpFac.html',
    controller: 'signupFCtrl'
  })
  .state('facultiesList', {
    url: '/facultiesList',
    templateUrl: 'templates/faculties.html',
    controller: 'facultiesListFCtrl'
  })
  .state('menu.profile', {
    url: '/profile',
    views: {
      'side-menu21': {
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
      }
    }
  })
  .state('StuHomeCtrl',{
    url: '/StuHome',
    templateUrl: 'templates/StudentHome.html',
    controller: 'StuHomeCtrl'
  })
  .state('StuDetailCtrl',{
    url: '/StuDetailsHome',
    templateUrl: 'templates/studentDetailsForFac.html',
    controller: 'StuDetailCtrl'
  })
.state('menu.FacHome',{
    url: '/FacHome',
    views: {
      'side-menu21': {
    templateUrl: 'templates/facultyHome.html',
    controller: 'facCtrl'
      }
    }
  })
  .state('menu.trainingPlacement', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trainingPlacement.html',
        controller: 'trainingPlacementCtrl'
      }
    }
  })
  .state('menu.trainingPlacementMenu', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trainingPlacementMenu.html',
        controller: 'trainingPlacementCtrl1'
      }
    }
  })

  .state('menu.galary', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/galary.html',
        controller: 'galaryCtrl'
      }
    }
  })

  .state('menu.contact', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })
  .state('menu.sports', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sports.html',
        controller: 'sportsCtrl'
      }
    }
  })

  .state('menu.exam', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/exam.html',
        controller: 'examCtrl'
      }
    }
  })
  .state('full', {
        url: "/full/:fullid",
        templateUrl: 'templates/full.html',
        controller: 'MyController'
  })
  .state('localimage', {
        url: "/localimage/:fullid",
        templateUrl: 'templates/zoomImg.html',
        controller: 'localimage'
  })
  
  .state('menu.logout',{
    url: 'logout',
    views:{
      'side-menu21': {
    controller: 'logoutCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page4')

  

}).run(function($rootScope, $location){
        //console.log("Into run mode");
        // console.log("Userid 5 is logged in: ", $logincheck(5));
        // console.log("Userid 0  logged in: ", $logincheck(0));
        
        //now redirect to appropriate path based on login status
        if(!$rootScope.isUserLoggedIn)
        {
          $location.path('/menu.login');          
        }
        else
        {
          //$location.path('/publicurl'); or 
        }
      });
