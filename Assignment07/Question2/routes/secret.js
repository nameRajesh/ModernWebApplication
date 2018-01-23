
var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');
var MongoClient = require('mongodb').MongoClient

var crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'asaadsaad';

function encrypt(text) {
    var cipher = crypto.createCipher(algorithm, password)
    var crypt = cipher.update(text, 'utf8', 'hex')
    crypt += cipher.final('hex');
    return crypt;
}

function decrypt(text) {
    var decipher = crypto.createDecipher(algorithm, password)
    var decrypt = decipher.update(text, 'hex', 'utf8')
    decrypt += decipher.final('utf8');
    return decrypt;
}

/* GET home page. */
router.get('/', function (req, res, next) {
    var db = mongo.db("mongodb://localhost:27017/lib", { native_parser: true });
    db.bind('homework7');
    db.homework7.findOne({}, function(err, data){
        res.end(decrypt(data.message));
    })
});

module.exports = router;