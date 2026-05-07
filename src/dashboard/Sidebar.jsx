import React, { useEffect, useState } from "react";
import {
  Add,
  ArrowBackIos,
  ArrowForwardIos,
  Event,
  Home,
  Logout,
  Newspaper,
  Person,
  Work,
  WorkHistory,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { techhublogo } from "../assets";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../lib/Config/firebase";
import { doc, getDoc } from "firebase/firestore";

function Sidebar({ compress, setCompress }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // getting currentuser for admin access
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
    <div
      className={
        compress
          ? "w-fit h-[100vh] sm:bg-[#034FE3] bg-[#034FE3]/30 transition-all duration-500"
          : "w-[300px] h-[100vh] bg-[#034FE3]  transition-all duration-500"
      }>
      <nav className=" flex flex-col   text-[14px] px-[20px] py-[10px] gap-[5px]">
        {/* logo */}
        {compress && (
          <section className=" flex flex-col items-center gap-[4px]  py-[20px] mb-[20px]  border-b-2 h-[256px]"></section>
        )}
        {!compress && (
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
        )}

        <button
          className="absolute right-5 text-gray-500 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 bg-[#1e222b]  "
          onClick={() => setCompress(!compress)}>
          {compress ? (
            <ArrowForwardIos fontSize="" />
          ) : (
            <ArrowBackIos fontSize="" />
          )}
        </button>
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95 "
          }>
          {" "}
          <Home />
          {!compress && <span>Home</span>}
        </NavLink>
        <NavLink
          to="/dashboard/viewblogs"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <Newspaper />
          {!compress && <span>Blogs</span>}
        </NavLink>

        <NavLink
          to="/dashboard/create-blog"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <Add />
          {!compress && <span>Create Blogs</span>}
        </NavLink>

        <NavLink
          to="/dashboard/event-attendees"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <Event />
          {!compress && <span>Event Attendees</span>}
        </NavLink>
        <NavLink
          to="/dashboard/create-webinar"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <Work />
          {!compress && <span>Webinar/workshop</span>}
        </NavLink>
        <NavLink
          to="/dashboard/partnership-program"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <WorkHistory />
          {!compress && <span>Partners</span>}
        </NavLink>
        <NavLink
          to="/dashboard/course-registrants"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <WorkHistory />
          {!compress && <span>Course Registrants</span>}
        </NavLink>

        {user?.role === "Admin" && (
          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
            }>
            {" "}
            <Person />
            {!compress && <span>Users</span>}
          </NavLink>
        )}

        <button
          className={`bg-red-600 shadow-md text-white py-3 rounded-lg transition-all duration-300 my-10 absolute bottom-0 left-4 ${!compress ? "w-[90%] px-0" : "w-fit px-5"
            } mx-auto  hover:scale-[102%] flex items-center  justify-center gap-[5px]`}
          onClick={handleDelete}>
          {!compress && "Logout"}
          <Logout />
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
