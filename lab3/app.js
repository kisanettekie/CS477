/*

1. Create a http or https server which is listen to 3000 port.
2. The home page “/” which displays an html page with one input to enter any text message.
3. User enter some message, then click “Submit” button.
4. The user’s inputs are stored in a local file on the server side.
5. User will be redirect to home page after saving successfully.

*/


const http = require('http'); 
const fs = require ('fs');

http.createServer((req,res)=>{
    const url = req.url;
    const method= req.method;

    if(url === "/"){
        fs.createReadStream('one.html').pipe(res);
    }else if(url === 'message' && method ==='POST'){
        const body =[];
        req.on('data', (chunck)=>{
            body.push(chunck);
        
        });
        req.on('end',()=>{
            const postData = Buffer.concat(body).toString();
            console.log(postData);
            fs.writeFile('local.txt', postData.split('=')[1])
            } 

        

        
    
});

