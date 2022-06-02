/**
 *  Setting up the nodemailer to send the emails
 * 
 */

const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    port : 465,
    host : "smtp.gmail.com",
    auth : {
        user : "1606020@kiit.ac.in",
        pass : "wfkkknbfokqnebbf"
    },
    secure : true
});
