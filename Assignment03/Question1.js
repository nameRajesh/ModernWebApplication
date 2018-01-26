

const dns = require("dns");

let url = "www.mum.edu";

dns.resolve4(url, (err, addresses) => {
  	if (err) throw err;
 	console.log(`Ip address for ${url}: ${addresses}`);
});