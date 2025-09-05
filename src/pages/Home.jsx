import React, { useEffect, useRef, useState } from "react";
import HomeReview from "../lib/Homereview";
import ReviewCard from "./HomeComponents/ReviewCard";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { enterprice, individual, startups } from "../assets";
import { ArrowForward } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Icons from "../lib/icons";

function Home() {
  const [duration, setDuration] = useState(Slow_Duration);

  // handling navigating
  const navigate = useNavigate();

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const Slow_Duration = 100;

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 24;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width, duration]);

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/enroll");
  };
  return (
    <div className=" w-full h-fit overflow-hidden relative pt-[130px] z-30">
      <span className="  md:h-[104px] md:w-[104px] h-[50px] w-[50px]   bg-[#034FE30D] absolute md:top-[50px] md:right-[640px] top-[130px] right-[60px] z-50"></span>
      <span className="  md:h-[104px] md:w-[104px] w-[50px] h-[50px]  bg-[#034FE30D] absolute md:top-[400px] md:left-[314px] top-[330px] left-0  z-50"></span>

      <div className=" smm:h-[96vh] sm:h-[130vh]  md:h-[90vh]  h-[1300px]">
        <motion.div
          className=" absolute top-[130px] z-30 flex  gap-[24px]   "
          ref={ref}
          style={{ x: xTranslation }}>
          {[...HomeReview, ...HomeReview].map((review) => (
            <ReviewCard review={review} />
          ))}
        </motion.div>
        <div className=" w-full absolute z-0 top-[130px] bottom-0    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] overflow-hidden border-b">
          <motion.div
            initial={{ opacity: 0.45 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            className="  max-w-[90%] mx-auto flex sm:flex-row md:flex-row flex-col justify-center sm:mb-[100px] mb-[125px] items-center ">
            {/* hero left section  */}
            <motion.div
              className=" flex-1 gap-[200px] pt-[180px]"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "linear" }}>
              <div className=" flex flex-col gap-[24px]">
                <p className=" text-[14px]  font-[400] py-[10px] px-[24px] border rounded-full w-fit ">
                  TRAINING & CONSULTATION
                </p>
                <h1 className=" text-[#1A1A1A] font-[700] smm:text-[64px] text-[40px]   smm:w-full w-[340px] smm:leading-[130%] smm:tracker-[1.28px] leading-[120%] tracker-[0.8px]">
                  Raising World Talents through Tech
                  <span className=" text-[#034FE3]"> Training</span>
                </h1>
                <p className=" text-[#1A1A1A] font-[300] sm:text-[24px] text-[18px]  sm:w-full w-[300px]">
                  Empowering individuals across Africa with cutting edge tech
                  skills.
                </p>
              </div>
              <div className=" flex sm:flex-row flex-col gap-[24px] sm:py-[70px] py-[15px] w-fit">
                <motion.button
                  whileInView={{
                    rotate: [0, -10, 10, -10, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    delay: 1,
                    repeatDelay: 10,
                    repeat: Infinity,
                    repeatType: "loop", // (optional) smoother looping
                  }}
                  onClick={handleNavigate}
                  className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white sm:py-[20px] sm:px-[36px] py-[12px] px-[24px] text-[16px] sm:text-[18px] font-[500] w-fit">
                  Start Your New Chapter <ArrowForward />
                </motion.button>
                <Link
                  to="/consult"
                  className=" sm:py-[10px] py-[12px] px-[24px] text-[16px] sm:text-[18px] font-[400] border  rounded-[10px] flex items-center justify-center ">
                  {" "}
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            {/* hero right section  */}
            <div className=" flex-1 flex  relative sm:pt-[50px] z-10">
              <motion.section
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "linear" }}
                viewport={{ once: true }}
                className="sm:flex hidden">
                {Icons().africabig}
              </motion.section>
              <motion.section
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "linear" }}
                viewport={{ once: true }}
                className="flex sm:hidden">
                {Icons().africasmall}
              </motion.section>

              <div className=" absolute sm:bottom-[50px] sm:right-[80px]  bottom-8 right-6 ">
                <section className="sm:flex hidden">{Icons().bit}</section>
                <section className="flex sm:hidden">{Icons().bitt}</section>
              </div>
            </div>
          </motion.div>
          {/* hero bottom section  */}
          <div className=" flex sm:flex-row flex-col justify-around items-center sm:gap-0 gap-[32px]  max-w-[90%] mx-auto sm:my-[20px] text-[24px] font-[400] text-[#1A1A1A] border border-gray-400 rounded-[10px] sm:py-[30px] py-[20px] md:flex-row">
            <div className=" flex gap-[24px] items-center justify-center ">
              <img src={individual} alt="" /> Individuals
            </div>
            <div className=" flex gap-[24px] items-center justify-center">
              <img src={startups} alt="" /> Startups
            </div>
            <div className=" flex gap-[24px] items-center justify-center">
              <img src={enterprice} alt="" /> Enterprise{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
