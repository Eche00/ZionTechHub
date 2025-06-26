import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Head from "./components/Head";
import Home from "./pages/Home";
import About from "./pages/About";
import Consultation from "./pages/Consultation";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";
import MachineLearning from "./pages/Courses/MachineLearning";
import CloudComputing from "./pages/Courses/CloudComputing";
import WebDevelopment from "./pages/Courses/WebDevelopment";
import DataAnalysis from "./pages/Courses/DataAnalysis";
import DataScience from "./pages/Courses/DataScience";
import FullHome from "./pages/HomeComponents/FullHome";
import Scrolltotop from "./components/Scrolltotop";
import PartnerWithUs from "./pages/PartnerWithUs";
import googleAnalyticsTracking from "./components/googleAnalyticsTracking";
import Workshop from "./pages/Workshop";
import Hackathon from "./pages/Hackathon";
import Blog from "./pages/Blog";
import EachBlog from "./pages/Blogcomponent/EachBlog";
import DashContainer from "./dashboard/DashContainer";
import Dashboard from "./dashboard/dashboardRoutes/Dashboard";
import EventAttendees from "./dashboard/dashboardRoutes/EventAttendees";
import CreateBlog from "./dashboard/dashboardRoutes/CreateBlog";
import ViewBlogs from "./dashboard/dashboardRoutes/ViewBlogs";
import Users from "./dashboard/dashboardRoutes/Users";
import Signin from "./dashboard/dashboardRoutes/Signin";
import CreateWebinar from "./dashboard/dashboardRoutes/CreateWebinar";

function App() {
  googleAnalyticsTracking();
  return (
    <div className=" overflow-hidden">
      {/* scroll to top on reroute  */}
      <Scrolltotop />
      {/* General route  */}
      <Routes>
        {/* Client routes   */}
        <Route path="/" element={<Head />}>
          <Route path="/" element={<FullHome />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/data-consultation" element={<Consultation />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/data-analystics-training" element={<DataAnalysis />} />
          <Route path="/data-science-course" element={<DataScience />} />
          <Route
            path="/web-development-training"
            element={<WebDevelopment />}
          />
          <Route path="/cloud-computing-course" element={<CloudComputing />} />
          <Route
            path="/machine-learning-course"
            element={<MachineLearning />}
          />
          <Route path="/zion-tech-hub-webinar" element={<Workshop />} />
          <Route path="/zion-tech-hub-hackathon" element={<Hackathon />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<EachBlog />} />
          {/* create  */}
          <Route
            path="/eche-acces-create-webinar"
            element={<CreateWebinar />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

        {/* Dashboard Routes  */}
        <Route path="/dashboard" element={<DashContainer />}>
          <Route path="/dashboard/home" element={<Dashboard />} />
          <Route path="/dashboard/viewblogs" element={<ViewBlogs />} />
          <Route path="/dashboard/create-blog" element={<CreateBlog />} />
          <Route
            path="/dashboard/event-attendees"
            element={<EventAttendees />}
          />
          <Route path="/dashboard/create-webinar" element={<CreateWebinar />} />
          <Route path="/dashboard/users" element={<Users />} />
        </Route>

        {/* Personal route(no header/footer)  */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
    </div>
  );
}

export default App;
