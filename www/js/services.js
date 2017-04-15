angular.module('app.services', [])

.factory('userdetails', [function(){
    var data = {
        "userName":"",
        "id":"",
        "branch":"",
        "sem":""
    }

    return {
        setUserDetails: function(id,branch,sem){
            data.userName = id;
            data.id = id;
            data.branch = branch;
            data.sem = sem;
        },

        getUserdetails: function(){
            return data;
        }
    }

}])

.service('BlankService', [function(){

}]);