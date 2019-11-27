angular.module('firstApp', ['ngRoute'])

    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/inicio.html'
            })
            .when('/perfil', {
                templateUrl: 'views/perfil.html',
                controller: 'PerfilCtrl'
            })
            .when('/editar', {
                templateUrl: 'views/editar.html',
                controller: 'PerfilCtrl'
            })
            .when('/detalle', {
                templateUrl: 'views/detalle.html',
                controller: 'DetalleCtrl'
            })
            
            .otherwise({
                templateUrl: 'views/404.html'
            });
    });