var server = require('server');
var router = require('router');
var requestHandlers = require('requestHandlers');

var handle = {}
handle['/'] = requestHandlers.list;
handle['/addTask'] = requestHandlers.addTask;
handle['/removeTask'] = requestHandlers.removeTask;

server.start(router, handle);
