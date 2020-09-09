angular.module('carti5App')
.controller('laptopController',['$scope','$http',laptopController])
.component('laptopComponent',{
    templateUrl:'laptop.html',
    controller:'laptopController',
})

function laptopController($scope,$http){
    $http.get('data/laptops.json').success(function(data){
        $scope.laptopData=data;
    })
    
}