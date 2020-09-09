angular.module('carti5App')
.controller('mainpageController',['$scope',mainpageController])
.component('mainComponent',{
    templateUrl:'mainpage.html',
    controller:'mainpageController',
})

function mainpageController($scope){

}