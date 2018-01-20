const express = require('express');
const fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');

const router = express.Router();

const urlLink = 'http://jsonplaceholder.typicode.com/users/';

async function fetchData() {
	try {
		let results = await fetch(urlLink);
		return results;
	}catch(err) {
		console.log(err);
	}
}

let observable = Rx.Observable.create(ob => {
	fetch(urlLink).then(function(res) {
      return res.json();  
    }).then(function(json) {
        ob.next(json);
        ob.complete();
    });;
})

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("promise");

	const promiseData = fetch(urlLink);
	promiseData.then(data => data.json())
			.then(data => {
				console.log(data);
				res.render('users', { data: data });
			}).catch(err => {console.log(err);})
});

router.get('/async', function(req, res, next) {
	console.log("async");

	fetchData().then(data => data.json())
			.then(data => {
				res.render('users', { data: data });
			})
});

router.get('/ob', function(req, res, next) {
	console.log("observable");
	observable.subscribe(x => {
		console.log(x);
		res.render('users', { data: x });
	})
	
});

module.exports = router;
