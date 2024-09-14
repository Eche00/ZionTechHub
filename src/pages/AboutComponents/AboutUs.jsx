import React from "react";
import { Reviewimg } from "../../assets";

function AboutUs() {
  return (
    <div className=" relative py-[80px]">
      <span className=" w-[3px] h-[20px]  bg-[#034FE3] absolute top-[88px] -left-[1.5px]"></span>
      <div className=" px-[20px] ">
        <p className=" font-[500] text-[24px] text-[#333]">Our Founders</p>
        <div className=" pt-[43px] flex gap-[36px] items-center">
          <section className=" flex gap-[14px] ">
            <img
              className=" w-[60px] h-[60px] rounded-full object-cover"
              src={Reviewimg}
              alt=""
            />
            <article className=" flex flex-col gap-[6px]">
              <p className=" text-[18px] font-[600]">Ndoma Godsent</p>
              <p className=" text-[12px] font-[300]">Chief Executive Officer</p>
            </article>
          </section>
          <span className=" h-[47px]  border border-dashed border-[#034FE326]"></span>
          <section className=" flex gap-[14px] ">
            <img
              className=" w-[60px] h-[60px] rounded-full object-cover"
              src={Reviewimg}
              alt=""
            />
            <article className=" flex flex-col gap-[6px]">
              <p className=" text-[18px] font-[600]">Ndoma Godsent</p>
              <p className=" text-[12px] font-[300]">Chief Executive Officer</p>
            </article>
          </section>{" "}
          <span className=" h-[47px]  border border-dashed border-[#034FE326]"></span>
          <section className=" flex gap-[14px] ">
            <img
              className=" w-[60px] h-[60px] rounded-full object-cover"
              src={Reviewimg}
              alt=""
            />
            <article className=" flex flex-col gap-[6px]">
              <p className=" text-[18px] font-[600]">Ndoma Godsent</p>
              <p className=" text-[12px] font-[300]">Chief Executive Officer</p>
            </article>
          </section>
        </div>
      </div>

      <div className=" flex  justify-between relative py-[180px] ">
        <section className=" flex flex-col gap-[24px] px-[20px]">
          <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[199px] -left-[1.5px]"></span>

          <h2 className=" text-[48px] font-[600] text-[#333]">
            <span className=" text-[#034FE3]">About</span> Us
          </h2>
          <p className=" font-[300] text-[24px] w-[530px] text-[#1A1A1ACC]">
            Zion Tech Hub provides world class training and mentorship program
            in data analytics, data science and Machine Learning. <br /> <br />{" "}
            We also provide cooperate training for businesses and organizations
            improving operational efficiency through upskilling the workforce
            with relevant updated technologies needed to drive phenomenal growth
            for their organizations <br /> <br /> We provide data consultancy
            services to businesses and organizations fueling phenomenal growth
            through informed data driven decisions
          </p>
        </section>
        <section>
          <img
            className=" h-[564px] w-[599px] object-cover rounded-[10px]"
            src={Reviewimg}
            alt=""
          />
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
