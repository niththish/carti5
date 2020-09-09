angular.module('carti5App')
.controller('smartphoneController',['$scope','$http',smartphoneController])
.component('smartphoneComponent',{
    templateUrl:'smartphone.html',
    controller:'smartphoneController',
})

function smartphoneController($scope,$http){
    $http.get('data/smartphones.json').success(function(data){
        $scope.smartphoneData=data;
    })
    
}