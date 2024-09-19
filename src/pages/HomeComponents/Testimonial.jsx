import React from "react";
import PopularCourseslib from "../../lib/PopularCourses";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function Testimonial() {
  return (
    <div className=" relative pb-[150px] ">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[10px] -left-[1.5px]"></span>
      <div className=" px-2  pb-[69px]">
        <p className=" font-[600] sm:text-[48px] text-[36px] w-[265px] sm:w-fulls text-[#333]">
          <span className=" text-[#034FE3]">See the results</span> of our
          training
        </p>
        <div className=" flex sm:flex-row flex-col sm:items-center max-w-[80%] mr-auto sm:justify-between items-start justify-start sm:gap-0 gap-[24px]">
          <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
            See what others are achieving through learning with us.{" "}
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
        <div className=" relative flex w-[3600px] sm:gap-[24px] gap-[20px] overflow-scroll  pr-[10px]">
          {PopularCourseslib.map((course) => (
            <img
              className=" sm:w-[445px] sm:h-[445px] w-[344px] h-[344px] object-cover"
              src={course.img}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
