var http = require('http');
var url = require('url');

function start(router, handle) {
  	function onRequest(request, response) {
    		
		var pathName = url.parse(request.url).pathname;
    		console.log('handling request for ' + pathName);

    		router.route(handle, pathName, response);
  }

	var port = process.env.PORT || 3000;
  	http.createServer(onRequest).listen(port);
  	console.log("server now running on " + port);
}

exports.start = start;
