import React from "react";
import PopularCourseslib from "../../lib/PopularCourses";
import Coursecard from "./Coursecard";

function PopularCourses() {
  return (
    <div className=" relative pb-[150px] ">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[19px] -left-[1.5px]"></span>
      <div className=" px-2  pb-[69px]">
        <p className=" font-[600] text-[48px] text-[#333]">
          <span className=" text-[#034FE3]">Our popular</span> courses
        </p>
        <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
          Highest rated and sort after trainings.
        </p>
      </div>
      <div className=" overflow-x-scroll ">
        <div className=" relative flex w-[3600px] gap-[36px] overflow-scroll  pr-[10px]">
          {PopularCourseslib.map((course) => (
            <Coursecard key={course.message} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
