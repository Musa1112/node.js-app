const http = require('http');
const express = require('express')

const app = express()

const server = http.createServer(app)

app.use('/add-product', (req, res, next)=>{
    console.log('mali the head');
    res.send('<h1>add product to the category page</h1>')
   
});
app.use('/', (req, res, next)=>{
    console.log('mali the head');
    res.send('<h1>Hello express app</h1>')
   
});

app.listen(3000);


