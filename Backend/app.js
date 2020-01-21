const express = require ('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');




const mongoose = require('mongoose');
const adminRoutes = require('./Routes/admin');

mongodbUri ="mongodb://localhost:27017/crudDb";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(adminRoutes);


mongoose.connect( mongodbUri,{ useNewUrlParser: true }).then(res=>{
    console.log("mongodb connected successfully");
    app.listen(4000)
    console.log("app is listening to port number 4000")
}).catch(err=>{
    console.log(err)
})








