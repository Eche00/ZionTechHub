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

const AIAutomation = () => {
    const automationIcons = (
        <>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M2 9H17" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 2V17" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="9.5" cy="9.5" r="3" stroke="#034FE3" strokeWidth="1.5"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M4 6L7 9L4 12" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M15 6L12 9L15 12" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 14L11 4" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
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
                    <path d="M3 5H16V13H3V5Z" stroke="#034FE3" strokeWidth="1.5"/>
                    <path d="M7 8H12" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
            <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <circle cx="9.5" cy="8.5" r="2" stroke="#034FE3" strokeWidth="1.5"/>
                    <path d="M9.5 10.5V14.5" stroke="#034FE3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </section>
        </>
    );

    const modules = [
        {
            title: "Robotic Process Automation (RPA) Fundamentals",
            description: "Master RPA tools including UiPath, Automation Anywhere, and Blue Prism for automating repetitive business processes."
        },
        {
            title: "Intelligent Automation",
            description: "Combine AI capabilities with RPA to create smart automation solutions that can make decisions and handle complex tasks."
        },
        {
            title: "Workflow Automation Design",
            description: "Design, implement, and optimize automated business workflows using low-code and no-code platforms."
        },
        {
            title: "AI Agents & Chatbots",
            description: "Build intelligent agents, conversational AI, and chatbots for customer service and internal support."
        },
        {
            title: "Process Mining & Discovery",
            description: "Analyze business processes, identify automation opportunities, and measure automation impact."
        },
        {
            title: "Automation Governance & Security",
            description: "Implement security controls, compliance measures, and governance frameworks for automation programs."
        }
    ];

    const skills = [
        "Robotic Process Automation (RPA)",
        "Workflow Design & Optimization",
        "AI Integration",
        "Process Mining",
        "Low-Code/No-Code Platforms",
        "Business Process Optimization",
        "Cognitive Automation",
        "API Integration",
        "Chatbot Development",
        "Automation Governance"
    ];

    const audience = [
        "Business Analysts",
        "IT Professionals",
        "Operations Managers",
        "Process Engineers",
        "Automation Specialists",
        "Digital Transformation Leaders",
        "RPA Developers"
    ];

    return (
        <CourseTemplate
            courseTitle="AI Automation"
            courseSubtitle="Automate Smarter with AI"
            courseDescription="Master RPA, intelligent automation, workflow optimization, and AI-powered process automation to drive business efficiency and digital transformation."
            courseImages={[marketing1, marketing2, marketing3, marketing4, marketing5, marketing6]}
            courseModules={modules}
            skillsToGain={skills}
            targetAudience={audience}
            courseOverview="Learn RPA, intelligent automation, workflow optimization, and AI-powered process automation for business efficiency"
            courseIcon={automationIcons}
            metaTitle="AI Automation Course | Zion Tech Hub"
            metaDescription="Master AI automation and RPA. Learn intelligent process automation, workflow optimization, AI agents, and digital transformation strategies. Enroll now!"
            duration="8 Weeks"
        />
    );
};

export default AIAutomation;
