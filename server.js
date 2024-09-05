const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const bcrypt= require('bcrypt');
const mysql= require("mysql")

//This connects my database
const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"teachez"
});

connection.connect(function(error){
    if(error) throw error
    else console.log("Connected to the database successfully")
});


const app = express();
const port = 3000;


//To see the static files css and img for ejs
app.use(express.static("public"));
// To convert data into JSON format
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//this will directly take us to the homepage
app.get("/", (req, res) => {
    res.render("home.ejs");
  });
  app.get("/home", (req, res) => {
    res.render("home.ejs");
  });
  
app.get("/teacherslogin", (req, res) => {
    res.render("teacher_login.ejs");
});

app.get("/studentslogin", (req, res) => {
  res.render("student_login.ejs");
});

//login backend linking with DB
//Teacher login
app.post("/teacherslogin", function(req, res){
  var teacherEmail= req.body.email;
  var studentPassword= req.body.password;
  connection.query("select * from teacher_login where teacherEmail= ? and teacherPassword=? ",[teacherEmail, studentPassword], function(error, results, fields){
    if(results.length > 0){
      res.redirect("/department");
    }else{
      res.redirect("/teacherslogin");
    }
    res.end();
  })

});

//Student Login
app.post("/studentslogin", function(req, res){
  var studentEmail= req.body.email;
  var studentPassword= req.body.password;
  connection.query("select * from student_login where studentEmail= ? and studentPassword=? ",[studentEmail, studentPassword], function(error, results, fields){
    if(results.length > 0){
      res.redirect("/studentdashboard");
    }else{
      res.redirect("/studentslogin");
    }
    res.end();
  })

});

//Teacher DashBoard:
app.get("/department", (req, res) =>{
  res.render("department.ejs");
});

app.get("/evaluation", (req, res) =>{
  res.render("evaluation.ejs");
});

app.get("/practical", (req, res) =>{
  res.render("practical.ejs");
});

app.get("/section", (req, res) =>{
  res.render("section.ejs");
});

app.get("/subjects", (req, res) =>{
  res.render("subjects.ejs");
});

app.get("/theory", (req, res) =>{
  res.render("theory.ejs");
});

app.get("/studentdashboard", (req, res)=>{
  res.render("studentdashboard.ejs");
});

//This is for Theory Rubrics:
app.get("/presentation", (req, res)=>{
  res.render("presentation.ejs")
});

app.get("/mse", (req, res)=>{
  res.render("mse.ejs")
});

app.get("/experiment", (req, res)=>{
  res.render("experiment.ejs")
});

app.get("/esep", (req, res)=>{
  res.render("esep.ejs")
});

app.get("/ese", (req, res)=>{
  res.render("ese.ejs")
});

app.get("/discussion", (req, res)=>{
  res.render("discussion.ejs")
});

app.get("/cceattendance", (req, res)=>{
  res.render("cceattendance.ejs")
});

app.get("/attendance", (req, res)=>{
  res.render("attendance.ejs")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});