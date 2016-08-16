/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {
    $scope.list = [
      "Get Haircut",
      "Build Rome",
      "Take out trash"
    ];
    $scope.addItem = function(inputItem) {
      if (inputItem !== '') {
        $scope.list.push(inputItem);
        $scope.newItem = "";
      }
    // window.$scope = $scope;
    // debugging tool that lets you view in the console
    };
    $scope.completeTask = function(inputIndex) {
      $scope.list.splice(inputIndex, 1);
    };
  });

}());
