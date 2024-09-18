import React from "react";
import { Reviewimg } from "../../assets";

function ServiceOffered() {
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
    <div>
      {" "}
      <div className=" pt-[180px]  relative">
        <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[199px] -left-[1.5px]"></span>
        <div className=" px-2 ">
          <p className=" font-[600] text-[48px] text-[#333]">
            <span className=" text-[#034FE3]">Services </span>
            offered
          </p>
          <p className=" font-[300] text-[18px] text-[#333]">
            We offer amazing services crafted specially for you here at zion
            tech hub.
          </p>
        </div>
      </div>
      {/* part 2 */}
      <div className=" mt-[68px] flex py-[40px] px-[20px] bg-[#EBECED] rounded-[10px] gap-[48px] w-fit">
        <div className=" w-fit">
          <img
            className=" w-[361px] h-[410px] object-cover rounded-[10px]"
            src={Reviewimg}
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-between pr-[150px]">
          <div className=" flex gap-[84px] ">
            <section className="text-[20px] font-[300] text-[#1A1A1ACC] flex flex-col gap-[30px]">
              <p className="w-[271px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Data Strategy and <br /> Planning
              </p>
              <p className="w-[271px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Data Governance and
                <br /> Compliance
              </p>
              <p className="w-[271px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Data Quality and <br /> Management
              </p>
              <p className="w-[271px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Data Integration and ETL <br /> Processes
              </p>
            </section>
            <section className="text-[20px] font-[300] text-[#1A1A1ACC] flex flex-col gap-[30px]">
              <p className="w-[271px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Data Warehousing and Storage Solutions
              </p>
              <p className="w-[271px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Business Intelligence and Reporting
              </p>
              <p className="w-[271px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Advanced Analytics and Data Science
              </p>
              <p className="w-[271px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Machine Learning and AI Implementation
              </p>
            </section>
          </div>
          <div>
            <button className=" py-[14px] px-[32px] border  rounded-[10px] bg-[#034FE3] text-white text-[18px] font-[700]">
              {" "}
              Book my Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOffered;
