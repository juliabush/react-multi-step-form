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
