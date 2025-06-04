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
import CreateBlog from "./pages/CreateBlog";
import CreateWebinar from "./pages/CreateWebinar";

function App() {
  googleAnalyticsTracking();
  return (
    <div className=" overflow-hidden">
      <Scrolltotop />

      <Routes>
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
          <Route path="/zion-tech-hub-workshop" element={<Workshop />} />
          <Route path="/zion-tech-hub-hackathon" element={<Hackathon />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<EachBlog />} />
          {/* create  */}
          <Route path="/eche-acces-create-blog" element={<CreateBlog />} />
          <Route
            path="/eche-acces-create-webinar"
            element={<CreateWebinar />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
    </div>
  );
}

export default App;
