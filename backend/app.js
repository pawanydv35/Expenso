const express = require("express");
const  app = express();

app.get("/", (req,res)=>{
    res.send("hello express");
});

app.get("/dashboard", (req,res)=>{
    res.send("hello express");
});

app.get("/features", (req,res)=>{
    res.send("features");
});

app.get("/expense", (req,res)=>{
    res.send("expense");
});

app.get("/about", (req,res)=>{
    res.send("about me");
});

app.get("/contact", (req,res)=>{
    res.send("contact us");
});

app.listen(8000, ()=>{
    console.log("server is running");
});