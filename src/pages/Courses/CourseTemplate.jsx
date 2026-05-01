import { ArrowForward, Star } from "@mui/icons-material";
import React from "react";
import {
    certificate1,
    certificate2,
    googlemeet,
} from "../../assets";
import CoursesTestimonial from "./CoursesTestimonial";
import Faqs from "../HomeComponents/Faqs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function CourseTemplate({ 
    courseTitle, 
    courseSubtitle, 
    courseDescription,
    courseImages,
    courseModules,
    skillsToGain,
    targetAudience,
    courseOverview,
    courseIcon,
    metaTitle,
    metaDescription,
    duration,
    courseColor = "#034FE3" 
}) {
    const dot = (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_841_1900)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.852Z" fill={courseColor} />
            </g>
            <defs>
                <clipPath id="clip0_841_1900">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    return (
        <div className="bg-[#F5F5F5]">
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>
            <span className="md:h-[104px] md:w-[104px] h-[50px] w-[50px] bg-[#034FE30D] absolute md:top-[50px] md:right-[640px] top-[134px] right-[60px]"></span>
            <span className="md:h-[104px] md:w-[104px] w-[50px] h-[50px] bg-[#034FE30D] absolute md:top-[350px] md:left-[314px] top-[282px] left-0"></span>
            
            {/* Hero Section */}
            <div className="bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] smm:h-[78vh] sm:h-[90vh] w-full border-b">
                <motion.div
                    initial={{ opacity: 0.45 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="w-[90%] mx-auto flex justify-between py-[70px] md:flex-row flex-col items-center">
                    <div className="flex-1 flex flex-col justify-end">
                        <div className="flex flex-col gap-[24px]">
                            <p className="sm:text-[14px] text-[12px] font-[400] py-[10px] sm:px-[24px] px-[14px] border rounded-full w-fit">
                                TRAINING & CONSULTATION
                            </p>
                            <h1 className="text-[#1A1A1A] font-[700] sm:text-[64px] text-[40px] sm:w-full w-[320px] sm:leading-[130%] sm:tracking-[1.28px] leading-[120%] tracking-[0.8px]">
                                {courseTitle} <span className="text-[#034FE3]">Training</span>
                            </h1>
                            <p className="text-[#1A1A1A] font-[300] sm:text-[24px] text-[18px] sm:w-full w-[335px]">
                                {courseDescription}
                            </p>
                            <p className="text-[#1A1A1A66] font-[300] text-[20px] flex items-center gap-[12px]">
                                Live on{" "}
                                <img className="w-[100px] h-[36px] object-cover" src={googlemeet} alt="" />
                            </p>
                        </div>
                        <div className="flex gap-[24px] sm:pt-[70px] pt-[36px]">
                            <Link
                                to="/enroll"
                                className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white sm:py-[20px] sm:px-[36px] py-[12px] px-[24px] sm:text-[18px] text-[16px] font-[500]">
                                Enroll for the next cohort
                                <ArrowForward />
                            </Link>
                        </div>
                    </div>
                    
                    {/* Hero Images */}
                    <div className="flex-1 flex justify-end sm:pt-0 pt-10">
                        <div className="flex flex-col sm:gap-[34px] gap-[20px] bg-[#F1F1F1] rounded-[10px] sm:p-[23px] p-[10px] shadow-lg">
                            <div className="grid grid-cols-3 sm:gap-x-[31.6px] sm:gap-y-[19.25px] gap-x-[15px] gap-y-[12px]">
                                {courseImages.map((img, index) => (
                                    <img
                                        key={index}
                                        className="sm:w-[146.64px] sm:h-[146.64px] w-[97px] h-[97px] rounded-[10px] object-cover"
                                        src={img}
                                        alt={`${courseTitle} ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="flex sm:gap-[24px] gap-[12px] p-[20px] items-center justify-center">
                                {courseIcon}
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                {/* Course Info */}
                <div className="flex sm:flex-row flex-col justify-around sm:items-center smm:max-w-[80%] sm:max-w-[88%] max-w-[90%] mx-auto text-[24px] font-[400] text-[#1A1A1A] bg-[#EBECED] rounded-[10px] py-[36px] sm:px-0 px-[40px] sm:gap-0 gap-[24px] shadow-2xl">
                    <section className="flex flex-col">
                        <h3 className="text-[24px] font-[600] text-[#1A1A1A] flex gap-[8px] items-center">
                            <span className="text-[#034FE3]"><Star /></span>
                            4.8
                        </h3>
                        <p className="text-[16px] font-[300] text-[#1A1A1A]">(75,000+ learner reviews)</p>
                    </section>
                    <span className="sm:bg-[#034FE3] sm:w-[1px] sm:h-[44px] h-[0px] sm:border-none border border-dashed border-[#034FE34D]" />
                    
                    <section className="flex flex-col">
                        <h3 className="text-[24px] font-[600] text-[#1A1A1A]">Course Overview</h3>
                        <p className="text-[16px] font-[300] text-[#1A1A1A]">{courseOverview}</p>
                    </section>
                    <span className="sm:bg-[#034FE3] sm:w-[1px] sm:h-[44px] h-[0px] sm:border-none border border-dashed border-[#034FE34D]" />
                    
                    {/* Program Duration Section */}
                    <section className="flex flex-col">
                        <h3 className="text-[24px] font-[600] text-[#1A1A1A]">
                            Program Duration
                        </h3>
                        <p className="text-[16px] font-[300] text-[#1A1A1A]">
                            {duration || "8-12 Weeks"} comprehensive training program
                        </p>
                    </section>
                    <span className="sm:bg-[#034FE3] sm:w-[1px] sm:h-[44px] h-[0px] sm:border-none border border-dashed border-[#034FE34D]" />
                    
                    <section className="flex flex-col">
                        <h3 className="text-[24px] font-[600] text-[#1A1A1A]">Earn a certificate</h3>
                        <p className="text-[16px] font-[300] text-[#1A1A1A]">Showcase verified {courseTitle.toLowerCase()} expertise</p>
                    </section>
                </div>
            </div>
            
            {/* What to Expect Section */}
            <div className="sm:pt-[310px] pt-[180px] smm:max-w-[80%] sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-gray-200 relative">
                <span className="h-[100px] w-[100px] bg-[#EBECED] border-[1px] border-[#034FE30D] absolute top-[280px] right-[100px] md:flex hidden"></span>
                <span className="h-[100px] w-[100px] bg-[#EBECED] border-[1px] border-[#034FE30D] absolute top-[180px] right-[0px] md:flex hidden"></span>
                <span className="w-[3px] h-[36px] bg-[#034FE3] absolute sm:top-[329px] top-[185px] -left-[1.5px]"></span>
                <div className="px-[20px]">
                    <p className="font-[600] sm:text-[48px] text-[32px] text-[#333]">
                        <span className="text-[#034FE3]">What </span>to expect
                    </p>
                </div>
                <div className="flex flex-wrap py-[68px] sm:gap-y-[68px] sm:gap-x-[48px] gap-y-[24px] lg:gap-x-[5px]">
                    {courseModules.map((module, index) => (
                        <section key={index} className="flex md:gap-[14px] gap-[5px] sm:py-[48px] py-[36px] sm:px-[36px] lg:px-[16px] px-[10px] items-baseline bg-[#EBECED] rounded-[10px]">
                            <span>{dot}</span>
                            <p className="font-[600] sm:text-[20px] text-[16px] text-[#1A1A1ACC] w-[298px] h-[165px]">
                                <span className="text-[#034FE3]">{module.title}<br /></span>
                                {module.description}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
            
            {/* Skills to Gain Section */}
            <div className="py-[160px] smm:max-w-[80%] sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-gray-200 relative">
                <span className="w-[3px] h-[36px] bg-[#034FE3] absolute sm:top-[179px] top-[165px] -left-[1.5px]"></span>
                <div className="px-[20px]">
                    <p className="font-[600] sm:text-[48px] text-[32px] text-[#333]">
                        <span className="text-[#034FE3]">Skills </span>you'll gain
                    </p>
                    <p className="text-[18px] whitespace-nowrap font-[300] text-[#1A1A1ACC]">
                        Skills you'll gain from training with us
                    </p>
                </div>
                <div className="flex md:flex-row md:flex-wrap flex-col py-[68px] gap-[32px] sm:w-[1292px] sm:px-[20px] px-[10px]">
                    {skillsToGain.map((skill, index) => (
                        <p key={index} className="px-[32px] py-[10px] text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED] w-fit rounded-[10px]">
                            {skill}
                        </p>
                    ))}
                </div>
            </div>
            
            {/* Who It's For Section */}
            <div className="pb-[60px] px-5 smm:max-w-[80%] sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-gray-200 relative">
                <div className="mb-[16px]">
                    <p className="font-[600] text-[24px] text-[#333]">
                        <span className="text-[#034FE3]">Who</span> It's For
                    </p>
                    <p className="text-[14px] font-[300] text-[#1A1A1ACC]">
                        Designed for individuals looking to build {courseTitle.toLowerCase()} skills
                    </p>
                </div>
                <div className="flex flex-wrap gap-[12px]">
                    {targetAudience.map((audience, index) => (
                        <span key={index} className="px-[18px] py-[6px] text-[14px] font-[500] bg-[#EBECED] rounded-[8px]">
                            {audience}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Certificate Section */}
            <div className="sm:pb-[180px] pb-[100px] smm:max-w-[80%] sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-gray-200 relative">
                <span className="w-[3px] h-[36px] bg-[#034FE3] absolute sm:top-[19px] top-[6px] -left-[1.5px]"></span>
                <div className="px-[20px]">
                    <p className="font-[600] sm:text-[48px] text-[32px] text-[#333]">
                        <span className="text-[#034FE3]">Details </span>to know
                    </p>
                    <p className="text-[18px] font-[300] text-[#1A1A1ACC]">
                        <b className="text-[#1A1A1ACC]">Shareable certificate</b> - Add to your LinkedIn profile
                    </p>
                </div>
                <div className="flex sm:flex-row flex-col py-[68px] sm:gap-[94px] gap-[36px]">
                    <section className="w-fit md:p-[52px] lg:p-[32px] p-[25px] bg-[#EBECED] rounded-[10px]">
                        <img className="sm:w-[448.09px] sm:h-[315.19px] w-[281px] h-[199px] object-cover rounded-[10px]" src={certificate1} alt="" />
                    </section>
                    <section className="w-fit md:p-[52px] lg:p-[32px] p-[25px] bg-[#EBECED] rounded-[10px]">
                        <img className="sm:w-[448.09px] sm:h-[315.19px] w-[281px] h-[199px] object-cover rounded-[10px]" src={certificate2} alt="" />
                    </section>
                </div>
            </div>
            
            {/* Testimonials and FAQs */}
            <div className="flex flex-col sm:max-w-[90%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%] ml-auto border-l border-gray-300 overflow-x-hidden">
                <CoursesTestimonial />
            </div>
            <div className="flex flex-col smm:max-w-[80%] sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-gray-300">
                <Faqs />
            </div>
        </div>
    );
}

export default CourseTemplate;
