import { CheckCircle, InterpreterMode, SupportAgent, Work } from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react'
import StudentTestimonials from '../../lib/StudentTestimonial';

function Hero({ setStep }) {
    const controls = useAnimation();
    const dot = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none">
            <circle cx="4.00391" cy="4.5" r="4" fill="#034FE3" />
        </svg>
    );
    return (
        <div >
            {/* Dotted Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        "radial-gradient(#CBD5E1 0.8px, transparent 0.8px)",
                    backgroundSize: "9px 9px",
                }}
            />
            {/* Hero */}
            <section className='sm:w-[90%] w-full mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full"
                >
                    <section className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 sm:pt-10 lg:px-8">

                        {/*  HERO  */}
                        <div className="flex flex-col items-center text-center">

                            {/* Brand Badge */}
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#034FE3]/15 bg-[#034FE3]/5 px-4 py-2 text-[10px] font-medium tracking-[0.08em] text-[#034FE3] sm:text-xs">
                                <span className="flex h-2 w-2 items-center justify-center">
                                    {dot}
                                </span>

                                ZION TECH HUB
                            </div>


                            {/* Heading */}
                            <h1 className="mx-auto max-w-4xl text-[30px] font-bold leading-[1.12] tracking-[-0.8px] text-[#1A1A1A] sm:tracking-[-1.2px] sm:text-[54px]">
                                Go From Beginner to{" "}
                                <span className="text-[#034FE3]">
                                    Job-Ready Data Analyst
                                </span>{" "}
                                in 4 Months
                            </h1>


                            {/* Description */}
                            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-gray-600 sm:mt-5 sm:text-[17px] sm:leading-7">
                                Learn the skills employers look for, work on real-world
                                data projects, and build a portfolio that gives you
                                something concrete to land global opportunities.
                            </p>


                            {/* CTA */}
                            <div className="mt-6 flex w-full flex-col items-center justify-center gap-2.5 sm:mt-7 sm:flex-row z-50">

                                <button
                                    onClick={() => setStep(prev => prev + 1)}
                                    className="
                            flex h-11 w-full items-center justify-center
                            rounded-lg bg-[#034FE3] px-7
                            text-sm font-medium text-white
                            shadow-[0_6px_20px_rgba(3,79,227,0.16)]
                            transition-all duration-200
                            hover:bg-[#0243c4]
                            hover:shadow-[0_8px_25px_rgba(3,79,227,0.22)]
                            sm:w-auto
                        "
                                >
                                    Choose Your Track

                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="ml-2"
                                    >
                                        <path
                                            d="M5 12H19M13 6L19 12L13 18"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>


                                <button
                                    type="button"
                                    onClick={() => {
                                        document
                                            .getElementById("program-video")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                            });
                                    }}
                                    className="
                            flex h-11 w-full items-center justify-center
                            rounded-lg border border-gray-200
                            bg-white px-7 text-sm font-medium
                            text-[#1A1A1A]
                            transition-all duration-200
                            hover:border-[#034FE3]/30
                            hover:bg-gray-50
                            sm:w-auto
                        "
                                >
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="mr-2"
                                    >
                                        <path
                                            d="M8 5.5V18.5L18 12L8 5.5Z"
                                            fill="currentColor"
                                        />
                                    </svg>

                                    Watch student's experience
                                </button>

                            </div>

                        </div>

                        {/* VIDEOS */}
                        <section
                            id="program-video"
                            className="mx-auto mt-10 w-full pb-8 sm:mt-14 smm:w-[85%] sm:pb-12 "
                        >
                            {/* Section Header */}
                            <div className="mb-7 text-center">
                                <span className="inline-flex rounded-full border border-[#034FE3]/15 bg-[#034FE3]/5 px-3 py-1.5 text-[10px] font-medium tracking-wide text-[#034FE3]">
                                    HEAR FROM OUR COMMUNITY
                                </span>

                                <h2 className="mt-3 text-[24px] font-semibold text-[#333] sm:text-[30px]">
                                    Learn from their experience
                                </h2>

                                <p className="mx-auto mt-2 max-w-[550px] text-[14px] font-light leading-[1.6] text-[#1A1A1A66] sm:text-[15px]">
                                    See what our students have to say about their learning experience
                                    and journey with us.
                                </p>
                            </div>

                            {/* Videos */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                                {/* Video 1 */}
                                <div>
                                    <div className="relative overflow-hidden rounded-[16px] border border-[#034FE3]/15 bg-[#0B1220] shadow-[0_10px_35px_rgba(16,24,40,0.08)]">
                                        <div className="aspect-video w-full flex items-center justify-center">
                                            <video
                                                className="h-full w-fit object-cover"
                                                controls
                                                playsInline
                                                preload="metadata"
                                                poster="/images/program-video-poster.jpg"
                                            >
                                                <source
                                                    src="/TESTIMONIALVIDEO.mp4"
                                                    type="video/mp4"
                                                />

                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>

                                    <div className="mt-3 px-1">
                                        <h3 className="text-[15px] font-semibold text-[#333]">
                                            Student Experience
                                        </h3>

                                        <p className="mt-1 text-[13px] font-light text-[#1A1A1A66]">
                                            Hear directly from one of our students.
                                        </p>
                                    </div>
                                </div>

                                {/* Video 2 */}
                                <div>
                                    <div className="relative overflow-hidden rounded-[16px] border border-[#034FE3]/15 bg-[#0B1220] shadow-[0_10px_35px_rgba(16,24,40,0.08)]">
                                        <div className="aspect-video w-full flex items-center justify-center">
                                            <video
                                                className="h-full w-fit object-cover"
                                                controls
                                                playsInline
                                                preload="metadata"
                                                poster="/images/program-video-poster-2.jpg"
                                            >
                                                <source
                                                    src="/TESTIMONIALVIDEO2.mp4"
                                                    type="video/mp4"
                                                />

                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>

                                    <div className="mt-3 px-1">
                                        <h3 className="text-[15px] font-semibold text-[#333]">
                                            Learning Journey
                                        </h3>

                                        <p className="mt-1 text-[13px] font-light text-[#1A1A1A66]">
                                            Discover what the learning journey looks like.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </section>
                        {/*  BENEFITS  */}
                        <div className="mx-auto mt-10 max-w-5xl w-full sm:mt-12">

                            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:grid-cols-4">

                                {/* Practical Skills */}
                                <div className="border-b border-r border-gray-200 p-4 sm:p-5 lg:border-b-0">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#034FE3]/10 text-[#034FE3]">
                                        <CheckCircle fontSize="small" />
                                    </div>

                                    <h3 className="mt-3 text-[12px] font-semibold text-[#1A1A1A] sm:text-sm">
                                        Practical Skills
                                    </h3>

                                    <p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-[11px] sm:leading-5">
                                        Learn by working on real data problems.
                                    </p>
                                </div>


                                {/* Real Projects */}
                                <div className="border-b border-gray-200 p-4 sm:border-r sm:p-5 lg:border-b-0">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#034FE3]/10 text-[#034FE3]">
                                        <Work fontSize="small" />
                                    </div>

                                    <h3 className="mt-3 text-[12px] font-semibold text-[#1A1A1A] sm:text-sm">
                                        Real Projects
                                    </h3>

                                    <p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-[11px] sm:leading-5">
                                        Build projects that strengthen your portfolio.
                                    </p>
                                </div>


                                {/* Expert Mentorship */}
                                <div className="border-r border-gray-200 p-4 sm:border-b-0 sm:p-5">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#034FE3]/10 text-[#034FE3]">
                                        <InterpreterMode fontSize="small" />
                                    </div>

                                    <h3 className="mt-3 text-[12px] font-semibold text-[#1A1A1A] sm:text-sm">
                                        Expert Mentorship
                                    </h3>

                                    <p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-[11px] sm:leading-5">
                                        Get guidance throughout your learning journey.
                                    </p>
                                </div>


                                {/* Career Support */}
                                <div className="p-4 sm:p-5">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#034FE3]/10 text-[#034FE3]">
                                        <SupportAgent fontSize="small" />
                                    </div>

                                    <h3 className="mt-3 text-[12px] font-semibold text-[#1A1A1A] sm:text-sm">
                                        Career Support
                                    </h3>

                                    <p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-[11px] sm:leading-5">
                                        CV support and career opportunities.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </section>
                </motion.div>
            </section>


            {/* Testimonials */}
            <section className="bg-white relative w-full overflow-hidden mt-5 pb-5">

                {/* Dotted Background */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-50"
                    style={{
                        backgroundImage:
                            "radial-gradient(#CBD5E1 0.8px, transparent 0.8px)",
                        backgroundSize: "9px 9px",
                    }}
                />

                <div className="relative mx-auto w-[92%] max-w-[1200px]">

                    {/* Header */}
                    <div className="flex items-center justify-center">

                        <div className="flex flex-col items-center">

                            <h2 className="mt-4 text-center text-[#1A1A1A] font-[500] sm:text-[34px] text-[22px] sm:leading-[130%] leading-[120%] tracking-[0.5px]">
                                Real Stories from Cohort Graduates
                            </h2>

                            <p className="mt-2 max-w-[700px] text-gray-600 font-[300] sm:text-[16px] text-[12px] text-center leading-6">
                                See how previous students transitioned into high-paying global tech roles.
                            </p>

                        </div>

                    </div>


                    {/* Testimonials Track */}
                    <div className="relative mt-10">
                        <div
                            className="relative w-full overflow-hidden"
                            onMouseEnter={() => controls.stop()}
                            onMouseLeave={() => {
                                controls.start({
                                    x: "-50%",
                                    transition: {
                                        duration: 60,
                                        ease: "linear",
                                        repeat: Infinity,
                                        repeatType: "loop",
                                    },
                                });
                            }}
                        >
                            <motion.div
                                className="flex w-max gap-6"
                                initial={{ x: "0%" }}
                                animate={controls}
                            >
                                {[...StudentTestimonials, ...StudentTestimonials].map(
                                    (testimonial, index) => (
                                        <motion.div
                                            key={`${testimonial.image}-${index}`}
                                            className="shrink-0"
                                        >
                                            <img
                                                src={testimonial.image}
                                                alt="Student testimonial"
                                                className="
                                w-[300px] h-[300px]
                                sm:w-[445px] sm:h-[445px]
                                object-cover rounded-2xl
                            "
                                            />
                                        </motion.div>
                                    )
                                )}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Hero