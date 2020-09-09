angular.module('carti5App')
.controller('otherparticularController',['$scope','$http','$stateParams',otherparticularController])
.component('otherparticularComponent',{
    templateUrl:'particular.html',
    controller:'otherparticularController',
})

function otherparticularController($scope,$http,$stateParams){
    $scope.id=$stateParams.id;

    $http.get('data/others.json').success(function(data){
        $scope.otherData=data;
        $scope.particularData=$scope.otherData[$scope.id];

        document.getElementById("links").innerHTML= $scope.particularData.links;  

        document.getElementById("data").innerHTML = $scope.particularData.content;

    })

}
