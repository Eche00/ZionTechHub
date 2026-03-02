const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

//  Gmail transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yourgmail@gmail.com",
        pass: "YOUR_APP_PASSWORD",
    },
});

exports.sendAffiliateEmail =
    functions.firestore
        .document("users/{userId}")
        .onCreate(async (snap, context) => {

            const user = snap.data();

            const mailOptions = {
                from: "Zion Tech Hub <yourgmail@gmail.com>",
                to: user.email,
                subject: "🎉 Welcome to Zion Tech Hub Affiliate Program",

                html: `
      <h2>Welcome ${user.username} </h2>

      <p>You are now an official Zion Tech Hub Affiliate.</p>

      <h3>Your Affiliate Details</h3>

      <p><b>Name:</b> ${user.username}</p>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Country:</b> ${user.country}</p>

      <hr/>

      <h2>Your Referral Code:</h2>
      <h1>${user.referralCode}</h1>

      <p>Your Referral Link:</p>

      <a href="${user.referralLink}">
        ${user.referralLink}
      </a>

      <br/><br/>

      <p>
        Share this link and earn commissions whenever
        someone registers using your link.
      </p>

      <br/>

      <b>Zion Tech Hub Team</b>
    `,
            };

            await transporter.sendMail(mailOptions);

            return null;
        });