import React from "react";
import {
  Sirgodsentsecondprofile,
  abouthero4,
  teamprofile2,
  teamprofile3,
} from "../../assets";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div className=" relative py-[80px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[78px] -left-[1.5px]"></span>
      {/* founders section */}
      <div className=" px-[20px] ">
        <p className=" font-[500] text-[24px] text-[#333]">Our Founders</p>
        {/* founders container */}
        <div className=" pt-[43px] flex sm:gap-[36px] md:flex-row md:gap-[10px] gap-[64px] sm:items-center sm:flex-row flex-col">
          {/* founders card */}
          <motion.section
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            viewport={{ once: true }}
            className=" flex gap-[14px] ">
            <img
              className=" w-[60px] h-[60px] rounded-full object-cover"
              src={Sirgodsentsecondprofile}
              alt=""
            />
            <article className=" flex flex-col gap-[6px]">
              <p className=" text-[18px] font-[600]">Ndoma Godsent</p>
              <p className=" text-[12px] font-[300]">Chief Executive Officer</p>
            </article>
          </motion.section>
          <span className=" h-[47px]  border border-dashed border-[#034FE326] sm:flex hidden"></span>
          {/* founders card */}
          <motion.section
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className=" flex gap-[14px] ">
            <img
              className=" w-[60px] h-[60px] rounded-full object-cover"
              src={teamprofile2}
              alt=""
            />
            <article className=" flex flex-col gap-[6px]">
              <p className=" text-[18px] font-[600]">Mba Olumba</p>
              <p className=" text-[12px] font-[300]">
                Chief Operations Officer{" "}
              </p>
            </article>
          </motion.section>{" "}
          <span className=" h-[47px]  border border-dashed border-[#034FE326] sm:flex hidden"></span>
          {/* founders card */}
          <motion.section
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            viewport={{ once: true }}
            className=" flex gap-[14px] ">
            <img
              className=" w-[60px] h-[60px] rounded-full object-cover"
              src={teamprofile3}
              alt=""
            />
            <article className=" flex flex-col gap-[6px]">
              <p className=" text-[18px] font-[600]">Afolami Timothy</p>
              <p className=" text-[12px] font-[300]">Chief Technical Officer</p>
            </article>
          </motion.section>
        </div>
      </div>

      {/* about us section  */}
      <div className=" flex  justify-between relative py-[180px]  sm:flex-row flex-col md:flex-row">
        {/* about us write up  */}
        <section className=" flex flex-col gap-[24px] px-[20px]">
          <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[199px] top-[185px] -left-[1.5px]"></span>

          <h2 className=" sm:text-[48px] text-[32px] font-[600] text-[#333]">
            <span className=" text-[#034FE3]">About</span> Us
          </h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            viewport={{ once: true }}
            className=" font-[300] sm:text-[24px] text-[18px] sm:w-[530px] w-[317px] text-[#1A1A1ACC]">
            Zion Tech Hub provides world class training and mentorship program
            in data analytics, data science and Machine Learning. <br /> <br />{" "}
            We also provide cooperate training for businesses and organizations
            improving operational efficiency through upskilling the workforce
            with relevant updated technologies needed to drive phenomenal growth
            for their organizations <br /> <br /> We provide data consultancy
            services to businesses and organizations fueling phenomenal growth
            through informed data driven decisions
          </motion.p>
        </section>
        {/* about us img  */}
        <section className="sm:pt-0 pt-[60px] relative">
          <span className="  h-[100px] w-[100px]    bg-[#EBECED] border-[1px] border-[#034FE30D] absolute -top-[150px] -left-[50px]  md:flex hidden"></span>{" "}
          <span className="  h-[50px] w-[100px]    bg-[#EBECED] border-[1px] border-[#034FE30D] absolute -top-[50px] left-[50px]  md:flex hidden z-0"></span>{" "}
          <motion.img
            initial={{ scale: 0.85, opacity: 0.45 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            viewport={{ once: true }}
            className=" sm:h-[564px] sm:w-[599px] h-[335px] w-[357px] object-cover rounded-[10px] z-50"
            src={abouthero4}
            alt=""
          />
          <span className="  h-[100px] w-[100px]    bg-[#EBECED] border-[1px] border-[#034FE30D] absolute -top-[150px] left-[350px]  md:flex hidden"></span>{" "}
          <span className="  h-[50px] w-[100px]    bg-[#EBECED] border-[1px] border-[#034FE30D] absolute -top-[50px] left-[250px]  md:flex hidden z-0"></span>{" "}
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
