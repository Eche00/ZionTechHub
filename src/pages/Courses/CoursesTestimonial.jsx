import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React from "react";
import Testimonials from "../../lib/Testimonial";

function CoursesTestimonial() {
  return (
    <div className=" relative pb-[150px] ">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[6px] -left-[1.5px]"></span>
      <div className=" px-[20px]  pb-[69px]">
        <p className=" font-[600] sm:text-[48px] text-[36px] text-[#333] w-[255px] sm:w-full">
          <span className=" text-[#034FE3]">What our learners</span> have to say
        </p>
        <div className=" flex items-center sm:max-w-[80%] mr-auto justify-between">
          <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
            Why people choose Zion Tech Hub for their career
          </p>
          <section className=" sm:flex hidden items-center justify-center gap-[10px] ">
            <span className=" border   text-gray-500 rounded-full p-2">
              <ArrowBack />
            </span>
            <span className="bg-[#034FE30D]  text-blue-500 rounded-full p-2">
              <ArrowForward />
            </span>
          </section>
        </div>
      </div>
      <div className=" overflow-x-scroll ">
        <div className=" relative flex w-[3600px] sm:gap-[24px] gap-[20px] overflow-scroll  pr-[10px] scrollbar-hide">
          {Testimonials.map((testimonial) => (
            <img
              className=" sm:w-[445px] sm:h-[445px] w-[344px] h-[344px] object-cover"
              src={testimonial.image}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesTestimonial;
