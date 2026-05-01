import React from "react";
import CourseTemplate from "./CourseTemplate";
import {
    healthcare1,
    healthcare2,
    healthcare3,
    healthcare4,
    healthcare5,
    healthcare6
} from "../../assets";

const HealthcareDataAnalytics = () => {
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
        </>
    );

    const modules = [
        {
            title: "Healthcare Data Fundamentals",
            description: "Master healthcare data standards including HL7, FHIR, and EMR/EHR systems. Learn data collection, storage, and security protocols."
        },
        {
            title: "Clinical Data Analysis",
            description: "Analyze patient data, clinical trials, and treatment outcomes using modern analytics tools and statistical methods."
        },
        {
            title: "Healthcare Operations Analytics",
            description: "Optimize hospital operations, patient flow, resource allocation, and staff scheduling using data-driven insights."
        },
        {
            title: "Predictive Analytics in Healthcare",
            description: "Build models for disease prediction, patient readmission risk, treatment effectiveness, and early intervention strategies."
        },
        {
            title: "Population Health Management",
            description: "Analyze community health data, identify risk factors, and develop preventive care strategies."
        },
        {
            title: "Healthcare Compliance & Ethics",
            description: "Understand HIPAA regulations, data privacy laws, and ethical considerations in healthcare analytics."
        }
    ];

    const skills = [
        "Healthcare Data Standards (HL7/FHIR)",
        "Clinical Data Analysis",
        "Patient Outcome Prediction",
        "Healthcare Operations Optimization",
        "Medical Billing Analytics",
        "Population Health Management",
        "Regulatory Compliance (HIPAA)",
        "Healthcare BI Tools (Tableau/Power BI)",
        "Predictive Modeling",
        "Electronic Health Records (EHR) Analysis"
    ];

    const audience = [
        "Healthcare Professionals",
        "Hospital Administrators",
        "Public Health Officials",
        "Data Analysts",
        "Medical Researchers",
        "Health IT Specialists",
        "Clinical Data Managers"
    ];

    return (
        <CourseTemplate
            courseTitle="Healthcare Data Analytics"
            courseSubtitle="Transform Healthcare Through Data"
            courseDescription="Learn to analyze medical data, improve patient outcomes, and drive healthcare innovation using advanced analytics techniques and industry-standard tools."
            courseImages={[healthcare1, healthcare2, healthcare3, healthcare4, healthcare5, healthcare6]}
            courseModules={modules}
            skillsToGain={skills}
            targetAudience={audience}
            courseOverview="Master healthcare data analytics, clinical data management, predictive modeling, and regulatory compliance for better patient outcomes"
            courseIcon={healthcareIcons}
            metaTitle="Healthcare Data Analytics Course | Zion Tech Hub"
            metaDescription="Master healthcare data analytics with our comprehensive course. Learn HL7/FHIR standards, clinical data analysis, and predictive modeling for better patient outcomes. Enroll now!"
            duration="10 Weeks"
        />
    );
};

export default HealthcareDataAnalytics;
