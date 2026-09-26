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

const AiMlengineering = () => {
    const aiMlIcons = (
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
                    <circle
                        cx="7"
                        cy="8"
                        r="1"
                        fill="#034FE3"
                    />
                    <circle
                        cx="12"
                        cy="8"
                        r="1"
                        fill="#034FE3"
                    />
                    <path
                        d="M6.5 12C8 13.5 11 13.5 12.5 12"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            </section>

            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                        d="M9.5 3L15 6V12L9.5 15L4 12V6L9.5 3Z"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7 9.5L9 11.5L12.5 7.5"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </section>
        </>
    );

    const modules = [
        {
            title: "Artificial Intelligence Fundamentals",
            description:
                "Understand the foundations of artificial intelligence, how intelligent systems work, and how AI is being applied to solve real-world problems across industries.",
        },
        {
            title: "Machine Learning Concepts",
            description:
                "Learn the core principles of machine learning, including supervised and unsupervised learning, algorithms, model training, and practical machine learning workflows.",
        },
        {
            title: "Data Preparation & Preprocessing",
            description:
                "Learn how to collect, clean, transform, prepare, and preprocess datasets so they can be effectively used for machine learning and AI applications.",
        },
        {
            title: "Exploratory Data Analysis",
            description:
                "Explore datasets, identify patterns and relationships, detect anomalies, and use analytical techniques to understand data before building machine learning models.",
        },
        {
            title: "Machine Learning Model Development",
            description:
                "Build and train machine learning models using practical datasets while learning how to select appropriate algorithms and structure effective model-development workflows.",
        },
        {
            title: "Model Evaluation & Improvement",
            description:
                "Evaluate machine learning models using appropriate metrics, identify performance issues, and apply techniques to improve model accuracy and reliability.",
        },
        {
            title: "Predictive Analytics",
            description:
                "Use machine learning techniques to build predictive solutions that can identify patterns, forecast outcomes, and support data-informed decision-making.",
        },
        {
            title: "Practical AI & Machine Learning",
            description:
                "Apply AI and machine learning concepts to practical problems through projects, assignments, real-world datasets, and hands-on problem solving.",
        },
        {
            title: "Communicating Model Results",
            description:
                "Learn how to interpret machine learning outputs and communicate model findings clearly to technical and non-technical audiences.",
        },
    ];

    const skills = [
        "Artificial Intelligence Fundamentals",
        "Machine Learning Concepts",
        "Data Preparation & Preprocessing",
        "Exploratory Data Analysis",
        "Machine Learning Model Development",
        "Model Training",
        "Model Evaluation",
        "Model Improvement",
        "Predictive Analytics",
        "Practical AI & Machine Learning",
        "Interpreting Model Results",
        "Communicating Data Insights",
    ];

    const audience = [
        "Aspiring AI Engineers",
        "Aspiring Machine Learning Engineers",
        "Data Analysts",
        "Software Developers",
        "Data Scientists",
        "Technology Professionals",
        "Students Exploring AI Careers",
        "Entrepreneurs",
        "Researchers",
        "Professionals Looking to Transition Into AI",
    ];

    return (
        <CourseTemplate
            courseTitle="AI & Machine Learning Engineering"
            courseSubtitle="Build Intelligent Solutions for Real-World Problems"
            courseDescription="Build practical AI and Machine Learning skills to work with data, develop machine learning models, understand AI concepts, and apply intelligent solutions to real-world problems."
            courseImages={[
                machinehero1,
                machinehero2,
                machinehero3,
                machinehero4,
                machinehero5,
                machinehero6,
            ]}
            courseModules={modules}
            skillsToGain={skills}
            targetAudience={audience}
            courseOverview="Build practical AI and Machine Learning Engineering skills through a structured 15-week program focused on artificial intelligence fundamentals, machine learning, data preparation, model development, predictive analytics, model evaluation, and practical problem-solving."
            courseIcon={aiMlIcons}
            metaTitle="AI & Machine Learning Engineering Course | Zion Tech Hub"
            metaDescription="Learn AI and Machine Learning Engineering at Zion Tech Hub. Build practical skills in artificial intelligence, machine learning, data preparation, predictive analytics, model development, and real-world AI applications."
            duration="15 Weeks"
        />
    );
};

export default AiMlengineering;