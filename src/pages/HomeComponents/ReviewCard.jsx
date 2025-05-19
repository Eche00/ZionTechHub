import React from "react";

function ReviewCard({ review }) {
  return (
    <div
      className=" flex flex-col rounded-[10px] w-fit p-[24px] bg-black/5 backdrop-blur-lg z-50  gap-[14px]  my-1"
      key={review.img}>
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
    </div>
  );
}

export default ReviewCard;
