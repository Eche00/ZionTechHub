import React from "react";
import { Reviewimg } from "../../assets";

function Ourmission() {
  const button = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="188"
      height="50"
      viewBox="0 0 188 50"
      fill="none">
      <rect
        y="0.442383"
        width="188"
        height="49.1156"
        rx="24.5578"
        fill="white"
      />
    </svg>
  );
  const dot = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none">
      <g clip-path="url(#clip0_841_1900)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.852Z"
          fill="#034FE3"
        />
      </g>
      <defs>
        <clipPath id="clip0_841_1900">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <div className=" relative">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[19px] -left-[1.5px]"></span>
      <div className=" px-[20px] ">
        <p className=" font-[600] text-[48px] text-[#333]">
          Our <span className=" text-[#034FE3]">mission </span>and{" "}
          <span className=" text-[#034FE3]">vision</span>
        </p>
        <div className=" mt-[43px] p-[4px] flex gap-[68px] items-center bg-[#E9E9E9] rounded-full w-[398px] ">
          <button className=" text-[18px] font-[500] text-[#034FE3]  relative w-fit">
            {button} <span className=" absolute top-4 left-20">Mission</span>
          </button>
          <button className=" text-[18px] font-[500] text-[#1A1A1ACC]">
            Vission
          </button>
        </div>
      </div>
      <div className="  w-fit mt-[68px] mb-[180px] flex gap-[32px] bg-[#EBECED] rounded-r-[10px]">
        <img
          className=" w-[486px] h-[648px] rounded-l-[10px]"
          src={Reviewimg}
          alt=""
        />
        <div className=" flex flex-col gap-[40px] px-[24px] ">
          <h2 className=" text-[40px] text-[#034FE3] font-[600]">
            We are on a mission to:
          </h2>
          <span className=" w-full bg-[#1A1A1A1A] h-[0.5px]"></span>
          <section className=" text-[#1A1A1ACC] flex flex-col gap-[40px] w-[651px]">
            <p className=" flex gap-[14px] font-[300] text-[20px] items-baseline">
              <span>{dot}</span>{" "}
              <span>
                Empower individuals across Africa with cutting edge tech skills,
                nurturing a diverse and inclusive tech talent ecosystem.
              </span>
            </p>
            <p className=" flex gap-[14px] font-[300] text-[20px] items-baseline">
              <span>{dot}</span>{" "}
              <span>
                Fuel exponential growth for businesses of all sizes, providing
                data-driven strategies that unlock new possibilities.
              </span>
            </p>
            <p className=" flex gap-[14px] font-[300] text-[20px] items-baseline">
              <span>{dot}</span>{" "}
              <span>
                Connect trained talents with local and international
                opportunities, bridging the digital divide, and fostering
                collaboration and economic prosperity.
              </span>
            </p>
          </section>
          <section className=" px-[32px] pt-[32px]">
            <button className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white py-[14px] px-[32px] text-[20px] font-[700] w-fit">
              Partner with us
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Ourmission;
