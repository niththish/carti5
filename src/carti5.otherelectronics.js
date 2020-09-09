angular.module('carti5App')
.controller('otherelectronicController',['$scope','$http',otherelectronicController])
.component('otherelectronicComponent',{
    templateUrl:'otherelectronic.html',
    controller:'otherelectronicController',
})

function otherelectronicController($scope,$http){
    $http.get('data/otherelectronics.json').success(function(data){
        $scope.otherelectronicData=data;

    })
    
}