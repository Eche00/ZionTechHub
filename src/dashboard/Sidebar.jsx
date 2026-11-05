import React, { useEffect, useState } from "react";
import {
  Add,
  ArrowBackIos,
  ArrowForwardIos,
  Event,
  Grade,
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

const navigation = [
  { name: "Home", path: "/dashboard/home", icon: Home, end: true },
  {
    name: "Certificates",
    path: "/dashboard/certificate",
    icon: Grade,
  },
  {
    name: "Blogs",
    path: "/dashboard/viewblogs",
    icon: Newspaper,
  },
  {
    name: "Create Blog",
    path: "/dashboard/create-blog",
    icon: Add,
  },
  {
    name: "Event Attendees",
    path: "/dashboard/event-attendees",
    icon: Event,
  },
  {
    name: "Webinar / Workshop",
    path: "/dashboard/create-webinar",
    icon: Work,
  },
  {
    name: "Partners",
    path: "/dashboard/partnership-program",
    icon: WorkHistory,
  },
  {
    name: "Course Registrants",
    path: "/dashboard/course-registrants",
    icon: WorkHistory,
  },
];

function Sidebar({ compress, setCompress }) {
  const [user, setUser] = useState(null);

  // Get authenticated user's profile
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        return;
      }

      try {
        let userData = null;

        // Check users collection
        const userSnap = await getDoc(
          doc(db, "users", currentUser.uid)
        );

        if (userSnap.exists()) {
          userData = userSnap.data();
        }

        // Check admins collection
        if (!userData) {
          const adminSnap = await getDoc(
            doc(db, "admins", currentUser.uid)
          );

          if (adminSnap.exists()) {
            userData = {
              ...adminSnap.data(),
              role: "admin",
            };
          }
        }

        // Check super-admins collection
        if (!userData) {
          const superAdminSnap = await getDoc(
            doc(db, "super-admins", currentUser.uid)
          );

          if (superAdminSnap.exists()) {
            userData = {
              ...superAdminSnap.data(),
              role: "super_admin",
            };
          }
        }

        setUser(userData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Normalize roles
  const role = String(user?.role || "")
    .toLowerCase()
    .replace(/[\s-]+/g, "_");

  const isAdmin = ["admin", "super_admin"].includes(role);

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Could not sign user out:", error);
    }
  };

  const linkClass = ({ isActive }) =>
    `group flex items-center gap-3 w-full min-h-[40px] px-3 rounded-lg
    transition-all duration-200 whitespace-nowrap
    ${isActive
      ? "bg-[#1e222b] text-white font-semibold shadow-sm"
      : "text-blue-100 hover:bg-white/10 hover:text-white"
    }
    ${compress ? "justify-center px-2" : ""}`;

  return (
    <aside
      className={`
        h-screen shrink-0 flex flex-col
        bg-[#034FE3] text-white
        transition-[width] duration-300 ease-in-out
        ${compress ? "w-[72px]" : "w-[250px]"}
      `}
    >
      {/* Header */}
      <div
        className={`
          relative flex flex-col items-center
          border-b border-white/20
          ${compress ? "px-2 py-4" : "px-4 py-4"}
        `}
      >
        <img
          src={techhublogo}
          alt="Zion Tech Hub"
          className={`
            object-cover rounded-full bg-white border-2 border-white
            ${compress ? "w-10 h-10" : "w-[68px] h-[68px]"}
          `}
        />

        {!compress && (
          <>
            <h1 className="text-lg font-bold tracking-wide mt-2 text-center">
              Zion Tech Hub
            </h1>

            <p className="text-xs text-blue-100 mt-1 truncate max-w-full">
              @{user?.username || user?.name || "User"}
            </p>
          </>
        )}

        {/* Collapse button */}
        <button
          type="button"
          onClick={() => setCompress(!compress)}
          title={compress ? "Expand sidebar" : "Collapse sidebar"}
          aria-label={compress ? "Expand sidebar" : "Collapse sidebar"}
          className={`
            absolute top-3 flex items-center justify-center
            w-7 h-7 rounded-md bg-[#1e222b]
            hover:bg-black/40 transition-colors
            ${compress ? "right-1" : "right-2"}
          `}
        >
          {compress ? (
            <ArrowForwardIos sx={{ fontSize: 13 }} />
          ) : (
            <ArrowBackIos sx={{ fontSize: 13 }} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`
          flex-1 min-h-0 overflow-y-auto overflow-x-hidden
          py-3 space-y-1
          ${compress ? "px-2" : "px-3"}
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-thumb]:bg-white/30
          [&::-webkit-scrollbar-thumb]:rounded-full
        `}
      >
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              title={compress ? item.name : undefined}
              className={linkClass}
            >
              <Icon
                sx={{ fontSize: 21 }}
                className="shrink-0"
              />

              {!compress && (
                <span className="text-[13px] truncate">
                  {item.name}
                </span>
              )}
            </NavLink>
          );
        })}

        {/* Admin-only navigation */}
        {isAdmin && (
          <NavLink
            to="/dashboard/users"
            title={compress ? "Users" : undefined}
            className={linkClass}
          >
            <Person
              sx={{ fontSize: 21 }}
              className="shrink-0"
            />

            {!compress && (
              <span className="text-[13px] truncate">
                Users
              </span>
            )}
          </NavLink>
        )}
      </nav>

      {/* Footer / Logout */}
      <div
        className={`
          shrink-0 border-t border-white/20 p-3
          ${compress ? "px-2" : ""}
        `}
      >
        <button
          type="button"
          onClick={handleLogout}
          title={compress ? "Logout" : undefined}
          className={`
            flex items-center justify-center gap-3
            w-full min-h-[40px] rounded-lg
            bg-red-600 hover:bg-red-700
            text-white text-sm font-semibold
            transition-colors duration-200
            ${compress ? "px-2" : "px-3"}
          `}
        >
          <Logout sx={{ fontSize: 20 }} />

          {!compress && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;