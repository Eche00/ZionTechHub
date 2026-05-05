import { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
  serverTimestamp
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../lib/Config/firebase";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import {
  Plus,
  Trash2,
  CheckCircle,
  XCircle,
  UserPlus,
  Shield,
  Users as UsersIcon,
  Mail,
  Key,
  AlertCircle
} from "lucide-react";

function Users() {
  // State
  const [loading, setLoading] = useState(true);
  const [createUser, setCreateUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [confirmingId, setConfirmingId] = useState(null);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  // Create user form state
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "Team",
  });
  const [creatingUser, setCreatingUser] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  // Check current user and authorization
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // Check in admins collection first
          let adminDoc = await getDoc(doc(db, "admins", currentUser.uid));
          let userData = null;
          
          if (adminDoc.exists()) {
            userData = adminDoc.data();
            userData.id = currentUser.uid;
            userData.role = "Admin";
            userData.username = userData.name || "Admin";
          } else {
            // Check in users collection
            const userRef = doc(db, "users", currentUser.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
              userData = userSnap.data();
              userData.id = currentUser.uid;
            }
          }

          if (userData && (userData.role === "Admin" || userData.role === "super_admin")) {
            setCurrentAdmin(userData);
            setIsAuthorized(true);
          } else {
            toast.error("Access denied. Admin only.");
            navigate("/dashboard/home");
          }
        } catch (err) {
          console.error("Error fetching user:", err);
          toast.error("Authorization error");
          navigate("/dashboard/home");
        }
      } else {
        navigate("/signin");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Fetch users from Firestore
  useEffect(() => {
    if (!isAuthorized) return;

    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const userData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      // Also fetch admins from admins collection
      const unsubscribeAdmins = onSnapshot(collection(db, "admins"), (adminSnapshot) => {
        const adminData = adminSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          role: "Admin",
          username: doc.data().name || "Admin",
          email: doc.data().email,
        }));
        
        // Combine both collections
        const allUsers = [...userData, ...adminData];
        const uniqueUsers = allUsers.filter((user, index, self) => 
          index === self.findIndex((u) => u.id === user.id)
        );
        
        const sortedUsers = uniqueUsers.sort((a, b) => {
          const dateA = a.createdAt?.toDate?.() || new Date(0);
          const dateB = b.createdAt?.toDate?.() || new Date(0);
          return dateB - dateA;
        });
        
        setUsers(sortedUsers);
        setLoading(false);
      });
      
      return () => unsubscribeAdmins();
    });

    return () => unsubscribe();
  }, [isAuthorized]);

  // Handle user deletion
  const handleDelete = async (id) => {
    if (confirmingId === id) {
      try {
        // Check if user exists in admins collection
        const adminRef = doc(db, "admins", id);
        const adminDoc = await getDoc(adminRef);
        
        if (adminDoc.exists()) {
          await deleteDoc(adminRef);
        } else {
          await deleteDoc(doc(db, "users", id));
        }
        
        toast.success("User deleted successfully");
        setConfirmingId(null);
      } catch (error) {
        console.error("Couldn't delete user:", error);
        toast.error("Failed to delete user");
      }
    } else {
      setConfirmingId(id);
      setTimeout(() => setConfirmingId(null), 3000);
    }
  };

  // Handle creating new user
  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setFormErrors({});

    // Validation
    const errors = {};
    if (newUser.username.length < 3) errors.username = "Username must be at least 3 characters";
    if (!newUser.email.includes("@")) errors.email = "Valid email required";
    if (newUser.password.length < 6) errors.password = "Password must be at least 6 characters";
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setCreatingUser(false);
      return;
    }

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
      const user = userCredential.user;
      
      // Send verification email
      await sendEmailVerification(user);
      
      // Determine which collection to save to
      const collectionName = newUser.role === "Admin" ? "admins" : "users";
      
      // Save user data to Firestore
      await setDoc(doc(db, collectionName, user.uid), {
        uid: user.uid,
        username: newUser.username,
        email: newUser.email.toLowerCase(),
        role: newUser.role,
        createdAt: serverTimestamp(),
        createdBy: currentAdmin?.id,
        emailVerified: false
      });
      
      toast.success(`User created successfully! Verification email sent to ${newUser.email}`);
      
      // Reset form
      setNewUser({
        username: "",
        email: "",
        password: "",
        role: "Team",
      });
      setCreateUser(false);
      
      // Optional: Sign out and back in to refresh permissions
      if (newUser.role === "Admin") {
        toast.info("Admin created. Please ask them to verify their email.");
      }
      
    } catch (error) {
      console.error("Creation error:", error);
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password too weak. Use at least 6 characters");
      } else {
        toast.error(error.message);
      }
    } finally {
      setCreatingUser(false);
    }
  };

  if (!isAuthorized) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Access Denied</h2>
          <p className="text-gray-400">You don't have permission to view this page.</p>
          <Link to="/dashboard/home" className="inline-block mt-4 text-blue-400 hover:text-blue-300">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 px-4 min-h-screen bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
        <div className="flex items-center gap-4">
          <UsersIcon className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl font-bold text-white">User Management</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard/home"
            className="text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-lg bg-gray-800"
          >
            Dashboard
          </Link>
          {!createUser && (
            <button
              onClick={() => setCreateUser(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
            >
              <UserPlus className="w-4 h-4" />
              Create User
            </button>
          )}
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Users</p>
              <p className="text-2xl font-bold text-white">{users.length}</p>
            </div>
            <UsersIcon className="w-8 h-8 text-blue-400 opacity-50" />
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Admins</p>
              <p className="text-2xl font-bold text-white">
                {users.filter(u => u.role === "Admin" || u.role === "super_admin").length}
              </p>
            </div>
            <Shield className="w-8 h-8 text-green-400 opacity-50" />
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Team Members</p>
              <p className="text-2xl font-bold text-white">
                {users.filter(u => u.role === "Team").length}
              </p>
            </div>
            <UsersIcon className="w-8 h-8 text-purple-400 opacity-50" />
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
        <h3 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          Important Notes:
        </h3>
        <ul className="text-gray-300 text-sm space-y-1 ml-6 list-disc">
          <li>Page only accessible to Administrators</li>
          <li>Only Admins can create or delete users</li>
          <li>New users will receive an email verification link</li>
          <li>Click delete once to confirm, twice to delete</li>
          <li>Admin accounts are stored in the "admins" collection</li>
        </ul>
      </div>

      {/* Create User Form */}
      {createUser && (
        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-blue-400" />
              Create New User
            </h2>
            <button
              onClick={() => setCreateUser(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <XCircle className="w-6 h-6" />
            </button>
          </div>
          
          <form onSubmit={handleCreateUser} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2 flex items-center gap-2">
                  <UsersIcon className="w-4 h-4" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={newUser.username}
                  onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                  className={`w-full px-4 py-2 bg-gray-900 border ${formErrors.username ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:border-blue-500`}
                  placeholder="John Doe"
                />
                {formErrors.username && <p className="text-red-500 text-xs mt-1">{formErrors.username}</p>}
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className={`w-full px-4 py-2 bg-gray-900 border ${formErrors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:border-blue-500`}
                  placeholder="user@example.com"
                />
                {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2 flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  Password
                </label>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className={`w-full px-4 py-2 bg-gray-900 border ${formErrors.password ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:border-blue-500`}
                  placeholder="********"
                />
                {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Role
                </label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Team">Team Member</option>
                  <option value="Admin">Administrator</option>
                </select>
              </div>
            </div>
            
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={creatingUser}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all disabled:opacity-50"
              >
                {creatingUser ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    Create User
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setCreateUser(false)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Users Table */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4 items-center bg-gray-700 px-6 py-3 text-white font-semibold">
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>User ID</div>
          <div className="text-right">Actions</div>
        </div>
        
        {/* Table Body */}
        <div className="divide-y divide-gray-700">
          {users.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <UsersIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No users found</p>
              <button
                onClick={() => setCreateUser(true)}
                className="mt-3 text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
              >
                <Plus className="w-4 h-4" />
                Create your first user
              </button>
            </div>
          ) : (
            users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-5 gap-4 items-center px-6 py-4 hover:bg-gray-700/50 transition-colors"
              >
                <div className="text-gray-200">
                  @{user.username?.length > 15 ? user.username.slice(0, 15) + "..." : user.username}
                </div>
                <div className="text-gray-400 text-sm truncate">{user.email}</div>
                <div>
                  {user.role === "Admin" || user.role === "super_admin" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                      <Shield className="w-3 h-3" />
                      Admin
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                      <UsersIcon className="w-3 h-3" />
                      Team
                    </span>
                  )}
                </div>
                <div className="text-gray-500 text-xs font-mono">
                  {user.id?.slice(0, 8)}...
                </div>
                <div className="flex items-center justify-end gap-2">
                  {/* Don't allow deleting yourself */}
                  {user.id !== currentAdmin?.id && (
                    confirmingId === user.id ? (
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg text-sm flex items-center gap-1 transition-all"
                      >
                        <CheckCircle className="w-3 h-3" />
                        Confirm
                      </button>
                    ) : (
                      <button
                        onClick={() => setConfirmingId(user.id)}
                        className="bg-gray-700 hover:bg-red-600 text-gray-300 hover:text-white px-4 py-1 rounded-lg text-sm flex items-center gap-1 transition-all"
                      >
                        <Trash2 className="w-3 h-3" />
                        Delete
                      </button>
                    )
                  )}
                  {user.id === currentAdmin?.id && (
                    <span className="text-xs text-gray-500">(You)</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Statistics Footer */}
      {users.length > 0 && (
        <div className="mt-4 text-center text-gray-500 text-sm">
          Total: {users.length} users | 
          Admins: {users.filter(u => u.role === "Admin" || u.role === "super_admin").length} | 
          Team: {users.filter(u => u.role === "Team").length}
        </div>
      )}
    </div>
  );
}

export default Users;
