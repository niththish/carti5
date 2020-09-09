angular.module('carti5App')
.controller('televisionController',['$scope','$http',televisionController])
.component('televisionComponent',{
    templateUrl:'television.html',
    controller:'televisionController',
})

function televisionController($scope,$http){
    $http.get('data/televisions.json').success(function(data){
        $scope.televisionData=data;
    })
    
}