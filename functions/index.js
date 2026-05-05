const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.autoVerifyAdminEmail = functions.auth.user().onCreate(async (user) => {
  // Check if user is in admins collection
  const adminDoc = await admin.firestore().collection('admins').doc(user.uid).get();
  
  if (adminDoc.exists) {
    // Auto-verify admin emails
    await admin.auth().updateUser(user.uid, {
      emailVerified: true
    });
    console.log(`Auto-verified admin email for: ${user.email}`);
  }
  
  return null;
});
