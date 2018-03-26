// var nodemailer = require("nodemailer");

// // Create the transporter with the required configuration for Gmail
// // change the user and pass !
// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true, // use SSL
//   auth: {
//     user: "navinprasadk@gmail.com",
//     pass: "NaviN@0808"
//   }
// });

// // setup e-mail data
// var mailOptions = {
//   from: '"Our Code World " <navinprasadk@gmail.com>', // sender address (who sends)
//   to: "navinprasad0808@mail.com", // list of receivers (who receives)
//   subject: "Hello", // Subject line
//   text: "Hello world ", // plaintext body
//   html:
//     "<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js" // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info) {
//   if (error) {
//     return console.log(error);
//   }

//   console.log("Message sent: " + info.response);
// });

var nodemailer = require("nodemailer");
// var invalidPlans = [ 'ds-svc', 'ce-au', 'ce-cs'];

var transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3"
  },
  auth: {
    user: "navinprasadk@outlook.com",
    pass: "NaviN@0808"
  }
});

// var htmlToSend = invalidPlans.map(item => {
//                   return `<li> ${item.toUpperCase()} </li>`
//                   })

// setup e-mail data, even with unicode symbols
var mailOptions = {
  from: "Mail Verification System", // sender address (who sends)
  to: "navin0808@hotmail.com", // list of receivers (who receives)
  subject: "Test mail", // Subject line
  text: "", // plaintext body
  html:
    "<center><h1>Mail Verification System</h1>" +
    "<br><h3>Hey, thanks for signing up!</h3><br>" +
    "<p> You are just one click away from activating your account</p><br>" +
    "<p>This is your activation code <b>" +
    "</b></p><br><br></center><p</p><br>"
  // html body
};
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: " + info.response);
});
