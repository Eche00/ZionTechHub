import React from "react";
import {
  Reviewimg,
  consulthero1,
  consulthero2,
  consulthero3,
  consultprofile,
  googlemeet,
  individual,
  nigeria,
  uk,
  usa,
} from "../assets";
import { ArrowForward, Star } from "@mui/icons-material";
import Ourapproach from "./ConsultationComponent/Ourapproach";
import Overview from "./ConsultationComponent/Overview";
import ServiceOffered from "./ConsultationComponent/ServiceOffered";
import Industriesserved from "./ConsultationComponent/Industriesserved";
import { motion } from "framer-motion";
import ContactUsc from "./ConsultationComponent/AboutUsc";
import Engagement from "./ConsultationComponent/Engagement";

function Consultation() {
  return (
    <div className="bg-[#F5F5F5]">
      <span className="  md:h-[104px] md:w-[104px] h-[50px] w-[50px]   bg-[#034FE30D] absolute md:top-[50px] md:right-[640px] top-[150px] right-[60px] "></span>
      <span className="  md:h-[104px] md:w-[104px] w-[50px] h-[50px]  bg-[#034FE30D] absolute md:top-[400px] md:left-[314px] top-[300px] left-0  "></span>
      <div className=" pt-[130px]    bg-[linear-gradient(to_right,#4f4f4f0e_1px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_1px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]   sm:h-[100vh]   w-full">
        <motion.div
          initial={{ opacity: 0.45 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className=" w-[90%] mx-auto flex justify-between   py-[100px] items-center">
          <div className=" flex-1   flex flex-col justify-end ">
            <div className=" flex flex-col gap-[24px]">
              <p className=" sm:text-[14px] text-[12px]  font-[400] py-[10px] sm:px-[24px] px-[14px] border rounded-full w-fit ">
                TRAINING & CONSULTATION
              </p>
              <h1 className=" text-[#1A1A1A] font-[700] sm:text-[64px] text-[40px] sm:w-full w-[320px] sm:whitespace-nowrap sm:leading-[130%] sm:tracker-[1.28px] leading-[120%] tracker-[0.8px] whitespace-nowrap">
                Data
                <span className=" text-[#034FE3]"> Consultation </span>
              </h1>
              <p className=" text-[#1A1A1A] font-[300] sm:text-[24px] text-[18px] sm:w-[690px] w-[335px]">
                Discover how our data consultation services can transform your{" "}
                business. Explore our offerings and see why so many
                organizations trust Zion Tech Hub as their data consultation
                partner.
              </p>
              <p className=" text-[#1A1A1A66] font-[300] text-[20px] flex items-center gap-[12px] ">
                Live on{" "}
                <img
                  className=" sm:w-[193px] sm:h-[35px] w-[159px] h-[29px] object-cover"
                  src={googlemeet}
                  alt=""
                />
              </p>
            </div>
            <div className=" flex gap-[24px] sm:pt-[70px] pt-[36px]">
              <button className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white sm:py-[20px] sm:px-[36px] py-[12px] px-[24px] sm:text-[18px] text-[16px] font-[500]">
                Enroll for the next cohort
                <ArrowForward />
              </button>
            </div>
          </div>
          <div className=" flex-1 sm:flex hidden pl-[50px] items-center">
            <div className=" flex flex-col  gap-[14px]  h-fit items-end justify-center">
              <section className=" w-[180px] h-[180px] rounded-[10px] flex flex-col bg-[#D3DDCD66] px-[16px] justify-center">
                <h2 className=" text-[56px] text-[#6D9357] font-[700]">10+</h2>
                <p className=" text-[18px] text-[#6D9357] font-[300]">
                  Years of <br /> Experience
                </p>
              </section>
              <div className=" flex gap-[14px] relative">
                <section className=" flex gap-[14px] items-center bg-[#F0F0F01A] backdrop-blur-lg shadow-lg p-[10px] rounded-full absolute -left-[200px] -top-[20px]">
                  <section className=" flex flex-col">
                    <span className=" flex text-[#F7B306] justify-end">
                      <Star fontSize="medium" />
                      <Star fontSize="medium" />
                      <Star fontSize="medium" />
                      <Star fontSize="medium" />
                      <Star fontSize="medium" />
                    </span>
                    <p className=" text-[13px] text-[#1A1A1A] font-[400] pl-[15px]">
                      Based on 1,100 reviews
                    </p>
                  </section>
                  <img
                    className=" w-[60px] h-[60px] rounded-full border-[4px] border-[#FFFFFF] object-cover"
                    src={consultprofile}
                    alt=""
                  />
                </section>
                <img
                  className=" w-[180px] h-[180px] rounded-[10px] object-cover"
                  src={consulthero1}
                  alt=""
                />
                <img
                  className=" w-[180px] h-[180px] rounded-[10px] object-cover"
                  src={consulthero2}
                  alt=""
                />
              </div>
              <div className=" flex gap-[14px] relative">
                <section className=" w-[180px] h-[180px] rounded-[10px] flex flex-col bg-[#E4E8EF] px-[16px] justify-center">
                  <h2 className=" text-[56px] text-[#034FE3] font-[700]">
                    90%
                  </h2>
                  <p className=" text-[18px] text-[#034FE3] font-[300]">
                    Client <br /> Satisfaction Rate
                  </p>
                </section>
                <img
                  className=" w-[180px] h-[180px] rounded-[10px] object-cover"
                  src={consulthero3}
                  alt=""
                />
                <section className=" w-[180px] h-[180px] rounded-[10px] flex flex-col bg-[#F1D3AF66] px-[16px] justify-center">
                  <h2 className=" text-[56px] text-[#DDA249] font-[700]">
                    98%
                  </h2>
                  <p className=" text-[18px] text-[#DDA249] font-[300]">
                    Positive Client
                    <br /> Reviews
                  </p>
                </section>
                <section className=" flex gap-[14px] items-center bg-[#F0F0F01A] backdrop-blur-lg shadow-lg p-[10px] rounded-full absolute -right-[150px] -bottom-[38px]">
                  <section className="relative w-[80px] h-[40px]">
                    <img
                      className=" w-[40px] h-[40px] rounded-full absolute left-0 z-10"
                      src={usa}
                      alt=""
                    />
                    <img
                      className=" w-[40px] h-[40px] rounded-full absolute left-[25px] z-20"
                      src={uk}
                      alt=""
                    />
                    <img
                      className=" w-[40px] h-[40px] rounded-full absolute left-[50px]  z-30"
                      src={nigeria}
                      alt=""
                    />
                  </section>
                  <section className=" flex flex-col items-start">
                    <p className=" text-[18px] text-[#1A1A1A] font-[700] pr-[15px]">
                      Over 24 Countries
                    </p>
                    <p className=" text-[12px] text-[#1A1A1A] font-[300] pr-[15px]">
                      Based on 1,100 reviews
                    </p>
                  </section>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* second component */}

      <div className="">
        {/* our approach */}
        <div className="   sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%]   mx-auto border-l border-gray-200  pb-[180px]">
          <Overview />
          <ServiceOffered />
        </div>

        <div className=" w-full  bg-[#EBECED] ">
          <div className=" flex flex-col md:max-w-[94%] w-[100%] ml-auto border-l border-gray-300  overflow-x-hidden md:pb-0 pb-[100px]">
            <Industriesserved />
          </div>
        </div>
        {/* course content */}
        <div className=" flex flex-col sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%]   mx-auto border-l border-gray-300  pt-[180px]">
          <Ourapproach />
        </div>
        <div className=" w-full bg-[#F5F5F5]">
          <div className=" flex flex-col sm:max-w-[94%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%] ml-auto border-l border-gray-300  overflow-x-hidden">
            <Engagement />
          </div>
        </div>
        <div className=" flex flex-col sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%]  mx-auto border-l border-[#034FE31A] ">
          <ContactUsc />
        </div>
      </div>
    </div>
  );
}

export default Consultation;
