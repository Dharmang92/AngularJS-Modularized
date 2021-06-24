'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('app', ['ngRoute', 'ui.router',
    'app.testing'
]);

app.config(['$locationProvider', '$routeProvider', '$stateProvider', function ($locationProvider, $routeProvider, $stateProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/testing', {
            templateUrl: 'pages/testing.html',
            controller: 'testingController as tc',
            resolve: {
                ResolveData: function () {
                    return "Hello World";
                }
            }
        })
        .when('/404', {
            templateUrl: '404.html'
        })
        .otherwise({
            redirectTo: '/404',
        });

    /*$stateProvider
        .state("logout", {
            url: "/testing",
            templateUrl: 'pages/testing.html',
            controller: "testingController as tc",
            cache: false,
            resolve: {
                Data: ['testingService',
                    function (testingService) {
                        return testingService.foo();
                    }
                ]
            },
            data: {
                css: ['']
            }
        })*/
}]);
