import { useEffect, useState } from "react";
import {
  collection,
  getDoc,
  doc,
  deleteDoc,
  setDoc,
  serverTimestamp,
  getDocs
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../lib/Config/firebase";
import { onAuthStateChanged, sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import {
  PersonAdd as PersonAddIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon,
  AdminPanelSettings as AdminIcon,
  Group as GroupIcon,
  Email as EmailIcon,
  VpnKey as KeyIcon,
  Warning as WarningIcon,
  Dashboard as DashboardIcon
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Alert,
  Paper,
  Chip
} from "@mui/material";

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

  // Check current user and authorization
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          let adminDoc = await getDoc(doc(db, "admins", currentUser.uid));
          let userData = null;
          
          if (adminDoc.exists()) {
            userData = adminDoc.data();
            userData.id = currentUser.uid;
            userData.role = "Admin";
            userData.username = userData.name || "Admin";
          } else {
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

  // Fetch users from BOTH collections
  useEffect(() => {
    if (!isAuthorized) return;

    const fetchAllUsers = async () => {
      try {
        const allUsers = [];
        
        const adminsSnapshot = await getDocs(collection(db, "admins"));
        adminsSnapshot.forEach((doc) => {
          allUsers.push({
            id: doc.id,
            ...doc.data(),
            role: "Admin",
            username: doc.data().name || "Admin",
          });
        });
        
        const usersSnapshot = await getDocs(collection(db, "users"));
        usersSnapshot.forEach((doc) => {
          allUsers.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        
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
  }, [isAuthorized]);

  const handleDelete = async (id) => {
    if (confirmingId === id) {
      try {
        const adminRef = doc(db, "admins", id);
        const adminDoc = await getDoc(adminRef);
        
        if (adminDoc.exists()) {
          await deleteDoc(adminRef);
          toast.success("Admin deleted successfully");
        } else {
          await deleteDoc(doc(db, "users", id));
          toast.success("User deleted successfully");
        }
        
        setConfirmingId(null);
        // Refresh user list
        window.location.reload();
      } catch (error) {
        console.error("Couldn't delete user:", error);
        toast.error("Failed to delete user");
      }
    } else {
      setConfirmingId(id);
      setTimeout(() => setConfirmingId(null), 3000);
    }
  };

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
      window.location.reload();
      
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
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Paper sx={{ p: 4, textAlign: "center", bgcolor: "#1f1f1f", color: "white" }}>
          <WarningIcon sx={{ fontSize: 60, color: "red", mb: 2 }} />
          <Typography variant="h5" gutterBottom>Access Denied</Typography>
          <Typography variant="body2" color="gray">You don't have permission to view this page.</Typography>
          <Button component={Link} to="/dashboard/home" sx={{ mt: 3 }} variant="contained">
            Return to Dashboard
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 3, px: 2, minHeight: "100vh", bgcolor: "#0a0a0a" }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom="1px solid #333" pb={2} mb={3} flexWrap="wrap" gap={2}>
        <Box display="flex" alignItems="center" gap={2}>
          <AdminIcon sx={{ fontSize: 32, color: "#3b82f6" }} />
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            User Management
          </Typography>
        </Box>
        <Box display="flex" gap={2}>
          <Button component={Link} to="/dashboard/home" variant="outlined" startIcon={<DashboardIcon />}>
            Dashboard
          </Button>
          {!createUser && (
            <Button variant="contained" startIcon={<PersonAddIcon />} onClick={() => setCreateUser(true)}>
              Create User
            </Button>
          )}
        </Box>
      </Box>

      {/* Stats Cards */}
      <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "repeat(3, 1fr)" }} gap={3} mb={4}>
        <Paper sx={{ p: 2, bgcolor: "#1a1a1a", color: "white" }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography color="gray" variant="caption">Total Users</Typography>
              <Typography variant="h4">{users.length}</Typography>
            </Box>
            <GroupIcon sx={{ fontSize: 40, opacity: 0.5 }} />
          </Box>
        </Paper>
        <Paper sx={{ p: 2, bgcolor: "#1a1a1a", color: "white" }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography color="gray" variant="caption">Admins</Typography>
              <Typography variant="h4">{users.filter(u => u.role === "Admin" || u.role === "super_admin").length}</Typography>
            </Box>
            <AdminIcon sx={{ fontSize: 40, opacity: 0.5, color: "#4caf50" }} />
          </Box>
        </Paper>
        <Paper sx={{ p: 2, bgcolor: "#1a1a1a", color: "white" }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography color="gray" variant="caption">Team Members</Typography>
              <Typography variant="h4">{users.filter(u => u.role === "Team").length}</Typography>
            </Box>
            <GroupIcon sx={{ fontSize: 40, opacity: 0.5, color: "#9c27b0" }} />
          </Box>
        </Paper>
      </Box>

      {/* Info Alert */}
      <Alert severity="info" sx={{ mb: 3, bgcolor: "#1a3a5c", color: "#90caf9" }}>
        <Typography variant="body2">
          <strong>✓ Admin Access Granted</strong><br />
          Logged in as: <strong>{currentAdmin?.email}</strong> | Role: <strong>Administrator</strong>
        </Typography>
      </Alert>

      {/* Create User Form */}
      {createUser && (
        <Paper sx={{ p: 3, mb: 3, bgcolor: "#1a1a1a" }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}>
              <PersonAddIcon sx={{ color: "#3b82f6" }} /> Create New User
            </Typography>
            <Button onClick={() => setCreateUser(false)} startIcon={<CloseIcon />}>Cancel</Button>
          </Box>
          
          <form onSubmit={handleCreateUser}>
            <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={2}>
              <TextField
                label="Full Name"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                error={!!formErrors.username}
                helperText={formErrors.username}
                sx={{ input: { color: "white" }, label: { color: "gray" }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#333' } } }}
              />
              <TextField
                label="Email Address"
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                error={!!formErrors.email}
                helperText={formErrors.email}
                sx={{ input: { color: "white" }, label: { color: "gray" }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#333' } } }}
              />
              <TextField
                label="Password"
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                error={!!formErrors.password}
                helperText={formErrors.password || "Must be at least 6 characters"}
                sx={{ input: { color: "white" }, label: { color: "gray" }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#333' } } }}
              />
              <FormControl>
                <InputLabel sx={{ color: "gray" }}>Role</InputLabel>
                <Select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  sx={{ color: "white", '& .MuiOutlinedInput-notchedOutline': { borderColor: '#333' } }}
                >
                  <MenuItem value="Team">Team Member</MenuItem>
                  <MenuItem value="Admin">Administrator</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            <Button type="submit" variant="contained" disabled={creatingUser} sx={{ mt: 3 }} fullWidth>
              {creatingUser ? <CircularProgress size={24} /> : "Create User"}
            </Button>
          </form>
        </Paper>
      )}

      {/* Users Table */}
      <Paper sx={{ bgcolor: "#1a1a1a", overflow: "hidden" }}>
        <Box sx={{ overflowX: "auto" }}>
          <Box sx={{ minWidth: 800 }}>
            {/* Header */}
            <Box display="grid" gridTemplateColumns="1.5fr 2fr 1fr 1.5fr 1fr" gap={2} sx={{ bgcolor: "#333", p: 2, fontWeight: "bold", color: "white" }}>
              <Typography>Name</Typography>
              <Typography>Email</Typography>
              <Typography>Role</Typography>
              <Typography>User ID</Typography>
              <Typography textAlign="right">Actions</Typography>
            </Box>
            
            {/* Body */}
            {users.map((user) => (
              <Box key={user.id} display="grid" gridTemplateColumns="1.5fr 2fr 1fr 1.5fr 1fr" gap={2} sx={{ p: 2, borderBottom: "1px solid #333", alignItems: "center" }}>
                <Typography sx={{ color: "#ccc" }}>{user.username?.length > 15 ? user.username.slice(0, 15) + "..." : user.username || user.name}</Typography>
                <Typography sx={{ color: "#999", fontSize: "0.875rem" }}>{user.email}</Typography>
                <Box>
                  {(user.role === "Admin" || user.role === "super_admin") ? (
                    <Chip label="Admin" size="small" sx={{ bgcolor: "#4caf50", color: "white" }} icon={<AdminIcon sx={{ fontSize: 14 }} />} />
                  ) : (
                    <Chip label="Team" size="small" variant="outlined" sx={{ color: "#3b82f6", borderColor: "#3b82f6" }} />
                  )}
                </Box>
                <Typography sx={{ color: "#666", fontSize: "0.75rem", fontFamily: "monospace" }}>{user.id?.slice(0, 8)}...</Typography>
                <Box display="flex" justifyContent="flex-end">
                  {user.id !== currentAdmin?.id && (
                    confirmingId === user.id ? (
                      <Button size="small" variant="contained" color="error" onClick={() => handleDelete(user.id)} startIcon={<CheckCircleIcon />}>
                        Confirm
                      </Button>
                    ) : (
                      <Button size="small" variant="outlined" color="error" onClick={() => setConfirmingId(user.id)} startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                    )
                  )}
                  {user.id === currentAdmin?.id && (
                    <Typography variant="caption" sx={{ color: "#666" }}>(You)</Typography>
                  )}
                </Box>
              </Box>
            ))}
            
            {users.length === 0 && (
              <Box sx={{ p: 4, textAlign: "center", color: "#666" }}>
                <GroupIcon sx={{ fontSize: 48, mb: 1, opacity: 0.5 }} />
                <Typography>No users found</Typography>
                <Button onClick={() => setCreateUser(true)} sx={{ mt: 2 }} variant="contained" startIcon={<PersonAddIcon />}>
                  Create First User
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Users;
