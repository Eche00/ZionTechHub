import React from 'react'
import { Classeshome, Joinhome, Registerhome } from "../../assets";

function JoinWhatsapp() {
    return (
        <div className="relative pt-[80px] pb-[70px]">
            {/* Accent line */}
            <span className="w-[3px] h-[36px] bg-[#034FE3] absolute sm:top-[99px] top-[85px] -left-[1.5px]" />

            {/* Header */}
            <div className="px-[20px] sm:w-full w-[300px]">
                <p className="font-[600] sm:text-[48px] text-[32px] text-[#333] leading-[1.15]">
                    <span className="text-[#034FE3]">
                        Connect and Learn <br /> with other
                    </span>{" "}
                    data professionals
                </p>

                <p className="mt-4 sm:text-[18px] text-[16px] font-[300] text-[#1A1A1A66] max-w-[700px] leading-[1.6]">
                    Our trainings and courses are carefully designed and tailored to
                    meet your learning and career needs.
                </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="mx-[20px] mt-10 overflow-hidden rounded-[18px] bg-[#F5F8FF]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-5 sm:p-7">

                    {/* Image */}
                    <div className="hidden sm:block w-[180px] h-[140px] shrink-0 overflow-hidden rounded-[12px]">
                        <img
                            src={Registerhome}
                            alt="Data professionals learning together"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                            <span className="text-[13px] font-[500] text-[#25D366]">
                                Join our community
                            </span>
                        </div>

                        <h3 className="text-[#333] text-[21px] sm:text-[24px] font-[600]">
                            Connect. Learn. Grow.
                        </h3>

                        <p className="mt-2 text-[14px] sm:text-[15px] text-[#1A1A1A99] leading-[1.6] max-w-[580px]">
                            Join our WhatsApp community and connect with learners,
                            data professionals, and industry enthusiasts. Get updates,
                            share ideas, ask questions, and learn together.
                        </p>
                    </div>

                    {/* Button */}
                    <a
                        href="YOUR_WHATSAPP_COMMUNITY_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-[#034FE3] hover:bg-[#0242BE] text-white text-[14px] font-[500] px-5 py-3 rounded-[8px] transition-colors duration-200"
                    >
                        Join WhatsApp
                        <span className="text-[17px]">→</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JoinWhatsapp