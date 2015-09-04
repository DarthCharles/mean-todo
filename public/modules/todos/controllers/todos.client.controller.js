'use strict';

angular.module('todos').controller('TodosController', ['$scope', '$location', 'Todos',
function($scope, $location, Todos) {

  // Create new Todo
  $scope.create = function() {
    // Create new Todo object
    var todo = new Todos ({
      task: this.task,
    });

    // Redirect after save
    todo.$save(function(response) {
      $location.path('todos');

      // Clear form fields
      $scope.task = '';
    }, function(errorResponse) {
      $scope.error = errorResponse.data.message;
      console.log(errorResponse);
    });
  };

  $scope.toggleCompleted = function (todo) {
    todo.$update(function() {
      $location.path('todos');
    }, function(errorResponse) {
      $scope.error = errorResponse.data.message;
      console.log(errorResponse.data.message);
    });

  };

		$scope.remove = function(todo) {
			if ( todo ) {
				todo.$remove();

				for (var i in $scope.todos) {
					if ($scope.todos [i] === todo) {
						$scope.todos.splice(i, 1);
					}
				}
			} else {
				$scope.todo.$remove(function() {
					$location.path('todos');
				});
			}
		};
  // Find a list of Todos
  $scope.find = function() {
    $scope.todos = Todos.query();
  };
}
]);
