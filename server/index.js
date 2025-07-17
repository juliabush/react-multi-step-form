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
function sendMail(req) {
  const { to, sub, msg } = req.body;
  transporter.sendMail({
    from: "j.elizabethbush@gmail.com",
    to: to.email,
    subject: sub.text,
    text: msg.text,
  });
}

app.post("/sendmail", sendMail);
// app.listen starts the express server, port 3000, then callback function to check if its running
app.listen(port, () => {
  console.log("Example app listening on port 3000");
});
// send mail function handles http post requests
// hypertext transfer protocol for datacommunication across servers
// request.body contains the data send from frontend
// extraxts to, sub, and msg from request body
