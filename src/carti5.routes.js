angular.module('carti5App')
.config(['$urlRouterProvider','$stateProvider',config])

function config($urlRouterProvider,$stateProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
        url:'/',
        template:'<main-component></main-component>'
    })
    .state('about',{
        url:'/about',
        templateUrl:'about.html'
    })
    .state('contact',{
        url:'/contact',
        templateUrl:'contact.html'
    })

    
    //SMARTPHONES ROUTES
    .state('smartphone',{
        url:'/smartphone',
        template:'<smartphone-Component></smartphone-Component>'
    })
    .state('smartphones',{
        url:'/smartphone/:id',
        template:'<particular-Component></particular-Component>'
    })



    //LAPTOPS ROUTES
    .state('laptop',{
        url:'/laptop',
        template:'<laptop-Component></laptop-Component>'
    })
    .state('laptops',{
        url:'/laptop/:id',
        template:'<laptopparticular-Component></laptopparticular-Component>'
    })




    //TELEVISIONS ROUTES
    .state('television',{
        url:'/television',
        template:'<television-Component></television-Component>'
    })
    .state('televisions',{
        url:'/television/:id',
        template:'<tvparticular-Component></tvparticular-Component>'
    })




    //HOUSEHOLDS ROUTES
    .state('household',{
        url:'/household',
        template:'<household-Component></household-Component>'
    })
    .state('households',{
        url:'/household/:id',
        template:'<householdparticular-Component></householdparticular-Component>'
    })





    //OTHERELECTRONICS ROUTES
    .state('otherelectronic',{
        url:'/otherelectronic',
        template:'<otherelectronic-Component></otherelectronic-Component>'
    })
    .state('otherelectronics',{
        url:'/otherelectronic/:id',
        template:'<otherelectronicparticular-Component></otherelectronicparticular-Component>'
    })





    //OTHERS ROUTES
    .state('other',{
        url:'/other',
        template:'<other-Component></other-Component>'
    })
    .state('others',{
        url:'/other/:id',
        template:'<otherparticular-Component></otherparticular-Component>'
    })
    

}
