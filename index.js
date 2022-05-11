'use strict';
//requre the package
const express = require('express')
// create an express app
const app = express()
const port = 3000
const recipeData=require('./data.json');

// creating a route 
// app.method(path,handler)

app.get("/firstroute",handlefirstroute);
app.get("/",homehandler);
app.get("/recipe",recipehandler)


//function
function recipehandler(req,res)
{
 // console.log(recipeData);
 let result=[];
 recipeData.data.forEach(Element => {
   let newrecipe=new Recipe(Element.title,Element.readyInMinutes,Element.summary,Element.image);
   result.push(newrecipe);
 })
  res.json(result);
}
function handlefirstroute(req,res)
{
    res.send("testing");
}
function homehandler(req,res)
{
  res.send("Hello welcome to my home page ");
}
/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/
// the server is listning
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function Recipe(title,time,summary,image)
{
  this.title=title;
  this.time=time;
  this.summary=summary;
  this.image=image;
}