import React from "react";
import CourseTemplate from "./CourseTemplate";
import {
  analyticshero1,
  analyticshero2,
  analyticshero3,
  analyticshero4,
  analyticshero5,
  analyticshero6,
} from "../../assets";

const DataAnalysis = () => {
  const dataAnalyticsIcons = (
    <>
      <section className="p-[13px] bg-[#FFFFFF] rounded-full">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path
            d="M9.5 2.5V16.5M2.5 9.5H16.5"
            stroke="#034FE3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="9.5"
            cy="9.5"
            r="3"
            stroke="#034FE3"
            strokeWidth="1.5"
          />
        </svg>
      </section>

      <section className="p-[13px] bg-[#FFFFFF] rounded-full">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <rect
            x="3"
            y="3"
            width="13"
            height="13"
            rx="2"
            stroke="#034FE3"
            strokeWidth="1.5"
          />
          <path
            d="M6 7H13M6 10H13M6 13H10"
            stroke="#034FE3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </section>

      <section className="p-[13px] bg-[#FFFFFF] rounded-full">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path
            d="M3 14L7 10L10 12L16 5"
            stroke="#034FE3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5H16V9"
            stroke="#034FE3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </section>

      <section className="p-[13px] bg-[#FFFFFF] rounded-full">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <circle
            cx="9.5"
            cy="9.5"
            r="7"
            stroke="#034FE3"
            strokeWidth="1.5"
          />
          <path
            d="M9.5 5.5V9.5L12 12"
            stroke="#034FE3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </section>

      <section className="p-[13px] bg-[#FFFFFF] rounded-full">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path
            d="M3.5 15V9"
            stroke="#034FE3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 15V5"
            stroke="#034FE3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12.5 15V8"
            stroke="#034FE3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M17 15V3"
            stroke="#034FE3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </section>
    </>
  );

  const modules = [
    {
      title: "Data Analysis",
      description:
        "Learn how to work with datasets, investigate information, identify useful patterns, and turn raw data into meaningful insights.",
    },
    {
      title: "Data Cleaning & Preparation",
      description:
        "Learn how to clean, organize, transform, and prepare datasets so they are ready for accurate and effective analysis.",
    },
    {
      title: "Data Interpretation",
      description:
        "Develop the ability to interpret datasets, understand what the numbers are saying, and turn analytical findings into useful information.",
    },
    {
      title: "Identifying Patterns & Trends",
      description:
        "Learn how to explore datasets and identify meaningful patterns, relationships, trends, and changes that can support better decisions.",
    },
    {
      title: "Data Visualization",
      description:
        "Create clear and useful visualizations that make complex information easier to understand and communicate.",
    },
    {
      title: "Building Useful Reports",
      description:
        "Learn how to organize analytical findings into reports that clearly communicate important information and insights.",
    },
    {
      title: "Drawing Insights From Datasets",
      description:
        "Move beyond simply analysing numbers by learning how to extract useful insights and connect findings to real-world problems.",
    },
    {
      title: "Communicating Findings",
      description:
        "Develop the ability to communicate analytical results clearly to technical and non-technical audiences.",
    },
    {
      title: "Data-Driven Problem Solving",
      description:
        "Apply analytical thinking and practical data skills to investigate problems, evaluate information, and support data-driven decisions.",
    },
    {
      title: "Practical Data Analytics Projects",
      description:
        "Apply your skills through practical assignments and projects based on real-world datasets and problems.",
    },
  ];

  const skills = [
    "Data Analysis",
    "Data Cleaning & Preparation",
    "Data Interpretation",
    "Identifying Patterns & Trends",
    "Data Visualization",
    "Building Useful Reports",
    "Extracting Insights From Data",
    "Communicating Analytical Findings",
    "Data-Driven Problem Solving",
    "Working With Real-World Datasets",
    "Practical Data Analytics",
  ];

  const audience = [
    "Aspiring Data Analysts",
    "Business Analysts",
    "Students Exploring Data Careers",
    "Software Developers",
    "Business Professionals",
    "Entrepreneurs",
    "Researchers",
    "Operations Professionals",
    "Professionals Transitioning Into Data",
    "Anyone Looking to Build Practical Data Skills",
  ];

  return (
    <CourseTemplate
      courseTitle="Data Analytics"
      courseSubtitle="Stop Learning Data Analytics Only in Theory. Start Learning by Working With Real Data."
      courseDescription="Build practical Data Analytics skills through a 15-week program focused on cleaning data, analysing datasets, identifying patterns, creating visualizations, communicating findings, and solving real-world problems with data."
      courseImages={[
        analyticshero1,
        analyticshero2,
        analyticshero3,
        analyticshero4,
        analyticshero5,
        analyticshero6,
      ]}
      courseModules={modules}
      skillsToGain={skills}
      targetAudience={audience}
      courseOverview="This 15-week Data Analytics program is designed to help you build practical ability by working with real data. You'll learn how to clean data, analyse it, identify useful patterns, create visualizations, draw insights, communicate findings clearly, and apply data-driven problem solving to practical projects."
      courseIcon={dataAnalyticsIcons}
      metaTitle="Data Analytics Training Course | Zion Tech Hub"
      metaDescription="Learn practical Data Analytics at Zion Tech Hub. Build skills in data cleaning, data analysis, visualization, interpretation, reporting, insight generation, and data-driven problem solving through practical projects."
      duration="15 Weeks"
    />
  );
};

export default DataAnalysis;