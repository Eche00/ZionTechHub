import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../lib/Config/firebase";
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";

import Chart from "../dashboardcomponents/Chart";
import Links from "../dashboardcomponents/Links";

import {
  Chip,
  Button,
  LinearProgress,
} from "@mui/material";

import {
  School as SchoolIcon,
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  Book as BookIcon,
} from "@mui/icons-material";

function Dashboard() {
  const [adminName, setAdminName] = useState("");
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [stats, setStats] = useState({
    totalCourses: 0,
    activeCourses: 0,
    totalStudents: 0,
    totalRevenue: 0,
    courses: [],
  });

  const [recentRegistrations, setRecentRegistrations] = useState([]);
  const navigate = useNavigate();

  const cardBase =
    "relative overflow-hidden rounded-2xl p-5 border border-white/10 bg-gradient-to-br from-[#0b1220] to-[#111827] shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1";

  const fetchDashboardStats = async () => {
    const registrationsSnapshot = await getDocs(
      collection(db, "course-registrants")
    );

    const totalStudents = registrationsSnapshot.size;
    const totalRevenue = totalStudents * 99;

    const courseCount = {};

    registrationsSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.course) {
        courseCount[data.course] =
          (courseCount[data.course] || 0) + 1;
      }
    });

    const baseCourses = [
      "Healthcare Data Analytics",
      "Financial Data Analytics",
      "Sales and Marketing Data Analytics",
      "Supply Chain Analytics",
      "Data Science and AI",
      "AI Automation",
    ];

    const courses = baseCourses.map((name, i) => ({
      id: i,
      name,
      students: courseCount[name] || 0,
      price: 99,
      duration: i === 4 ? "24 weeks" : "12 weeks",
      status: "active",
    }));

    setStats({
      totalCourses: courses.length,
      activeCourses: courses.length,
      totalStudents,
      totalRevenue,
      courses,
    });
  };

  const fetchRecentRegistrations = async () => {
    try {
      const q = query(
        collection(db, "course-registrants"),
        orderBy("registeredAt", "desc"),
        limit(5)
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRecentRegistrations(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCourseColor = (name) => {
    const map = {
      "Healthcare Data Analytics": "#10b981",
      "Financial Data Analytics": "#3b82f6",
      "Sales and Marketing Data Analytics": "#f59e0b",
      "Supply Chain Analytics": "#8b5cf6",
      "Data Science and AI": "#ef4444",
      "AI Automation": "#06b6d4",
    };
    return map[name] || "#6b7280";
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return navigate("/signin");

      try {
        const adminDoc = await getDoc(doc(db, "admins", user.uid));

        let adminData = null;

        if (adminDoc.exists()) {
          adminData = adminDoc.data();
        } else {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists() && userDoc.data().role === "Admin") {
            adminData = userDoc.data();
          }
        }

        if (!adminData) {
          toast.error("Access denied");
          return navigate("/signin");
        }

        setAdminName(
          adminData.name || adminData.username || "Admin"
        );
        setIsAuthorized(true);

        await fetchDashboardStats();
        await fetchRecentRegistrations();
        setLoading(false);
      } catch (err) {
        toast.error("Auth error");
        navigate("/signin");
      }
    });

    return () => unsub();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-[#050814] p-6 space-y-6 animate-pulse">

        {/* Hero skeleton */}
        <div className="h-24 rounded-2xl bg-gray-800/50" />

        {/* Stats skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 rounded-2xl bg-gray-800/50" />
          ))}
        </div>

        {/* Cards skeleton */}
        <div className="grid md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 rounded-2xl bg-gray-800/50" />
          ))}
        </div>

        {/* Chart skeleton */}
        <div className="h-64 rounded-2xl bg-gray-800/50" />

        {/* Bottom section skeleton */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="h-40 rounded-2xl bg-gray-800/50" />
          <div className="h-40 rounded-2xl bg-gray-800/50" />
        </div>
      </div>
    );
  return (
    <div className="h-screen overflow-y-auto bg-[#050814] text-white p-6 space-y-8">

      {/* HERO */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
        <h2 className="text-2xl font-bold">
          Welcome back, {adminName} 👋
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Admin Control Center
        </p>
      </div>

      {/* NAV LINKS */}
      <div className="flex flex-wrap gap-3 border-b border-gray-700 pb-4">
        <Link className="px-4 py-2 border rounded-full hover:border-blue-500" to="/dashboard/viewblogs">
          View Blogs
        </Link>
        <Link className="px-4 py-2 border rounded-full hover:border-blue-500" to="/dashboard/create-blog">
          Create Blog
        </Link>
        <Link className="px-4 py-2 border rounded-full hover:border-blue-500" to="/dashboard/event-attendees">
          Event Attendees
        </Link>
        <Link className="px-4 py-2 border rounded-full hover:border-blue-500" to="/dashboard/create-webinar">
          Webinar
        </Link>
        <Link className="px-4 py-2 border rounded-full hover:border-blue-500" to="/dashboard/users">
          Users
        </Link>
        <Link className="px-4 py-2 border rounded-full hover:border-blue-500" to="/dashboard/registrations">
          Registrations
        </Link>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {[
          { label: "Courses", value: stats.totalCourses, icon: <BookIcon />, color: "#3b82f6" },
          { label: "Active", value: stats.activeCourses, icon: <SchoolIcon />, color: "#10b981" },
          { label: "Students", value: stats.totalStudents, icon: <PeopleIcon />, color: "#f59e0b" },
          { label: "Revenue", value: `$${stats.totalRevenue}`, icon: <MoneyIcon />, color: "#8b5cf6" },
        ].map((s, i) => (
          <div key={i} className={cardBase}>
            <div className="flex justify-between">
              <div>
                <p className="text-gray-400 text-sm">{s.label}</p>
                <h3 className="text-2xl font-bold">{s.value}</h3>
              </div>
              <div style={{ color: s.color }}>{s.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* COURSES */}
      <div className="grid md:grid-cols-3 gap-5">
        {stats.courses.map((c) => (
          <div key={c.id} className={cardBase}>
            <div className="h-1 absolute top-0 left-0 w-full" style={{ background: getCourseColor(c.name) }} />

            <div className="flex justify-between items-center mb-2">
              <Chip label={c.name} size="small" sx={{ bgcolor: getCourseColor(c.name), color: "white" }} />
              <Chip label={c.status} size="small" sx={{ bgcolor: "#10b981", color: "white" }} />
            </div>

            <p className="text-sm text-gray-400">{c.duration}</p>

            <div className="flex justify-between mt-3 text-sm">
              <span>Students</span>
              <span>{c.students}</span>
            </div>

            <div className="flex justify-between text-sm mt-1">
              <span>Price</span>
              <span className="text-green-400">${c.price}</span>
            </div>

            <div className="mt-3">
              <LinearProgress
                variant="determinate"
                value={Math.min(c.students, 100)}
              />
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2 mt-4">
              <Button
                fullWidth
                variant="outlined"
                onClick={() => navigate(`/dashboard/courses/edit/${c.id}`)}
              >
                Edit
              </Button>
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate("/dashboard/registrations")}
              >
                View
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* CHART + LINKS */}
      <div className="md:col-span-2 border border-white/10 p-4 rounded-2xl bg-[#0b1220]">
        <Chart />
      </div>



      {/* RECENT + ENROLL */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="border border-white/10 p-4 rounded-2xl bg-[#0b1220]">
          <h3 className="font-semibold mb-3">Recent Registrations</h3>

          {recentRegistrations.length === 0 ? (
            <p className="text-gray-400 text-sm">No registrations yet</p>
          ) : (
            recentRegistrations.slice(0, 5).map((r) => (
              <div key={r.id} className="flex justify-between p-2 bg-gray-800/50 rounded mb-2">
                <div>
                  <p>{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.course}</p>
                </div>
                <p className="text-gray-400 text-sm">{r.generatedReferralCode}</p>
              </div>
            ))
          )}
        </div>

        <div className="border border-white/10 p-4 rounded-2xl bg-[#0b1220]">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;