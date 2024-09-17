import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React from "react";
import PopularCourseslib from "../../lib/PopularCourses";

function CoursesTestimonial() {
  return (
    <div className=" relative pb-[150px] ">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[19px] -left-[1.5px]"></span>
      <div className=" px-2  pb-[69px]">
        <p className=" font-[600] text-[48px] text-[#333]">
          <span className=" text-[#034FE3]">What our learners</span> have to say
        </p>
        <div className=" flex items-center max-w-[80%] mr-auto justify-between">
          <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
            Why people choose Zion Tech Hub for their career
          </p>
          <section className=" flex items-center justify-center gap-[10px]">
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
        <div className=" relative flex w-[3600px] gap-[24px] overflow-scroll  pr-[10px]">
          {PopularCourseslib.map((course) => (
            <img
              className=" w-[445px] h-[445px] object-cover"
              src={course.img}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesTestimonial;
