"use client";

import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SirGodsentprofile, googlemeet } from "../../../assets";

function MarketingContent() {

    const dot = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <g clip-path="url(#clip0_841_1900)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.852Z" fill="#034FE3" /> </g> <defs> <clipPath id="clip0_841_1900"> <rect width="18" height="18" fill="white" /> </clipPath> </defs> </svg>);

    // ACTIVE WEEK CONTROL
    const [activeWeek, setActiveWeek] = useState(null);

    const toggleWeek = (week) => {
        setActiveWeek(activeWeek === week ? null : week);
    };

    const weeks = [
        {
            title: "Week 1: Introduction to Digital Marketing",
            aims: [
                "Understanding digital marketing ecosystem",
                "Marketing channels overview",
                "Customer journey & funnels",
                "Digital branding basics",
                "Setting marketing goals"
            ],
        },
        {
            title: "Week 2: Audience & Content Strategy",
            aims: [
                "Audience research techniques",
                "Buyer persona creation",
                "Content marketing strategy",
                "Social media positioning",
                "Content planning tools"
            ],
        },
        {
            title: "Week 3: Social Media Marketing",
            aims: [
                "Instagram, Facebook & LinkedIn marketing",
                "Organic growth strategies",
                "Content scheduling",
                "Community engagement",
                "Performance tracking"
            ],
        },
        {
            title: "Week 4: Search Engine Optimization (SEO)",
            aims: [
                "Keyword research fundamentals",
                "On-page SEO optimization",
                "Technical SEO basics",
                "Website visibility improvement",
                "SEO tools usage"
            ],
        },
        {
            title: "Week 5: Paid Advertising",
            aims: [
                "Google Ads introduction",
                "Meta Ads setup",
                "Audience targeting",
                "Retargeting campaigns",
                "Ad budgeting strategies"
            ],
        },
        {
            title: "Week 6: Email & Conversion Marketing",
            aims: [
                "Email marketing setup",
                "Lead generation funnels",
                "Landing page optimization",
                "Conversion strategies",
                "Automation tools"
            ],
        },
        {
            title: "Week 7: Analytics & Performance Tracking",
            aims: [
                "Marketing KPIs",
                "Google Analytics basics",
                "Campaign performance tracking",
                "Data-driven decisions",
                "Reporting dashboards"
            ],
        },
        {
            title: "Week 8: Strategy & Capstone Project",
            aims: [
                "Full marketing strategy creation",
                "Campaign planning",
                "Real-world project execution",
                "Performance evaluation",
                "Final presentation"
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
                                    {week.aims.map((aim, i) => (
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
                                Instructor
                            </h2>
                            <p className=" text-[16px] text-[#1A1A1ACC] font-[300] w-fit">
                                Certified Trainer at Zion Tech Hub
                            </p>
                        </section>
                        <section className=" flex  gap-[14px] ">
                            <img
                                className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] object-cover rounded-full"
                                src={SirGodsentprofile}
                                alt=""
                            />
                            <div className=" flex flex-col text-[#1A1A1A] w-fit">
                                <p className=" text-[18px] font-[600]">Ndoma Godsent</p>
                                <p className=" text-[12px] font-[300]">
                                    Co-Founder, Data Analyst
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