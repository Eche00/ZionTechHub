import React from "react";
import { Reviewimg } from "../../assets";

function Partners() {
  return (
    <div className=" relative pb-[200px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[19px] -left-[1.5px]"></span>
      <div className=" px-[20px] flex flex-col gap-[12px]">
        <p className=" font-[600] text-[48px] text-[#333]">
          <span className=" text-[#034FE3]">Our amazing</span> partners
        </p>
        <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
          We offer amazing services crafted specially for you here at zion tech
          hub.
        </p>
      </div>
      <div className="flex flex-col gap-[50px] pt-[68px]">
        <div className=" flex border border-[#034FE31A] w-full">
          <section className=" p-[10px] border-r border-[#034FE31A]">
            <img
              className=" h-[98px] w-[216px] object-cover"
              src={Reviewimg}
              alt=""
            />
          </section>
          <section className=" p-[10px] border-r border-[#034FE31A]">
            <img
              className=" h-[98px] w-[216px] object-cover"
              src={Reviewimg}
              alt=""
            />
          </section>
          <section className=" p-[10px] border-r border-[#034FE31A]">
            <img
              className=" h-[98px] w-[216px] object-cover"
              src={Reviewimg}
              alt=""
            />
          </section>
        </div>
        {/* section2 */}
        <div className=" flex border border-[#034FE31A] w-full">
          <section className="  border-r border-[#034FE31A]">
            <p className=" text-[24px] font-[600] text-[#140D91] text-center px-[44.5px] py-[23px]">
              La Grande <br /> Galaxie Consult
            </p>
          </section>
          <section className="  border-r border-[#88a2d61a] flex items-center">
            <p className=" text-[24px] font-[600] text-[#D89A0C] px-[44.5px]">
              Solavise Tech
            </p>
          </section>
          <section className="  border-r border-[#034FE31A]  flex items-center text-center">
            <p className=" text-[24px] font-[600] text-[#1A1A1A] px-[44.5px]">
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
