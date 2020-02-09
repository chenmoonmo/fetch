const express = require('express');
const server = express();
const bodyparser = require('body-parser');
server.use(express.static('public'));
server.use(bodyparser.urlencoded({extended:false}));
server.post('/post',(req,res)=>{
    let user = req.body;
    res.send(`${user.uname},${user.time}好`)
})
server.get('/axios',(req,res)=>{
    res.send('hello axios!')
})
server.get('/json',(req,res)=>{
    let data ={
        "uname": "simon",
        "age" : 18
    };
    res.send(data);
})
server.listen(3000,console.log('server is running'));