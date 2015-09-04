'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

function	validateLength(v){
	return v.length <= 50;
}
/**
* Todo Schema
*/
var TodoSchema = new Schema({

	created: {
		type: Date,
		default: Date.now
	},
	task: {
		type: String,
		default: '',
		trim: true,
		unique: true,
		required: 'task can not me blank',
		validate: [validateLength, 'task must be 50 chars in length or less']
	},
	completed: {
		type: Boolean,
		default: false
	}
});

mongoose.model('Todo', TodoSchema);
