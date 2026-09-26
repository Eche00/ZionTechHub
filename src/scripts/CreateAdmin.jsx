import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../lib/Config/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { techhublogo } from "../assets";
import { useNavigate } from "react-router-dom";

function CreateAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password || !name) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    
    try {
      const auth = getAuth();
      
      // Create the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Add to admins collection
      await setDoc(doc(db, "admins", user.uid), {
        uid: user.uid,
        email: email.toLowerCase(),
        name: name,
        role: "super_admin",
        isActive: true,
        createdAt: serverTimestamp(),
        permissions: ["all"],
        createdBy: "system"
      });
      
      setSuccess(true);
      
      // Auto redirect after 3 seconds
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
      
    } catch (error) {
      console.error("Error creating admin:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please use a different email.");
      } else {
        setError(error.message || "Failed to create admin account");
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">✓ Admin Created!</h2>
          <p className="text-gray-400 mb-4">Redirecting you to login...</p>
          <div className="bg-gray-800 p-4 rounded-lg mb-4 text-left">
            <p className="text-gray-300"><span className="text-blue-400">Email:</span> {email}</p>
            <p className="text-gray-300"><span className="text-blue-400">Name:</span> {name}</p>
          </div>
          <button
            onClick={() => navigate("/signin")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Go to Login Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700">
        <div className="text-center mb-6">
          <img src={techhublogo} alt="Logo" className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-blue-500" />
          <h1 className="text-2xl font-bold text-white">Create Admin Account</h1>
          <p className="text-gray-400 text-sm mt-2">Set up the first administrator</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleCreateAdmin}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder="admin@ziontechub.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder="At least 6 characters"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating..." : "Create Admin Account"}
          </button>
        </form>

        <div className="mt-6 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-400 text-xs text-center">
            ⚠️ IMPORTANT: After creating the admin, remove this page for security!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
