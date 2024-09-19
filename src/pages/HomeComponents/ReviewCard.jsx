import { ArrowForward } from "@mui/icons-material";
import React from "react";

function ReviewCard({ review }) {
  return (
    <div className=" flex flex-col rounded-[10px] w-fit p-[24px] bg-black/5 backdrop-blur-lg z-50  gap-[14px]  my-1">
      <div className=" flex gap-[14px] sm:w-[427px] w-[348px]">
        <img
          className=" sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] rounded-full object-cover"
          src={review.img}
          alt=""
        />
        <p className=" text-[12px] sm:text-[16px] text-[#1A1A1A] font-[400] sm:w-[363px] w-[270px] ">
          {" "}
          {review.message}
        </p>
      </div>
      <div className=" flex w-full items-start">
        <button className=" sm:px-[62px] px-[42px] py-[6px] text-center sm:text-[14px] text-[12px] font-[500] text-[#1A1A1A] gap-[8px] flex items-center">
          see review{" "}
          <span className=" sm:hidden flex">
            <ArrowForward fontSize="" />
          </span>
          <span className=" sm:flex hidden">
            <ArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;
