import React from "react";
import CourseTemplate from "./CourseTemplate";
import {
    financial1,
    financial2,
    financial3,
    financial4,
    financial5,
    financial6
} from "../../assets";

const FinancialDataAnalytics = () => {
    const financialIcons = (
        <>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M2 14L7 9L10 12L16 5" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M13 5H16V8" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <rect x="3" y="7" width="3" height="9" fill="#034FE3"/>
                    <rect x="8" y="4" width="3" height="12" fill="#034FE3"/>
                    <rect x="13" y="9" width="3" height="7" fill="#034FE3"/>
                </svg>
            </section>
        </>
    );

    const modules = [
        {
            title: "Financial Data Management",
            description: "Master financial data collection, cleaning, preprocessing, and integration from multiple sources including APIs and databases."
        },
        {
            title: "Risk Analytics & Management",
            description: "Learn to identify, measure, and mitigate financial risks including credit risk, market risk, and operational risk using data-driven approaches."
        },
        {
            title: "Investment Analytics",
            description: "Analyze market trends, portfolio performance, asset allocation, and investment opportunities using quantitative methods."
        },
        {
            title: "Fraud Detection & Prevention",
            description: "Build machine learning models to detect fraudulent transactions, identify anomalies, and ensure regulatory compliance."
        },
        {
            title: "Financial Forecasting",
            description: "Develop time series models for stock price prediction, revenue forecasting, and economic indicator analysis."
        },
        {
            title: "Algorithmic Trading",
            description: "Design and implement trading algorithms, backtesting strategies, and automated trading systems."
        }
    ];

    const skills = [
        "Financial Data Modeling",
        "Risk Assessment & Management",
        "Investment Portfolio Analysis",
        "Fraud Detection Algorithms",
        "Regulatory Compliance (Basel III)",
        "Portfolio Optimization",
        "Market Trend Analysis",
        "Financial Forecasting",
        "Algorithmic Trading",
        "Quantitative Analysis"
    ];

    const audience = [
        "Financial Analysts",
        "Investment Bankers",
        "Risk Managers",
        "Accountants",
        "Finance Professionals",
        "Quantitative Analysts",
        "Traders"
    ];

    return (
        <CourseTemplate
            courseTitle="Financial Data Analytics"
            courseSubtitle="Drive Financial Success with Data"
            courseDescription="Master financial data analysis, risk assessment, investment strategies, and algorithmic trading using advanced analytics techniques and industry tools."
            courseImages={[financial1, financial2, financial3, financial4, financial5, financial6]}
            courseModules={modules}
            skillsToGain={skills}
            targetAudience={audience}
            courseOverview="Learn financial modeling, risk analytics, investment strategies, and algorithmic trading for data-driven financial decision making"
            courseIcon={financialIcons}
            metaTitle="Financial Data Analytics Course | Zion Tech Hub"
            metaDescription="Master financial data analytics with our comprehensive course. Learn risk assessment, investment analysis, fraud detection, and algorithmic trading. Enroll now!"
            duration="10 Weeks"
        />
    );
};

export default FinancialDataAnalytics;
