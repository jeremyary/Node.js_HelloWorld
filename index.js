var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {}
handle['/'] = requestHandlers.list;
handle['/add'] = requestHandlers.add;
handle['/remove'] = requestHandlers.remove;

server.start(router, handle);
