import { ArrowBack } from "@mui/icons-material";
import React from "react";

function Packages({
    activeTab,
    selectedPackage,
    setSelectedPackage,
    setStep,
}) {
    const trackPlanDetails = {
        "healthcare data analytics": {
            basic: {
                title: "Healthcare Data Analytics Basic Plan",

                description:
                    "Learn to turn healthcare data into insights that solve real-world problems through practical training, healthcare datasets and hands-on projects.",

                price: "$110",
                naira: "₦165,000",
                duration: "15-week structured training",

                benefitsTitle:
                    "Healthcare Data Analytics — Basic Benefits",

                benefits: [
                    "15-week structured Healthcare Data Analytics training",
                    "Live mentorship",
                    "Healthcare data analysis",
                    "Data cleaning and preparation",
                    "Data interpretation",
                    "Data visualization",
                    "Identifying patterns and trends",
                    "Healthcare-focused reporting",
                    "Extracting insights from healthcare datasets",
                    "Communicating data-driven findings",
                    "Practical healthcare analytics projects",
                    "Supportive learning community",
                    "LinkedIn profile support",
                    "Certificate of completion",
                    "Access to the Zion Tech Hub alumni community",
                    "Webinars and workshops",
                    "Internship opportunities",
                ],

                cta: "ENROLL IN HEALTHCARE DATA ANALYTICS",
            },

            global: {
                title: "Healthcare Data Analytics Global Talent",

                description:
                    "Build practical Healthcare Data Analytics skills, prepare for the job market and qualify for entry-level placement through Zion Tech Hub's Talent Network.",

                price: "$500",
                naira: "₦750,000",
                duration: "15-week training + career preparation",

                benefitsTitle:
                    "Healthcare Data Analytics — Global Talent Benefits",

                benefits: [
                    "Everything included in the Basic Plan",
                    "CV revamp",
                    "Interview preparation",
                    "Career positioning support",
                    "Job-ready healthcare analytics project portfolio",
                    "Access to Zion Tech Hub's Talent Network",
                    "Global career opportunities",
                    "Guaranteed entry-level placement*",
                ],

                cta: "JOIN GLOBAL TALENT",

                badge: "Career Accelerator",

                placementCondition:
                    "Complete the 15-week training, complete the required projects and assignments, and meet the program requirements to qualify for the placement guarantee.",
            },
        },

        "financial data analytics": {
            basic: {
                title: "Financial Data Analytics Basic Plan",

                description:
                    "Turn financial data into useful insights through practical training, real-world financial datasets and hands-on analytics projects.",

                price: "$110",
                naira: "₦165,000",
                duration: "15-week structured training",

                benefitsTitle:
                    "Financial Data Analytics — Basic Benefits",

                benefits: [
                    "15-week structured Financial Data Analytics training",
                    "Live mentorship",
                    "Financial data analysis",
                    "Data cleaning and preparation",
                    "Financial data interpretation",
                    "Data visualization",
                    "Identifying financial trends",
                    "Finding patterns in financial data",
                    "Performance analysis",
                    "Financial reporting",
                    "Communicating analytical insights",
                    "Data-driven decision-making",
                    "Practical financial analytics projects",
                    "Supportive learning community",
                    "LinkedIn profile support",
                    "Certificate of completion",
                    "Access to the Zion Tech Hub alumni community",
                    "Webinars and workshops",
                    "Internship opportunities",
                ],

                cta: "ENROLL IN FINANCIAL DATA ANALYTICS",
            },

            global: {
                title: "Financial Data Analytics Global Talent",

                description:
                    "Build practical Financial Data Analytics skills, prepare for the job market and qualify for entry-level placement through Zion Tech Hub's Talent Network.",

                price: "$500",
                naira: "₦750,000",
                duration: "15-week training + career preparation",

                benefitsTitle:
                    "Financial Data Analytics — Global Talent Benefits",

                benefits: [
                    "Everything included in the Basic Plan",
                    "CV revamp",
                    "Interview preparation",
                    "Career positioning support",
                    "Job-ready financial analytics project portfolio",
                    "Access to Zion Tech Hub's Talent Network",
                    "Global career opportunities",
                    "Guaranteed entry-level placement*",
                ],

                cta: "JOIN GLOBAL TALENT",

                badge: "Career Accelerator",

                placementCondition:
                    "Complete the 15-week training, complete the required projects and assignments, and meet the program requirements to qualify for the placement guarantee.",
            },
        },

        "data-analytics": {
            basic: {
                title: "Data Analytics Basic Plan",

                description:
                    "Build practical Data Analytics skills by working with real-world datasets, solving analytical problems and creating projects you can demonstrate.",

                price: "$110",
                naira: "₦165,000",
                duration: "15-week structured training",

                benefitsTitle:
                    "Data Analytics — Basic Benefits",

                benefits: [
                    "15-week structured Data Analytics training",
                    "Live mentorship",
                    "Real-world data analytics projects",
                    "Practical assignments",
                    "Data cleaning and preparation",
                    "Data analysis",
                    "Data interpretation",
                    "Data visualization",
                    "Identifying patterns and trends",
                    "Building useful reports",
                    "Drawing insights from datasets",
                    "Communicating data-driven findings",
                    "Data-driven problem solving",
                    "Supportive learning community",
                    "LinkedIn profile support",
                    "Certificate of completion",
                    "Access to the Zion Tech Hub alumni community",
                    "Webinars and workshops",
                    "Internship opportunities",
                ],

                cta: "ENROLL IN DATA ANALYTICS",
            },

            global: {
                title: "Data Analytics Global Talent",

                description:
                    "Build practical Data Analytics skills, develop a job-ready portfolio and prepare for employment through Zion Tech Hub's Talent Network.",

                price: "$500",
                naira: "₦750,000",
                duration: "15-week training + career preparation",

                benefitsTitle:
                    "Data Analytics — Global Talent Benefits",

                benefits: [
                    "Everything included in the Basic Plan",
                    "CV revamp",
                    "Interview preparation",
                    "Career positioning support",
                    "Job-ready Data Analytics project portfolio",
                    "Practical real-world analytics projects",
                    "Access to Zion Tech Hub's Talent Network",
                    "Global career opportunities",
                    "Guaranteed entry-level placement*",
                ],

                cta: "JOIN GLOBAL TALENT",

                badge: "Career Accelerator",

                placementCondition:
                    "Complete the 15-week training, complete the required projects and assignments, and meet the program requirements to qualify for the placement guarantee.",
            },
        },

        "ai-ml-engineering": {
            basic: {
                title: "AI & Machine Learning Engineering Basic Plan",

                description:
                    "Build practical AI and Machine Learning skills to create intelligent solutions for real-world problems through guided training, mentorship, practical assignments and projects.",

                price: "$110",
                naira: "₦165,000",
                duration: "15-week structured training",

                benefitsTitle:
                    "AI & Machine Learning Engineering — Basic Benefits",

                benefits: [
                    "15-week structured AI & Machine Learning Engineering training",
                    "Live mentorship",
                    "Artificial intelligence fundamentals",
                    "Machine learning concepts",
                    "Data preparation and preprocessing",
                    "Exploratory data analysis",
                    "Building and training machine learning models",
                    "Model evaluation and improvement",
                    "Predictive analytics",
                    "Applying AI and machine learning to real-world problems",
                    "Interpreting and communicating model results",
                    "Real-world datasets and practical projects",
                    "Hands-on assignments and problem solving",
                    "Supportive learning community",
                    "LinkedIn profile support",
                    "Certificate of completion",
                    "Access to the Zion Tech Hub alumni community",
                    "Webinars and workshops",
                    "Internship opportunities",
                ],

                cta: "ENROLL IN AI & ML ENGINEERING",
            },

            global: {
                title: "AI & Machine Learning Engineering Global Talent",

                description:
                    "Build practical AI and Machine Learning Engineering skills through our 15-week program, prepare for the job market and qualify for guaranteed entry-level job placement through Zion Tech Hub's Talent Network after completing the required training, projects and assignments.",

                price: "$500",
                naira: "₦750,000",
                duration: "15-week training + career preparation",

                benefitsTitle:
                    "AI & Machine Learning Engineering — Global Talent Benefits",

                benefits: [
                    "Everything included in the Basic Plan",
                    "Artificial intelligence and machine learning fundamentals",
                    "Data preparation and preprocessing",
                    "Machine learning model development",
                    "Model evaluation and improvement",
                    "Predictive analytics",
                    "Real-world AI and machine learning projects",
                    "CV revamp",
                    "Interview preparation",
                    "Career positioning support",
                    "Job-ready AI and Machine Learning project portfolio",
                    "Access to Zion Tech Hub's Talent Network",
                    "Global career opportunities",
                    "Guaranteed entry-level placement*",
                ],

                cta: "JOIN GLOBAL TALENT",

                badge: "Career Accelerator",

                placementCondition:
                    "Complete the 15-week training, complete the required projects and assignments, and meet the program requirements to qualify for guaranteed entry-level placement through Zion Tech Hub's Talent Network.",
            },
        },

        "data-science and ai": {
            basic: {
                title: "Data Science & AI Basic Plan",

                description:
                    "Build practical Data Science and AI skills through a structured 12-week programme covering data science, data analysis, machine learning, deep learning and artificial intelligence. You'll learn the foundations, work with data, build models and apply what you learn through practical projects and assignments.",

                price: "$110",
                naira: "₦165,000",
                duration: "12-week structured training",

                benefitsTitle:
                    "Data Science & AI — Basic Benefits",

                benefits: [
                    "12-week structured Data Science & AI training",
                    "Live mentorship",
                    "Data Science fundamentals",
                    "Data Analysis",
                    "Machine Learning",
                    "Learning Community",
                    "Artificial Intelligence",
                    "Natural Language Processing",
                    "Model Deployment",
                    "Responsible AI",
                    "Practical work with real-world data",
                    "Model building and application",
                    "Practical projects and assignments",
                    "Portfolio development",
                    "Supportive learning community",
                    "LinkedIn profile support",
                    "Certificate of completion",
                    "Webinars and workshops",
                    "Guaranteed internship opportunity*",
                    "Access to the Zion Tech Hub alumni community",
                ],

                cta: "ENROLL IN DATA SCIENCE & AI",
            },

            global: {
                title: "Data Science & AI Global Talent",

                description:
                    "Learn Data Science and AI, build practical projects, develop your portfolio and prepare for the job market through a structured 12-week programme. After completing the required training, projects, assignments and programme requirements, you will qualify for guaranteed entry-level job placement through Zion Tech Hub's Talent Network.",

                price: "$500",
                naira: "₦750,000",
                duration: "12-week training + career preparation",

                benefitsTitle:
                    "Data Science & AI — Global Talent Benefits",

                benefits: [
                    "Everything included in the Basic Plan",
                    "Job-ready project portfolio",
                    "CV revamp",
                    "Interview preparation",
                    "Career positioning support",
                    "Access to Zion Tech Hub's Talent Network",
                    "Global career opportunities",
                    "Guaranteed entry-level job placement*",
                ],

                cta: "JOIN GLOBAL TALENT",

                badge: "Career Accelerator",

                placementCondition:
                    "Complete the 12-week training, complete the required projects and assignments, and meet the programme requirements to qualify for guaranteed entry-level job placement through Zion Tech Hub's Talent Network.",
            },
        },
    };

    const trackNames = {
        "healthcare data analytics": "Healthcare Data Analytics",
        "financial data analytics": "Financial Data Analytics",
        "data-analytics": "Data Analytics",
        "ai-ml-engineering": "AI & Machine Learning Engineering",
        "data-science and ai": "Data science & AI",
    };

    const trackDescriptions = {
        "healthcare data analytics": {
            basic:
                "Learn to turn healthcare data into insights that solve real-world problems through practical training, healthcare datasets and hands-on projects.",

            global:
                "Build practical Healthcare Data Analytics skills, prepare for the job market and qualify for entry-level placement through Zion Tech Hub's Talent Network.",
        },

        "financial data analytics": {
            basic:
                "Turn financial data into useful insights through practical training, real-world financial datasets and hands-on analytics projects.",

            global:
                "Build practical Financial Data Analytics skills, prepare for the job market and qualify for entry-level placement through Zion Tech Hub's Talent Network.",
        },

        "data-analytics": {
            basic:
                "Build practical Data Analytics skills by working with real-world datasets, solving analytical problems and creating projects you can demonstrate.",

            global:
                "Build practical Data Analytics skills, develop a job-ready portfolio and prepare for employment through Zion Tech Hub's Talent Network.",
        },

        "ai-ml-engineering": {
            basic:
                "Build practical AI and Machine Learning Engineering skills through guided training, hands-on projects and practical assignments.",

            global:
                "Build practical AI and Machine Learning Engineering skills, prepare for career opportunities and access support through Zion Tech Hub's Talent Network.",
        },
        "data-science and ai": {
            basic:
                "Build practical Data Science skills through guided training, hands-on projects and practical assignments.",

            global:
                "Build practical Data Science skills, prepare for career opportunities and access support through Zion Tech Hub's Talent Network.",
        },
    };

    const currentTrack =
        trackNames[activeTab] || activeTab;

    const descriptions =
        trackDescriptions[activeTab] || {
            basic:
                "Build practical, job-ready skills through guided training, hands-on projects and industry-focused learning.",

            global:
                "Build practical skills, prepare for the job market and access career support through Zion Tech Hub's Talent Network.",
        };

    const selectedTrackDetails = trackPlanDetails[activeTab];

    const plans = [
        {
            key: "basic",
            label: "Standard Track",

            // IMPORTANT: everything comes directly from BASIC
            title: selectedTrackDetails?.basic?.title || "Basic Plan",

            description:
                selectedTrackDetails?.basic?.description ||
                descriptions.basic,

            price:
                selectedTrackDetails?.basic?.price || "$110",

            naira:
                selectedTrackDetails?.basic?.naira || "₦165,000",

            duration:
                selectedTrackDetails?.basic?.duration ||
                "15-week structured training",

            benefitsTitle:
                selectedTrackDetails?.basic?.benefitsTitle ||
                `${currentTrack} — Basic Benefits`,

            benefits:
                selectedTrackDetails?.basic?.benefits || [],

            cta:
                selectedTrackDetails?.basic?.cta ||
                `ENROLL IN ${currentTrack.toUpperCase()}`,
        },

        {
            key: "global",
            label: "Global Talent Plan",

            // IMPORTANT: everything comes directly from GLOBAL
            title: selectedTrackDetails?.global?.title || "Global Talent",

            description:
                selectedTrackDetails?.global?.description ||
                descriptions.global,

            price:
                selectedTrackDetails?.global?.price || "$500",

            naira:
                selectedTrackDetails?.global?.naira || "₦750,000",

            duration:
                selectedTrackDetails?.global?.duration ||
                "15-week training + career preparation",

            benefitsTitle:
                selectedTrackDetails?.global?.benefitsTitle ||
                `${currentTrack} — Global Talent Benefits`,

            benefits:
                selectedTrackDetails?.global?.benefits || [],

            cta:
                selectedTrackDetails?.global?.cta ||
                "JOIN GLOBAL TALENT",

            badge:
                selectedTrackDetails?.global?.badge ||
                "Career Accelerator",

            placementCondition:
                selectedTrackDetails?.global?.placementCondition ||
                "Placement eligibility requires successful completion of the required training, projects, assignments and program requirements.",
        },
    ];

    return (
        <section className="mx-auto w-full max-w-6xl px-3 py-4 sm:px-5">
            <div className="flex itc justify-center w-full">
                <div className="mb-3 inline-flex items-center rounded-full border border-[#DCE8FF] bg-[#F5F8FF] px-3 py-1.5 w-fit mx-auto">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#034FE3]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#034FE3]">
                        Step 2 of 2
                    </span>
                </div>
            </div>
            {/* HEADER */}
            <div className="mb-6 flex items-center justify-center gap-2">

                <button
                    type="button"
                    onClick={() => setStep((prev) => prev - 1)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#344054] transition hover:border-[#034FE3] hover:text-[#034FE3]"
                >
                    <ArrowBack fontSize="small" />
                </button>

                <div className="text-center">
                    <h2 className="text-[20px] font-bold tracking-[-0.02em] text-[#101828] sm:text-[26px]">
                        Step 2: Choose Your Learning Package
                    </h2>

                    <p className="mt-1 text-[11px] text-[#667085] sm:text-[13px]">
                        Select the learning package that matches your goals and preferred level of support.
                    </p>
                </div>

            </div>


            {/* TRACK */}
            <div className="mb-4 text-center">

                <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#98A2B3]">
                    Selected Track
                </p>

                <h3 className="mt-0.5 text-[15px] font-bold text-[#101828]">
                    {currentTrack}
                </h3>

            </div>


            {/* CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {plans.map((plan) => {
                    const isSelected = selectedPackage === plan.key;

                    return (
                        <div
                            key={plan.key}
                            onClick={() => setSelectedPackage(plan.key)}
                            className={`
                    relative cursor-pointer rounded-[16px] bg-white
                    p-5 sm:p-6
                    transition-all duration-200
                    ${isSelected
                                    ? "border-2 border-[#034FE3] shadow-[0_6px_20px_rgba(3,79,227,0.07)]"
                                    : "border border-[#E4E7EC] shadow-sm hover:border-[#BFC6D0]"
                                }
                `}
                        >
                            {/* SELECTED */}
                            <div className="absolute right-4 top-4">
                                {isSelected ? (
                                    <div className="flex items-center gap-1.5">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#034FE3]">
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M5 12.5L10 17L19 7"
                                                    stroke="white"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                        <span className="text-[10px] font-semibold text-[#034FE3]">
                                            Selected
                                        </span>
                                    </div>
                                ) : (
                                    <span className="block h-6 w-6 rounded-full border-2 border-[#D0D5DD]" />
                                )}
                            </div>

                            {/* TITLE */}
                            <div className="pr-16">
                                <p
                                    className={`
                            text-[9px] font-bold uppercase tracking-[0.1em]
                            ${plan.key === "global"
                                            ? "text-[#034FE3]"
                                            : "text-[#98A2B3]"
                                        }
                        `}
                                >
                                    {plan.label}
                                </p>

                                <h3 className="mt-1 text-[23px] font-bold tracking-[-0.025em] text-[#101828]">
                                    {plan.title}
                                </h3>
                            </div>

                            {/* BADGE */}
                            {plan.badge && (
                                <span className="mt-2 inline-flex rounded-full bg-[#EEF4FF] px-2.5 py-1 text-[9px] font-semibold text-[#034FE3]">
                                    {plan.badge}
                                </span>
                            )}

                            {/* DESCRIPTION */}
                            <p className="mt-3 text-[11px] leading-[1.55] text-[#667085]">
                                {plan.description}
                            </p>

                            {/* PRICE */}
                            <div className="mt-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[32px] font-bold leading-none tracking-[-0.04em] text-[#101828]">
                                        {plan.price}
                                    </span>

                                    <span className="text-[10px] text-[#98A2B3]">
                                        / {plan.naira}
                                    </span>
                                </div>

                                <p className="mt-1 text-[9px] text-[#98A2B3]">
                                    {plan.duration}
                                </p>
                            </div>

                            {/* DIVIDER */}
                            <div className="my-4 border-t border-[#EEF1F5]" />

                            {/* BENEFITS TITLE */}
                            {plan.benefitsTitle && (
                                <p className="mb-3 text-[10px] font-bold text-[#344054]">
                                    {plan.benefitsTitle}
                                </p>
                            )}

                            {/* BENEFITS */}
                            <div className="space-y-2.5">
                                {plan.benefits.map((benefit, index) => {
                                    const isLastBenefit = index === plan.benefits.length - 1;

                                    return (
                                        <div
                                            key={benefit}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="mt-[1px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D9F8E8]">
                                                <svg
                                                    width="8"
                                                    height="8"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M5 12.5L10 17L19 7"
                                                        stroke="#168653"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span
                                                className={`text-[10px] leading-4 text-[#667085] ${isLastBenefit
                                                    ? "font-extrabold uppercase text-black"
                                                    : ""
                                                    }`}
                                            >
                                                {benefit}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* PLACEMENT CONDITION */}
                            {plan.placementCondition && (
                                <div className="mt-4 rounded-lg border border-[#E4E7EC] bg-[#F8FAFC] px-3 py-2.5">
                                    <p className="text-[9px] leading-4 text-[#667085]">
                                        <span className="font-semibold text-[#475467]">
                                            Placement condition:
                                        </span>{" "}
                                        {plan.placementCondition}
                                    </p>
                                </div>
                            )}

                            {/* CTA */}
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();

                                    if (isSelected) {
                                        setStep((prev) => prev + 1);
                                    } else {
                                        setSelectedPackage(plan.key);
                                    }
                                }}
                                className={`
                        mt-5 flex h-11 w-full items-center justify-center
                        rounded-lg text-[11px] font-semibold
                        transition-all duration-200
                        ${isSelected
                                        ? "bg-[#034FE3] text-white hover:bg-[#023DB0]"
                                        : "border border-[#D0D5DD] bg-white text-[#034FE3] hover:border-[#034FE3] hover:bg-[#F5F8FF]"
                                    }
                    `}
                            >
                                {isSelected
                                    ? "Selected — Scroll down to proceed"
                                    : plan.cta || `Select ${plan.title}`}
                            </button>
                        </div>
                    );
                })}
            </div>


            {/* SELECTED PACKAGE */}
            {selectedPackage && (
                <div className="mt-4 flex justify-center">
                    <div className="flex items-center gap-1.5 rounded-full border border-[#DCE8FF] bg-[#F5F8FF] px-3 py-1.5">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#034FE3]">
                            <svg
                                width="8"
                                height="8"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5 12.5L10 17L19 7"
                                    stroke="white"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>

                        <span className="text-[9px] text-[#667085]">
                            Selected package:
                        </span>

                        <span className="text-[9px] font-bold text-[#034FE3]">
                            {plans.find((plan) => plan.key === selectedPackage)?.title ||
                                selectedPackage}
                        </span>
                    </div>
                </div>
            )}

        </section>
    );
}

export default Packages;