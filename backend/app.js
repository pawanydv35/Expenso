const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

//config
dotenv.config();


// rest objects
const  app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


// routes
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


//port
const PORT = 8080 || process.env.PORT

//listen
app.listen(PORT, () => {
   console.log(`server is running at ${PORT}`);
});