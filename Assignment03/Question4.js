'use strict';

const   zlib = require("zlib"),
        fs = require('fs');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
let path = "./Image/photo.JPG";
let out = "./ZipFile.gz";

// Zip 
let input = fs.createReadStream(path);
let outGzip = fs.createWriteStream(out);
input.pipe(gzip).pipe(outGzip);

// Unzip
setTimeout(function() {
    let readStream = fs.createReadStream(out);
    let writestream = fs.createWriteStream(out.replace("ZipFile.gz", "UnzipImage.JPG"));
    readStream.pipe(gunzip).pipe(writestream);
}, 1000);