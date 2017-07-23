
/*angular.module('app').config(function($stateProvider,$urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/main',
        templateUrl: 'view/main.html'
    };

    $stateProvider.state(mainState);
    $urlRouterProvider.otherwise('main');
    
});*/

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main',{
        url: '/main',
        templateUrl: 'view/main.html',
        controller: 'mainCtrl'
    })
/*        .state('echart', {
            url: '/echart',
            templateUrl:'view/echart.html'
        })*/
    ;
    $urlRouterProvider.otherwise('main');

}]);
