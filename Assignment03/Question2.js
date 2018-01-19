const   fs = require('fs'),
        http = require('http'),
        image = "./Image/photo1.jpg";
let server = http.createServer((req, res) => {
    
    //Synchronous way of reading the image or file which is blocking. This read a whole file to buffer.
    
  /*  let img = fs.readFileSync(image);
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(img);*/
    
    //Asynchronous way of reading the image or file which is not blocking but read as a whole file to buffer.
    
 /*   fs.readFile(image, function(err, data) {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data);
    });*/
    
    // Stream is used to read the image which is must more efficient.
    let rStream = fs.createReadStream(image);
    rStream.pipe(res);
});
server.listen(8000, () =>console.log('NodeJS is listning to port 8080'));