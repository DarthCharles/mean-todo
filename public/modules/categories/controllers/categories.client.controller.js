'use strict';

angular.module('categories').controller('CategoriesController', ['$scope', '$location', 'Categories',
    function($scope, $location, Categories) {

        // Create new Category
        $scope.create = function() {
            // Create new Category object
            var category = new Categories ({
                name: this.name,
                description: this.description
            });

            // Redirect after save
            category.$save(function(response) {
                $location.path('categories');

                // Clear form fields
                $scope.name = '';
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Find a list of Categories
        $scope.find = function() {
            $scope.categories = Categories.query();
        };
    }
]);
