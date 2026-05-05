import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../lib/Config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import Chart from "../dashboardcomponents/Chart";
import Links from "../dashboardcomponents/Links";
import Recent from "../dashboardcomponents/Recent";

function Dashboard() {
  const [adminName, setAdminName] = useState("");
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/signin");
        return;
      }

      try {
        // ✅ STEP 1: Check in 'admins' collection
        let adminDoc = await getDoc(doc(db, "admins", user.uid));
        let userData = null;
        
        if (adminDoc.exists()) {
          userData = adminDoc.data();
          setAdminName(userData.name || userData.username || "Admin");
          setIsAuthorized(true);
          console.log("✅ Admin found in 'admins' collection:", userData.email);
        } else {
          // ✅ STEP 2: Check in 'users' collection with role "Admin"
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists() && userDoc.data().role === "Admin") {
            userData = userDoc.data();
            setAdminName(userData.username || userData.name || "Admin");
            setIsAuthorized(true);
            console.log("✅ Admin found in 'users' collection:", userData.email);
          }
        }
        
        if (!userData) {
          console.log("❌ No admin document found in either collection");
          toast.error("Access denied. Admin only.");
          navigate("/signin");
        }
        
      } catch (error) {
        console.error("Error checking admin status:", error);
        toast.error("Authorization error");
        navigate("/signin");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="h-[100vh] pt-10 overflow-scroll">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-6 mx-4">
        <h2 className="text-white text-xl">Welcome back, {adminName}! 👋</h2>
        <p className="text-gray-400 text-sm mt-1">You have full administrator access</p>
      </div>

      <div className="flex smm:flex-row flex-col items-center gap-[20px] border-b-2 border-gray-700 py-[10px] px-4">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="sm:flex hidden flex-wrap items-center gap-[20px]">
          <Link
            to="/dashboard/viewblogs"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer hover:border-blue-500 hover:text-blue-400">
            View Blogs
          </Link>
          <Link
            to="/dashboard/create-blog"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer hover:border-blue-500 hover:text-blue-400">
            Create Blogs
          </Link>
          <Link
            to="/dashboard/event-attendees"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer hover:border-blue-500 hover:text-blue-400">
            Event attendees
          </Link>
          <Link
            to="/dashboard/create-webinar"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer hover:border-blue-500 hover:text-blue-400">
            Webinar/workshop
          </Link>
          <Link
            to="/dashboard/users"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer hover:border-blue-500 hover:text-blue-400">
            Users
          </Link>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex flex-col gap-5 w-full pb-[200px] mt-10 px-4">
        <section className="flex flex-1 gap-2 border-4 border-gray-700 w-full px-3 py-4 rounded-[10px] text-white">
          <Chart />
        </section>
        
        {/* Bottom Section */}
        <section className="flex sm:flex-row flex-col w-full gap-10">
          {/* Recent */}
          <div className="flex flex-1 gap-2 border-4 border-gray-700 w-full px-3 py-4 rounded-[10px] overflow-hidden">
            <Recent />
          </div>
          {/* Links */}
          <div className="flex sm:w-[30%] w-full gap-2 border-4 border-gray-700 px-3 py-4 rounded-[10px]">
            <Links />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
