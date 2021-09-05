const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactdance',{useNewUrlParser: true});
const app = express();
const bodyparser = require('body-parser');
const port = 80;

app.use('/static',express.static('static'));
app.use(express.urlencoded());

//define mongoose schema
var contactschema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    address:String,
    desc:String
});
async function basiclogin (email, password) {
    const response = await zlFetch.post(loginEndpoint, {
      auth: {
        username: email,
        password: password
      },
      body: { /*...*/ }
    })
  }

var contact = mongoose.model('contact',contactschema);

// set the templet as pug 
app.set('view engine' , 'pug'); 

// set the view directory
app.set("views",path.join(__dirname,"views"));

// set end point of pug 
app.get("/" , (req , res)=>{
    res.render('home.pug');
});
app.get("/mission" , (req , res)=>{
    res.render('home.pug');
});
app.get("/sponcers" , (req , res)=>{
    res.render('home.pug');
});

app.get("/contact" , (req , res)=>{
    res.render('contact.pug');
});
app.post("/contact" , (req , res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send('this data has been saved in database')
    }).catch(()=>{
        res.status(404).send("Error 404")
    });
});

app.listen(port,(req,res)=>{
    console.log(`the application started succesfully on port ${port}`);
});


             // show database 
// open powershell and type : mongodb
// open second powershell and type: mongo
//                                 after type: use contactdance
//                                 after type: show collections
//                                 after type: debugger.contacts.find()
                            
