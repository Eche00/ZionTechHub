import { motion } from "framer-motion";
import React from "react";

function Speaker() {
  const logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 18 18"
      fill="none">
      <path
        d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
        fill="#034FE3"
      />
    </svg>
  );
  return (
    <div>
      {/* main  */}
      <div className=" flex sm:gap-[100px] relative py-[180px]  xxl:flex-row flex-col ">
        {/* about us write up  */}
        <section className=" flex flex-col gap-[24px] px-[20px]">
          <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[199px] top-[185px] -left-[1.5px]"></span>

          <h2 className=" sm:text-[48px] text-[32px] font-[600] text-[#333]">
            Meet your<span className=" text-[#034FE3]"> speaker</span>
          </h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            viewport={{ once: true }}
            className=" font-[300] sm:text-[20px] text-[18px] sm:w-[530px] w-[317px] text-[#1A1A1ACC]">
            <span className=" text-[#034FE3] font-[600] sm:text-[40px] text-[24px]">
              About Joy Onuoha
            </span>{" "}
            <br /> <br /> Joy Onuoha is a seasoned data scientist specializing
            in machine learning, predictive analytics, and cloud technologies.
            Currently serving as a Pricing Data Scientist at The AA Basingstoke,
            England, United Kingdom. <br /> <br /> she excels in transforming
            complex data into actionable insights that drive strategic business
            decisions. <br /> <br />
            Joy's expertise lies in developing innovative pricing models and
            leveraging advanced analytics to optimize business outcomes.
          </motion.p>
        </section>
        {/* about us img  */}
        <section className="sm:pt-0 pt-[60px] relative">
          <div className=" relative w-fit group grayscale hover:grayscale-0   hover:text-[#034FE3] text-[#1A1A1A] ">
            <motion.img
              initial={{ scale: 0.85, opacity: 0.45 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.25 }}
              viewport={{ once: true }}
              className="sm:w-[455px] sm:h-[579px] w-[280px] h-[300px] rounded-[10px] object-cover cursor-pointer duration-300"
              src="/"
              alt=""
            />
            <div className=" absolute bottom-[20px] w-[90%] left-[15px]  flex justify-between px-[17px] py-[14px] bg-white/50 backdrop-blur-lg rounded-[10px]">
              <section className=" flex flex-col gap-[6px]">
                <p className=" sm:text-[20px] text-[16px] font-[600] ">
                  Joy Onuoha
                </p>
                <p className=" sm:text-[16px] text-[12px] font-[400]  text-[#1A1A1A80]">
                  Pricing Data Scientist
                </p>
              </section>
              <section className=" flex  items-center justify-center">
                <span className=" bg-white p-[8px] rounded-md ">{logo}</span>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Speaker;
