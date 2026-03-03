"use client";

import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ElsieProfile, googlemeet } from "../../../assets";

function MarketingContent() {

    const dot = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <g clip-path="url(#clip0_841_1900)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.852Z" fill="#034FE3" /> </g> <defs> <clipPath id="clip0_841_1900"> <rect width="18" height="18" fill="white" /> </clipPath> </defs> </svg>);

    // ACTIVE WEEK CONTROL
    const [activeWeek, setActiveWeek] = useState(null);

    const toggleWeek = (week) => {
        setActiveWeek(activeWeek === week ? null : week);
    };

    const weeks = [
        {
            title: "Week 1: Foundations & Strategy",
            sessionTitle1: "Introduction to Digital Marketing",
            sessionTitle2: "Digital Strategy & Audience Targeting",
            session1: [
                "What is digital marketing?",
                "Customer journey & digital ecosystem",
                "Marketing funnels & key channels (SEO, Social, Ads, Email, Content)",
                "Understanding marketing funnels",
                "Assignment: Pick a brand for final project"
            ],
            session2: [
                "Market research basics",
                "Customer personas",
                "Value proposition & competitor analysis",
                "Setting SMART marketing goals",
                "Practical: Build persona + draft strategy"
            ],
        },
        {
            title: "Week 2: Content & Branding",
            sessionTitle1: "Content Marketing & Storytelling",
            sessionTitle2: "Social Media Marketing",
            session1: [
                "Content pillars",
                "Brand voice & messaging",
                "Content pillars & content types",
                "30-day content planning",
                "Practical: Develop content calendar"
            ],
            session2: [
                "Platform breakdown: Instagram, LinkedIn, TikTok, X",
                "Organic growth strategies",
                "Engagement tactics",
                "Hashtags & algorithm basics",
                "Practical: Write 5 optimized posts"
            ],
        },
        {
            title: "Week 3: Design & Tools",
            sessionTitle1: "Visual Content Creation",
            sessionTitle2: "Video & Short-form Content",
            session1: [
                "Canva fundamentals",
                "Basic design principles",
                "Creating carousels, ads, thumbnails",
                "Practical: Design 3 social creatives"
            ], session2: [
                "Reels/TikTok strategy",
                "Hooks & scripting",
                "Basic editing tools",
                "Practical: Script + record short promo video"
            ],
        },
        {
            title: "Week 4: SEO & Website Optimization",
            sessionTitle1: "Search Engine Optimization (SEO)",
            sessionTitle2: "Website & Conversion Optimization",
            session1: [
                "How search engines work",
                "Keyword research",
                "On-page SEO",
                "Blog optimization",
                "Practical: Optimize a blog article"
            ], session2: [
                "Landing page fundamentals",
                "Copywriting for conversion",
                "Call-to-action strategies",
                "Introduction to Google Analytics",
                "Practical: Landing page audit"
            ],
        },
        {
            title: "Week 5: Paid Advertising",
            sessionTitle1: "Meta Ads (Facebook & Instagram)",
            sessionTitle2: "Google Ads & PPC",
            session1: [
                "Ads Manager walkthrough",
                "Campaign objectives",
                "Targeting & audience segmentation",
                "Budgeting basics",
                "Practical: Build ad campaign draft"
            ], session2: [
                "Search vs Display Ads",
                "Keyword bidding basics",
                "Writing ad copy",
                "Practical: Create Google Search ad mockup"
            ],
        },
        {
            title: "Week 6: Analytics & Performance",
            sessionTitle1: "Data & Performance Tracking",
            sessionTitle2: "Campaign Optimization",
            session1: [
                "KPIs per channel (Google, Meta, TikTok, LinkedIn)",
                "Understanding impressions, CTR, CPC, CAC",
                "Reading analytics dashboards",
                "Practical: Analyze sample campaign data"
            ], session2: [
                "A/B testing",
                "Scaling winning ads",
                "Improving conversion rates",
                "Practical: Optimize underperforming campaign"
            ],
        },
        {
            title: "Week 7: Email & Automation",
            sessionTitle1: "Email Marketing",
            sessionTitle2: "Funnel Management & CRM",
            session1: [
                "Building an email list",
                "Lead magnets",
                "Writing high-converting emails",
                "Tools overview: Mailerlite, KIT"
            ], session2: [
                "User acquisition strategies",
                "User retention tactics",
                "Funnel stages and optimization",
                "CRM tools introduction"
            ],
        },
        {
            title: "Week 8: Career & Capstone",
            sessionTitle1: "Freelancing, Job Readiness & Personal Branding",
            sessionTitle2: "Capstone Presentations",
            session1: [
                "Building a marketing portfolio",
                "LinkedIn optimization",
                "How to pitch clients",
                "Pricing your services",
                "CV & interview tips"
            ], session2: [
                "Present: Digital strategy",
                "Present: Content calendar + Ad campaign draf",
                "Present: Email funnel + Analytics plan",
                "Certification awarded",
                "Internship placement"
            ],
        },
    ];

    return (
        <div className="relative pb-[180px]">

            <span className="w-[3px] h-[36px] bg-[#034FE3] absolute sm:top-[19px] top-[6px]" />

            {/* HEADER */}
            <div className="px-[20px] pb-[40px]">
                <p className="font-[600] sm:text-[48px] text-[32px] text-[#333]">
                    <span className="text-[#034FE3]">Course </span>Content
                </p>

                <p className="text-[#1A1A1ACC] mt-2">
                    8 Weeks Intensive Digital Marketing Program
                </p>
            </div>

            <div className="flex sm:flex-row flex-col-reverse gap-[25px] smm:w-[1238px] sm:w-[1150px]">
                {/* course content section  */}
                <div className=" flex-1 flex flex-col rounded-tr-[10px] overflow-hidden border border-gray-300 h-fit">
                    {weeks.map((week, index) => (
                        <div key={index}>

                            {/* WEEK HEADER */}
                            <div
                                onClick={() => toggleWeek(index)}
                                className="bg-[#EBECED] cursor-pointer flex gap-[10px] py-[20px] px-[20px] border-b"
                            >
                                {activeWeek === index
                                    ? <KeyboardArrowUpIcon />
                                    : <KeyboardArrowDownIcon />
                                }

                                <p className="font-[600]">
                                    {week.title}
                                </p>
                            </div>

                            {/* WEEK CONTENT */}
                            {activeWeek === index && (
                                <section className="bg-[#F0F0F0]">
                                    <p className=" my-2 ml-[16px] text-[#034FE3] text-[18px]">{week.sessionTitle1}</p>
                                    {week.session1.map((aim, i) => (
                                        <p
                                            key={i}
                                            className="flex gap-[12px] p-[16px]"
                                        >
                                            <span>{dot}</span>
                                            {aim}
                                        </p>
                                    ))}
                                    <hr className=" h-1 w-[80%] mx-auto rounded-full bg-[#034FE3] border-none" />
                                    <p className=" my-2 ml-[16px] text-[#034FE3] text-[18px]">{week.sessionTitle2}</p>
                                    {week.session2.map((aim, i) => (
                                        <p
                                            key={i}
                                            className="flex gap-[12px] p-[16px]"
                                        >
                                            <span>{dot}</span>
                                            {aim}
                                        </p>
                                    ))}
                                </section>
                            )}

                        </div>
                    ))}

                </div>

                {/* instructor section  */}
                <div className="flex flex-col gap-[36px] sm:py-[32px] py-[24px] sm:px-[48px] px-[20px] bg-[#EBECED] rounded-[10px] border border-gray-300 h-fit w-fit">
                    <section className=" flex flex-col gap-[24px] ">
                        <section className=" flex flex-col">
                            {" "}
                            <h2 className=" sm:text-[24px] text-[20px] text-[#034FE3] font-[600] w-fit">
                                Program Facilitator
                            </h2>
                            <p className=" text-[16px] text-[#1A1A1ACC] font-[300] w-fit">
                                Certified Trainer at Zion Tech Hub
                            </p>
                        </section>
                        <section className=" flex  gap-[14px] ">
                            <img
                                className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] object-cover object-top rounded-full"
                                src={ElsieProfile}
                                alt=""
                            />
                            <div className=" flex flex-col text-[#1A1A1A] w-fit">
                                <p className=" text-[18px] font-[600]">Elsie Emesomi Ogianyo</p>
                                <p className=" text-[12px] font-[300]">
                                    Marketing Professional.
                                </p>
                            </div>
                        </section>
                    </section>
                    <span className=" h-[1px] sm:w-[317px] w-[300px] bg-[#1A1A1A1A]"></span>
                    <section className="flex gap-[12px] w-fit items-center">
                        <p className=" sm:text-[20px] text-[18px] font-[300] ">Live on</p>{" "}
                        <img
                            className=" w-[100px] h-[36px] object-cover"
                            src={googlemeet}
                            alt=""
                        />
                    </section>
                </div>

            </div>
        </div>
    );
}

export default MarketingContent;