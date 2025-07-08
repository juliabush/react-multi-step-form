const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

// importing express, nodemailer, and cors modules as storing them as cosntants so they can be referred to later

// creating a object called transporter holding key value pairs
const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "j.elizabethbush@gmail.com",
    pass: "lytg fjzt fncb xynp",
  },
});

// express() is a function call that creates a web server object and stores as app constant
const app = express();
// assigning constant port a value, 3000 is used as its a common default
const port = 3000;
// Important line, adds middleware that allows express to read req.body when sending JSON data
app.use(express.json());
// app.use tells express app to aplly middleware to every http request and cors is a middleware function, that allows webpages from one domain(origin) to request another domain
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
// app.post defines a route handler for http post requests, /sendmail is the url endpoint, sendMAil is a function called whenever post is made to endpoint
app.post("/sendmail", sendMail);
