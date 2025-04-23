import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className=" overflow-hidden">
      <Router>
        <Scrolltotop />

        <Routes>
          <Route path="/" element={<Head />}>
            <Route path="/" element={<FullHome />} />

            <Route path="/about-us" element={<About />} />
            <Route path="/data-consultation" element={<Consultation />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />

            <Route
              path="/data-analystics-training"
              element={<DataAnalysis />}
            />
            <Route path="/data-science-course" element={<DataScience />} />
            <Route
              path="/web-development-training"
              element={<WebDevelopment />}
            />
            <Route
              path="/cloud-computing-course"
              element={<CloudComputing />}
            />
            <Route
              path="/machine-learning-course"
              element={<MachineLearning />}
            />
          </Route>
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
