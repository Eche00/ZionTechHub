import React from "react";

function Consultingsection() {
  const checkMark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none">
      <g clip-path="url(#clip0_475_298)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.852Z"
          fill="#034FE3"
        />
      </g>
      <defs>
        <clipPath id="clip0_475_298">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <div className=" my-[300px]">
      <div className=" max-w-[1265px]   flex flex-col gap-[48px] bg-[#EBECED] p-[48px] rounded-[10px] relative">
        <div className=" flex flex-col gap-[32px] ">
          <section className=" flex flex-col sm:pt-0 pt-[100px]">
            <h1 className=" sm:text-[48px] text-[36px] sm:w-full w-[305px] font-[600] text-[#333333]">
              Our consultancy sector{" "}
            </h1>
            <p className=" sm:text-[24px] text-[20px] font-[600] text-[#1A1A1A66]">
              Domain Areas;
            </p>
          </section>
          <ul>
            <li className=" flex gap-[14px] sm:text-[24px] text-[18px] font-[300] items-center">
              <span>{checkMark}</span>Financial analytics{" "}
            </li>
            <li className=" flex gap-[14px] sm:text-[24px] text-[18px] font-[300] items-center">
              <span>{checkMark}</span>Business Intelligence Analytics{" "}
            </li>
            <li className=" flex gap-[14px] sm:text-[24px] text-[18px] font-[300] items-center">
              <span>{checkMark}</span>Healthcare Analytics
            </li>
          </ul>
          <img
            className=" sm:w-[470px] sm:h-[302.509px] w-[295px] h-[190px] object-cover absolute sm:-top-1/3 -top-[20%] sm:right-0 right-[7%] border border-black rounded-[5px]"
            src="'"
            alt="image"
          />
        </div>
        <button className=" sm:py-[10px] py-[14px] px-[32px] rounded-[5px] bg-[#034FE3] sm:text-[20px] text-[18px] font-[700] w-fit text-white">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Consultingsection;
