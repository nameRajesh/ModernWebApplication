'use strict';

const Rx = require('rxjs');
const os = require('os');

let checkSystem = Rx.Observable.create(function(ob) {
	ob.next("Checking your system...");

	let mem = parseInt((os.totalmem()*0.000001)/1024);
	if(mem < 4) {
		ob.next("This app needs atleast 4GB of RAM.");
		ob.complete();
	}

	let cores = os.cpus().length;
	if(cores < 2) {
		ob.next("Processor is not supported.");
		ob.complete();
	}

	ob.next("System is checked successfully.");
	ob.complete();
})

let subscription = checkSystem.subscribe(
	start => console.log(start),
    e => console.log('onError: ' + e.message),
    () => {}
)

subscription.unsubscribe();