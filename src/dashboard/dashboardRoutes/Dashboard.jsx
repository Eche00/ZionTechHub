import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../lib/Config/firebase";
import { doc, getDoc, collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import Chart from "../dashboardcomponents/Chart";
import Links from "../dashboardcomponents/Links";
import Recent from "../dashboardcomponents/Recent";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  LinearProgress
} from "@mui/material";
import {
  School as SchoolIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  AttachMoney as MoneyIcon,
  Book as BookIcon,
  Schedule as ScheduleIcon,
  CheckCircle as CheckCircleIcon
} from "@mui/icons-material";

function Dashboard() {
  const [adminName, setAdminName] = useState("");
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [stats, setStats] = useState({
    totalCourses: 6,
    activeCourses: 6,
    totalStudents: 0,
    totalRevenue: 0,
    courses: []
  });
  const [recentRegistrations, setRecentRegistrations] = useState([]);
  const navigate = useNavigate();

  // Fetch dashboard statistics
  const fetchDashboardStats = async () => {
    try {
      // Fetch total registrations
      const registrationsSnapshot = await getDocs(collection(db, "course-registrants"));
      const totalStudents = registrationsSnapshot.size;
      
      // Calculate total revenue (assuming each course costs $99)
      const totalRevenue = totalStudents * 99;
      
      // Fetch courses from your courses collection if exists, otherwise use default
      let courses = [];
      try {
        const coursesSnapshot = await getDocs(collection(db, "courses"));
        if (!coursesSnapshot.empty) {
          courses = coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } else {
          // Default courses
          courses = [
            { id: 1, name: "Healthcare Data Analytics", students: 0, price: 99, status: "active", duration: "12 weeks" },
            { id: 2, name: "Financial Data Analytics", students: 0, price: 99, status: "active", duration: "12 weeks" },
            { id: 3, name: "Sales and Marketing Data Analytics", students: 0, price: 99, status: "active", duration: "12 weeks" },
            { id: 4, name: "Supply Chain Analytics", students: 0, price: 99, status: "active", duration: "12 weeks" },
            { id: 5, name: "Data Science and AI", students: 0, price: 99, status: "active", duration: "24 weeks" },
            { id: 6, name: "AI Automation", students: 0, price: 99, status: "active", duration: "12 weeks" }
          ];
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
      
      // Get student count per course from registrations
      const courseCount = {};
      registrationsSnapshot.forEach(doc => {
        const data = doc.data();
        if (data.course) {
          courseCount[data.course] = (courseCount[data.course] || 0) + 1;
        }
      });
      
      // Update courses with student counts
      const updatedCourses = courses.map(course => ({
        ...course,
        students: courseCount[course.name] || 0
      }));
      
      setStats({
        totalCourses: updatedCourses.length,
        activeCourses: updatedCourses.filter(c => c.status === "active").length,
        totalStudents: totalStudents,
        totalRevenue: totalRevenue,
        courses: updatedCourses
      });
      
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  };

  // Fetch recent registrations
  const fetchRecentRegistrations = async () => {
    try {
      const q = query(
        collection(db, "course-registrants"),
        orderBy("registrationTimestamp", "desc"),
        limit(5)
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRecentRegistrations(data);
    } catch (error) {
      console.error("Error fetching recent registrations:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/signin");
        return;
      }

      try {
        // Check in 'admins' collection
        let adminDoc = await getDoc(doc(db, "admins", user.uid));
        let userData = null;
        
        if (adminDoc.exists()) {
          userData = adminDoc.data();
          setAdminName(userData.name || userData.username || "Admin");
          setIsAuthorized(true);
          console.log("✅ Admin found in 'admins' collection:", userData.email);
        } else {
          // Check in 'users' collection
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
        } else {
          // Fetch dashboard data
          await fetchDashboardStats();
          await fetchRecentRegistrations();
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

  const getCourseColor = (courseName) => {
    const colors = {
      "Healthcare Data Analytics": "#10b981",
      "Financial Data Analytics": "#3b82f6",
      "Sales and Marketing Data Analytics": "#f59e0b",
      "Supply Chain Analytics": "#8b5cf6",
      "Data Science and AI": "#ef4444",
      "AI Automation": "#06b6d4"
    };
    return colors[courseName] || "#6b7280";
  };

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
    return null;
  }

  return (
    <div className="h-[100vh] pt-10 overflow-scroll">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-6 mx-4">
        <h2 className="text-white text-xl">Welcome back, {adminName}! 👋</h2>
        <p className="text-gray-400 text-sm mt-1">You have full administrator access</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 mx-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Courses</p>
              <p className="text-2xl font-bold text-white">{stats.totalCourses}</p>
            </div>
            <BookIcon sx={{ fontSize: 40, color: "#3b82f6", opacity: 0.7 }} />
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Courses</p>
              <p className="text-2xl font-bold text-white">{stats.activeCourses}</p>
            </div>
            <SchoolIcon sx={{ fontSize: 40, color: "#10b981", opacity: 0.7 }} />
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-white">{stats.totalStudents}</p>
            </div>
            <PeopleIcon sx={{ fontSize: 40, color: "#f59e0b", opacity: 0.7 }} />
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-white">${stats.totalRevenue}</p>
            </div>
            <MoneyIcon sx={{ fontSize: 40, color: "#8b5cf6", opacity: 0.7 }} />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="mx-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <SchoolIcon sx={{ color: "#3b82f6" }} />
            📚 Our Courses
          </h2>
          <Link 
            to="/dashboard/courses" 
            className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
          >
            Manage Courses →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.courses.map((course) => (
            <div key={course.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <Chip 
                    label={course.name} 
                    size="small" 
                    sx={{ bgcolor: getCourseColor(course.name), color: "white", fontWeight: "bold" }}
                  />
                  <Chip 
                    label={course.status || "active"} 
                    size="small" 
                    sx={{ 
                      bgcolor: course.status === "active" ? "#10b981" : "#ef4444", 
                      color: "white",
                      fontSize: "0.7rem"
                    }}
                  />
                </div>
                
                <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", mb: 2 }}>
                  {course.name}
                </Typography>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Students enrolled:</span>
                    <span className="text-white font-semibold">{course.students || 0}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{course.duration || "12 weeks"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-green-400 font-semibold">${course.price || 99}</span>
                  </div>
                  
                  {course.students > 0 && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Enrollment</span>
                        <span>{course.students} students</span>
                      </div>
                      <LinearProgress 
                        variant="determinate" 
                        value={Math.min((course.students / 100) * 100, 100)} 
                        sx={{ bgcolor: "#333", "& .MuiLinearProgress-bar": { bgcolor: getCourseColor(course.name) } }}
                      />
                    </div>
                  )}
                </div>
                
                <div className="mt-4 flex gap-2">
                  <Button 
                    size="small" 
                    variant="outlined" 
                    fullWidth
                    onClick={() => navigate(`/dashboard/courses/edit/${course.id}`)}
                    sx={{ borderColor: "#3b82f6", color: "#3b82f6" }}
                  >
                    Edit Course
                  </Button>
                  <Button 
                    size="small" 
                    variant="contained" 
                    fullWidth
                    sx={{ bgcolor: "#3b82f6" }}
                    onClick={() => navigate("/dashboard/registrations")}
                  >
                    View Students
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
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
          <Link
            to="/dashboard/registrations"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer hover:border-blue-500 hover:text-blue-400">
            Registrations
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
          {/* Recent Registrations */}
          <div className="flex flex-1 gap-2 border-4 border-gray-700 w-full px-3 py-4 rounded-[10px] overflow-hidden">
            <div className="w-full">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-semibold">Recent Registrations</h3>
                <Link to="/dashboard/registrations" className="text-blue-400 text-xs hover:text-blue-300">
                  View All →
                </Link>
              </div>
              {recentRegistrations.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-4">No registrations yet</p>
              ) : (
                <div className="space-y-2">
                  {recentRegistrations.map((reg) => (
                    <div key={reg.id} className="bg-gray-700/50 rounded-lg p-2 flex justify-between items-center">
                      <div>
                        <p className="text-white text-sm font-medium">{reg.name}</p>
                        <p className="text-gray-400 text-xs">{reg.course}</p>
                      </div>
                      <Chip 
                        label={reg.generatedReferralCode} 
                        size="small" 
                        sx={{ bgcolor: "#3b82f6", color: "white", fontSize: "0.65rem" }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
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
