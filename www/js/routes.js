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

  .state('menu.trainingPlacement', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trainingPlacement.html',
        controller: 'trainingPlacementCtrl'
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

$urlRouterProvider.otherwise('/side-menu21/page4')

  

});