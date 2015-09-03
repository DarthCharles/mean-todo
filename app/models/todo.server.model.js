'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

function	validateLength(){
	return v.length <= 15;
}
/**
* Todo Schema
*/
var TodoSchema = new Schema({

	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		default: '',
		trim: true,
		unique: true,
		required: 'Name can not me blank',
		validate: [validateLength, 'name must be 15 chars in length or less']
	},
	description: {
		type: String,
		default: ''
	},
	status: {
		type: String,
		default: 'active'
	}
});

mongoose.model('Todo', TodoSchema);
