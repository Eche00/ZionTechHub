import React from "react";
import CourseTemplate from "./CourseTemplate";
import {
   
  machinehero1,
  machinehero2,
  machinehero3,
  machinehero4,
  machinehero5,
  machinehero6,
} from "../../assets";

const AdvancedDataAnalytics = () => {
    const healthcareIcons = (
        <>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.5 1.5V17.5M1.5 9.5H17.5" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="9.5" cy="9.5" r="2" stroke="#034FE3" strokeWidth="1.5"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M4 14L7 11L10 14L15 8" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 8H15V11" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M2 12L7 7L12 12L17 7" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M5 12V8" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <circle cx="9.5" cy="9.5" r="7" stroke="#034FE3" strokeWidth="1.5"/>
                    <path d="M9.5 5.5V9.5L12 12" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <rect x="4" y="6" width="11" height="8" rx="1" stroke="#034FE3" strokeWidth="1.5"/>
                    <path d="M7 10H12" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
        </>
    );

    const modules = [
        {
          title: "Data Analytics Foundations",
          description:
            "Learn the fundamentals of data analytics, data lifecycle management, data types, data quality assessment, and analytical thinking."
        },
        {
          title: "Data Wrangling & Preparation",
          description:
            "Master data cleaning, transformation, integration, and preprocessing techniques using industry-standard tools and workflows."
        },
        {
          title: "Statistical Analysis & Data Exploration",
          description:
            "Apply descriptive and inferential statistics to uncover patterns, identify trends, and generate actionable insights from complex datasets."
        },
        {
          title: "Business Intelligence & Data Visualization",
          description:
            "Build interactive dashboards and visual reports using tools like Power BI and Tableau to communicate insights effectively."
        },
        {
          title: "Predictive Analytics & Machine Learning",
          description:
            "Develop predictive models, forecasting systems, and machine learning solutions for business and operational decision-making."
        },
        {
          title: "Big Data & Advanced Analytics",
          description:
            "Explore large-scale data processing, cloud analytics platforms, AI-powered analytics, and real-world data science applications."
        }
      ];
      
      const skills = [
        "Data Cleaning & Transformation",
        "Exploratory Data Analysis (EDA)",
        "Statistical Analysis",
        "Data Visualization",
        "Power BI & Tableau",
        "Python for Data Analytics",
        "Predictive Modeling",
        "Machine Learning Fundamentals",
        "Business Intelligence Reporting",
        "Data Storytelling",
        "Big Data Analytics"
      ];
      
      const audience = [
        "Aspiring Data Analysts",
        "Business Analysts",
        "Data Scientists",
        "Software Developers",
        "Business Professionals",
        "Project Managers",
        "Entrepreneurs",
        "Researchers",
        "Operations Analysts",
        "Students Seeking Data Careers"
      ];

    return (
        <CourseTemplate
        courseTitle="Advanced Data Analytics"
        courseSubtitle="Turn Data Into Strategic Decisions"
        courseDescription="Master data analytics, visualization, statistical modeling, and machine learning techniques to uncover insights, and drive data-informed decision-making across industries."
        courseImages={[
                machinehero1,
                machinehero2,
                machinehero3,
                machinehero4,
                machinehero5,
                machinehero6,]}
            courseModules={modules}
            skillsToGain={skills}
            targetAudience={audience}
            courseOverview="Master advanced data analytics, data visualization, statistical modeling, business intelligence, and machine learning to transform complex data into actionable insights and drive data-informed decision-making."
            courseIcon={healthcareIcons}
            metaTitle="Advanced Data Analytics Course | Zion Tech Hub"
            metaDescription="Learn Advanced Data Analytics at Zion Tech Hub. Master Power BI, Tableau, SQL, Python, data visualization, predictive analytics, and machine learning to build a successful career in data."
            duration="10 Weeks"
        />
    );
};

export default AdvancedDataAnalytics;