angular.module('carti5App')
.controller('tvparticularController',['$scope','$http','$stateParams',tvparticularController])
.component('tvparticularComponent',{
    templateUrl:'particular.html',
    controller:'tvparticularController',
})

function tvparticularController($scope,$http,$stateParams){
    $scope.id=$stateParams.id;

    $http.get('data/televisions.json').success(function(data){
        $scope.televisionData=data;
        $scope.particularData=$scope.televisionData[$scope.id];

        document.getElementById("links").innerHTML= $scope.particularData.links;  

        document.getElementById("data").innerHTML = $scope.particularData.content;

    })

}
