'use strict';
//Todos service used to communicate Categories REST endpoints

angular.module('todos').factory('Todos', ['$resource',
	function($resource) {
			return $resource('todos/:id', { id: '@_id'
			}, {
					update: {
							method: 'PUT'
					}
			});
	}
]);
