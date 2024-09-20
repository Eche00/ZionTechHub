import React from "react";
import PopularCourseslib from "../../lib/PopularCourses";
import Coursecard from "./Coursecard";

function PopularCourses() {
  return (
    <div className=" relative pb-[150px] ">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[10px] -left-[1.5px]"></span>
      <div className=" px-[20px]  pb-[69px]">
        <p className=" font-[600] sm:text-[48px] text-[36px] sm:w-full w-[265px] text-[#333]">
          <span className=" text-[#034FE3]">Our popular</span> courses
        </p>
        <p className=" sm:text-[18px] text-[16px] font-[300] text-[#1A1A1A66]">
          Highest rated and sort after trainings.
        </p>
      </div>
      <div className=" overflow-x-scroll ">
        <div className=" relative flex sm:w-[3600px] w-[1500px] gap-[36px] overflow-scroll  pr-[10px]">
          {PopularCourseslib.map((course) => (
            <Coursecard key={course.message} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
