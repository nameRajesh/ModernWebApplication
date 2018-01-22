const express = require('express');
const GradeMg = require('../entity/grades');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

let gradesMg = new GradeMg();
let router = express.Router();

let checkOp = [
	check('id').exists(),
	check('name').exists(),
	check('course').exists(),
	check('grade').exists(),
  	check('id', 'Id must be atleast one character').isLength({ min: 1 }),
  	check('name', 'name must be atleast one character').isLength({ min: 1 }),
  	check('course', 'course must be atleast one character').isLength({ min: 1 }),
  	check('grade', 'grade must be atleast one character').isLength({ min: 1 }),
  	sanitize('id').toInt()
];

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.status(200).json(gradesMg.getGrades());
});

router.post('/', checkOp, function(req, res, next) {

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
		    return res.status(422).json({ errors: errors.mapped() });
		}else {
			const gd = matchedData(req);
			let q = gradesMg.getGradesById(gd.id);

  			if(q != null) {
  				return res.status(422).json({ errors: "id is already present"});
  			}

	  		gradesMg.add(gd);
	  		res.status(200).json({"message": "done"});
	  	}
});

router.put('/', checkOp, function(req, res, next) {
  	const errors = validationResult(req);
		if (!errors.isEmpty()) {
		    return res.status(422).json({ errors: errors.mapped() });
		}else {
			const gd = matchedData(req);
			let q = gradesMg.getGradesById(gd.id);

  			if(q == null) {
  				return res.status(422).json({ errors: "Error: id is not present"});
  			}

	  		gradesMg.modify(gd);
	  		res.status(200).json({"message": "done"});
	  	}
});

router.delete('/:id', function(req, res, next) {
	let id = req.params.id;
	let q = gradesMg.getGradesById(id);
	
	if(q == null) {
		return res.status(422).json({ errors: "Error: id is not present"});
	}

	gradesMg.delete(id);
  	res.status(200).json({"message": "done"});
});

module.exports = router;