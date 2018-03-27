// const express = require("express"),
//   nodemailer = require("nodemailer"),
//   app = express(),
//   PORT = process.env.PORT || 8080,
//   server = require("http").Server(app);

// app.use(express.static("./../"));

// server.listen(PORT, (err, res) => {
//   if (err) {
//     console.log("error in server - > ", err);
//   } else {
//     console.log("Server up and listening on port ", PORT);
//   }
// });

const express = require("express"),
  nodemailer = require("nodemailer"),
  app = express(),
  PORT = process.env.PORT || 8080,
  server = require("http").Server(app);

server.listen(PORT, (err, res) => {
  if (err) {
    console.log("error in server - > ", err);
  } else {
    console.log("Server up and listening on port ", PORT);
  }
});

// allowing CORS control to the app server ---->
// app.use(function(req, res, next) {
//  	res.header("Access-Control-Allow-Origin", "*");
//  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  	next();
//  	});

// serving up static files to the server Eg.: img, html, css, js files ---->
app.use(express.static("./../client"));

// server routes ---->
app.use("/", (req, res, next) => {
  console.log("inside routes");
  next();
});

// serving up the app server to the environment port --->
// server.listen(port, (err, res)=>{
//   if (err) {
//     console.log('err in serving up the app server - > ',err);
//   } else {
//     console.log('server successfully serverd up in port 1100');
//   }
// });
