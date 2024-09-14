import { ArrowForward } from "@mui/icons-material";
import React from "react";

function ReviewCard({ review }) {
  return (
    <div className=" flex flex-col rounded-[10px] w-fit p-[24px] bg-black/5 backdrop-blur-lg z-50  gap-[14px]  my-1">
      <div className=" flex gap-[14px] w-[427px]">
        <img
          className=" w-[50px] h-[50px] rounded-full object-cover"
          src={review.img}
          alt=""
        />
        <p className=" text-[16px] text-[#1A1A1A] font-[400]">
          {" "}
          {review.message}
        </p>
      </div>
      <div className=" flex w-full items-start">
        <button className=" px-[62px] py-[6px] text-center text-[14px] font-[500] text-[#1A1A1A] gap-[8px]">
          see review{" "}
          <span>
            <ArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;
