'use strict';

const os = require('os');

async function checkSystem() {
    return 'Checking your system...';
}

checkSystem()
	.then((data) => {console.log(data)})
	.then(() => {
		let mem = parseInt((os.totalmem()*0.000001)/1024);
		if(mem < 4) {
			console.log("This app needs atleast 4GB of RAM.");
			return false;
		}

		return true;
	})
	.then((chk) => {
		if(chk) {
			let cores = os.cpus().length;
			if(cores < 2) {
				console.log("Processor is not supported.");
				return false;
			}

			return true;
		}

		return chk;
	})
	.then((chk) => {
		if(chk) {
			console.log("System is checked successfully.");
		}
	})
	.catch((err) => {console.log('ERROR', err);})