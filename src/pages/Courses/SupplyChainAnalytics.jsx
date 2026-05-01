import React from "react";
import CourseTemplate from "./CourseTemplate";
import {
    marketing1,
    marketing2,
    marketing3,
    marketing4,
    marketing5,
    marketing6
} from "../../assets";

const SupplyChainAnalytics = () => {
    const supplychainIcons = (
        <>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M2 5H17L14 12H5L2 5Z" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="6" cy="14" r="2" stroke="#034FE3" strokeWidth="1.5"/>
                    <circle cx="13" cy="14" r="2" stroke="#034FE3" strokeWidth="1.5"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M4 9L9 4L14 9" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 4V15" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <rect x="3" y="8" width="13" height="6" rx="1" stroke="#034FE3" strokeWidth="1.5"/>
                    <path d="M6 11H13" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M3 7L9 3L15 7L9 11L3 7Z" stroke="#034FE3" strokeWidth="1.5"/>
                    <path d="M9 11V15" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M5 5H14V12H5V5Z" stroke="#034FE3" strokeWidth="1.5"/>
                    <circle cx="9.5" cy="8.5" r="1.5" fill="#034FE3"/>
                </svg>
            </section>
        </>
    );

    const modules = [
        {
            title: "Demand Forecasting & Planning",
            description: "Master demand prediction techniques using time series analysis, machine learning, and statistical methods for inventory optimization."
        },
        {
            title: "Logistics & Transportation Analytics",
            description: "Optimize transportation routes, delivery networks, last-mile logistics, and reduce shipping costs using data-driven insights."
        },
        {
            title: "Supplier Analytics & Procurement",
            description: "Evaluate supplier performance, optimize procurement strategies, negotiate better terms, and manage supplier relationships."
        },
        {
            title: "Inventory Optimization",
            description: "Balance stock levels, reduce carrying costs, prevent stockouts, and improve service levels using advanced inventory models."
        },
        {
            title: "Warehouse Operations Analytics",
            description: "Optimize warehouse layout, picking routes, labor allocation, and automation strategies for efficiency."
        },
        {
            title: "Supply Chain Risk Management",
            description: "Identify, assess, and mitigate supply chain risks including disruptions, delays, and quality issues."
        }
    ];

    const skills = [
        "Demand Forecasting",
        "Inventory Optimization",
        "Logistics Analytics",
        "Supplier Performance Management",
        "Route Optimization",
        "Warehouse Management",
        "Supply Chain KPIs",
        "Risk Management",
        "Procurement Analytics",
        "Network Optimization"
    ];

    const audience = [
        "Supply Chain Managers",
        "Logistics Coordinators",
        "Operations Managers",
        "Procurement Specialists",
        "Inventory Planners",
        "Warehouse Managers",
        "Distribution Analysts"
    ];

    return (
        <CourseTemplate
            courseTitle="Supply Chain Analytics"
            courseSubtitle="Optimize Your Supply Chain"
            courseDescription="Master demand forecasting, logistics optimization, inventory management, and supply chain risk analysis using advanced analytics techniques."
            courseImages={[marketing1, marketing2, marketing3, marketing4, marketing5, marketing6]}
            courseModules={modules}
            skillsToGain={skills}
            targetAudience={audience}
            courseOverview="Learn demand forecasting, inventory optimization, logistics management, and supply chain risk analysis"
            courseIcon={supplychainIcons}
            metaTitle="Supply Chain Analytics Course | Zion Tech Hub"
            metaDescription="Master supply chain analytics. Learn demand forecasting, inventory optimization, logistics management, and risk analysis. Enroll now!"
            duration="8 Weeks"
        />
    );
};

export default SupplyChainAnalytics;
