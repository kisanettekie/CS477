/*
Create a web server that's going to send a response of big image 
(bigger then 3MB) to any client that sends a request to your specified server:port. 
Use the best way for performance. (Try to solve this in many different ways and inspect 
the loading time in the browser and send many requests to see the performance differences)
*/


const fs = require('fs');
const path = require('path')
const server = require('http').createServer();

server.on('request', (req,res)=> {
    const src = fs.createReadStream(path.join(__dirname,'im.jpeg'));
    src.pipe(res);
});
server.listen(9000, function(){
    console.log("'I'm running!")
});