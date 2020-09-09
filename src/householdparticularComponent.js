angular.module('carti5App')
.controller('householdparticularController',['$scope','$http','$stateParams',householdparticularController])
.component('householdparticularComponent',{
    templateUrl:'particular.html',
    controller:'householdparticularController',
})

function householdparticularController($scope,$http,$stateParams){
    $scope.id=$stateParams.id;

    $http.get('data/households.json').success(function(data){
        $scope.householdData=data;
        $scope.particularData=$scope.householdData[$scope.id];

        document.getElementById("links").innerHTML= $scope.particularData.links;  

        document.getElementById("data").innerHTML = $scope.particularData.content;

    })

}
