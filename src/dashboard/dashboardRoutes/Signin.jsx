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

  const navigate = useNavigate();

  // Check if user is already logged in as admin
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if user is admin in Firestore
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

    // Validate
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
      
      // Check if user is an admin in Firestore
      const adminDoc = await getDoc(doc(db, "admins", user.uid));
      
      if (!adminDoc.exists()) {
        // Not an admin - sign out
        await auth.signOut();
        setError("Access Denied: You are not authorized as an administrator.");
        toast.error("Access Denied. Admin only.");
        setLoading(false);
        return;
      }
      
      const adminData = adminDoc.data();
      
      if (!adminData.isActive) {
        await auth.signOut();
        setError("Your admin account has been disabled.");
        toast.error("Account disabled.");
        setLoading(false);
        return;
      }
      
      // If we get here, admin login is successful regardless of email verification
      toast.success(`Welcome back, ${adminData.name || 'Admin'}!`);
      navigate("/dashboard/home");
      
    } catch (error) {
      console.error("Login error:", error);
      
      // Handle specific Firebase auth errors
      if (error.code === "auth/user-not-found") {
        setError("No admin account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many login attempts. Please try again later.");
      } else {
        setError("Login failed. Please try again.");
      }
      toast.error(setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:flex sm:items-center sm:justify-center h-[100vh] bg-[#1F1F1F] overflow-hidden overscroll-none">
      <main className="relative flex flex-col sm:shadow-2xl sm:rounded-2xl sm:h-fit h-screen sm:w-[700px] w-full p-[20px] sm:border-2 border-gray-700">
        {/* Admin Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">
            <AdminPanelSettings sx={{ fontSize: 14 }} />
            <span>Admin Access Only</span>
          </div>
        </div>

        <Link to="/" className="rounded-full p-2 w-fit">
          <img
            src={techhublogo}
            alt="logo"
            className="w-[50px] h-[50px] object-cover border-gray-500 border-2 rounded-full"
          />
        </Link>

        <div className="w-[90%] mx-auto md:w-[60%]">
          <div className="text-center mb-6">
            <AdminPanelSettings sx={{ fontSize: 48, color: "#3b82f6", margin: "0 auto" }} />
            <h1 className="text-white font-bold mt-4 text-[24px]">
              Admin Dashboard Login
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Enter your administrator credentials
            </p>
          </div>

          <form className="w-full" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm mb-4">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-[5px] my-5">
              <p className="text-gray-400 text-sm">Admin Email:</p>
              <div className="flex items-center gap-2 bg-black border-2 border-gray-700 w-full px-3 py-4 rounded-[10px] text-white focus-within:border-blue-500 transition-colors">
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

            <div className="flex flex-col gap-[5px] my-5">
              <p className="text-gray-400 text-sm">Password:</p>
              <div className="flex items-center gap-2 bg-black border-2 border-gray-700 w-full px-3 py-4 rounded-[10px] text-white focus-within:border-blue-500 transition-colors">
                <span
                  className="text-gray-500 border-r border-gray-500 pr-2 cursor-pointer hover:text-gray-300"
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

            <div className="flex items-center gap-[10px] my-4">
              <span className="flex-1 bg-gray-700 h-[0.2px]"></span>
              <span className="text-gray-400 text-xs">Secure Admin Area</span>
              <span className="flex-1 bg-gray-700 h-[0.2px]"></span>
            </div>

            <div className="w-full flex items-center justify-center flex-col">
              <button
                className="bg-blue-600 w-full py-[12px] text-[14px] font-bold text-white rounded-[10px] my-[10px] cursor-pointer hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div role="status" className="flex items-center justify-center gap-2">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-200 animate-spin fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span>Authenticating...</span>
                  </div>
                ) : (
                  "Sign In as Admin"
                )}
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              <Link to="/" className="underline text-blue-400 hover:text-blue-300">
                Return to Website
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signin;
