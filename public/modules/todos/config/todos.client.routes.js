'use strict';

//Setting up route
angular.module('todos').config(['$stateProvider',
	function($stateProvider) {
		// Todos state routing
		$stateProvider.
		state('todos', {
			url: '/todos',
			templateUrl: 'modules/todos/views/todos.client.view.html'
		});
	}
]);