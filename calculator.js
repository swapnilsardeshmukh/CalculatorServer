const express = require("express");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req ,res)
{
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req ,res)
{
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
    res.send("The result is " + result)
});

app.get("/bmicalculator", function(req ,res)
{
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator",function(req ,res)
{
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  var resultbmi = (weight /(Math.pow(height,2))* 10000);
    res.send("Your BMI in (Kg/\u33A1) " + resultbmi)
});


app.listen(3000, function(){
  console.log("Server Started on Port 3000")
});
