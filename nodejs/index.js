const
	obj      = {name: "Rotem", age: 42},
	http     = require('http'),
	hostname = '127.0.0.1',
	port     = 3000,
	server   = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(obj));
	});


// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });

