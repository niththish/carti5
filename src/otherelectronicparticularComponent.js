angular.module('carti5App')
.controller('otherelectronicparticularController',['$scope','$http','$stateParams',otherelectronicparticularController])
.component('otherelectronicparticularComponent',{
    templateUrl:'particular.html',
    controller:'otherelectronicparticularController',
})

function otherelectronicparticularController($scope,$http,$stateParams){
    $scope.id=$stateParams.id;

    $http.get('data/otherelectronics.json').success(function(data){
        $scope.otherelectronicData=data;
        $scope.particularData=$scope.otherelectronicData[$scope.id];

        document.getElementById("links").innerHTML= $scope.particularData.links;  

        document.getElementById("data").innerHTML = $scope.particularData.content;

    })

}
