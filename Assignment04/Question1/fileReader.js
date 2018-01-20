'use strict';

const fs = require('fs');

process.on('message', (q) => {
	const readable = fs.createReadStream(__dirname+'/public/' + q.url);

	var chunks = []; 
	readable.on('data', function(chunk) {
	    chunks.push(chunk);
	});

	readable.on('end', function() {
	    process.send(chunks.join().toString())
	})
})