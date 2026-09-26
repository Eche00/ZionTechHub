import React from "react";
import CourseTemplate from "./CourseTemplate";
import {
    marketing1,
    marketing2,
    marketing3,
    marketing4,
    marketing5,
    marketing6,
} from "../../assets";

const DataScienceAndAI = () => {
    const dsaiIcons = (
        <>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                        d="M3 16L8 11L13 14L16 9"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="9.5"
                        cy="9.5"
                        r="7"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                    />
                </svg>
            </section>

            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                        d="M5 14L14 5"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="6.5"
                        cy="12.5"
                        r="2"
                        fill="#034FE3"
                    />
                    <circle
                        cx="12.5"
                        cy="6.5"
                        r="2"
                        fill="#034FE3"
                    />
                </svg>
            </section>

            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <rect
                        x="4"
                        y="6"
                        width="11"
                        height="8"
                        rx="1"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M7 9H12"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M9 6V14"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            </section>

            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                        d="M4 7L9 12L14 7"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M9 12V15"
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
                        cy="8.5"
                        r="3"
                        stroke="#034FE3"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M9.5 11.5V14.5"
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
            title: "Data Science",
            description:
                "Build a practical understanding of Data Science and learn how data can be used to understand problems, uncover insights, build solutions, and support better decisions.",
        },
        {
            title: "Data Analysis",
            description:
                "Learn how to work with data, analyse problems, identify patterns and generate meaningful insights from real-world datasets.",
        },
        {
            title: "Machine Learning",
            description:
                "Understand the foundations of Machine Learning, learn how models are built, and apply machine learning techniques to practical problems.",
        },
        {
            title: "Deep Learning",
            description:
                "Explore the foundations of Deep Learning and understand how deep learning approaches can be used to solve more complex problems.",
        },
        {
            title: "Artificial Intelligence",
            description:
                "Learn the foundations of Artificial Intelligence and understand how intelligent systems can be applied to solve practical problems across different situations.",
        },
        {
            title: "Natural Language Processing",
            description:
                "Understand how Artificial Intelligence can be used to work with language and text, and explore the practical applications of Natural Language Processing.",
        },
        {
            title: "Model Deployment",
            description:
                "Learn the fundamentals of taking models beyond development and making them available for practical use in real-world situations.",
        },
        {
            title: "Responsible AI",
            description:
                "Understand the importance of responsible AI and the key considerations involved in developing and applying AI systems responsibly.",
        },
        {
            title: "Practical Projects & Assignments",
            description:
                "Put your knowledge into practice by working with real-world data, analysing problems, building models, and completing practical projects and assignments for your portfolio.",
        },
    ];

    const skills = [
        "Data Science",
        "Data Analysis",
        "Working with Real-World Data",
        "Problem Analysis",
        "Machine Learning",
        "Model Building",
        "Deep Learning",
        "Artificial Intelligence",
        "Natural Language Processing",
        "Model Deployment",
        "Responsible AI",
        "Practical Problem Solving",
        "Data-Driven Insights",
        "Portfolio Development",
    ];

    const audience = [
        "Beginners Exploring Data Science & AI",
        "Aspiring Data Scientists",
        "Aspiring AI Professionals",
        "People New to Technology",
        "Data Analysts",
        "Software Developers",
        "Students Exploring Tech Careers",
        "Technology Professionals",
        "Professionals Transitioning Into Tech",
        "Anyone Looking to Build Practical Data Science & AI Skills",
    ];

    return (
        <CourseTemplate
            courseTitle="Data Science & AI"
            courseSubtitle="Learn Data Science & AI. Unlock New Opportunities for Yourself."
            courseDescription="Build practical Data Science and AI skills through a structured 12-week programme. Learn the foundations, work with data, build models, explore artificial intelligence and apply what you learn through practical projects and assignments."
            courseImages={[
                marketing1,
                marketing2,
                marketing3,
                marketing4,
                marketing5,
                marketing6,
            ]}
            courseModules={modules}
            skillsToGain={skills}
            targetAudience={audience}
            courseOverview="Build practical Data Science and AI skills through a structured 12-week programme covering data science, data analysis, machine learning, deep learning, artificial intelligence, natural language processing, model deployment, and responsible AI. You will learn the foundations, practise what you learn, work on real projects, and gradually build the confidence to use your skills in practical situations."
            courseIcon={dsaiIcons}
            metaTitle="Data Science & AI Course | Zion Tech Hub"
            metaDescription="Learn Data Science and AI at Zion Tech Hub through a structured 12-week programme covering data science, data analysis, machine learning, deep learning, artificial intelligence, NLP, model deployment and responsible AI."
            duration="12 Weeks"
        />
    );
};

export default DataScienceAndAI;