import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { techhublogo } from "../assets";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../lib/Config/firebase";
import { doc, getDoc } from "firebase/firestore";

function Sidebar() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setisAdmin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userRef = doc(db, "users", currentUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const data = userSnap.data();
            setUser(data);
          } else {
            console.warn("User Firestore document not found.");
          }
        } catch (err) {
          console.error("Error fetching user:", err);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // handle logout
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Could not sign user out:", error);
    }
  };
  return (
    <div className=" w-[300px] h-[100vh] bg-[#034FE3]">
      <nav className=" flex flex-col   text-[14px] px-[20px] py-[10px] gap-[5px]">
        {/* logo */}
        <section className=" flex flex-col items-center gap-[4px]  py-[20px] mb-[20px]  border-b-2">
          <img
            src={techhublogo}
            alt={"logo"}
            className="w-[150px] h-[150px] object-cover bg-white rounded-full border-2 border-white"
          />
          <h1 className=" text-[24px] font-[600] text-white tracking-wider ">
            Zion Tech Hub
          </h1>
          {user && <p className="font-bold text-white">@{user?.username}</p>}
        </section>
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95 "
          }>
          {" "}
          {/* <HouseIcon />  */}
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/dashboard/viewblogs"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          {/* <NewspaperIcon /> */}
          <span>Blogs</span>
        </NavLink>

        <NavLink
          to="/dashboard/create-blog"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          {/* <EmojiEventsIcon /> */}
          <span>Create Blogs</span>
        </NavLink>

        <NavLink
          to="/dashboard/event-attendees"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          {/* <ManageAccountsIcon />  */}
          <span>Event Attendees</span>
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          {/* <FindReplaceIcon /> */}
          <span>Webinar/workshop</span>
        </NavLink>

        {user?.role === "Admin" && (
          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
            }>
            {" "}
            <span>Users</span>
          </NavLink>
        )}

        <button
          className="bg-red-600 shadow-md text-white py-3 rounded-lg transition-all duration-300 my-10 absolute bottom-0 left-4 w-[90%] mx-auto  hover:scale-[102%]"
          onClick={handleDelete}>
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
