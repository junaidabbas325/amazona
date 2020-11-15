const express = require("express")
const app = express();
const {getMethod, RecData} = require("./api/api")
const fs = require('fs');
const data = require("./data/test.json")
var bodyParser = require('body-parser');
'use strict';
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json())

function junaid(){
    fs.readFile('./data/newtest.json', 'utf-8' , function (err, student){
        let data = JSON.stringify(student, null, 2);
        console.log(data)
        return data
    });
}


console.log('This is after the read call');
app.get("/api/test", (req, res)=>{
    console.log('data is getting')

    res.json(junaid())
})
app.get("/api", (req, res) =>{
    console.log('data is getting')
    getMethod(req, res, data)
})
app.post("/api/post", (req, res) =>{
    console.log('data is posting')
    const len = data.length + 1
    RecData(req, res, data, len)
})

app.listen(5000, ()=>{
    console.log('port is working on 5000')
})