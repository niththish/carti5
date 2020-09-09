angular.module('carti5App')
.controller('householdController',['$scope','$http',householdController])
.component('householdComponent',{
    templateUrl:'household.html',
    controller:'householdController',
})

function householdController($scope,$http){
    $http.get('data/households.json').success(function(data){
        $scope.householdData=data;
    })
    
}