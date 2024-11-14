import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useState } from "react";
import ServicesContent from "../../lib/ServicesContent";
import { googlemeet } from "../../assets";
import { animate, useMotionValue, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Services() {
  const widthC = "300";

  const xTranslation = useMotionValue(0);
  const [position, setPosition] = useState(0);

  const scroll = () => {
    let controls;
    let positionW = -widthC;
    let finalPosition = position + positionW;
    setPosition(finalPosition);
    if (position <= -2400) {
      return;
    } else {
      controls = animate(xTranslation, [position, finalPosition], {
        ease: "linear",
        duration: "1",
      });
      console.log(position);

      return controls.stop;
    }
  };
  return (
    <div className=" relative py-[80px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[99px] top-[90px] -left-[1.5px]"></span>
      <div className=" px-[20px]  pb-[69px]">
        <p className=" font-[600] sm:text-[48px] text-[36px] text-[#333] w-[265px] sm:w-full">
          <span className=" text-[#034FE3]">Our services</span> created for you
        </p>
        <div className=" flex sm:flex-row flex-col sm:items-center max-w-[80%] mr-auto sm:justify-between justify-start items-start w-[265px] sm:w-full sm:gap-0 gap-[24px]">
          <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
            We offer amazing services crafted specially for you here at zion
            tech hub.
          </p>
          <section className=" sm:flex items-center justify-center gap-[10px] hidden">
            <span className=" border   text-gray-500 rounded-full p-2">
              <ArrowBack />
            </span>
            <span
              className="bg-[#034FE30D]  text-blue-500 rounded-full p-2 cursor-pointer"
              // onClick={scroll}
            >
              <ArrowForward />
            </span>
          </section>
        </div>
      </div>
      <div className=" overflow-x-scroll  ">
        <div className=" relative flex sm:w-[3600px] w-fit sm:gap-[24px] gap-[20px] overflow-scroll  pr-[10px]  py-[20px]  scrollbar-hide">
          <motion.div
            style={{ x: xTranslation }}
            className="  flex  w-full sm:gap-[24px] gap-[20px]  pb-[20px]  ">
            {ServicesContent.map((service) => (
              <div className=" sm:px-[48px] px-[24px] py-[32px] flex flex-col gap-[32px] border border-t-[8px] border-t-[#034FE3] rounded-[10px] bg-[#FFFFFF]  shadow-xl  shadow-[#1A1A1A1A]">
                <section className=" flex flex-col gap-[24px]">
                  <h2 className=" sm:text-[28px] text-[24px] font-[600] text-[#034FE3]">
                    {service.category}
                  </h2>
                  <p className=" sm:w-[457px] w-[284px] sm:text-[20px] text-[16px] font-[300] text-[#1A1A1ACC] sm:h-[180px] h-[192px]">
                    {service.message}
                  </p>
                  <p className=" flex items-center gap-[10px] text-[#034FE3]">
                    Get Started <ArrowForward />
                  </p>
                </section>
                <span className=" sm:w-[457px]  h-[1px] bg-[#1A1A1A1A]"></span>
                <section className=" flex gap-[12px] items-center ">
                  <Link
                    className="  sm:text-[20px] text-[16px] font-[300] text-[#1A1A1ACC]"
                    to="/enroll">
                    Live on
                  </Link>

                  <img
                    className=" sm:w-[247px] sm:h-[45px] w-[89px] h-[16px] object-cover"
                    src={googlemeet}
                    alt=""
                  />
                </section>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
