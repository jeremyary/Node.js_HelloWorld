var http = require('http');
var url = require('url');

function start(router, handle) {
  	function onRequest(request, response) {
    		
		var pathName = url.parse(request.url).pathname;
    		console.log('handling request for ' + pathName);

    		router.route(handle, pathName, response);
  }

  	http.createServer(onRequest).listen(8888);
  	console.log("server now running on 8888");
}

exports.start = start;
