'use strict';

const express = require('express');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const db = require('../util/db');

let router = express.Router();

 
// Collection Name
const collectionName = 'geolocation';

const defLong = -91.9694793;
const defLat = 41.0178238;

let checkOp = [
	check('name').exists(),
	check('category').exists(),
	check('location').exists(),
  	check('name', 'name must be atleast one character').isLength({ min: 1 }),
  	check('category', 'category must be atleast one character').isLength({ min: 1 }),
  	check('location.0', 'longitude must be atleast present').isLength({ min: 1 }),
  	check('location.1', 'latitude must be atleast present').isLength({ min: 1 }),
];

let checkSearch = [
	check('category').exists(),
  	check('category', 'category must be present').isLength({ min: 1 })
];

/* GET home page. */
router.get('/', function(req, res, next) {

	let collection = db.get().collection(collectionName);
  	
	collection.find().limit(100).toArray(function(err, docs) {
	    res.send(docs);
	})
});

router.post('/', checkOp, function(req, res, next) {

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
		    return res.status(422).json({ errors: errors.mapped() });
		}else {
			const loc = matchedData(req);
			const collection = db.get().collection(collectionName);

			let query = {
				"name": loc.name
			};

			collection.findOne(query, (err, doc) => {
				if(err) throw err;

				if(doc != null) {
					return res.status(200).json({"message": "Name already been added..."});
				}

				collection.insert(loc, (err, doc) => {
					if(err) throw err;
					doc.message = "added successfully";
					res.status(200).json(doc);
				})
				
			});

	  	}
});

router.put('/', checkOp, function(req, res, next) {
  	const errors = validationResult(req);
		if (!errors.isEmpty()) {
		    return res.status(422).json({ errors: errors.mapped() });
		}else {
			const loc = matchedData(req);
			const collection = db.get().collection(collectionName);

			let query = {
				"name": loc.name
			};

			collection.findOne(query, (err, doc) => {
				if(err) throw err;

				if(doc == null) {
					return res.status(200).json({"message": "No name found to modify..."});
				}

				query = {
					$set: {
						category: loc.category,
						location: [loc.location[0], loc.location[1]]
					}
				};

				collection.updateOne(doc, query, (err, upDoc) => {
					console.log(err);
					if(err) throw err;
					upDoc.message = "updated successfully";
					res.status(200).json(upDoc);
				});
			});

	  	}
});

router.delete('/:name', function(req, res, next) {

	const collection = db.get().collection(collectionName);

	let query = {
		"name": req.params.name
	};
	
  	collection.findOne(query, (err, doc) => {
		if(err) throw err;

		if(doc == null) {
			return res.status(200).json({"message": "No name found to delete..."});
		}

		collection.remove(doc, (err, delDoc) => {
			console.log(err);
			if(err) throw err;
			delDoc.message = "deleted successfully";
			res.status(200).json(delDoc);
		});
	});
});

router.get('/index', function(req, res, next) {

	const collection = db.get().collection(collectionName);
	
  	collection.indexInformation((err, doc) => {
		if(err) throw err;

		res.status(200).json(doc);
	});
});

router.get('/addindex', function(req, res, next) {

	const collection = db.get().collection(collectionName);

	let query = {
		location: "2dsphere"
	}
	
  	collection.ensureIndex(query, (err, doc) => {
		if(err) throw err;

		res.status(200).json(doc);
	});
});

router.get('/addgeometry', function(req, res, next) {

	const collection = db.get().collection(collectionName);

	let query = { geometry: "2dsphere" };
	
  	collection.ensureIndex(query, (err, doc) => {
		if(err) throw err;

		res.status(200).json(doc);
	});
});

router.post('/search', checkSearch, function(req, res, next) {

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
		    return res.status(422).json({ errors: errors.mapped() });
		}else {
			const loc = req.body;
			
			const collection = db.get().collection(collectionName);

			if(loc.longitude == undefined) loc.longitude = defLong;
			if(loc.latitude == undefined) loc.latitude = defLat;

			let coordinates = [];
			coordinates[0] = loc.longitude;
			coordinates[1] = loc.latitude;
			
			// within 5 miles

			var query = {$and : [{ location:{ $geoWithin:
                { $centerSphere: [ [ loc.longitude, loc.latitude ], 5 / 3963.2 ] } } }, {'category': loc.category}]}
            collection.find(query).limit(10).toArray(function(err, docs) {
				res.send(docs);
            });

	  	}
});

module.exports = router;