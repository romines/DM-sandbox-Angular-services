var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {

  $scope.test = 'Hello World from controller';
  $scope.quotes = dataService.getData();
  $scope.filtering = false;
  $scope.adding = false;
  // $scope.startAdd = function(){
  //   $scope.adding = true;
  // }
  // $scope.startFilter = function(){
  //   $scope.filtering = true;
  // }

});
