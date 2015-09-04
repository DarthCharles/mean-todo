'use strict';

//Setting up route
angular.module('todos').config(['$stateProvider',
	function($stateProvider) {
		// Todos state routing
		$stateProvider.
		state('create-todo', {
			url: '/todos/create',
			templateUrl: 'modules/todos/views/create-todo.client.view.html'
		}).
		state('todos', {
			url: '/todos',
			templateUrl: 'modules/todos/views/todos.client.view.html'
		});
	}
]);
