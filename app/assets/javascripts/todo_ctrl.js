/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {
    $scope.list = [
      {
        text: "Get Haircut",
        completed: false
      },
      {
        text: "Build Rome",
        completed: false
      },
      {
        text: "Take out trash",
        completed: false
      }
    ];
    $scope.addItem = function(inputText) {
      if (inputText) {
        var newTask = {
          text: inputText,
          completed: false
        };
        $scope.list.push(newTask);
        $scope.newItem = "";
      }
      window.$scope = $scope;
    // debugging tool that lets you view in the console
    };
    // $scope.completeTask = function(inputIndex) {
    //   $scope.list.splice(inputIndex, 1);
    // };
    $scope.toggleCompleted = function(task) {
      task.completed = !task.completed;
    };
  });

}());
