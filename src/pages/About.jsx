import { ArrowForward } from "@mui/icons-material";
import React from "react";
import { abouthero1, abouthero2, abouthero3, googlemeet } from "../assets";
import { div } from "framer-motion/client";
import AboutUs from "./AboutComponents/AboutUs";
import Ourmission from "./AboutComponents/Ourmission";
import Team from "./AboutComponents/Team";
import Foundermessage from "./AboutComponents/Foundermessage";
import Partners from "./AboutComponents/Partners";
import LinkedlnProfile from "./AboutComponents/LinkedlnProfile";
import ContactUs from "./AboutComponents/ContactUs";
import Faqs from "./HomeComponents/Faqs";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function About() {
  // handling navigating
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/enroll");
  };
  return (
    <div className=" w-full flex flex-col bg-[#F5F5F5]">
      <Helmet>
        <title>About Us, Discover Our Mission & Team | Zion Tech Hub </title>
        <meta
          name="description"
          content="Get to know who we are, what we stand for, and why we’re the right fit for you. Click to learn more about us and our mission!"
        />
      </Helmet>
      <span className="  md:h-[104px] md:w-[104px] h-[50px] w-[50px]   bg-[#034FE30D] absolute md:top-[50px] md:right-[640px] top-[150px] right-[60px] "></span>
      <span className="  md:h-[104px] md:w-[104px] w-[50px] h-[50px]  bg-[#034FE30D] absolute md:top-[400px] md:left-[314px] top-[300px] left-0  "></span>
      {/* hero section  */}
      <div className=" pt-[130px]    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] overflow-hidden  sm:h-[100vh]  flex  items-center  w-full border-b">
        {/* container   */}
        <motion.div
          initial={{ opacity: 0.45 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className=" w-[90%] mx-auto flex sm:flex-row flex-col justify-between  sm:gap-0 gap-[50px] md:flex-row">
          {/* left hero section  */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "linear" }}
            className=" flex-1   flex flex-col justify-end sm:pt-0 pt-[80px] ">
            <div className=" flex flex-col gap-[24px]">
              <p className=" sm:text-[14px] text-[12px]  font-[400] py-[10px] sm:px-[24px] px-[14px] border rounded-full w-fit ">
                SEE YOU AT THE TOP!
              </p>
              <h1 className=" text-[#1A1A1A] font-[700] sm:text-[64px] text-[40px] sm:w-full w-[320px] sm:whitespace-nowrap sm:leading-[130%] sm:tracker-[1.28px] leading-[120%] tracker-[0.8px]">
                Who We Are -<span className=" text-[#034FE3]"> Our Story</span>
              </h1>
              <p className=" text-[#1A1A1A] font-[300] sm:text-[24px] text-[18px] sm:w-[712px] w-[325px]">
                Our philosophy is simple; train great people and recommended
                them to great companies to do their best work.
              </p>
              <p className=" text-[#1A1A1A66] font-[300] text-[20px]  items-center gap-[12px]  sm:flex hidden">
                Live on{" "}
                <img
                  className=" w-[100px] h-[36px] object-cover"
                  src={googlemeet}
                  alt=""
                />
              </p>
            </div>
            <div className=" flex gap-[24px] pt-[70px]">
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
                to="/enroll"
                className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white sm:py-[20px] sm:px-[36px] py-[12px] px-[24px] sm:text-[18px] text-[16px] font-[500]">
                Enroll for the next cohort
                <ArrowForward />
              </motion.button>
            </div>
          </motion.div>

          {/* right hero section  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            viewport={{ once: true }}
            className=" flex-1 flex  items-center justify-center">
            <div className=" flex  sm:gap-[17px] gap-[10px]">
              <img
                className=" sm:w-[268px] sm:h-[464px]  w-[154px] h-[267px] object-cover  rounded-[10px]"
                src={abouthero1}
                alt=""
              />
              <section className=" flex flex-col sm:gap-[17px] gap-[10px]">
                <img
                  className=" sm:w-[334px] sm:h-[286px]  w-[192px] h-[165px] object-cover rounded-[10px] "
                  src={abouthero2}
                  alt=""
                />
                <img
                  className=" sm:w-[334px] sm:h-[162px]  w-[192px] h-[93px] object-cover rounded-[10px]"
                  src={abouthero3}
                  alt=""
                />
              </section>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* other sections  */}
      <div className=" w-full bg-[#F5F5F5]">
        <div>
          <div className=" flex flex-col smm:max-w-[80%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%]  mx-auto border-l border-[#034FE31A] ">
            <AboutUs />
            <Ourmission />
          </div>

          <div className=" flex flex-col smm:max-w-[90%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%]  ml-auto border-l border-[#034FE31A]  ">
            <Team />
          </div>
          <div className=" flex flex-col smm:max-w-[80%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%]  mx-auto border-l border-[#034FE31A] ">
            <Foundermessage />
          </div>

          <div className=" flex flex-col smm:max-w-[90%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%]  ml-auto border-l border-[#034FE31A] ">
            <Partners />
          </div>
          <div className=" w-full  bg-[#EBECED]">
            <div className=" smm:max-w-[90%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%] ml-auto border-l border-[#034FE31A] ">
              <LinkedlnProfile />
            </div>
          </div>

          <div className=" flex flex-col smm:max-w-[80%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%]  mx-auto border-l border-[#034FE31A] ">
            <ContactUs />
          </div>

          <div className=" flex flex-col smm:max-w-[80%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-[#034FE31A]  ">
            <Faqs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
