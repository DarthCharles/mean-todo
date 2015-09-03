'use strict';
/**
* Module dependencies.
*/
var should = require('should'),
mongoose = require('mongoose'),
app = require('../../../server'),
request = require('supertest');

var Todo = mongoose.model('Todo');

var testTodo;

/**
* Unit tests
*/

describe('Todos Controller Tests', function(){
	var todo = {
		task: 'Walk the dog',
	};

	var response = {};


	before(function(done) {
		request(app).post('/todos')
		.send(todo)
		// end handles the response
		.end(function(err, res) {
			if (err) {
				throw err;
			}
			response = res.body;
			res.status.should.be.equal(400);
			done();
		});
	});

	it('should get all todos', function (done) {
		request(app).get('/todos')
		.end(function (err, res) {
			if (err) {
				throw err;
			}
			res.status.should.be.equal(200);
			done();
		});
	});


	it('should update todo by id', function(done){

		request(app).update('/todos' + response._id)
		.send(item)
		.end(function (err, res) {
			if (err) {
				throw err;
			}
			res.status.should.be.equal(200);
			done();
		});
	});

	it('should show todo by id', function(done){
		request(app).get('/todos/' + response._id)
		.end(function (err, res) {
			if (err) {
				throw err;
			}
			res.body.task.should.equal('Walk the dog');
			done();

		});

	});

	it('should delete todo by id', function(done){
		request(app).delete('/todos/' + response._id)
		.end(function (err, res) {
			res.status.should.equal(200);
			Todo.count({}, function (err, c) {
				console.log(c);
			});
		});
		done();
	});

});
