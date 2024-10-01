import React, { useState } from "react";
import { missionimage, visionimage } from "../../assets";

function Ourmission() {
  const [vision, setVision] = useState(false);
  const [mission, setMission] = useState(true);
  const Mission = (e) => {
    e.preventDefault();
    setMission(true);
    setVision(false);
  };
  const Vision = (e) => {
    e.preventDefault();
    setMission(false);
    setVision(true);
  };

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
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[5px] -left-[1.5px]"></span>
      <div className=" px-[20px] ">
        <p className=" font-[600] sm:text-[48px] text-[32px] text-[#333]">
          Our <span className=" text-[#034FE3]">mission </span>and{" "}
          <span className=" text-[#034FE3]">vision</span>
        </p>

        <div className=" mt-[43px]   flex items-center justify-between bg-[#E9E9E9] rounded-full sm:w-[398px] md:w-[337px] lg:w-[337px] xl:w-[310px]  p-[4px]">
          <button
            onClick={Mission}
            className={
              mission
                ? " flex-1 bg-white rounded-full py-[12px] text-[#034FE3] whitespace-nowrap  text-[18px] font-[500]"
                : " flex-1 text-[18px] font-[500] text-[#1A1A1ACC]"
            }>
            Mission
          </button>
          <button
            onClick={Vision}
            className={
              vision
                ? " flex-1 bg-white rounded-full py-[12px] text-[#034FE3] whitespace-nowrap  text-[18px] font-[500]"
                : " flex-1 text-[18px] font-[500] text-[#1A1A1ACC]"
            }>
            Vision
          </button>
        </div>
      </div>
      {!vision ? (
        <div className="  w-fit mt-[68px] mb-[180px] flex  sm:flex-row flex-col gap-[32px] bg-[#EBECED] rounded-r-[10px]">
          <img
            className=" sm:w-[486px] md:w-[357px] lg:w-[357px] xl:w-[340px] sm:h-[648px] h-[191px] rounded-l-[10px] object-cover sm:rounded-tr-none rounded-tr-[10px]"
            src={missionimage}
            alt=""
          />
          <div className=" flex flex-col sm:gap-[40px] gap-[10px] lg:px-[24px] xl:px-[10px]  justify-center">
            <h2 className=" sm:text-[40px] text-[32px] sm:w-full w-[309px] text-[#034FE3] font-[600]">
              We are on a mission to:
            </h2>
            <span className=" w-full bg-[#1A1A1A1A] h-[0.5px]"></span>
            <section className=" text-[#1A1A1ACC] flex flex-col gap-[40px] sm:w-[651px] w-[277px]">
              <p className=" flex gap-[14px] font-[300] sm:text-[20px] text-[18px] items-baseline">
                <span>{dot}</span>{" "}
                <span>
                  Empower individuals across Africa with cutting edge tech
                  skills, nurturing a diverse and inclusive tech talent
                  ecosystem.
                </span>
              </p>
              <p className=" flex gap-[14px] font-[300] sm:text-[20px] text-[18px] items-baseline">
                <span>{dot}</span>{" "}
                <span>
                  Fuel exponential growth for businesses of all sizes, providing
                  data-driven strategies that unlock new possibilities.
                </span>
              </p>
              <p className=" flex gap-[14px] font-[300] sm:text-[20px] text-[18px] items-baseline">
                <span>{dot}</span>{" "}
                <span>
                  Connect trained talents with local and international
                  opportunities, bridging the digital divide, and fostering
                  collaboration and economic prosperity.
                </span>
              </p>
            </section>
            <section className=" px-[32px] sm:pt-[32px] sm:pb-0 pb-[50px]">
              <button className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white py-[14px] px-[32px] text-[20px] font-[700] w-fit">
                Partner with us
              </button>
            </section>
          </div>
        </div>
      ) : (
        <div className="  w-fit mt-[68px] mb-[180px] flex  sm:flex-row flex-col gap-[32px] bg-[#EBECED] rounded-r-[10px]">
          <img
            className=" sm:w-[486px] md:w-[357px] lg:w-[357px] xl:w-[340px] sm:h-[648px] h-[191px] rounded-l-[10px] object-cover sm:rounded-tr-none rounded-tr-[10px]"
            src={visionimage}
            alt=""
          />
          <div className=" flex flex-col sm:gap-[40px] gap-[10px] px-[24px] justify-center">
            <h2 className=" sm:text-[40px] text-[32px] sm:w-full w-[309px] text-[#034FE3] font-[600]">
              At Zion Tech Hub,
            </h2>
            <span className=" w-full bg-[#1A1A1A1A] h-[0.5px]"></span>
            <section className=" text-[#1A1A1ACC] flex flex-col gap-[40px] sm:w-[651px] w-[277px]">
              <p className=" flex gap-[14px] font-[300] sm:text-[20px] text-[18px] items-baseline">
                <span>{dot}</span>{" "}
                <span>
                  We envision a transformed Africa, empowered by revolutionary
                  technological innovations, and recognized as a global hub of
                  creativity and progress.
                </span>
              </p>
              <p className=" flex gap-[14px] font-[300] sm:text-[20px] text-[18px] items-baseline">
                <span>{dot}</span>{" "}
                <span>
                  We strive to be the leading data consultancy in Africa,
                  providing strategic insights that fuel phenomenal growth for
                  businesses within and beyond the continent.
                </span>
              </p>
            </section>
            <section className=" px-[32px] sm:pt-[32px] sm:pb-0 pb-[50px]">
              <button className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white py-[14px] px-[32px] text-[20px] font-[700] w-fit">
                Partner with us
              </button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ourmission;
