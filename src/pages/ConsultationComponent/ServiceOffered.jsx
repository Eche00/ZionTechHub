import React from "react";
import { Reviewimg, consultservice } from "../../assets";

function ServiceOffered() {
  const dot = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <g clip-path="url(#clip0_733_3311)">
        <path
          d="M5.33268 9.99984L9.33268 13.3332L14.666 6.6665M9.99935 19.3332C8.77368 19.3332 7.56001 19.0918 6.42764 18.6227C5.29526 18.1537 4.26637 17.4662 3.39969 16.5995C2.53301 15.7328 1.84552 14.7039 1.37647 13.5715C0.907429 12.4392 0.666016 11.2255 0.666016 9.99984C0.666016 8.77417 0.907429 7.5605 1.37647 6.42813C1.84552 5.29575 2.53301 4.26685 3.39969 3.40017C4.26637 2.53349 5.29526 1.84601 6.42764 1.37696C7.56001 0.907918 8.77368 0.666504 9.99935 0.666504C12.4747 0.666504 14.8487 1.64983 16.599 3.40017C18.3494 5.15051 19.3327 7.52448 19.3327 9.99984C19.3327 12.4752 18.3494 14.8492 16.599 16.5995C14.8487 18.3498 12.4747 19.3332 9.99935 19.3332Z"
          stroke="#034FE3"
        />
      </g>
      <defs>
        <clipPath id="clip0_733_3311">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <div>
      {" "}
      <div className=" pt-[180px]  relative">
        <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute md:top-[199px] top-[185px] -left-[1.5px]"></span>
        <div className=" px-2 ">
          <p className=" font-[600] md:text-[48px] text-[32px] text-[#333]">
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
      <div className=" mt-[68px] flex py-[40px] lg:px-[10px] px-[15px] bg-[#EBECED] rounded-[10px] gap-[48px] w-fit  sm:flex-row flex-col">
        <div className=" w-fit">
          <img
            className=" sm:w-[361px] md:w-[600px] md:h-[410px] lg:w-[332px] w-[312px] h-[200px]  object-cover rounded-[10px] "
            src={consultservice}
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-between pr-[150px] ">
          <div className=" flex md:flex-row flex-col md:gap-[84px] gap-[24px] sm:mb-0 mb-[48px]">
            <section className="md:text-[20px] text-[16px] font-[300] text-[#1A1A1ACC] flex flex-col md:gap-[30px] gap-[24px]">
              <p className="md:w-[271px] w-[500px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Data Strategy and{" "}
                <br className=" md:inline-block hidden" /> Planning
              </p>
              <p className="md:w-[271px] w-[500px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Data Governance and
                <br className=" md:inline-block hidden" /> Compliance
              </p>
              <p className="md:w-[271px] w-[500px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Data Quality and{" "}
                <br className=" md:inline-block hidden" /> Management
              </p>
              <p className="md:w-[271px] w-[500px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Data Integration and ETL{" "}
                <br className=" md:inline-block hidden" /> Processes
              </p>
            </section>
            <section className="md:text-[20px] text-[16px] font-[300] text-[#1A1A1ACC] flex flex-col gap-[30px]">
              <p className="md:w-[271px] w-[500px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Data Warehousing and Storage Solutions
              </p>
              <p className="md:w-[271px] w-[500px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Business Intelligence and Reporting
              </p>
              <p className="md:w-[271px] w-[500px] flex items-baseline justify-start gap-[14px] ">
                <span>{dot}</span>Advanced Analytics and Data Science
              </p>
              <p className="md:w-[271px] w-[500px] flex items-baseline justify-start gap-[14px] ">
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
