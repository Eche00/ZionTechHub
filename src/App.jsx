import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Components
import Head from "./components/Head";
import Scrolltotop from "./components/Scrolltotop";
import googleAnalyticsTracking from "./components/googleAnalyticsTracking";

// Pages
import FullHome from "./pages/HomeComponents/FullHome";
import About from "./pages/About";
import Consultation from "./pages/Consultation";
import Contact from "./pages/Contact";
import PartnerWithUs from "./pages/PartnerWithUs";
import Enroll from "./pages/Enroll";

// Course Pages
import HealthcareDataAnalytics from "./pages/Courses/HealthcareDataAnalytics";
import FinancialDataAnalytics from "./pages/Courses/FinancialDataAnalytics";
import SalesMarketingDataAnalytics from "./pages/Courses/SalesMarketingDataAnalytics";
import SupplyChainAnalytics from "./pages/Courses/SupplyChainAnalytics";
import DataScienceAndAI from "./pages/Courses/DataScienceAndAI";
import AIAutomation from "./pages/Courses/AIAutomation";

// Events & Blog
import Workshop from "./pages/Workshop";
import Hackathon from "./pages/Hackathon";
import Blog from "./pages/Blog";
import EachBlog from "./pages/Blogcomponent/EachBlog";

// Dashboard
import DashContainer from "./dashboard/DashContainer";
import Dashboard from "./dashboard/dashboardRoutes/Dashboard";
import EventAttendees from "./dashboard/dashboardRoutes/EventAttendees";
import CreateBlog from "./dashboard/dashboardRoutes/CreateBlog";
import ViewBlogs from "./dashboard/dashboardRoutes/ViewBlogs";
import Users from "./dashboard/dashboardRoutes/Users";
import Signin from "./dashboard/dashboardRoutes/Signin";
import CreateWebinar from "./dashboard/dashboardRoutes/CreateWebinar";
import AffliateMarketing from "./pages/AffliateMarketing";
import { Toaster } from "react-hot-toast";
import Signup from "./dashboard/dashboardRoutes/SignUp";
import Affliates from "./dashboard/dashboardRoutes/Affliates";
import CourseRegistrants from "./dashboard/dashboardRoutes/CourseRegistrants";

function App() {
  googleAnalyticsTracking();

  return (
    <div className="overflow-hidden">
      <Scrolltotop />
      <Toaster position="top-right" />
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<Head />}>
          <Route index element={<FullHome />} />
          <Route path="about-us" element={<About />} />
          <Route path="data-consultation" element={<Consultation />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="partner-with-us" element={<PartnerWithUs />} />

          {/* Course Routes */}
          <Route path="healthcare-data-analytics" element={<HealthcareDataAnalytics />} />
          <Route path="financial-data-analytics" element={<FinancialDataAnalytics />} />
          <Route path="sales-marketing-data-analytics" element={<SalesMarketingDataAnalytics />} />
          <Route path="supply-chain-analytics" element={<SupplyChainAnalytics />} />
          <Route path="data-science-and-ai" element={<DataScienceAndAI />} />
          <Route path="ai-automation" element={<AIAutomation />} />

          {/* Events */}
          <Route path="zion-tech-hub-workshop-webinar" element={<Workshop />} />
          <Route path="zion-tech-hub-hackathon" element={<Hackathon />} />
          <Route path="zth-partnership-program" element={<AffliateMarketing />} />

          {/* Blog */}
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<EachBlog />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashContainer />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="viewblogs" element={<ViewBlogs />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="affliate-marketers" element={<Affliates />} />
          <Route path="course-registrants" element={<CourseRegistrants />} />
          <Route path="event-attendees" element={<EventAttendees />} />
          <Route path="create-webinar" element={<CreateWebinar />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* Standalone Routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
    </div>
  );
}

export default App;
