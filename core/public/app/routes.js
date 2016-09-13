var app = angular.module('app');

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('splash', {
            url: '/splash',
            templateUrl: './app/states/splash/splash.ctrl.html',
            controller: 'splashCtrl',
            // resolve: {
            //   hero: function(authService, $state){
            //     return authService.currentHero()
            //     .then(function(response){
            //       if (response.status !== 200) {
            //         return false;
            //       }
            //       return response.data;
            //     });
            //   }
            // }
        });
        /*.state('home', {
            url: '/home',
            templateUrl: './app/states/home/home.ctrl.html',
            controller: 'homeCtrl',
            resolve: {
              hero: function(authService, $state){
                return authService.currentHero()
                .then(function(response){
                  return response.data;
                });
              }
            }
        })
        .state('profile', {
            url: '/profile',
            templateUrl: './app/states/profile/profile.ctrl.html',
            controller: 'profileCtrl',
            resolve: {
              hero: function(authService, $state){
                return authService.currentHero()
                .then(function(response){
                  return response.data;
                });
              }
            }
        })
        .state('jobs', {
            url: '/jobs',
            templateUrl: './app/states/jobs/jobs.ctrl.html',
            controller: 'jobsCtrl',
            resolve: {
                hero: function(authService, $state){
                    return authService.currentHero()
                        .then(function(response){
                            return response.data;
                        });
                }
            }
        })
        .state('resources', {
            url: '/resources',
            templateUrl: './app/states/resources/resources.ctrl.html',
            controller: 'resourcesCtrl',
            resolve: {
              hero: function(authService, $state){
                return authService.currentHero()
                .then(function(response){
                  return response.data;
                });
               }
              }
        })
        .state('guildmaster', {
            url: '/guildmaster',
            templateUrl: './app/states/guildmaster/guildmaster.ctrl.html',
            controller: 'guildMasterCtrl',
            resolve: {
              hero: function(authService, $state){
                return authService.currentHero()
                .then(function(response){
                  return response.data;
                });
              }
            }
        })
        .state('heroes', {
            url: '/heroes',
            templateUrl: './app/states/heroes/heroes.ctrl.html',
            controller: 'heroesCtrl',
            resolve: {
              hero: function(authService, $state){
                return authService.currentHero()
                .then(function(response){
                  return response.data;
                });
              }
            }
        })
        .state('member', {
            url: '/member/:id',
            templateUrl: './app/states/member/member.ctrl.html',
            controller: 'memberCtrl',
            resolve: {
              hero: function(heroService, $state, $stateParams){
                return heroService.getHero($stateParams.id)
                .then(function(response){
                  return response[0];
                });
              }
            }
        });*/

    $urlRouterProvider
        .otherwise('splash');
});
