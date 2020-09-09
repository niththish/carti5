angular.module('carti5App')
.controller('laptopparticularController',['$scope','$http','$stateParams',laptopparticularController])
.component('laptopparticularComponent',{
    templateUrl:'particular.html',
    controller:'laptopparticularController',
})

function laptopparticularController($scope,$http,$stateParams){
    $scope.id=$stateParams.id;

    $http.get('data/laptops.json').success(function(data){
        $scope.laptopData=data;
        $scope.particularData=$scope.laptopData[$scope.id];

        document.getElementById("links").innerHTML= $scope.particularData.links;  

        document.getElementById("data").innerHTML = $scope.particularData.content;

    })

}
