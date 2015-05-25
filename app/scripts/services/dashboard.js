'use strict';

/**
 * @ngdoc service
 * @name tookitakiApp.dashboard
 * @description
 * # dashboard
 * Factory in the tookitakiApp.
 */
angular.module('tookitakiApp')
  .factory('dashboard', function ($http, $log ) {
    // Service logic
    // ...
    return {
      fetchKeywordChartData: function () {  
                var url = '/data/graph.json';
                
                var promise = $http({
                    url :url,
                    method : "GET",
                    format : "json", 
                }).success(function (result) { 
                    console.log("result data", result)
                }).error(function (err) {
                        console.log(err);
                });

                return promise;
            },
 
        fetchTweets: function () {  
                var url = '/data/tweet.json';
                
                var promise = $http({
                    url :url,
                    method : "GET",
                    format : "json", 
                }).success(function (result) { 
                    console.log("result data", result)
                }).error(function (err) {
                        console.log(err);
                });

                return promise;
            },
    }
 
  });
