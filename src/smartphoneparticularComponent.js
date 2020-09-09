angular.module('carti5App')
.controller('particularController',['$scope','$http','$stateParams',particularController])
.component('particularComponent',{
    templateUrl:'particular.html',
    controller:'particularController',
})

function particularController($scope,$http,$stateParams){
    $scope.id=$stateParams.id;

    $http.get('data/smartphones.json').success(function(data){
        $scope.smartphoneData=data;
        $scope.particularData=$scope.smartphoneData[$scope.id];

        document.getElementById("links").innerHTML= $scope.particularData.links;  

        document.getElementById("data").innerHTML = $scope.particularData.content;

    })

    
}