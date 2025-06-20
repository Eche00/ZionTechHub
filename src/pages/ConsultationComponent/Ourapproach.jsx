import React, { useState } from "react";
import "./Approach.css";

function Ourapproach() {
  return (
    <div className=" relative pb-[180px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[19px] -left-[1.5px]"></span>
      <div className=" px-[20px]  pb-[68px]">
        <p className=" font-[600] text-[48px] text-[#333]">
          <span className=" text-[#034FE3]">Our </span>Approach
        </p>
      </div>

      <div className=" flex md:flex-row flex-col gap-[20px]">
        <section className=" bg-[#EBECED] items-center flex h-[144px]  md:gap-0 gap-[62px] overflow-hidden">
          <p className=" text-[128px]  text-[#1A1A1A0D] shrikhand-regular leading-[150%]">
            1
          </p>
          <p className="text-[20px]  font-[600] pr-[18px]">
            Initial Consultation
          </p>
        </section>
        <section className=" bg-[#EBECED] items-center flex h-[144px] md:gap-0 gap-[62px] overflow-hidden">
          <p className=" text-[128px] font-[400] text-[#1A1A1A0D] shrikhand-regular leading-[150%]">
            2
          </p>
          <p className="text-[20px]  font-[600] pr-[18px]">
            Requirement <br />
            Analysis
          </p>
        </section>
        <section className=" bg-[#EBECED] items-center flex h-[144px] md:gap-0 gap-[62px]  overflow-hidden">
          <p className=" text-[128px] font-[400] text-[#1A1A1A0D] shrikhand-regular leading-[150%]">
            3
          </p>
          <p className="text-[20px]  font-[600] pr-[18px]">Solution Design</p>
        </section>
        <section className=" bg-[#EBECED] items-center flex h-[144px] md:gap-0 gap-[62px]">
          <p className=" text-[128px] font-[400] text-[#1A1A1A0D] shrikhand-regular leading-[150%]">
            4
          </p>
          <p className="text-[20px]  font-[600] pr-[18px]">
            Implementation <br />
            and Integration
          </p>
        </section>
        <section className=" bg-[#EBECED] items-center flex h-[144px] md:gap-0 gap-[62px]  overflow-hidden">
          <p className=" text-[128px] font-[400] text-[#1A1A1A0D] shrikhand-regular leading-[150%]">
            5
          </p>
          <p className="text-[20px]  font-[600] pr-[18px]">
            Training & Support
          </p>
        </section>
      </div>
    </div>
  );
}
export default Ourapproach;
