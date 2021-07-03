/*
1. Create a npm project and install Express.js (Nodemon if you want)
2. Change your Express.js app which serves HTML files (of your choice with your content) for “/”, “/users” and “/products”.
3. For “/users” and “/products”, provides GET and POST requests handling (of your choice with your content) in different routers.
4. Add some static (.js or .css) files to your project that should be required by at least one of your HTML files.
5. Customize your 404 page
6. Provide your own error handling

*/





const express = require('express');
const productRouter= require('./routes/products');
const userRouter= require('./routes/users');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
//app.use(express.static(path.join(__dirname,public)));

app.use("/products", productRouter) 
app.use('users', userRouter);

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.use(function(err, req, res,next) {
    res.status(500).send("Something went wrong");
})

app.listen(4000,()=>{
    console.log("your server listening 4000");
});