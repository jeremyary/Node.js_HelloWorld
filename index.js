var server = require('./custom_modules/server');
var router = require('./custom_modules/router');
var requestHandlers = require('./custom_modules/requestHandlers');

var handle = {}
handle['/'] = requestHandlers.list;
handle['/add'] = requestHandlers.add;
handle['/remove'] = requestHandlers.remove;

server.start(router, handle);
