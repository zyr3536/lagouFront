'use strict';

angular.module('app', ['ui.router']);

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

'use strict';
angular.module('app').controller('mainCtrl',['$scope', function ($scope) {

}]);
'use strict';
angular.module('app').directive('appHead',[function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/head.html'
    }
}]);