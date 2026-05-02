const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure Gmail transporter (Replace with your credentials)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yourgmail@gmail.com", // Replace with your email
        pass: "YOUR_APP_PASSWORD", // Replace with your Gmail App Password
    },
});

// Email template for Partnership Program Registration
const getPartnershipEmailTemplate = (name, email, course, programType, referralCode = null, referralLink = null) => {
    const isPartner = programType === "Yes";
    
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Zion Tech Hub Partnership Program</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7fa;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #034FE3 0%, #023aa8 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0;
            opacity: 0.9;
        }
        .content {
            padding: 40px 35px;
        }
        .greeting {
            font-size: 24px;
            color: #1a1a1a;
            margin-bottom: 20px;
            font-weight: 600;
        }
        .message {
            color: #4a5568;
            margin-bottom: 25px;
        }
        .details-box {
            background-color: #f7f9fc;
            border-left: 4px solid #034FE3;
            padding: 20px;
            margin: 25px 0;
            border-radius: 8px;
        }
        .details-box p {
            margin: 10px 0;
        }
        .referral-card {
            background: linear-gradient(135deg, #207C3F 0%, #1a5f30 100%);
            color: white;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            margin: 25px 0;
        }
        .referral-code {
            font-size: 28px;
            font-weight: bold;
            letter-spacing: 2px;
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            font-family: monospace;
        }
        .referral-link {
            background: white;
            color: #207C3F;
            padding: 12px;
            border-radius: 8px;
            word-break: break-all;
            font-size: 12px;
            margin-top: 15px;
        }
        .referral-link a {
            color: #207C3F;
            text-decoration: none;
        }
        .button {
            display: inline-block;
            background-color: #034FE3;
            color: white;
            padding: 14px 35px;
            text-decoration: none;
            border-radius: 8px;
            margin-top: 20px;
            font-weight: 600;
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #023aa8;
        }
        .footer {
            background-color: #f8f9fa;
            padding: 25px;
            text-align: center;
            color: #6c757d;
            font-size: 12px;
            border-top: 1px solid #e9ecef;
        }
        .badge {
            display: inline-block;
            background-color: #034FE3;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        hr {
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 25px 0;
        }
        .social-links {
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Welcome to Zion Tech Hub!</h1>
            <p>Partnership Program Confirmation</p>
        </div>
        <div class="content">
            <div class="greeting">
                Hello ${name},
            </div>
            
            <p class="message">
                Thank you for registering for the <strong>Zion Tech Hub Partnership Program</strong>! 
                We're thrilled to have you join our growing community of tech enthusiasts and partners.
            </p>
            
            <div class="details-box">
                <p><strong>📧 Email:</strong> ${email}</p>
                <p><strong>📚 Selected Course:</strong> ${course}</p>
                <p><strong>🤝 Partnership Status:</strong> <span class="badge">${isPartner ? "Active Partner" : "Registered Student"}</span></p>
            </div>
            
            ${isPartner ? `
            <div class="referral-card">
                <h3 style="margin: 0 0 10px;">🎯 Your Unique Referral Code</h3>
                <div class="referral-code">${referralCode}</div>
                <p style="margin: 10px 0; font-size: 14px;">Share this code with friends and colleagues</p>
                <div class="referral-link">
                    <strong>🔗 Referral Link:</strong><br/>
                    <a href="${referralLink}" style="color: #207C3F;">${referralLink}</a>
                </div>
                <p style="margin-top: 15px; font-size: 13px;">
                    💰 Earn commissions when someone registers using your code!
                </p>
            </div>
            ` : `
            <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #034FE3;">
                    💡 <strong>Did you know?</strong> You can upgrade to our Partnership Program 
                    anytime to start earning commissions on referrals!
                </p>
            </div>
            `}
            
            <hr/>
            
            <h3>📋 What's Next?</h3>
            <ul style="color: #4a5568; margin-bottom: 25px;">
                <li>✓ Check your WhatsApp for program orientation details</li>
                <li>✓ Join our exclusive Telegram community</li>
                <li>✓ Access your learning dashboard</li>
                ${isPartner ? "✓ Start sharing your referral link to earn commissions" : ""}
                <li>✓ Receive weekly updates and resources</li>
            </ul>
            
            <center>
                <a href="#" class="button">
                    📱 Join Our WhatsApp Community
                </a>
            </center>
            
            <p style="margin-top: 30px;">
                Best regards,<br/>
                <strong>Zion Tech Hub Team</strong><br/>
                <span style="font-size: 12px; color: #6c757d;">Empowering tech talents for global impact</span>
            </p>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} Zion Tech Hub. All rights reserved.</p>
            <p>You're receiving this email because you registered for our Partnership Program.</p>
            <div class="social-links">
                <span>📧 contact@ziontechhub.com</span> | 
                <span>🌐 www.ziontechhub.com</span>
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

// Cloud Function triggered when a new course registration is created
exports.sendPartnershipEmail = functions.firestore
    .document("course_registrations/{registrationId}")
    .onCreate(async (snap, context) => {
        const registration = snap.data();
        
        const { 
            name, 
            email, 
            course, 
            programType, 
            referralCode, 
            referralLink 
        } = registration;

        console.log(`📧 Attempting to send email to: ${email}`);

        // Validate required fields
        if (!email || !name || !course) {
            console.error("❌ Missing required fields:", { name, email, course });
            await admin.firestore().collection("email_logs").add({
                to: email || "unknown",
                type: "partnership_registration",
                status: "failed",
                error: "Missing required fields",
                registrationId: context.params.registrationId,
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
            });
            return null;
        }

        const mailOptions = {
            from: "Zion Tech Hub Partnership <yourgmail@gmail.com>",
            to: email,
            subject: `🎉 Welcome to Zion Tech Hub, ${name}! Partnership Program Confirmation`,
            html: getPartnershipEmailTemplate(
                name, 
                email, 
                course, 
                programType, 
                referralCode, 
                referralLink
            ),
        };

        try {
            // Send the email
            const info = await transporter.sendMail(mailOptions);
            console.log(`✅ Email sent successfully to ${email}`);
            console.log("📨 Message ID:", info.messageId);

            // Log successful email in Firestore
            await admin.firestore().collection("email_logs").add({
                to: email,
                name: name,
                course: course,
                programType: programType,
                referralCode: referralCode || null,
                type: "partnership_registration",
                status: "success",
                messageId: info.messageId,
                sentAt: admin.firestore.FieldValue.serverTimestamp(),
                registrationId: context.params.registrationId,
            });

            // Update the registration document with email sent flag
            await snap.ref.update({
                emailSent: true,
                emailSentAt: admin.firestore.FieldValue.serverTimestamp(),
            });

            return { success: true, messageId: info.messageId };
            
        } catch (error) {
            console.error("❌ Email sending failed:", error);
            
            // Log failed email in Firestore
            await admin.firestore().collection("email_logs").add({
                to: email,
                name: name,
                course: course,
                type: "partnership_registration",
                status: "failed",
                error: error.message,
                errorCode: error.code || null,
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
                registrationId: context.params.registrationId,
            });

            // Update the registration document with email failed flag
            await snap.ref.update({
                emailSent: false,
                emailError: error.message,
                emailAttemptAt: admin.firestore.FieldValue.serverTimestamp(),
            });

            return null;
        }
    });

// Cloud Function for partner welcome email (triggered when partner document is created)
exports.sendPartnerWelcomeEmail = functions.firestore
    .document("partners/{partnerId}")
    .onCreate(async (snap, context) => {
        const partner = snap.data();
        
        const { name, email, course, referralCode, referralLink } = partner;

        console.log(`📧 Sending partner welcome email to: ${email}`);

        if (!email || !name) {
            console.error("❌ Missing required fields for partner email");
            return null;
        }

        const partnerMailOptions = {
            from: "Zion Tech Hub Partnership <yourgmail@gmail.com>",
            to: email,
            subject: `🚀 Congratulations ${name}! You're Now a Zion Tech Hub Partner`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f4f7fa; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; }
                    .header { background: linear-gradient(135deg, #207C3F, #1a5f30); color: white; padding: 30px; text-align: center; }
                    .content { padding: 30px; }
                    .code-box { background: #f5f5f5; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; }
                    .code { font-size: 24px; font-weight: bold; color: #207C3F; font-family: monospace; }
                    .button { background: #034FE3; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>🎉 Partnership Activated!</h1>
                    </div>
                    <div class="content">
                        <h2>Hello ${name},</h2>
                        <p>Congratulations! You are now an official <strong>Zion Tech Hub Partner</strong>.</p>
                        
                        <div class="code-box">
                            <h3>📊 Your Partner Dashboard</h3>
                            <p><strong>Referral Code:</strong></p>
                            <div class="code">${referralCode}</div>
                            <p><strong>Referral Link:</strong></p>
                            <p><a href="${referralLink}">${referralLink}</a></p>
                            <p><strong>Course:</strong> ${course}</p>
                        </div>
                        
                        <h3>📈 How to Maximize Your Earnings:</h3>
                        <ul>
                            <li>Share your referral link on social media</li>
                            <li>Invite friends and colleagues to join</li>
                            <li>Promote Zion Tech Hub courses in your network</li>
                            <li>Check your partner dashboard for real-time tracking</li>
                        </ul>
                        
                        <center>
                            <a href="${referralLink}" class="button">🚀 Start Sharing Now</a>
                        </center>
                        
                        <p>Every successful referral earns you a commission. The more you share, the more you earn!</p>
                        
                        <p>Best regards,<br><strong>Zion Tech Hub Partnership Team</strong></p>
                    </div>
                </div>
            </body>
            </html>
            `,
        };

        try {
            await transporter.sendMail(partnerMailOptions);
            console.log(`✅ Partner welcome email sent to ${email}`);
            
            await admin.firestore().collection("email_logs").add({
                to: email,
                type: "partner_welcome",
                status: "success",
                sentAt: admin.firestore.FieldValue.serverTimestamp(),
                partnerId: context.params.partnerId,
            });
            
            // Update partner document
            await snap.ref.update({
                welcomeEmailSent: true,
                welcomeEmailSentAt: admin.firestore.FieldValue.serverTimestamp(),
            });
            
            return true;
        } catch (error) {
            console.error("❌ Partner email failed:", error);
            await admin.firestore().collection("email_logs").add({
                to: email,
                type: "partner_welcome",
                status: "failed",
                error: error.message,
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
            });
            return null;
        }
    });

// Health check endpoint for debugging
exports.healthCheck = functions.https.onRequest(async (req, res) => {
    res.status(200).json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        services: {
            firestore: "connected",
            email: "configured"
        }
    });
});