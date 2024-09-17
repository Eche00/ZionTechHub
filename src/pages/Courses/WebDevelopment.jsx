import { ArrowForward, Star } from "@mui/icons-material";
import React from "react";
import { Reviewimg, enterprice, individual, startups } from "../../assets";
import Faqs from "../HomeComponents/Faqs";
import CoursesTestimonial from "./CoursesTestimonial";
import ExpectWeb from "../../lib/Expectweb";
import Webcontent from "./Content/Webcontent";

function WebDevelopment() {
  const dot = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none">
      <g clip-path="url(#clip0_841_1900)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.852Z"
          fill="#034FE3"
        />
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
      {" "}
      <div className=" pt-[130px]    bg-[linear-gradient(to_right,#4f4f4f0e_1px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_1px,transparent_0.1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]   sm:h-[100vh]   w-full">
        <div className=" w-[90%] mx-auto flex justify-between   py-[100px]">
          <div className=" flex-1   flex flex-col justify-end">
            <div className=" flex flex-col gap-[24px]">
              <p className=" text-[14px]  font-[400] py-[10px] px-[24px] border rounded-full w-fit ">
                TRAINING & CONSULTATION
              </p>
              <h1 className=" text-[#1A1A1A] font-[700] text-[64px] whitespace-nowrap">
                Website <span className=" text-[#034FE3]">Development</span>
              </h1>
              <p className=" text-[#1A1A1A] font-[300] text-[16px]">
                Get to know your tutors, understand the role of web development,
                <br /> and of the data web development process.
              </p>
              <p className=" text-[#1A1A1A66] font-[300] text-[20px] flex items-center gap-[12px] ">
                Live on{" "}
                <img
                  className=" w-[193px] h-[35px] object-cover"
                  src={individual}
                  alt=""
                />
              </p>
            </div>
            <div className=" flex gap-[24px] pt-[70px]">
              <button className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white py-[20px] px-[36px] text-[18px] font-[500]">
                Enroll for the next cohort
                <ArrowForward />
              </button>
            </div>
          </div>
          <div className=" flex-1 flex justify-end">
            <div className=" flex flex-col  gap-[34px]  bg-[#F1F1F1] rounded-[10px] p-[23px] shadow-lg">
              <div className=" grid grid-cols-3 gap-x-[31.6px] gap-y-[19.25px]">
                <img
                  className=" w-[146.64px] h-[146.64px] rounded-[10px]"
                  src={Reviewimg}
                  alt=""
                />
                <img
                  className=" w-[146.64px] h-[146.64px] rounded-[10px]"
                  src={Reviewimg}
                  alt=""
                />
                <img
                  className=" w-[146.64px] h-[146.64px] rounded-[10px]"
                  src={Reviewimg}
                  alt=""
                />
                <img
                  className=" w-[146.64px] h-[146.64px] rounded-[10px]"
                  src={Reviewimg}
                  alt=""
                />
                <img
                  className=" w-[146.64px] h-[146.64px] rounded-[10px]"
                  src={Reviewimg}
                  alt=""
                />
                <img
                  className=" w-[146.64px] h-[146.64px] rounded-[10px]"
                  src={Reviewimg}
                  alt=""
                />
              </div>
              <div className=" flex gap-[24px] p-[20px] items-center justify-center">
                <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                  {" "}
                  <img
                    className="w-[24px] h-[24px]  rounded-full object-cover"
                    src={Reviewimg}
                    alt=""
                  />
                </section>
                <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                  {" "}
                  <img
                    className="w-[24px] h-[24px]  rounded-full object-cover"
                    src={Reviewimg}
                    alt=""
                  />
                </section>
                <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                  {" "}
                  <img
                    className="w-[24px] h-[24px]  rounded-full object-cover"
                    src={Reviewimg}
                    alt=""
                  />
                </section>
                <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                  {" "}
                  <img
                    className="w-[24px] h-[24px]  rounded-full object-cover"
                    src={Reviewimg}
                    alt=""
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-around items-center  max-w-[80%] mx-auto my-[20px] text-[24px] font-[400] text-[#1A1A1A] bg-[#EBECED] rounded-[10px] py-[36px]">
          <section className=" flex flex-col">
            <h3 className="text-[24px] font-[600] text-[#1A1A1A] flex gap-[8px] items-center">
              <span className=" text-[#034FE3] ">
                <Star />
              </span>{" "}
              4.8
            </h3>
            <p className="text-[16px] font-[300] text-[#1A1A1A] flex gap-[8px]">
              (75,765 reviews)
            </p>
          </section>
          <span className=" bg-[#034FE3] w-[1px] h-[44px]"></span>{" "}
          <section className=" flex flex-col">
            <h3 className="text-[24px] font-[600] text-[#1A1A1A] flex gap-[8px] items-center">
              Frontend: 6 months
            </h3>
            <p className="text-[16px] font-[300] text-[#1A1A1A] flex gap-[8px]">
              24 weeks intensive training
              <br /> with seasoned experts
            </p>
          </section>
          <span className=" bg-[#034FE3] w-[1px] h-[44px]"></span>{" "}
          <section className=" flex flex-col">
            <h3 className="text-[24px] font-[600] text-[#1A1A1A] flex gap-[8px] items-center">
              Backend: 6 months
            </h3>
            <p className="text-[16px] font-[300] text-[#1A1A1A] flex gap-[8px]">
              24 weeks intensive training
              <br /> with seasoned experts
            </p>
          </section>
          <span className=" bg-[#034FE3] w-[1px] h-[44px]"></span>{" "}
          <section className=" flex flex-col">
            <h3 className="text-[24px] font-[600] text-[#1A1A1A] flex gap-[8px] items-center">
              Earn a certificate
            </h3>
            <p className="text-[16px] font-[300] text-[#1A1A1A] flex gap-[8px]">
              Earn a career credential that <br /> demonstrates your expertise
            </p>
          </section>
        </div>
      </div>
      {/* component 2 */}
      <div className="">
        {/* what to expect */}
        <div className=" pt-[180px]  max-w-[88%] mx-auto border-l border-gray-200 relative">
          <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[199px] -left-[1.5px]"></span>
          <div className=" px-2 ">
            <p className=" font-[600] text-[48px] text-[#333]">
              <span className=" text-[#034FE3]">What </span>to expect
            </p>
          </div>
          <div className="flex flex-wrap py-[68px] gap-y-[68px] gap-x-[48px]">
            {ExpectWeb.map((expect) => (
              <section className=" flex gap-[14px] py-[48px] px-[36px] items-baseline bg-[#EBECED] rounded-[10px]">
                <span>{dot}</span>
                <p className="font-[600] text-[20px] text-[#1A1A1ACC] w-[298px] h-[165px]">
                   {" "}
                  <span className="text-[#034FE3] ">
                    {expect.headmsg} <br />
                  </span>
                  {expect.message}
                </p>
              </section>
            ))}
          </div>
        </div>
        {/* skills to gain */}
        <div className=" py-[160px] max-w-[88%] mx-auto border-l border-gray-200 relative">
          <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[179px] -left-[1.5px]"></span>
          <div className=" px-2 ">
            <p className=" font-[600] text-[48px] text-[#333]">
              <span className=" text-[#034FE3]">Skills </span>you'll gain
            </p>
            <p className=" text-[18px] font-[300] text-[#1A1A1ACC]">
              We offer amazing services crafted specially for you here at zion
              tech hub.
            </p>
          </div>
          <div className="flex flex-wrap py-[68px] gap-[32px] w-[1292px] px-[20px]">
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED] rounded-[10px]">
              Front-End Development
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED] rounded-[10px]">
              Back-End Development
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED] rounded-[10px]">
              Database Management
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED] rounded-[10px]">
              Web Design Principles
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED] rounded-[10px]">
              Version Control
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED] rounded-[10px]">
              Responsive Design
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED] rounded-[10px]">
              Development Tools
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED] rounded-[10px]">
              Frameworks and Libraries
            </p>
          </div>
        </div>
        {/* details to know */}
        <div className=" pb-[180px] max-w-[88%] mx-auto border-l border-gray-200 relative">
          <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[19px] -left-[1.5px]"></span>
          <div className=" px-2 ">
            <p className=" font-[600] text-[48px] text-[#333]">
              <span className=" text-[#034FE3]">Details </span>to know
            </p>
            <p className=" text-[18px] font-[300] text-[#1A1A1ACC]">
              <b className=" text-[#1A1A1ACC]">Shareable certificate</b> - Add
              to your LinkedIn profile
            </p>
          </div>
          <div className="flex  py-[68px] gap-[94px] ">
            <section className=" w-fit p-[52px] bg-[#EBECED] rounded-[10px]">
              <img
                className=" w-[448.09px] h-[315.19px] object-cover "
                src={Reviewimg}
                alt=""
              />
            </section>
            <section className=" w-fit p-[52px] bg-[#EBECED] rounded-[10px]">
              <img
                className=" w-[448.09px] h-[315.19px] object-cover "
                src={Reviewimg}
                alt=""
              />
            </section>
          </div>
        </div>
        {/* course content */}
        <div className=" flex flex-col max-w-[88%] mx-auto border-l border-gray-300 ">
          <Webcontent />
        </div>

        <div className=" flex flex-col max-w-[94%] ml-auto border-l border-gray-300  overflow-x-hidden">
          <CoursesTestimonial />
        </div>
        <div className=" flex flex-col max-w-[88%] mx-auto border-l border-gray-300 ">
          <Faqs />
        </div>
      </div>
    </div>
  );
}

export default WebDevelopment;
