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
import MachineLearning from "./pages/Courses/MachineLearning";
import CloudComputing from "./pages/Courses/CloudComputing";
import WebDevelopment from "./pages/Courses/WebDevelopment";
import DataAnalysis from "./pages/Courses/DataAnalysis";
import DataScience from "./pages/Courses/DataScience";

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

function App() {
  // Initialize Google Analytics tracking
  googleAnalyticsTracking();

  return (
    <div className="overflow-hidden">
      {/* Always scroll to top when navigating */}
      <Scrolltotop />

      <Routes>
        {/* Public Website Routes (with Header & Footer) */}
        <Route path="/" element={<Head />}>
          <Route index element={<FullHome />} />
          <Route path="about-us" element={<About />} />
          <Route path="data-consultation" element={<Consultation />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="partner-with-us" element={<PartnerWithUs />} />

          {/* Courses */}
          <Route path="data-analystics-training" element={<DataAnalysis />} />
          <Route path="data-science-course" element={<DataScience />} />
          <Route path="web-development-training" element={<WebDevelopment />} />
          <Route path="cloud-computing-course" element={<CloudComputing />} />
          <Route path="machine-learning-course" element={<MachineLearning />} />

          {/* Events */}
          <Route path="zion-tech-hub-workshop-webinar" element={<Workshop />} />
          <Route path="zion-tech-hub-hackathon" element={<Hackathon />} />

          {/* Blog */}
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<EachBlog />} />

          {/* Catch-all: redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

        {/* Dashboard Routes (with dashboard layout) */}
        <Route path="/dashboard" element={<DashContainer />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="viewblogs" element={<ViewBlogs />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="event-attendees" element={<EventAttendees />} />
          <Route path="create-webinar" element={<CreateWebinar />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* Standalone Routes (no header/footer) */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
    </div>
  );
}

export default App;
