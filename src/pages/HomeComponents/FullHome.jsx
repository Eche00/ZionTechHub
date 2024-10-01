import React from "react";
import Home from "../Home";
import Achievements from "./Achievements";
import MadeCourses from "./MadeCourses";
import Benefits from "./Benefits";
import Testimonial from "./Testimonial";
import PopularCourses from "./PopularCourses";
import NextCohort from "./NextCohort";
import Consultingsection from "./Consultingsection";
import Faqs from "./Faqs";
import Services from "./Services";

function FullHome() {
  return (
    <div className=" bg-[#F5F5F5] ">
      <Home />
      <div className=" w-full  backdrop-blur-none z-50 ">
        <div className=" flex flex-col sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%]  mx-auto border-l border-gray-300">
          <Achievements />
        </div>
        <div className=" w-full  bg-[#F5F5F5]">
          <div className=" flex flex-col sm:max-w-[94%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%] ml-auto border-l border-gray-300 ">
            <MadeCourses />
          </div>
        </div>
        <div className=" w-full  bg-[#EBECED]">
          <div className=" flex flex-col sm:max-w-[94%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%] ml-auto border-l border-gray-300  overflow-x-hidden ">
            <Services />
          </div>
        </div>
        <div className=" w-full bg-[#F5F5F5]">
          <div className=" flex flex-col sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%]  mx-auto border-l border-gray-300 ">
            <Benefits />
          </div>
        </div>
        <div className=" w-full bg-[#F5F5F5]">
          <div className=" flex flex-col sm:max-w-[94%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%] ml-auto border-l border-gray-300  overflow-x-hidden">
            <Testimonial />
            <PopularCourses />
          </div>
        </div>

        <NextCohort />
        <div className=" w-full bg-[#F5F5F5]">
          <div className=" flex flex-col sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%]  mx-auto border-l border-gray-300 ">
            <Consultingsection />
            <Faqs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullHome;
