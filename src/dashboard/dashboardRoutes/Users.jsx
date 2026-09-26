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
import {
  onAuthStateChanged,
  sendEmailVerification,
  createUserWithEmailAndPassword
} from "firebase/auth";
import toast from "react-hot-toast";
import {
  PersonAdd as PersonAddIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon,
  AdminPanelSettings as AdminIcon,
  Group as GroupIcon,
  Warning as WarningIcon
} from "@mui/icons-material";

function Users() {
  const [loading, setLoading] = useState(true);
  const [createUser, setCreateUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmingId, setConfirmingId] = useState(null);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "Team"
  });

  const [creatingUser, setCreatingUser] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  // ---------------- AUTH LOGIC (UNCHANGED)
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

          if (
            userData &&
            (userData.role === "Admin" || userData.role === "super_admin")
          ) {
            setCurrentAdmin(userData);
            setIsAuthorized(true);
          } else {
            toast.error("Access denied. Admin only.");
            navigate("/dashboard/home");
          }
        } catch (err) {
          toast.error("Authorization error");
          navigate("/dashboard/home");
        }
      } else {
        navigate("/signin");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // ---------------- FETCH USERS (UNCHANGED)
  const fetchUsers = async () => {
    try {
      setLoading(true);

      const allUsers = [];

      const adminsSnapshot = await getDocs(collection(db, "admins"));
      adminsSnapshot.forEach((doc) => {
        allUsers.push({
          id: doc.id,
          ...doc.data(),
          role: "Admin",
          username: doc.data().name || "Admin"
        });
      });

      const usersSnapshot = await getDocs(collection(db, "users"));
      usersSnapshot.forEach((doc) => {
        allUsers.push({
          id: doc.id,
          ...doc.data()
        });
      });

      const uniqueUsers = allUsers.filter(
        (user, index, self) =>
          index === self.findIndex((u) => u.id === user.id)
      );

      setUsers(uniqueUsers);
      setFilteredUsers(uniqueUsers);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Error fetching users");
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchUsers();
    }
  }, [isAuthorized]);

  // ---------------- SEARCH FILTER (NEW FEATURE)
  useEffect(() => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  // ---------------- DELETE LOGIC (UNCHANGED)
  const handleDelete = async (id) => {
    if (confirmingId === id) {
      try {
        const adminRef = doc(db, "admins", id);
        const adminDoc = await getDoc(adminRef);

        if (adminDoc.exists()) {
          await deleteDoc(adminRef);
        } else {
          await deleteDoc(doc(db, "users", id));
        }

        toast.success("User deleted successfully");
        setConfirmingId(null);
        fetchUsers();
      } catch (error) {
        toast.error("Failed to delete user");
      }
    } else {
      setConfirmingId(id);
      setTimeout(() => setConfirmingId(null), 3000);
    }
  };

  // ---------------- CREATE USER LOGIC (UNCHANGED)
  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setFormErrors({});

    const errors = {};

    if (newUser.username.length < 3)
      errors.username = "Username too short";
    if (!newUser.email.includes("@"))
      errors.email = "Valid email required";
    if (newUser.password.length < 6)
      errors.password = "Password too short";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setCreatingUser(false);
      return;
    }

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          newUser.email,
          newUser.password
        );

      const user = userCredential.user;

      await sendEmailVerification(user);

      const collectionName =
        newUser.role === "Admin"
          ? "admins"
          : "users";

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
      } else {
        userData.username = newUser.username;
        userData.role = "Team";
      }

      await setDoc(
        doc(db, collectionName, user.uid),
        userData
      );

      toast.success("User created successfully");

      setNewUser({
        username: "",
        email: "",
        password: "",
        role: "Team"
      });

      setCreateUser(false);
      fetchUsers();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setCreatingUser(false);
    }
  };

  if (!isAuthorized) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#050814] via-[#070b1a] to-[#0a1024] text-white px-4">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-red-500/10  rounded-3xl" />

          <div className="relative bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-3xl p-10 text-center shadow-2xl">
            <div className="flex justify-center mb-5">
              <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20">
                <WarningIcon className="text-red-500 text-5xl" />
              </div>
            </div>

            <h2 className="text-2xl font-bold tracking-wide mb-2">
              Access Denied
            </h2>

            <p className="text-sm text-gray-300/80">
              You don’t have permission to view this page.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-y-auto bg-[#050814] text-white p-4 md:p-6 space-y-6">

      {/* HEADER */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
        <h2 className="text-2xl font-bold">
          User Management
        </h2>

        <p className="text-gray-400 text-sm">
          Manage admins & team members
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            label: "Total Users",
            value: users.length
          },
          {
            label: "Admins",
            value: users.filter(
              (u) =>
                u.role === "Admin" ||
                u.role === "super_admin"
            ).length
          },
          {
            label: "Team Members",
            value: users.filter(
              (u) => u.role === "Team"
            ).length
          }
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-[#0b1220] border border-white/10 rounded-2xl p-4"
          >
            <p className="text-gray-400 text-xs">
              {stat.label}
            </p>
            <h3 className="text-2xl font-bold">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Search user by name/email..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="bg-[#0b1220] border border-white/10 px-4 py-2 rounded-full w-full md:w-80"
        />

        <button
          onClick={fetchUsers}
          className="px-4 py-2 bg-blue-600 rounded-full"
        >
          Refresh
        </button>

        <button
          onClick={() =>
            setCreateUser(!createUser)
          }
          className="px-4 py-2 bg-green-600 rounded-full flex items-center gap-2"
        >
          <PersonAddIcon fontSize="small" />
          Create User
        </button>
      </div>

      {/* CREATE USER FORM */}
      {createUser && (
        <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4">
            Create New User
          </h3>

          <form
            onSubmit={handleCreateUser}
            className="grid md:grid-cols-2 gap-4"
          >
            <input
              placeholder="Full name"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  username: e.target.value
                })
              }
              className="bg-[#111827] p-3 rounded-xl"
            />

            <input
              placeholder="Email"
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  email: e.target.value
                })
              }
              className="bg-[#111827] p-3 rounded-xl"
            />

            <input
              placeholder="Password"
              type="password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  password: e.target.value
                })
              }
              className="bg-[#111827] p-3 rounded-xl"
            />

            <select
              value={newUser.role}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  role: e.target.value
                })
              }
              className="bg-[#111827] p-3 rounded-xl"
            >
              <option value="Team">
                Team Member
              </option>
              <option value="Admin">
                Admin
              </option>
            </select>

            <button
              className="col-span-full bg-blue-600 py-3 rounded-xl font-semibold"
              disabled={creatingUser}
            >
              {creatingUser
                ? "Creating..."
                : "Create User"}
            </button>
          </form>
        </div>
      )}

      {/* USERS TABLE */}
      <div className="overflow-x-auto border border-white/10 rounded-2xl">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-[#0b1220] text-gray-300">
            <tr>
              <th className="p-3 text-left">
                Name
              </th>
              <th className="p-3 text-left">
                Email
              </th>
              <th className="p-3 text-left">
                Role
              </th>
              <th className="p-3 text-left">
                User ID
              </th>
              <th className="p-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-8"
                >
                  Loading users...
                </td>
              </tr>
            ) : filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="p-3">
                    {user.username || user.name}
                  </td>

                  <td className="p-3 text-gray-400">
                    {user.email}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${user.role === "Admin" ||
                        user.role === "super_admin"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                        }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="p-3 text-gray-500 text-xs">
                    {user.id.slice(0, 8)}...
                  </td>

                  <td className="p-3">
                    {user.id !== currentAdmin?.id ? (
                      confirmingId === user.id ? (
                        <button
                          onClick={() =>
                            handleDelete(user.id)
                          }
                          className="bg-red-600 px-3 py-1 rounded-lg text-xs"
                        >
                          Confirm Delete
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            setConfirmingId(user.id)
                          }
                          className="bg-red-500/20 text-red-400 px-3 py-1 rounded-lg text-xs"
                        >
                          Delete
                        </button>
                      )
                    ) : (
                      <span className="text-gray-500 text-xs">
                        You
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-8 text-gray-500"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;