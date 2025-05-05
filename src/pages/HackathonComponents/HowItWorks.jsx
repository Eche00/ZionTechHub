import { motion } from "framer-motion";
import React from "react";

function HowItWorks() {
  return (
    <div>
      <div className=" flex relative overflow-y-hidden  sm:flex-row flex-col">
        <section className="py-[110px]">
          <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[129px] top-[120px] -left-[1.5px]"></span>
          <div className=" px-[20px] flex flex-col ">
            <p className=" font-[600] sm:text-[48px] text-[36px] w-[265px] sm:w-full text-[#333]">
              How does it <span className=" text-[#034FE3]">work?</span>
            </p>
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              viewport={{ once: true }}
              className=" py-[32px] flex flex-wrap gap-[32px] max-w-[1265px] text-[#1A1A1A]">
              {/* why 1  */}
              <section className="   sm:py-[40] sm:px-[40px] py-[40px] lg:px-[20px] px-[15px] rounded-[10px] bg-[#034FE3] flex flex-col gap-[12px] md:w-[534px] w-full text-white ">
                <h3 className="  font-[600] sm:text-[28px] text-[20px]   w-fit ">
                  Team registrations only
                </h3>
                <p className=" sm:w-[446px]  font-sans sm:text-[24px] text-[16px] text-[#FFFFFF] font-thin text-wrap">
                  Find a partner you trust and bring your A-game!
                </p>
              </section>
              {/* why 2 */}
              <section className="   sm:py-[40] sm:px-[40px] py-[40px] lg:px-[20px] px-[15px] rounded-[10px] bg-[#034FE3] flex flex-col gap-[12px] md:w-[534px] w-full text-white ">
                <h3 className="  font-[600] sm:text-[26px] text-[20px]   w-fit ">
                  We’re accepting only 20 teams total:
                </h3>
                <p className=" sm:w-[446px]  font-sans sm:text-[24px] text-[16px] text-[#FFFFFF] font-thin text-wrap">
                  10 for Data Science <br />
                  10 for Data Analysis
                </p>
              </section>
              {/* why 3  */}
              <section className="   sm:py-[40] sm:px-[40px] py-[40px] lg:px-[20px] px-[15px] rounded-[10px] bg-[#034FE3] flex flex-col gap-[12px] md:w-[534px] w-full text-white ">
                <h3 className="  font-[600] sm:text-[28px] text-[20px]   w-fit ">
                  Real world data project
                </h3>
                <p className=" sm:w-[446px]  font-sans sm:text-[24px] text-[16px] text-[#FFFFFF] font-thin text-wrap">
                  Each team will work on a real-world data project during the
                  hackathon
                </p>
              </section>
              {/* why 4  */}
              <section className="   sm:py-[40] sm:px-[40px] py-[40px] lg:px-[20px] px-[15px] rounded-[10px] bg-[#034FE3] flex flex-col gap-[12px] md:w-[534px] w-full text-white ">
                <h3 className="  font-[600] sm:text-[28px] text-[20px]   w-fit ">
                  Winners rise
                </h3>
                <p className=" sm:w-[446px]  font-sans sm:text-[24px] text-[16px] text-[#FFFFFF] font-thin text-wrap">
                  Only the best will rise to the top
                </p>
              </section>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HowItWorks;
