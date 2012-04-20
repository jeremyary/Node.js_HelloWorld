
function list(response) {
	console.log('handling list request');
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("list");
	response.end();
}

function add(response) {
	console.log('handling add request');
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("add");
	response.end();

}

function remove(response) {
	console.log('handling remove request');
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("remove");
	response.end();

}

exports.list = list;
exports.add = add;
exports.remove = remove;
