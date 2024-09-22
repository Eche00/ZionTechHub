import React from "react";
import {
  Reviewimg,
  partnerlogo1,
  partnerlogo2,
  partnerlogo3,
} from "../../assets";

function Partners() {
  return (
    <div className=" relative pb-[200px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[8px] -left-[1.5px]"></span>
      <div className=" px-[20px] flex flex-col gap-[12px]">
        <p className=" font-[600] sm:text-[48px] text-[36px] text-[#333]">
          <span className=" text-[#034FE3]">Our amazing</span> partners
        </p>
        <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
          We offer amazing services crafted specially for you here at zion tech
          hub.
        </p>
      </div>
      <div className="flex sm:flex-col sm:gap-[50px] pt-[68px]">
        <div className=" flex border border-[#034FE31A] w-full sm:flex-row flex-col">
          <section className=" p-[10px] border-r border-[#034FE31A]">
            <img
              className=" sm:h-[98px] sm:w-[216px] h-[98px] w-[174px] object-cover"
              src={partnerlogo1}
              alt=""
            />
          </section>
          <section className=" p-[10px] border-r border-[#034FE31A]">
            <img
              className=" sm:h-[98px] sm:w-[216px] h-[98px] w-[174px] object-cover"
              src={partnerlogo2}
              alt=""
            />
          </section>
          <section className=" p-[10px] border-r border-[#034FE31A]">
            <img
              className=" sm:h-[98px] sm:w-[216px] h-[98px] w-[174px] object-cover"
              src={partnerlogo3}
              alt=""
            />
          </section>
        </div>
        {/* section2 */}
        <div className=" flex sm:flex-row flex-col border border-[#034FE31A] w-full justify-between sm:justify-start">
          <section className="  sm:border-r  border-r-0 border-b sm:border-b border-[#034FE31A]">
            <p className=" sm:text-[24px] text-[18px] font-[600] text-[#140D91] text-center sm:px-[44.5px] py-[23px]">
              La Grande <br /> Galaxie Consult
            </p>
          </section>
          <section className="  sm:border-r  border-r-0 border-b sm:border-b-0 border-[#88a2d61a] flex  h-full items-center  sm:justify-evenly justify-center  sm:h-fit">
            <p className=" sm:text-[24px] text-[18px]  font-[600] text-[#D89A0C] sm:px-[44.5px] py-[40px]">
              Solavise Tech
            </p>
          </section>
          <section className="  sm:border-r  border-r-0 border-b sm:border-b-0 border-[#034FE31A]  flex items-center text-center justify-center h-full sm:h-fit ">
            <p className=" sm:text-[24px] text-[18px]  font-[600] text-[#1A1A1A] sm:px-[44.5px] py-[23px]">
              <span className="text-[#E71B26]">master</span>
              <span className="text-[#F99E1A]">card</span> <br /> foundation
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Partners;
