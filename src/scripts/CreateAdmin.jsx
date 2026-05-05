import React, { useState } from "react";
import { createFirstAdmin } from "../lib/Config/firebase";
import { techhublogo } from "../assets";
import toast from "react-hot-toast";

function CreateAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [adminCreated, setAdminCreated] = useState(false);

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    
    if (!email || !password || !name) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const result = await createFirstAdmin(email, password, name);
      if (result.success) {
        toast.success("Admin created successfully!");
        setAdminCreated(true);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Failed to create admin");
    }
    setLoading(false);
  };

  if (adminCreated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Admin Created Successfully!</h2>
            <p className="text-gray-400 mb-4">You can now login with these credentials:</p>
            <div className="bg-gray-800 p-4 rounded-lg mb-4 text-left">
              <p className="text-gray-300"><span className="text-blue-400">Email:</span> {email}</p>
              <p className="text-gray-300"><span className="text-blue-400">Password:</span> {password}</p>
            </div>
            <a
              href="/signin"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go to Login
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700">
        <div className="text-center mb-6">
          <img src={techhublogo} alt="Logo" className="w-16 h-16 rounded-full mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-white">Create First Admin</h1>
          <p className="text-gray-400 text-sm mt-2">Set up the initial administrator account</p>
        </div>

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
              placeholder="admin@example.com"
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
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Admin Account"}
          </button>
        </form>
        

        <p className="text-center text-gray-500 text-xs mt-4">
          This page should be removed after creating the first admin
        </p>
      </div>
    </div>
  );
}

export default CreateAdmin;
