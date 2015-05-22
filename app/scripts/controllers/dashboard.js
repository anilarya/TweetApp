'use strict';

/**
 * @ngdoc function
 * @name tookitakiApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the tookitakiApp
 */
angular.module('tookitakiApp')
  .controller('DashboardCtrl', function ($scope, dashboard) {
    
  	$scope.model = {
  		keyword : "CEO" 
  	}
 
    $scope.keywords = [
              "CEO",
              "key2",
              "key3",
              "key4"]
    $scope.fetchGraph = function(keyword){
    	fetchCampaignsChartData(keyword);
      fetchTweets(keyword) ;
    }

    var fetchTweets = function(keyword){ 
      dashboard.fetchTweets().success(function (tweetResults) {
        $scope.model.tweetResults = [];
        angular.forEach(tweetResults.results, function(value, key) {
              if (key === $scope.model.keyword) {
                  $scope.model.tweetResults = value ;
              }
          }); 
          console.log("$scope.model.tweetResults", $scope.model.tweetResults);
          }).error(function (campaignData) { 
          
          });
    }
                  

    var fetchCampaignsChartData = function(keyword){    
          $scope.campaignsChartData = {
              transport: {
                // read : '/scripts/data/reports/12.json'
                read: function(options) {
                    dashboard.fetchCampaignsChartData().success(function (campaignData) {  
                        $scope.results = {};
                        angular.forEach(campaignData.results, function(value, key) {
					              if (key === $scope.model.keyword) {
					                $scope.results.tweets = value;
        						        }
        						    });
                        // console.log("$scope.results", $scope.results.tweets, campaignData.results);
                        if($scope.results.tweets){
                        	options.success($scope.results.tweets);
                        }
                        else{
                        	options.success([{}]);
                        }
                        console.log("$scope.results", $scope.results.tweets, campaignData.results);
                    }).error(function (campaignData) { 
                        options.error(campaignData.data);
                    });
                },
              },
              sort: {
                  field: "date",
                  dir: "asc"
              }
          };
        }
 


        $scope.campaignsChartOptions = {
            // legend: {
            //   position: 'custom', orientation: 'horizontal', offsetX: -50
            // },
            seriesDefaults: {
                type: "line",
                style: "smooth"
            }, 
              chartArea: {
              background: "white",
              height : 240,
          },
          // theme: "silver",
            series: [
            {
                type: "line",
                field: "count",
                name: "Count",
                axis: "count",
                color: "#0e82c6", 
            } 
            ],
            valueAxes: [ {
                name: "count", 
                color: "#0e82c6" 
            }
           ],
            categoryAxis: {
                field: "date",
                type: "string",
                majorTicks: {
                      visible: false,
                }, 
                labels: {
                  rotation: -25,
                    // format: "dd-MMM hh:mm",
                    // template: "#:kendo.toString(count,'dd/MM/yyyy hh:mm:ss')"
                }, 
                baseUnit: "fit",
                majorGridLines: {
                    visible: false,
                    color : "#f2f2f2"
                },
                // axisCrossingValues: [1, 200, 7000]
            },
            // seriesHover: function(e){
            //   $scope.model.graphCpa = e.dataItem.cpa ;
            //   $scope.model.graphAction = e.dataItem.performance ;
            //   $scope.model.graphDate = e.dataItem.date ;
            //   $scope.model.graphSpend = e.dataItem.spend ;
            //   var dateFilter = $filter('date'); 
            //   $scope.model.graphDate = dateFilter($scope.model.graphDate, 'EEE MMM dd, yyyy') ; 
            //   $scope.$apply() 
            //   console.log($scope.model.graphCpa, $scope.model.graphAction,$scope.model.graphDate);
            // },
            tooltip: {
                visible: true,
                format: "{0}",
                template: "#= series.name #: #= value #"
            }
          }; 

      	var init = function () {
            console.log('xyCtrl.init()');
            fetchCampaignsChartData("CEO"); 
            fetchTweets("CEO");

        }();



  });
