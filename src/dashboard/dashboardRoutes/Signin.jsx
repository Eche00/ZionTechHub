import React, { useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail 
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { 
  EmailOutlined, 
  Lock, 
  LockOpen, 
  AdminPanelSettings,
  ArrowBack,
  Send
} from "@mui/icons-material";
import { auth, db } from "../../lib/Config/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { techhublogo } from "../../assets";
import toast from "react-hot-toast";

function Signin() {
  // State for login form
  const [formData, setFormData] = useState({ 
    email: "", 
    password: "" 
  });
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  // State for forgot password
  const [resetMode, setResetMode] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  
  const navigate = useNavigate();

  // Check if user is already logged in as admin
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check in admins collection
        let adminDoc = await getDoc(doc(db, "admins", user.uid));
        let isAdmin = false;
        
        if (adminDoc.exists() && adminDoc.data().isActive === true) {
          isAdmin = true;
        } else {
          // Check in users collection
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists() && userDoc.data().role === "Admin") {
            isAdmin = true;
          }
        }
        
        if (isAdmin) {
          navigate("/dashboard/home");
        }
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Handle login form input changes
  const handleChange = (e) => {
    e.preventDefault();
    setError("");
    setEmailError(false);
    setPasswordError(false);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (!formData.email.includes("@")) {
      setEmailError(true);
      setLoading(false);
      return;
    }
    if (!formData.password) {
      setPasswordError(true);
      setLoading(false);
      return;
    }

    try {
      // Sign in the user
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      const user = userCredential.user;
      
      // Check if user is admin in admins collection
      let adminDoc = await getDoc(doc(db, "admins", user.uid));
      let isAdmin = false;
      let adminData = null;
      
      if (adminDoc.exists() && adminDoc.data().isActive === true) {
        isAdmin = true;
        adminData = adminDoc.data();
        console.log("✅ Admin found in 'admins' collection");
      } else {
        // Check in users collection
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "Admin") {
          isAdmin = true;
          adminData = userDoc.data();
          console.log("✅ Admin found in 'users' collection");
        }
      }
      
      // If this is the special admin email but no admin document exists, create it
      if (!isAdmin && user.email === "admin@ziontechub.com") {
        console.log("Creating admin document for:", user.email);
        await setDoc(doc(db, "admins", user.uid), {
          uid: user.uid,
          email: user.email.toLowerCase(),
          name: "Super Admin",
          role: "super_admin",
          isActive: true,
          createdAt: serverTimestamp(),
          permissions: ["all"]
        });
        isAdmin = true;
        adminData = { name: "Super Admin" };
        toast.success("Admin account created! Please login again.");
        await auth.signOut();
        setLoading(false);
        return;
      }
      
      if (!isAdmin) {
        await auth.signOut();
        setError("Access Denied: You are not authorized as an administrator.");
        toast.error("Access Denied. Admin only.");
        setLoading(false);
        return;
      }
      
      // Successful login
      toast.success(`Welcome back, ${adminData?.name || adminData?.username || 'Admin'}!`);
      navigate("/dashboard/home");
      
    } catch (error) {
      console.error("Login error:", error.code);
      
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
        toast.error("Account not found");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
        toast.error("Wrong password");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please wait 15 minutes and try again.");
        toast.error("Too many attempts. Please wait.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email format.");
        toast.error("Invalid email");
      } else {
        setError("Login failed. Please try again.");
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle forgot password submission
  const handleForgotPassword = async () => {
    if (!resetEmail) {
      toast.error("Please enter your email address");
      return;
    }

    if (!resetEmail.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setResetLoading(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail, {
        url: `${window.location.origin}/signin`,
        handleCodeInApp: false
      });
      
      setResetSent(true);
      toast.success("Password reset email sent! Check your inbox.");
      
      // Auto redirect back to login after 5 seconds
      setTimeout(() => {
        setResetMode(false);
        setResetSent(false);
        setResetEmail("");
      }, 5000);
      
    } catch (error) {
      console.error("Reset error:", error);
      
      if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email address");
      } else if (error.code === "auth/too-many-requests") {
        toast.error("Too many requests. Please try again later");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else {
        toast.error("Failed to send reset email. Please try again.");
      }
    } finally {
      setResetLoading(false);
    }
  };

  // Forgot Password Mode UI
  if (resetMode) {
    return (
      <div className="sm:flex sm:items-center sm:justify-center h-[100vh] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden overscroll-none">
        <main className="relative flex flex-col sm:shadow-2xl sm:rounded-2xl sm:h-fit h-screen sm:w-[700px] w-full p-[20px] bg-gray-900 border border-gray-700">
          {/* Logo */}
          <Link to="/" className="rounded-full p-2 w-fit">
            <img
              src={techhublogo}
              alt="logo"
              className="w-[50px] h-[50px] object-cover border-gray-500 border-2 rounded-full"
            />
          </Link>

          <div className="w-[90%] mx-auto md:w-[60%] my-auto">
            <div className="text-center mb-6">
              <AdminPanelSettings sx={{ fontSize: 48, color: "#3b82f6", margin: "0 auto" }} />
              <h1 className="text-white font-bold mt-4 text-[24px]">Reset Password</h1>
              <p className="text-gray-400 text-sm mt-2">
                {resetSent 
                  ? "Check your email for the reset link" 
                  : "Enter your email to receive password reset instructions"}
              </p>
            </div>
            
            {resetSent ? (
              <div className="text-center">
                <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg mb-4">
                  <p className="text-sm">✅ Password reset email sent successfully!</p>
                  <p className="text-xs mt-2">Please check your inbox and spam folder.</p>
                </div>
                <button
                  onClick={() => {
                    setResetMode(false);
                    setResetSent(false);
                    setResetEmail("");
                  }}
                  className="text-blue-400 hover:text-blue-300 text-sm mt-4 flex items-center justify-center gap-2"
                >
                  <ArrowBack sx={{ fontSize: 16 }} />
                  Back to Login
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-[5px] my-5">
                  <p className="text-gray-400 text-sm">Email Address:</p>
                  <div className="flex items-center gap-2 bg-black border-2 border-gray-700 w-full px-3 py-4 rounded-[10px] focus-within:border-blue-500 transition-colors">
                    <span className="text-gray-500 border-r border-gray-500 pr-2">
                      <EmailOutlined />
                    </span>
                    <input
                      className="outline-none text-white flex-1 bg-transparent placeholder:text-gray-500"
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="admin@ziontechub.com"
                      autoComplete="email"
                      onKeyPress={(e) => e.key === 'Enter' && handleForgotPassword()}
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    Enter the email address associated with your admin account
                  </p>
                </div>
                
                <button
                  className="bg-blue-600 w-full py-[12px] text-[14px] font-bold text-white rounded-[10px] my-[10px] hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  onClick={handleForgotPassword}
                  disabled={resetLoading}
                >
                  {resetLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send sx={{ fontSize: 16 }} />
                      Send Reset Email
                    </>
                  )}
                </button>
                
                <button
                  className="text-gray-500 w-full text-center text-sm mt-4 hover:text-white transition-colors flex items-center justify-center gap-1"
                  onClick={() => setResetMode(false)}
                >
                  <ArrowBack sx={{ fontSize: 14 }} />
                  Back to Login
                </button>
              </>
            )}
          </div>
        </main>
      </div>
    );
  }

  // Main Login Form UI
  return (
    <div className="sm:flex sm:items-center sm:justify-center h-[100vh] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden overscroll-none">
      <main className="relative flex flex-col sm:shadow-2xl sm:rounded-2xl sm:h-fit h-screen sm:w-[700px] w-full p-[20px] bg-gray-900 border border-gray-700">
        {/* Admin Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs border border-blue-500/30">
            <AdminPanelSettings sx={{ fontSize: 14 }} />
            <span>Admin Access Only</span>
          </div>
        </div>

        {/* Logo */}
        <Link to="/" className="rounded-full p-2 w-fit">
          <img
            src={techhublogo}
            alt="logo"
            className="w-[50px] h-[50px] object-cover border-gray-500 border-2 rounded-full hover:scale-105 transition-transform"
          />
        </Link>

        <div className="w-[90%] mx-auto md:w-[60%] my-auto">
          <div className="text-center mb-6">
            <AdminPanelSettings sx={{ fontSize: 48, color: "#3b82f6", margin: "0 auto" }} />
            <h1 className="text-white font-bold mt-4 text-[28px]">Admin Login</h1>
            <p className="text-gray-400 text-sm mt-2">
              Enter your administrator credentials to access the dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm mb-4">
                {error}
              </div>
            )}

            {/* Email Field */}
            <div className="flex flex-col gap-[5px] my-5">
              <p className="text-gray-400 text-sm">Email Address:</p>
              <div className="flex items-center gap-2 bg-black border-2 border-gray-700 w-full px-3 py-4 rounded-[10px] focus-within:border-blue-500 transition-colors">
                <span className="text-gray-500 border-r border-gray-500 pr-2">
                  <EmailOutlined />
                </span>
                <input
                  className="outline-none text-white flex-1 bg-transparent placeholder:text-gray-500"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@ziontechub.com"
                  autoComplete="email"
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-1">Email must contain '@' symbol</p>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-[5px] my-5">
              <p className="text-gray-400 text-sm">Password:</p>
              <div className="flex items-center gap-2 bg-black border-2 border-gray-700 w-full px-3 py-4 rounded-[10px] focus-within:border-blue-500 transition-colors">
                <span
                  className="text-gray-500 border-r border-gray-500 pr-2 cursor-pointer hover:text-gray-300 transition-colors"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <Lock fontSize="small" /> : <LockOpen fontSize="small" />}
                </span>
                <input
                  className="outline-none text-white flex-1 bg-transparent placeholder:text-gray-500"
                  type={visible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">Please enter your password</p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="text-right mb-4">
              <button
                type="button"
                onClick={() => setResetMode(true)}
                className="text-gray-400 text-xs hover:text-blue-400 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-[10px] my-4">
              <span className="flex-1 bg-gray-700 h-[0.2px]"></span>
              <span className="text-gray-500 text-xs">Secure Admin Area</span>
              <span className="flex-1 bg-gray-700 h-[0.2px]"></span>
            </div>

            {/* Submit Button */}
            <button
              className="bg-blue-600 w-full py-[12px] text-[14px] font-bold text-white rounded-[10px] my-[10px] hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Home Link */}
            <p className="text-xs text-center text-gray-500 mt-4">
              <Link to="/" className="underline text-blue-400 hover:text-blue-300 transition-colors">
                Return to Website
              </Link>
            </p>

            {/* Security Notice */}
            <div className="mt-6 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-500 text-xs text-center">
                ⚠️ This area is restricted to authorized administrators only.
                <br />
                All access attempts are logged and monitored.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signin;
