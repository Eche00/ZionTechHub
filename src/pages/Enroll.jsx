import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { KeyboardArrowRight } from "@mui/icons-material";
import "./Enroll.css";
import { logo } from "../assets";
import { Helmet } from "react-helmet";
import Packages from "./EnrollTabs/Packages";
import Hero from "./EnrollTabs/Hero";
import Form from "./EnrollTabs/Form";
import Tracks from "./EnrollTabs/Tracks";

function Enroll() {
  const [nav, setNav] = useState(false);
  const [coursee, setCoursee] = useState(false);
  const [step, setStep] = useState(0);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [step]);
  // tracks 
  const tracks = [
    { id: 1, name: "healthcare data analytics" },
    { id: 2, name: "financial data analytics" },
    { id: 3, name: "data-analytics" },
    { id: 4, name: "ai-ml-engineering" },
    { id: 5, name: "data-science and ai" },
  ];
  // track details 
  const trackDetails = {
    "healthcare data analytics": {
      title: "Healthcare Data Analytics",
      description:
        "Learn how to work with healthcare data, uncover meaningful insights and solve practical problems using data. You'll build skills in healthcare data analysis, cleaning, visualization, interpretation, reporting and communicating data-driven findings.",
      duration: "15 Weeks Duration",
      technologies: [
        "Healthcare Data Analysis",
        "Data Cleaning",
        "Data Visualization",
        "Data Interpretation",
      ],
      category: "Healthcare Analytics",
      note: "Includes practical healthcare-related datasets, assignments and projects",
    },

    "financial data analytics": {
      title: "Financial Data Analytics",
      description:
        "Learn how to clean, analyze and interpret financial data, identify trends and patterns, build useful reports and turn financial information into insights that support better business decisions.",
      duration: "15 Weeks Duration",
      technologies: [
        "Financial Data Analysis",
        "Data Cleaning",
        "Data Visualization",
        "Financial Reporting",
      ],
      category: "Financial Analytics",
      note: "Includes practical financial and business data projects",
    },

    "data-analytics": {
      title: "Data Analytics",
      description:
        "Build practical Data Analytics skills by learning how to clean data, analyze datasets, identify patterns, create visualizations, build useful reports and communicate your findings clearly.",
      duration: "15 Weeks Duration",
      technologies: [
        "Data Analysis",
        "Data Cleaning",
        "Data Visualization",
        "Data Interpretation",
      ],
      category: "Data Analytics",
      note: "Includes practical real-world datasets, assignments and portfolio projects",
    },

    "ai-ml-engineering": {
      title: "AI / ML Engineering",
      description:
        "Build practical AI and Machine Learning skills through guided training and hands-on projects, with a focus on developing the technical foundation needed to work with AI and machine learning solutions.",
      duration: "15 Weeks Duration",
      technologies: [
        "Artificial Intelligence",
        "Machine Learning",
        "Python",
        "ML Projects",
      ],
      category: "AI & Machine Learning",
      note: "Includes practical AI and Machine Learning projects and assignments",
    },

    "data-science and ai": {
      title: "Data Science & AI",

      description:
        "Build practical Data Science and AI skills through a structured 12-week programme covering data science, data analysis, machine learning, deep learning, artificial intelligence, natural language processing, model deployment and responsible AI. You'll learn the foundations, work with data, build models and apply what you learn through practical projects and assignments.",

      duration: "12 Weeks Duration",

      technologies: [
        "Data Science",
        "Data Analysis",
        "Machine Learning",
        "Deep Learning",
        "Artificial Intelligence",
        "Natural Language Processing",
        "Model Deployment",
        "Responsible AI",
      ],

      category: "Data Science & AI",

      note:
        "Includes live training, mentorship, practical projects, assignments, portfolio development and hands-on learning with real-world data.",
    },
  };

  // shared state for active tab and selected package
  const [activeTab, setActiveTab] = useState(
    "healthcare data analytics"
  );

  const [selectedPackage, setSelectedPackage] = useState("global");

  const exit = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        d="M18 1L1.66666 17.3333M1.66666 1L18 17.3333"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const handleClose = () => {
    setNav(false);
  };

  return (
    <div>
      <Helmet>
        <title>Enroll Today, Secure Your Spot Now! | Zion Tech Hub</title>

        <meta
          name="description"
          content="Take the first step toward something great—enroll now! Don’t miss your chance to join a community that’s built for your success."
        />
      </Helmet>

      {/* Header */}
      <div className="flex justify-between items-center max-w-[90%] mx-auto font-sans py-[10px] z-50">

        {/* Logo */}
        <section className="flex-1 text-xl font-bold flex items-baseline gap-1">
          <div>
            <Link to="/">
              <img
                className="width-[89px] h-[51px] object-cover"
                src={logo}
                alt=""
              />
            </Link>
          </div>
        </section>
      </div>

      {/* Main */}
      <div className="one flex md:items-center flex-col md:min-h-[100vh] min-h-[120vh] gap-[50px] pt-10 z-10">

        <section className="w-full">

          {step === 0 && (<Hero
            tracks={tracks}
            trackDetails={trackDetails}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            selectedPackage={selectedPackage}
            setSelectedPackage={setSelectedPackage}
            step={step}
            setStep={setStep}
          />)}
          {step === 1 && (<Tracks
            tracks={tracks}
            trackDetails={trackDetails}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            selectedPackage={selectedPackage}
            setSelectedPackage={setSelectedPackage}
            step={step}
            setStep={setStep}
          />)}

          {step === 2 && (
            <>
              <Packages
                step={step}
                setStep={setStep}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                selectedPackage={selectedPackage}
                setSelectedPackage={setSelectedPackage}
              />

              <Form
                setStep={setStep}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                selectedPackage={selectedPackage}
                setSelectedPackage={setSelectedPackage}
              />
            </>
          )}

        </section>

      </div>
    </div>
  );
}

export default Enroll;
