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

const SalesMarketingDataAnalytics = () => {
    const salesIcons = (
        <>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M2 16L7 10L12 13L17 7" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14 7H17V10" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <circle cx="9.5" cy="9.5" r="7" stroke="#034FE3" strokeWidth="1.5"/>
                    <path d="M9.5 4.5V9.5L12.5 11.5" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M3 14L8 9L13 12L16 6" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14 6H16V8" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <rect x="5" y="7" width="9" height="6" rx="1" stroke="#034FE3" strokeWidth="1.5"/>
                    <path d="M8 10H11" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M4 12L8 8L12 11L15 6" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M13 6H15V8" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
        </>
    );

    const modules = [
        {
            title: "Customer Analytics & Segmentation",
            description: "Analyze customer behavior, segment audiences, calculate lifetime value, and develop targeting strategies."
        },
        {
            title: "Sales Performance Analytics",
            description: "Optimize sales funnels, forecast revenue, analyze team performance metrics, and improve conversion rates."
        },
        {
            title: "Marketing ROI Analysis",
            description: "Measure and optimize marketing campaign effectiveness, attribution modeling, and ROI across channels."
        },
        {
            title: "Market Basket Analysis",
            description: "Discover product associations, optimize cross-selling and upselling strategies, and improve recommendation engines."
        },
        {
            title: "Social Media Analytics",
            description: "Analyze social media engagement, sentiment, influencer impact, and optimize content strategy."
        },
        {
            title: "A/B Testing & Experimentation",
            description: "Design, implement, and analyze A/B tests for websites, emails, and marketing campaigns."
        }
    ];

    const skills = [
        "Customer Segmentation",
        "Sales Forecasting",
        "Marketing ROI Analysis",
        "Campaign Optimization",
        "Customer Lifetime Value (CLV)",
        "Market Basket Analysis",
        "A/B Testing",
        "Conversion Rate Optimization",
        "Social Media Analytics",
        "Attribution Modeling"
    ];

    const audience = [
        "Marketing Managers",
        "Sales Professionals",
        "Business Analysts",
        "E-commerce Managers",
        "Product Managers",
        "Digital Marketers",
        "Growth Hackers"
    ];

    return (
        <CourseTemplate
            courseTitle="Sales and Marketing Data Analytics"
            courseSubtitle="Drive Revenue Through Data"
            courseDescription="Master customer analytics, sales optimization, marketing ROI measurement, and growth strategies using data-driven approaches."
            courseImages={[marketing1, marketing2, marketing3, marketing4, marketing5, marketing6]}
            courseModules={modules}
            skillsToGain={skills}
            targetAudience={audience}
            courseOverview="Learn customer analytics, sales performance optimization, marketing ROI measurement, and growth hacking techniques"
            courseIcon={salesIcons}
            metaTitle="Sales & Marketing Data Analytics Course | Zion Tech Hub"
            metaDescription="Master sales and marketing analytics. Learn customer segmentation, campaign optimization, ROI measurement, and growth strategies. Enroll now!"
            duration="8 Weeks"
        />
    );
};

export default SalesMarketingDataAnalytics;