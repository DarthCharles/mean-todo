'use strict';

/**
* Module dependencies.
*/
var should = require('should'),
mongoose = require('mongoose'),
User = mongoose.model('User'),
Todo = mongoose.model('Todo');

/**
* Globals
*/
var user, todo;

/**
* Unit tests
*/
describe('Todo Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() {
			todo = new Todo({
				// Add model fields
				// ...
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('saves a new record', function(done) {
			todo = new Todo({
				task:'clean the dishes'
			});
			todo.save(function(err, saved){
				done();
			});

		});

		it('throws validation error when task is empty', function(done){
			todo = new Todo({});
			todo.save(function(err, saved){
				err.errors.task.message.should.equal('task can not me blank');
				done();
			});

		});

		it('throws validation error when task is longer than 50 chars', function(done){
			todo = new Todo({
				task:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			});
			todo.save(function(err, saved){
				err.errors.task.message.should.equal('task must be 50 chars in length or less');
				done();
			});
		});

		afterEach(function(done) {
			Todo.remove().exec();
			User.remove().exec();

			done();
		});
	});
});
