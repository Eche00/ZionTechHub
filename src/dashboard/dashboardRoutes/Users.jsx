import { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
  serverTimestamp,
  query,
  where,
  getDocs
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
  const [loading, setLoading] = useState(true);
  const [createUser, setCreateUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [confirmingId, setConfirmingId] = useState(null);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "Team",
  });
  const [creatingUser, setCreatingUser] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  // Check current user and authorization (UPDATED)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // FIRST: Check in admins collection
          let adminDoc = await getDoc(doc(db, "admins", currentUser.uid));
          let userData = null;
          
          if (adminDoc.exists()) {
            userData = adminDoc.data();
            userData.id = currentUser.uid;
            userData.role = "Admin";
            userData.username = userData.name || "Admin";
            console.log("✅ Admin found in admins collection:", userData.email);
          } else {
            // SECOND: Check in users collection
            const userRef = doc(db, "users", currentUser.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
              userData = userSnap.data();
              userData.id = currentUser.uid;
              console.log("✅ User found in users collection:", userData.email);
            }
          }

          if (userData && (userData.role === "Admin" || userData.role === "super_admin")) {
            setCurrentAdmin(userData);
            setIsAuthorized(true);
            console.log("✅ Authorization granted. Role:", userData.role);
          } else {
            console.log("❌ Not authorized. Role:", userData?.role);
            toast.error("Access denied. Admin only.");
            navigate("/dashboard/home");
          }
        } catch (err) {
          console.error("Error fetching user:", err);
          toast.error("Authorization error");
          navigate("/dashboard/home");
        }
      } else {
        console.log("No user logged in");
        navigate("/signin");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Fetch users from BOTH collections (UPDATED)
  useEffect(() => {
    if (!isAuthorized) return;

    const fetchAllUsers = async () => {
      try {
        const allUsers = [];
        
        // Get from admins collection
        const adminsSnapshot = await getDocs(collection(db, "admins"));
        adminsSnapshot.forEach((doc) => {
          allUsers.push({
            id: doc.id,
            ...doc.data(),
            role: "Admin",
            username: doc.data().name || "Admin",
          });
        });
        
        // Get from users collection
        const usersSnapshot = await getDocs(collection(db, "users"));
        usersSnapshot.forEach((doc) => {
          allUsers.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        
        // Remove duplicates and sort
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
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchAllUsers();
    
    // Set up real-time listeners for both collections
    const unsubscribeAdmins = onSnapshot(collection(db, "admins"), () => {
      fetchAllUsers();
    });
    
    const unsubscribeUsers = onSnapshot(collection(db, "users"), () => {
      fetchAllUsers();
    });
    
    return () => {
      unsubscribeAdmins();
      unsubscribeUsers();
    };
  }, [isAuthorized]);

  // Handle user deletion (UPDATED)
  const handleDelete = async (id) => {
    if (confirmingId === id) {
      try {
        // Try to delete from admins collection first
        const adminRef = doc(db, "admins", id);
        const adminDoc = await getDoc(adminRef);
        
        if (adminDoc.exists()) {
          await deleteDoc(adminRef);
          toast.success("Admin deleted successfully");
        } else {
          // If not in admins, delete from users
          await deleteDoc(doc(db, "users", id));
          toast.success("User deleted successfully");
        }
        
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

  // Handle creating new user (UPDATED)
  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setFormErrors({});

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
      const userCredential = await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
      const user = userCredential.user;
      
      await sendEmailVerification(user);
      
      // Store in appropriate collection
      const collectionName = newUser.role === "Admin" ? "admins" : "users";
      
      const userData = {
        uid: user.uid,
        email: newUser.email.toLowerCase(),
        createdAt: serverTimestamp(),
        createdBy: currentAdmin?.id,
        emailVerified: false
      };
      
      if (newUser.role === "Admin") {
        userData.name = newUser.username;
        userData.role = "super_admin";
        userData.isActive = true;
        userData.permissions = ["all"];
      } else {
        userData.username = newUser.username;
        userData.role = "Team";
      }
      
      await setDoc(doc(db, collectionName, user.uid), userData);
      
      toast.success(`User created successfully! Verification email sent to ${newUser.email}`);
      
      setNewUser({ username: "", email: "", password: "", role: "Team" });
      setCreateUser(false);
      
    } catch (error) {
      console.error("Creation error:", error);
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password too weak");
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

      {/* Stats Cards */}
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

      {/* Info Banner */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
        <h3 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Admin Access Granted
        </h3>
        <ul className="text-gray-300 text-sm space-y-1 ml-6 list-disc">
          <li>You are logged in as: <span className="text-blue-400">{currentAdmin?.email}</span></li>
          <li>Your role: <span className="text-green-400">Administrator</span></li>
          <li>You have full access to manage all users</li>
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
        <div className="grid grid-cols-5 gap-4 items-center bg-gray-700 px-6 py-3 text-white font-semibold">
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>User ID</div>
          <div className="text-right">Actions</div>
        </div>
        
        <div className="divide-y divide-gray-700">
          {users.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <UsersIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No users found</p>
            </div>
          ) : (
            users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-5 gap-4 items-center px-6 py-4 hover:bg-gray-700/50 transition-colors"
              >
                <div className="text-gray-200">
                  {user.username?.length > 15 ? user.username.slice(0, 15) + "..." : user.username || user.name}
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
    </div>
  );
}

export default Users;
