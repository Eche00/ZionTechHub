import { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../lib/Config/firebase";
import Signup from "./SignUp";
import { onAuthStateChanged } from "firebase/auth";

function Users() {
  // 🧠 React State
  const [loading, setLoading] = useState(true);
  const [createUser, setCreateUser] = useState(false);
  const [users, setUsers] = useState([]); // All users from Firestore
  const [confirmingId, setConfirmingId] = useState(null);

  const navigate = useNavigate();

  // 📡 Fetch users from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const userData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const sortedUsers = userData.sort((a, b) => b.createdAt - a.createdAt);
      setUsers(sortedUsers);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // fetching currentuser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userRef = doc(db, "users", currentUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const data = userSnap.data();
            if (data.role != "admin") {
              navigate("/dashboard/users");
            }
          } else {
            console.warn("User Firestore document not found.");
          }
        } catch (err) {
          console.error("Error fetching user:", err);
        }
      } else {
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (confirmingId === id) {
        await deleteDoc(doc(db, "users", id));
        setConfirmingId(null);
      }
    } catch (error) {
      console.error("Couldn't Delete user:", error);
    }
  };
  return (
    <div className="  py-10 px-4">
      <div className="flex items-center gap-[20px] border-b-2 border-gray-700 py-[10px]">
        <h1 className="text-3xl font-bold text-white">Users</h1>
        <Link
          to="/dashboard/home"
          className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full hover:scale-[102%] transition">
          Home
        </Link>
        <button className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full cursor-default">
          Roles: Admin / Team
        </button>
        {createUser && (
          <button
            className="bg-[#034FE3] text-white px-4 py-2 rounded-full flex items-center gap-5 cursor-pointer"
            onClick={() => setCreateUser(!createUser)}>
            Cancel Create User <span>-</span>
          </button>
        )}
      </div>
      {/* message  */}
      <p className="text-gray-500 ">
        Page only accessible to Admin, admin can delete / create user..
      </p>

      {/* auth / user db  */}
      {createUser ? (
        <div>
          <Signup setCreateUser={setCreateUser} />
        </div>
      ) : (
        <div className="  w-full">
          <section className=" flex items-center justify-between mt-[80px] py-6">
            <p className=" text-white font-bold flex items-center gap-[10px]">
              users:{" "}
              <span className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-1 rounded-[10px] ">
                {users.length}
              </span>
            </p>

            <button
              className="bg-[#034FE3] text-white px-4 py-2 rounded-full flex items-center gap-5 cursor-pointer"
              onClick={() => setCreateUser(!createUser)}>
              Create User <span>+</span>
            </button>
          </section>
          {/* db  */}
          <div className="flex flex-col w-full  gap-[10px]  bg-black border-2  border-gray-700 rounded-[10px]  overflow-scroll h-[600px] relative ">
            <div className=" text-white font-bold w-full bg-gray-700  sticky top-0 left-0 py-[20px]  grid grid-cols-5 gap-4 items-center px-14 h-fit">
              <p>Name</p>
              <p>Email</p>
              <p>Role</p>
              <p>UserId</p>
              <p className="flex items-center justify-end pr-10">Delete</p>
            </div>
            {users.map((user) => (
              <div
                className="grid grid-cols-5 gap-4 items-center border-b border-gray-500   p-4 w-full  px-10 py-4  text-white   h-fit cursor-pointer bg-opacity-5 "
                key={user?.id}>
                <p className="text-gray-500 text-sm">
                  @{(user?.username).slice(0, 10)}...
                </p>
                <p className="text-gray-600 text-sm border-l-2 border-gray-500 pl-2 cursor-pointer hover:text-white transition-all duration-300 flex items-center gap-[10px]">
                  {" "}
                  {user?.email}
                </p>
                <p
                  // className="text-gray-500 text-sm"
                  className={
                    user?.role === "Admin" ? "text-green-500" : "text-gray-500"
                  }>
                  {" "}
                  {user?.role}
                </p>
                <p className="text-gray-500 text-sm">
                  {" "}
                  {(user?.id).slice(0, 10)}...
                </p>
                {/* buttons  */}

                <div className="flex items-center gap-[20px] justify-end">
                  {confirmingId === user.id ? (
                    <button
                      onClick={() => handleDelete(user?.id)}
                      className=" bg-[#e30303] text-white font-[500] rounded-full text-[14px] w-[120px] py-[8px] flex items-center justify-center">
                      Confirm
                    </button>
                  ) : (
                    <button
                      onClick={() => setConfirmingId(user?.id)}
                      className=" bg-[#e30303] text-white font-[500] rounded-full text-[14px] w-[120px] py-[8px] flex items-center justify-center">
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
