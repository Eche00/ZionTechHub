import React from "react";
import CourseTemplate from "./CourseTemplate";
import {
    datascience1,
    datascience2,
    datascience3,
    datascience4,
    datascience5,
    datascience6
} from "../../assets";

const DataScienceAndAI = () => {
    const dsaiIcons = (
        <>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M3 16L8 11L13 14L16 9" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="9.5" cy="9.5" r="7" stroke="#034FE3" strokeWidth="1.5"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M5 14L14 5" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="6.5" cy="12.5" r="2" fill="#034FE3"/>
                    <circle cx="12.5" cy="6.5" r="2" fill="#034FE3"/>
                </svg>
            </section>
        </>
    );

    const modules = [
        {
            title: "Foundations of Data Science",
            description: "Master statistics, probability, linear algebra, and calculus essential for data science and machine learning."
        },
        {
            title: "Advanced Machine Learning",
            description: "Learn supervised and unsupervised learning, ensemble methods, dimensionality reduction, and model evaluation techniques."
        },
        {
            title: "Deep Learning & Neural Networks",
            description: "Build and train deep neural networks, CNNs, RNNs, and transformers for complex pattern recognition tasks."
        },
        {
            title: "Natural Language Processing",
            description: "Process, analyze, and derive insights from text data using NLP techniques including sentiment analysis and language models."
        },
        {
            title: "Computer Vision",
            description: "Implement image recognition, object detection, facial recognition, and video analysis systems."
        },
        {
            title: "MLOps & Model Deployment",
            description: "Learn to deploy, monitor, and maintain machine learning models in production environments."
        }
    ];

    const skills = [
        "Machine Learning Algorithms",
        "Deep Learning (TensorFlow/PyTorch)",
        "Natural Language Processing",
        "Computer Vision",
        "Model Deployment",
        "Big Data Processing (Spark)",
        "Data Visualization",
        "Statistical Analysis",
        "Feature Engineering",
        "MLOps & Model Monitoring"
    ];

    const audience = [
        "Data Scientists",
        "Software Engineers",
        "AI Enthusiasts",
        "Researchers",
        "Tech Professionals",
        "Analytics Managers",
        "AI Product Managers"
    ];

    return (
        <CourseTemplate
            courseTitle="Data Science and AI"
            courseSubtitle="Build the Future with AI"
            courseDescription="Master machine learning, deep learning, artificial intelligence, and MLOps to build intelligent systems and solve complex real-world problems."
            courseImages={[datascience1, datascience2, datascience3, datascience4, datascience5, datascience6]}
            courseModules={modules}
            skillsToGain={skills}
            targetAudience={audience}
            courseOverview="Learn advanced machine learning, deep learning, NLP, computer vision, and MLOps for AI implementation"
            courseIcon={dsaiIcons}
            metaTitle="Data Science & AI Course | Zion Tech Hub"
            metaDescription="Master data science and artificial intelligence. Learn machine learning, deep learning, NLP, computer vision, and MLOps. Enroll now!"
            duration="12 Weeks"
        />
    );
};

export default DataScienceAndAI;
