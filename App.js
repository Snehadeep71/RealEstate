const express =require("express");
const fs=require("fs");
const path=require("path"); //this module is used for joining 2 strings
const app=express();
const port =80; 

//the express has been set to run a static file in the static folder ,the first static in the below code is the url and the second static is the directory name
app.use('/static',express.static("static"));
app.use(express.urlencoded());
// now we are setting the pug engine which is the template engine
app.set("view engine","pug");
// now we are setting the directory which happens to be the views
app.set("views",path.join(__dirname,"views"));

//getting(pushing the data to the server) the response from the server
app.get('/', (req, res) => {
    res.status(200).render('home.pug', { title: 'Hey(title)', message: 'Hello there!' })
  });
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug', { title: 'Hey(title)', message: 'Hello there!' })
  });


//starting the server
app.listen(port, ()=>{
    console.log(`your server has succefully running on the port no ${port}`)
})