
"use strict"
const bodyParser = require("body-parser")
const express = require('express')
const db = require('mongoose')
const app = express()

db.connect('mongodb://localhost:27017/db_8layer',function(err){
  if (err){
    console.log(err)
  } else {
    console.log("NICE")
  }
}); 



// User Accounts

var Schem_user = db.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  user_type: String,
  control_no: {type: String, required: true}
})
// Models
var model_user = db.model("user_accounts",Schem_user);

app.use(bodyParser.json());
app.post('/', function(request, response){
console.log(request.body);      // your JSON
const {username,password,usertype} = request.body

model_user.findOne({username: username,password = password,user_type = usertype},function(err,search){
 if (err){
    response.send("Error:" + err);
 } else {
    response.send("Log-in!");
  }
}); 

});
app.listen(3000)
