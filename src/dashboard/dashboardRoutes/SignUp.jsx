
import React, { useEffect, useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import { handleRegistration } from "../../lib/regLogic";
import {
  EmailOutlined,
  LockOutlined,
  Visibility,
  VisibilityOff,
  AdminPanelSettings,
  ShieldOutlined,
  SecurityOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { techhublogo } from "../../assets";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";



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
  <div className=" w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex items-center justify-center px-4 py-4 relative overflow-hidden">

    {/* Background accents */}
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

    <div className="relative z-10 w-full max-w-[390px]">

      {/* Branding */}
      <div className="flex justify-center mb-3">
        <Brand />
      </div>

      {/* Registration card */}
      <main className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/80 rounded-2xl shadow-2xl overflow-hidden">

        <div className="h-[2px] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900" />

        <div className="px-5 py-5 sm:px-7 sm:py-5">
          {children}
        </div>
      </main>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 mt-3 text-gray-500">
        <ShieldOutlined sx={{ fontSize: 12 }} />

        <p className="text-[10px]">
          Secure account registration
        </p>

        <span className="text-gray-700">•</span>

        <p className="text-[10px]">
          © {new Date().getFullYear()} Zion Tech Hub
        </p>
      </div>

    </div>
  </div>
);

function Signup() {
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "super_admin",
    createdAt: serverTimestamp(),
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  // Input handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setError("");
    setUsernameError(false);
    setEmailError(false);
    setPasswordError(false);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Registration handler
  const getRegistrationErrorMessage = (error) => {
    const errorCode = error?.code || "";
    const errorMessage = error?.message?.toLowerCase() || "";

    const errorMessages = {
      "auth/email-already-in-use":
        "An account with this email address already exists. Please sign in or use another email.",

      "auth/invalid-email":
        "The email address you entered is invalid. Please check it and try again.",

      "auth/weak-password":
        "Your password is too weak. Please use at least 8 characters with a combination of letters and numbers.",

      "auth/operation-not-allowed":
        "Registration is currently unavailable. Please contact the administrator.",

      "auth/network-request-failed":
        "Unable to connect to the server. Please check your internet connection and try again.",

      "auth/too-many-requests":
        "Too many registration attempts have been made. Please wait a while before trying again.",

      "auth/user-disabled":
        "This account has been disabled. Please contact the administrator.",

      "permission-denied":
        "You don't have permission to complete this registration. Please contact the administrator.",

      "already-exists":
        "An account with these details already exists.",

      "functions/already-exists":
        "An account with these details already exists.",

      "functions/permission-denied":
        "You don't have permission to complete this registration.",

      "functions/unauthenticated":
        "Your session has expired. Please refresh the page and try again.",

      "functions/unavailable":
        "The registration service is temporarily unavailable. Please try again shortly.",

      "functions/internal":
        "Something went wrong while creating your account. Please try again.",
    };

    if (errorMessages[errorCode]) {
      return errorMessages[errorCode];
    }

    // Handle common errors that may come from custom registration logic.
    if (
      errorMessage.includes("email already exists") ||
      errorMessage.includes("email is already in use")
    ) {
      return "An account with this email address already exists. Please sign in or use another email.";
    }

    if (
      errorMessage.includes("username already exists") ||
      errorMessage.includes("username is already taken")
    ) {
      return "This username is already taken. Please choose another username.";
    }

    if (
      errorMessage.includes("network") ||
      errorMessage.includes("offline")
    ) {
      return "Unable to connect to the server. Please check your internet connection and try again.";
    }

    if (
      errorMessage.includes("permission") ||
      errorMessage.includes("insufficient permissions")
    ) {
      return "You don't have permission to complete this registration. Please contact the administrator.";
    }

    if (
      errorMessage.includes("timeout") ||
      errorMessage.includes("deadline exceeded")
    ) {
      return "The request took too long to complete. Please try again.";
    }

    if (
      errorMessage.includes("quota") ||
      errorMessage.includes("resource exhausted")
    ) {
      return "The registration service is temporarily busy. Please try again later.";
    }

    return "We couldn't create your account right now. Please try again. If the problem continues, contact the administrator.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setUsernameError(false);
    setEmailError(false);
    setPasswordError(false);

    const username = formData.username.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    if (username.length < 5) {
      setUsernameError(true);
      setError("Your username must contain at least 5 characters.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setPasswordError(true);
      setError("Your password must contain at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      await handleRegistration({
        ...formData,
        username,
        email,
      });

      setVerificationEmail(email);
      setVerificationSent(true);

      toast.success("Verification email sent successfully!");
    } catch (error) {
      console.error("Registration error:", error);

      const message = getRegistrationErrorMessage(error);

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };



  // Input styling
  const inputClass =
    "w-full bg-black/40 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-[13px] text-white placeholder:text-gray-600 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10";

  return (
    <PageLayout>
      {verificationSent ? (
        <div className="text-center py-5">

          {/* Email icon */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
            <EmailOutlined sx={{ fontSize: 32, color: "#60a5fa" }} />
          </div>

          <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Verification required
          </span>

          <h1 className="text-white text-xl font-bold mb-2">
            Verify your email address
          </h1>

          <p className="text-gray-400 text-xs leading-relaxed mb-5">
            Your Zion Tech Hub account has been created successfully.
            Before you can sign in, you need to verify your email address.
          </p>

          {/* Email address */}
          <div className="bg-black/30 border border-gray-700 rounded-xl p-3 mb-5">
            <EmailOutlined sx={{ fontSize: 19, color: "#60a5fa" }} />

            <p className="text-white text-sm font-semibold mt-2 break-all">
              {verificationEmail}
            </p>
          </div>

          {/* Instructions */}
          <div className="text-left bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 mb-5">

            <p className="text-blue-400 text-xs font-semibold mb-3">
              What you need to do
            </p>

            <div className="space-y-3">

              <div className="flex items-start gap-2.5">
                <span className="text-blue-400 text-xs font-bold">01</span>
                <p className="text-gray-300 text-[11px] leading-relaxed">
                  Open your email inbox and look for a verification email from Zion Tech Hub.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-blue-400 text-xs font-bold">02</span>
                <p className="text-gray-300 text-[11px] leading-relaxed">
                  If you cannot find it, check your Spam, Junk, or Promotions folder.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-blue-400 text-xs font-bold">03</span>
                <p className="text-gray-300 text-[11px] leading-relaxed">
                  Open the email and click the verification link to activate your account.
                </p>
              </div>

            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-5">
            <p className="text-amber-400 text-[11px] leading-relaxed">
              You must verify your email before signing in. Please complete
              verification before proceeding to your account.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/signin", { replace: true })}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5 text-sm font-semibold transition-all"
          >
            Continue to sign in
          </button>

        </div>
      ) : (
        <>
          {/* Header */}
          <div className="mb-5">

            <div className="flex items-center justify-between mb-3">

              <div className="flex items-center gap-1.5 text-blue-400">
                <AdminPanelSettings sx={{ fontSize: 17 }} />

                <span className="text-[10px] font-semibold uppercase tracking-wider">
                  Account Registration
                </span>
              </div>

              <span className="flex items-center gap-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-[9px] font-medium">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                New Account
              </span>

            </div>

            <h1 className="text-white text-xl font-bold tracking-tight">
              Create your account
            </h1>

            <p className="text-gray-400 text-[11px] mt-1 leading-relaxed">
              Set up your Zion Tech Hub team account to access the administration platform.
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* General error */}
            {error && (
              <div className="flex items-start gap-2.5 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                <SecurityOutlined
                  sx={{ fontSize: 17, color: "#f87171", mt: "1px" }}
                />

                <p className="text-red-400 text-xs leading-relaxed">
                  {error}
                </p>
              </div>
            )}

            {/* Username */}
            <div>

              <label className="block text-gray-300 text-xs font-medium mb-1.5">
                Full name
              </label>

              <div className="relative">

                <PersonOutline
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  sx={{ fontSize: 19 }}
                />

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className={`${inputClass} ${usernameError
                    ? "border-red-500 focus:border-red-500"
                    : ""
                    }`}
                />

              </div>

              {usernameError && (
                <p className="text-red-400 text-[11px] mt-1">
                  Name must be at least 5 characters.
                </p>
              )}

            </div>

            {/* Email */}
            <div>

              <label className="block text-gray-300 text-xs font-medium mb-1.5">
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
                  placeholder="Enter your email"
                  autoComplete="email"
                  className={`${inputClass} ${emailError
                    ? "border-red-500 focus:border-red-500"
                    : ""
                    }`}
                />

              </div>

              {emailError && (
                <p className="text-red-400 text-[11px] mt-1">
                  Please enter a valid email address.
                </p>
              )}

            </div>

            {/* Password */}
            <div>

              <label className="block text-gray-300 text-xs font-medium mb-1.5">
                Password
              </label>

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
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className={`${inputClass} pr-11 ${passwordError
                    ? "border-red-500 focus:border-red-500"
                    : ""
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

              <p
                className={`text-[10px] mt-1 ${passwordError ? "text-red-400" : "text-gray-500"
                  }`}
              >
                Password must contain at least 8 characters.
              </p>

            </div>

            {/* Account information */}
            <div className="flex items-center gap-2 pt-1">

              <span className="flex-1 h-px bg-gray-800" />

              <span className="text-gray-600 text-[9px] uppercase tracking-wider">
                Account details
              </span>

              <span className="flex-1 h-px bg-gray-800" />

            </div>

            {/* Role */}
            <div className="flex items-center justify-between bg-black/30 border border-gray-800 rounded-lg px-3 py-2.5">

              <div className="flex items-center gap-2">
                <AdminPanelSettings
                  sx={{ fontSize: 17, color: "#60a5fa" }}
                />

                <span className="text-gray-400 text-xs">
                  Account role
                </span>
              </div>

              <span className="text-blue-400 text-xs font-semibold">
                Super Admin
              </span>

            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white rounded-xl py-2.5 text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-600/10 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </button>

          </form>

          {/* Security information */}
          <div className="mt-5 pt-4 border-t border-gray-800">

            <div className="flex items-start gap-2.5">

              <div className="w-8 h-8 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <ShieldOutlined
                  sx={{ fontSize: 17, color: "#60a5fa" }}
                />
              </div>

              <div>
                <p className="text-gray-300 text-xs font-medium">
                  Secure account creation
                </p>

                <p className="text-gray-500 text-[10px] leading-relaxed mt-1">
                  Your account information is protected and handled securely.
                </p>
              </div>

            </div>

          </div>

          {/* Website link */}
          <div className="text-center mt-4">

            <Link
              to="/"
              className="text-gray-500 hover:text-blue-400 text-xs transition-colors"
            >
              <span className="mr-1">←</span>
              Return to website
            </Link>

          </div>
        </>
      )}


    </PageLayout>
  );
}

export default Signup;
