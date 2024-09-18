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

function App() {
  return (
    <div className=" overflow-hidden">
      <Router>
        <Scrolltotop />

        <Routes>
          <Route path="/" element={<Head />}>
            <Route path="/" element={<FullHome />} />

            <Route path="/about" element={<About />} />
            <Route path="/consult" element={<Consultation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/dataanalystics" element={<DataAnalysis />} />
            <Route path="/webdevelopment" element={<WebDevelopment />} />
            <Route path="/cloudcomputing" element={<CloudComputing />} />
            <Route path="/machinelearning" element={<MachineLearning />} />
          </Route>
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
