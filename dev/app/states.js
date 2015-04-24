(function (angular) {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = [
        '$urlRouterProvider'
    ];

    function config($urlRouterProvider) {
        // redirect 404 page not found
        $urlRouterProvider.otherwise('/');
    }
})(angular);
