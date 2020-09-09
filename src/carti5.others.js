angular.module('carti5App')
.controller('otherController',['$scope','$http',otherController])
.component('otherComponent',{
    templateUrl:'others.html',
    controller:'otherController',
})

function otherController($scope,$http){
    $http.get('data/others.json').success(function(data){
        $scope.otherData=data;
    })
    
}