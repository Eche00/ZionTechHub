// src/dashboard/dashboardRoutes/Signin.jsx
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { EmailOutlined, Lock, LockOpen, AdminPanelSettings } from "@mui/icons-material";
import { auth, db } from "../../lib/Config/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { techhublogo } from "../../assets";
import toast from "react-hot-toast";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [resetMode, setResetMode] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);

  const navigate = useNavigate();

  // Check if user is already logged in as admin
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if user is admin in Firestore (admins collection)
        const adminDoc = await getDoc(doc(db, "admins", user.uid));
        if (adminDoc.exists() && adminDoc.data().isActive === true) {
          navigate("/dashboard/home");
        } else {
          // Not admin, sign out
          await auth.signOut();
        }
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    e.preventDefault();
    setError("");
    setEmailError(false);
    setPasswordError(false);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

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
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      
      // Check if user is admin in Firestore
      let adminDoc = await getDoc(doc(db, "admins", user.uid));
      
      // If admin document doesn't exist, check if this user should be admin
      if (!adminDoc.exists()) {
        // Check if this email is in the allowed admin emails
        const adminEmails = ["admin@ziontechub.com", "admin@ziontechhub.com"];
        
        if (adminEmails.includes(user.email.toLowerCase())) {
          // Auto-create admin document
          await setDoc(doc(db, "admins", user.uid), {
            uid: user.uid,
            email: user.email.toLowerCase(),
            name: "Super Admin",
            role: "super_admin",
            isActive: true,
            createdAt: serverTimestamp(),
            permissions: ["all"],
            createdBy: "auto_login"
          });
          adminDoc = await getDoc(doc(db, "admins", user.uid));
          toast.success("Admin account created automatically!");
        } else {
          await auth.signOut();
          setError("Access Denied: You are not authorized as an administrator.");
          toast.error("Access Denied. Admin only.");
          setLoading(false);
          return;
        }
      }
      
      const adminData = adminDoc.data();
      
      if (!adminData.isActive) {
        await auth.signOut();
        setError("Your admin account has been disabled.");
        toast.error("Account disabled.");
        setLoading(false);
        return;
      }
      
      // SUCCESSFUL LOGIN
      toast.success(`Welcome back, ${adminData.name || 'Admin'}!`);
      navigate("/dashboard/home");
      
    } catch (error) {
      console.error("Login error:", error);
      
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
        toast.error("Account not found");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
        toast.error("Wrong password");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please wait 10 minutes and try again.");
        toast.error("Too many attempts");
      } else {
        setError("Login failed. Please try again.");
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      toast.error("Please enter your email address");
      return;
    }

    setResetLoading(true);
    try {
      const { sendPasswordResetEmail } = await import("firebase/auth");
      await sendPasswordResetEmail(auth, resetEmail);
      toast.success("Password reset email sent! Check your inbox.");
      setResetMode(false);
      setResetEmail("");
    } catch (error) {
      toast.error(error.message || "Failed to send reset email");
    } finally {
      setResetLoading(false);
    }
  };

  // Reset password mode
  if (resetMode) {
    return (
      <div className="sm:flex sm:items-center sm:justify-center h-[100vh] bg-[#1F1F1F]">
        <main className="relative flex flex-col sm:shadow-2xl sm:rounded-2xl sm:h-fit h-screen sm:w-[700px] w-full p-[20px] sm:border-2 border-gray-700">
          <Link to="/" className="rounded-full p-2 w-fit">
            <img src={techhublogo} alt="logo" className="w-[50px] h-[50px] object-cover border-gray-500 border-2 rounded-full" />
          </Link>
          <div className="w-[90%] mx-auto md:w-[60%]">
            <h1 className="text-start text-white font-bold my-[30px] text-[20px]">Reset Password</h1>
            <div className="flex flex-col gap-[5px] my-5">
              <p className="text-gray-500">Email Address:</p>
              <div className="flex items-center gap-2 bg-black border-2 border-gray-700 w-full px-3 py-4 rounded-[10px]">
                <span className="text-gray-500 border-r border-gray-500 pr-2"><EmailOutlined /></span>
                <input className="outline-none text-white flex-1 bg-transparent" type="email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} placeholder="Enter your email" />
              </div>
            </div>
            <button className="bg-blue-600 w-full py-[10px] text-white rounded-[10px]" onClick={handlePasswordReset} disabled={resetLoading}>
              {resetLoading ? "Sending..." : "Send Reset Email"}
            </button>
            <button className="text-gray-400 w-full text-center text-sm mt-2" onClick={() => setResetMode(false)}>← Back to Login</button>
          </div>
        </main>
      </div>
    );
  }

  // Main login form
  return (
    <div className="sm:flex sm:items-center sm:justify-center h-[100vh] bg-[#1F1F1F] overflow-hidden overscroll-none">
      <main className="relative flex flex-col sm:shadow-2xl sm:rounded-2xl sm:h-fit h-screen sm:w-[700px] w-full p-[20px] sm:border-2 border-gray-700">
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">
            <AdminPanelSettings sx={{ fontSize: 14 }} />
            <span>Admin Only</span>
          </div>
        </div>

        <Link to="/" className="rounded-full p-2 w-fit">
          <img src={techhublogo} alt="logo" className="w-[50px] h-[50px] object-cover border-gray-500 border-2 rounded-full" />
        </Link>

        <div className="w-[90%] mx-auto md:w-[60%]">
          <div className="text-center mb-6">
            <AdminPanelSettings sx={{ fontSize: 48, color: "#3b82f6", margin: "0 auto" }} />
            <h1 className="text-white font-bold mt-4 text-[24px]">Admin Login</h1>
            <p className="text-gray-400 text-sm mt-2">Enter your administrator credentials</p>
          </div>

          <form className="w-full" onSubmit={handleSubmit}>
            {error && <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm mb-4">{error}</div>}

            <div className="flex flex-col gap-[5px] my-5">
              <p className="text-gray-400 text-sm">Email:</p>
              <div className="flex items-center gap-2 bg-black border-2 border-gray-700 w-full px-3 py-4 rounded-[10px] text-white">
                <span className="text-gray-500 border-r border-gray-500 pr-2"><EmailOutlined /></span>
                <input className="outline-none text-white flex-1 bg-transparent" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="admin@ziontechub.com" />
              </div>
              {emailError && <p className="text-red-500 text-sm mt-1">Email must contain '@' symbol</p>}
            </div>

            <div className="flex flex-col gap-[5px] my-5">
              <p className="text-gray-400 text-sm">Password:</p>
              <div className="flex items-center gap-2 bg-black border-2 border-gray-700 w-full px-3 py-4 rounded-[10px] text-white">
                <span className="text-gray-500 border-r border-gray-500 pr-2 cursor-pointer" onClick={() => setVisible(!visible)}>
                  {visible ? <Lock fontSize="small" /> : <LockOpen fontSize="small" />}
                </span>
                <input className="outline-none text-white flex-1 bg-transparent" type={visible ? "text" : "password"} name="password" placeholder="Enter your password" onChange={handleChange} />
              </div>
              {passwordError && <p className="text-red-500 text-sm mt-1">Please enter your password</p>}
            </div>

            <div className="text-right mb-4">
              <button type="button" onClick={() => setResetMode(true)} className="text-gray-400 text-xs hover:text-blue-400">Forgot password?</button>
            </div>

            <button className="bg-blue-600 w-full py-[12px] text-[14px] font-bold text-white rounded-[10px] my-[10px] hover:bg-blue-700" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
              <Link to="/" className="underline text-blue-400">Return to Website</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signin;
