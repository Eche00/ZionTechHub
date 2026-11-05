
import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  reload,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  EmailOutlined,
  LockOutlined,
  Visibility,
  VisibilityOff,
  AdminPanelSettings,
  ArrowBack,
  Send,
  ShieldOutlined,
  SecurityOutlined,
  CheckCircleOutline,
} from "@mui/icons-material";
import { auth, db } from "../../lib/Config/firebase";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { techhublogo } from "../../assets";
import toast from "react-hot-toast";



// Reusable branding
const Brand = () => (
  <Link to="/" className="inline-flex items-center gap-2.5 group">
    <img
      src={techhublogo}
      alt="Zion Tech Hub"
      className="w-9 h-9 rounded-lg object-cover border border-gray-700 group-hover:border-blue-500 transition-colors"
    />

    <div>
      <p className="text-white font-bold text-xs tracking-wide">
        ZION <span className="text-blue-500">TECH HUB</span>
      </p>
      <p className="text-gray-500 text-[9px] tracking-[1.5px] uppercase">
        Technology & Innovation
      </p>
    </div>
  </Link>
);

// Shared page layout
const PageLayout = ({ children }) => (
  <div className=" w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex items-center justify-center px-4 py-3 relative overflow-hidden">

    {/* Background accents */}
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

    <div className="relative z-10 w-full max-w-[390px]">

      {/* Branding */}
      <div className="flex justify-center mb-3">
        <Brand />
      </div>

      {/* Authentication card */}
      <main className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/80 rounded-2xl shadow-2xl overflow-hidden">

        <div className="h-[2px] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900" />

        <div className="px-5 py-5 sm:px-7 sm:py-5">
          {children}
        </div>
      </main>

      {/* Compact footer */}
      <div className="flex items-center justify-center gap-2 mt-3 text-gray-500">
        <ShieldOutlined sx={{ fontSize: 12 }} />
        <p className="text-[10px]">
          Secure administrator portal
        </p>
        <span className="text-gray-700">•</span>
        <p className="text-[10px]">
          © {new Date().getFullYear()} Zion Tech Hub
        </p>
      </div>

    </div>
  </div>
);

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
  const [resetSent, setResetSent] = useState(false);

  const navigate = useNavigate();

  // Check existing authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      try {
        const adminDoc = await getDoc(doc(db, "admins", user.uid));

        let isAdmin =
          adminDoc.exists() && adminDoc.data().isActive === true;

        if (!isAdmin) {
          const userDoc = await getDoc(doc(db, "users", user.uid));

          isAdmin =
            userDoc.exists() && userDoc.data().role === "Admin";
        }

        if (isAdmin) {
          navigate("/dashboard/home", { replace: true });
        }
      } catch (err) {
        console.error("Authentication verification error:", err);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Input handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setError("");
    setEmailError(false);
    setPasswordError(false);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Login handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setEmailError(false);
    setPasswordError(false);

    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setPasswordError(true);
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      // Authenticate user with Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Refresh user information
      await reload(user);

      // Require email verification before allowing access
      if (!user.emailVerified) {
        await signOut(auth);

        const message =
          "Your email address has not been verified. Please check your inbox and spam folder, then click the verification link before signing in.";

        setError(message);
        toast.error("Please verify your email before signing in.");

        return;
      }

      // Get user profile from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      let userData = null;

      if (userDoc.exists()) {
        userData = userDoc.data();
      }

      // Also check the admins collection for existing administrator accounts
      const adminDoc = await getDoc(doc(db, "admins", user.uid));

      if (!userData && adminDoc.exists()) {
        userData = adminDoc.data();
      }

      // Welcome user whether Team or Admin
      const displayName =
        userData?.name ||
        userData?.username ||
        user.displayName ||
        email.split("@")[0];

      toast.success(`Welcome back, ${displayName}!`);

      navigate("/dashboard/home", { replace: true });

    } catch (err) {
      console.error("Login error:", {
        code: err.code,
        message: err.message,
        error: err,
      });

      const errors = {
        "auth/user-not-found":
          "No account was found with this email address.",

        "auth/wrong-password":
          "Incorrect password. Please try again.",

        "auth/invalid-credential":
          "Incorrect email or password.",

        "auth/invalid-login-credentials":
          "Incorrect email or password.",

        "auth/too-many-requests":
          "Too many failed login attempts. Please wait a while and try again.",

        "auth/invalid-email":
          "Please enter a valid email address.",

        "auth/network-request-failed":
          "Unable to connect. Please check your internet connection.",

        "auth/user-disabled":
          "This account has been disabled. Please contact support.",

        "permission-denied":
          "Your account was authenticated, but we couldn't retrieve your profile. Please contact support.",

        "unavailable":
          "The service is temporarily unavailable. Please try again shortly.",
      };

      const message =
        errors[err.code] ||
        "Unable to sign in right now. Please check your details and try again.";

      setError(message);
      toast.error(message);

      // Clear any partially authenticated session after a failure.
      if (auth.currentUser) {
        await signOut(auth).catch((signOutError) => {
          console.error("Sign-out error:", signOutError);
        });
      }

    } finally {
      setLoading(false);
    }
  };

  // Password reset handler
  const handleForgotPassword = async (e) => {
    e.preventDefault();

    const email = resetEmail.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setResetLoading(true);

    try {
      await sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}/signin`,
        handleCodeInApp: false,
      });

      setResetSent(true);
      toast.success("Password reset instructions sent.");

    } catch (err) {
      console.error("Reset error:", err.code);

      if (err.code === "auth/too-many-requests") {
        toast.error("Too many requests. Please try again later.");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Invalid email address.");
      } else {
        toast.error("Unable to send reset email. Please try again.");
      }
    } finally {
      setResetLoading(false);
    }
  };

  const closeReset = () => {
    setResetMode(false);
    setResetSent(false);
    setResetEmail("");
  };



  // Reusable input styling
  const inputClass =
    "w-full bg-black/40 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-[13px] text-white placeholder:text-gray-600 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10";
  // Forgot password screen
  if (resetMode) {
    return (
      <PageLayout>
        <div className="text-center mb-7">

          <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            {resetSent ? (
              <CheckCircleOutline sx={{ fontSize: 28, color: "#22c55e" }} />
            ) : (
              <Send sx={{ fontSize: 27, color: "#3b82f6" }} />
            )}
          </div>

          <h1 className="text-white font-bold text-2xl mt-4">
            {resetSent ? "Check your inbox" : "Reset password"}
          </h1>

          <p className="text-gray-400 text-xs mt-2 leading-relaxed">
            {resetSent
              ? "If an account is associated with that email, password reset instructions will be sent."
              : "Enter your administrator email address to receive password reset instructions."}
          </p>
        </div>

        {resetSent ? (
          <div className="space-y-5">

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
              <p className="text-green-400 text-sm font-medium">
                Reset instructions requested
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Check your inbox and spam folder for the reset link.
              </p>
            </div>

            <button
              onClick={closeReset}
              className="w-full flex items-center justify-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors py-2"
            >
              <ArrowBack sx={{ fontSize: 17 }} />
              Back to login
            </button>
          </div>
        ) : (
          <form onSubmit={handleForgotPassword} className="space-y-4">

            <div>
              <label className="block text-gray-300 text-xs font-medium mb-2">
                Email address
              </label>

              <div className="relative">
                <EmailOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" sx={{ fontSize: 19 }} />

                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="admin@ziontechub.com"
                  autoComplete="email"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={resetLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-sm font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {resetLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending instructions...
                </>
              ) : (
                <>
                  <Send sx={{ fontSize: 17 }} />
                  Send reset instructions
                </>
              )}
            </button>

            <button
              type="button"
              onClick={closeReset}
              className="w-full text-gray-400 hover:text-white text-xs py-2 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowBack sx={{ fontSize: 15 }} />
              Back to login
            </button>
          </form>
        )}
      </PageLayout>
    );
  }

  // Main login screen
  return (
    <PageLayout>

      {/* Header */}
      <div className="mb-5">

        <div className="flex items-center justify-between mb-3">

          <div className="flex items-center gap-1.5 text-blue-400">
            <AdminPanelSettings sx={{ fontSize: 17 }} />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Administrator
            </span>
          </div>

          <span className="flex items-center gap-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-[9px] font-medium">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            Restricted Access
          </span>

        </div>

        <h1 className="text-white text-xl font-bold tracking-tight">
          Welcome back
        </h1>

        <p className="text-gray-400 text-[11px] mt-1 leading-relaxed">
          Sign in to manage your platform and access your administration dashboard.
        </p>

      </div>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Error */}
        {error && (
          <div className="flex items-start gap-2.5 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
            <SecurityOutlined sx={{ fontSize: 17, color: "#f87171", mt: "1px" }} />
            <p className="text-red-400 text-xs leading-relaxed">
              {error}
            </p>
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-gray-300 text-xs font-medium mb-2">
            Email address
          </label>

          <div className="relative">
            <EmailOutlined
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              sx={{ fontSize: 19 }}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@ziontechub.com"
              autoComplete="username"
              className={`${inputClass} ${emailError ? "border-red-500 focus:border-red-500" : ""
                }`}
            />
          </div>

          {emailError && (
            <p className="text-red-400 text-[11px] mt-1.5">
              Enter a valid email address.
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-gray-300 text-xs font-medium">
              Password
            </label>
          </div>

          <div className="relative">
            <LockOutlined
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              sx={{ fontSize: 19 }}
            />

            <input
              type={visible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
              className={`${inputClass} pr-11 ${passwordError ? "border-red-500 focus:border-red-500" : ""
                }`}
            />

            <button
              type="button"
              onClick={() => setVisible(!visible)}
              aria-label={visible ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-400 transition-colors"
            >
              {visible ? (
                <VisibilityOff sx={{ fontSize: 19 }} />
              ) : (
                <Visibility sx={{ fontSize: 19 }} />
              )}
            </button>
          </div>

          {passwordError && (
            <p className="text-red-400 text-[11px] mt-1.5">
              Please enter your password.
            </p>
          )}
        </div>

        {/* Forgot password */}
        <div className="flex justify-end pt-0.5">
          <button
            type="button"
            onClick={() => setResetMode(true)}
            className="text-blue-400 hover:text-blue-300 text-xs transition-colors"
          >
            Forgot password?
          </button>
        </div>

        {/* Login button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white rounded-xl py-3 text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-600/10"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Authenticating...
            </span>
          ) : (
            "Sign in to dashboard"
          )}
        </button>
      </form>

      {/* Security information */}
      <div className="mt-6 pt-5 border-t border-gray-800">

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <ShieldOutlined sx={{ fontSize: 17, color: "#60a5fa" }} />
          </div>

          <div>
            <p className="text-gray-300 text-xs font-medium">
              Protected administrator area
            </p>

            <p className="text-gray-500 text-[10px] leading-relaxed mt-1">
              Authorized access only. Sign-in activity may be monitored for security purposes.
            </p>
          </div>
        </div>
      </div>

      {/* Website link */}
      <div className="text-center mt-5">
        <Link
          to="/"
          className="text-gray-500 hover:text-blue-400 text-xs transition-colors"
        >
          <span className="mr-1">←</span>
          Return to website
        </Link>
      </div>

    </PageLayout>
  );
}

export default Signin;
