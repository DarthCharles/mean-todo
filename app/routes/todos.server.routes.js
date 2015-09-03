'use strict';

module.exports = function(app) {
var todos = require('../controllers/todos.server.controller');

app.route('/todos')
.get(todos.list)
.post(todos.create);

// categoryid param is added to the params objects for the request
app.route('/todos/:id')
.get(todos.read)
.put(todos.update)
.delete(todos.delete);

app.param('id', todos.todoByID);

};
