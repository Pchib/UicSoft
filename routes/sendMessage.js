const config = require("../config/config");
// const answers = require("../models/answers");
// const AgricJss1answer = require("../models/AgricJss1answer");
// const AgricJss2answer = require("../models/AgricJss2answer");
// const AgricJss3answer = require("../models/AgricJss3answer");
const { mailer, mailer2 } = require("./mailer");
const nodemailer = require("nodemailer");

const mongoose = require("mongoose");
mongoose.set("debug", true);

function sendMessage(req, res) {
  // query answers
  const examData = req.body.questionPayload;

  console.log(req.body);
  console.log(req.body.user.Class);
  console.log(req.body.user.subject);

  console.log(req.body.user.email);
  console.log(req.body.user.name);
        // res.send({
        //   score: score,
        //   status: true,
        // });
        // if (score > 4) {
        //   mailer(email, name, examque, examanswer, score, subject, Class);
        // } else if (score < 5) {
        //   mailer2(email, name, examque, examanswer, score, subject, Class);
        // }
    
}

module.exports = sendMessage;
