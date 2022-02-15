//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//setting up mongoDB
mongoose.connect("mongodb://localhost:27017/wikidb");

const articleSchema={
  title:String,
  content:String
};

const Article=mongoose.model("Article",articleSchema);

//GET route to fetch all articles

app.get("/articles",function(req,res){
  Article.find(function(err,foundArticles){
    if(!err){
      res.send(foundArticles);
    }else{
      res.send(err);
    }

  });
});

//todo
app.listen(3000, function() {
  console.log("Server started on port 3000");
});