import { ArrowForward } from "@mui/icons-material";
import React from "react";
import { Reviewimg, googlemeet, individual } from "../assets";
import { div } from "framer-motion/client";
import AboutUs from "./AboutComponents/AboutUs";
import Ourmission from "./AboutComponents/Ourmission";
import Team from "./AboutComponents/Team";
import Foundermessage from "./AboutComponents/Foundermessage";
import Partners from "./AboutComponents/Partners";
import LinkedlnProfile from "./AboutComponents/LinkedlnProfile";
import ContactUs from "./AboutComponents/ContactUs";
import Faqs from "./HomeComponents/Faqs";

function About() {
  return (
    <div className=" w-full flex flex-col bg-[#F5F5F5]">
      <div className=" pt-[130px]    bg-[linear-gradient(to_right,#4f4f4f0e_1px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_1px,transparent_0.1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] overflow-hidden  sm:h-[100vh]  flex  items-center  w-full">
        <div className=" w-[90%] mx-auto flex sm:flex-row flex-col justify-between  sm:gap-0 gap-[50px]">
          <div className=" flex-1   flex flex-col justify-end sm:pt-0 pt-[80px]">
            <div className=" flex flex-col gap-[24px]">
              <p className=" sm:text-[14px] text-[12px]  font-[400] py-[10px] sm:px-[24px] px-[14px] border rounded-full w-fit ">
                SEE YOU AT THE TOP!
              </p>
              <h1 className=" text-[#1A1A1A] font-[700] sm:text-[64px] text-[40px] sm:w-full w-[320px] sm:whitespace-nowrap">
                Who We Are -<span className=" text-[#034FE3]"> Our Story</span>
              </h1>
              <p className=" text-[#1A1A1A] font-[300] sm:text-[24px] text-[18px] sm:w-[712px] w-[325px]">
                Our philosophy is simple; train great people and recommended
                them to great companies to do their best work.
              </p>
              <p className=" text-[#1A1A1A66] font-[300] text-[20px]  items-center gap-[12px]  sm:flex hidden">
                Live on{" "}
                <img
                  className=" w-[193px] h-[35px] object-cover"
                  src={googlemeet}
                  alt=""
                />
              </p>
            </div>
            <div className=" flex gap-[24px] pt-[70px]">
              <button className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white sm:py-[20px] sm:px-[36px] py-[12px] px-[24px] sm:text-[18px] text-[16px] font-[500]">
                Enroll for the next cohort
                <ArrowForward />
              </button>
            </div>
          </div>
          <div className=" flex-1 flex  items-center justify-center">
            <div className=" flex  sm:gap-[17px] gap-[10px]">
              <img
                className=" sm:w-[268px] sm:h-[464px]  w-[154px] h-[267px] object-cover  rounded-[10px]"
                src={Reviewimg}
                alt=""
              />
              <section className=" flex flex-col sm:gap-[17px] gap-[10px]">
                <img
                  className=" sm:w-[334px] sm:h-[286px]  w-[192px] h-[165px] object-cover rounded-[10px]"
                  src={Reviewimg}
                  alt=""
                />
                <img
                  className=" sm:w-[334px] sm:h-[162px]  w-[192px] h-[93px] object-cover rounded-[10px]"
                  src={Reviewimg}
                  alt=""
                />
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-[#F5F5F5]">
        <div>
          <div className=" flex flex-col sm:max-w-[88%] max-w-[92%] mx-auto border-l border-gray-300 ">
            <AboutUs />
            <Ourmission />
          </div>

          <div className=" flex flex-col sm:max-w-[94%] max-w-[96%] ml-auto border-l border-gray-300  ">
            <Team />
          </div>
          <div className=" flex flex-col sm:max-w-[88%] max-w-[92%] mx-auto border-l border-gray-300 ">
            <Foundermessage />
          </div>

          <div className=" flex flex-col sm:max-w-[94%] max-w-[96%] ml-auto border-l border-gray-300 ">
            <Partners />
          </div>
          <div className=" w-full  bg-[#EBECED]">
            <div className=" sm:max-w-[94%] max-w-[96%] ml-auto border-l border-gray-300 ">
              <LinkedlnProfile />
            </div>
          </div>

          <div className=" flex flex-col sm:max-w-[88%] max-w-[92%] mx-auto border-l border-gray-300 ">
            <ContactUs />
          </div>

          <div className=" flex flex-col sm:max-w-[88%] max-w-[92%] mx-auto border-l border-gray-300  ">
            <Faqs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
