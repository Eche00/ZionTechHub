import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ArrowForward } from "@mui/icons-material";
// import { overviewimg } from "../assets";
import HowItWorks from "./HackathonComponents/HowItWorks";
import Whyjoin from "./HackathonComponents/Whyjoin";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/Config/firebase";

function Hackathon() {
  const [hackathon, setHackathon] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "webinarinfo", "main");

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setHackathon(docSnap.data());
      } else {
        setHackathon(null); // Or handle document not existing
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Explore Our Blog, Get Tips & Career Hacks! | Zion Tech Hub
        </title>
        <meta
          name="description"
          content="Ready to innovate and compete? Join our upcoming hackathon and turn your ideas into impact. Click now to register and show what you've got!"
        />
      </Helmet>

      {/* hero section  */}
      <div className=" pt-[130px]     overflow-hidden  sm:h-[100vh]  flex  items-center  w-full border-b">
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
            className=" flex-1   flex flex-col  justify-center sm:pt-0 pt-[80px]  ">
            <div className=" flex flex-col gap-[24px]">
              <p className=" sm:text-[14px] text-[12px]  font-[400] py-[10px] sm:px-[24px] px-[14px] border rounded-full w-fit ">
                New hackathon every quarter
              </p>
              <h1 className=" text-[#034FE3] font-[700] sm:text-[64px] text-[40px] sm:w-full w-[320px] sm:whitespace-nowrap sm:leading-[130%] sm:tracker-[1.28px] leading-[120%] tracker-[0.8px]">
                ZTH Hacakathon
              </h1>
              <p className=" text-[#1A1A1A] font-[300] sm:text-[24px] text-[18px] sm:w-[712px] w-[325px]">
                The Zion Tech Tech hackathon is a data battleground where the
                best minds come to solve real problems, showcase their skills,
                and walk away with cash prizes and bragging rights
              </p>
            </div>
            <div className=" flex gap-[24px] pt-[70px]">
              <motion.a
                // href={`${hackathon?.hackathonlink}`}
                // target="_blank"
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
                className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white sm:py-[20px] sm:px-[36px] py-[12px] px-[24px] sm:text-[18px] text-[16px] font-[500]">
                Register Now
                <ArrowForward />
              </motion.a>
            </div>
          </motion.div>

          {/* right hero section  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            viewport={{ once: true }}
            className=" flex-1 flex  items-center justify-center">
            <div className=" w-fit relative">
              <section className="md:w-[145px] md:h-[122px]  w-[105px] h-[88px]  bg-[#F5F5F5] rounded-bl-[10px]  absolute top-0 right-0"></section>

              <section className="md:w-[138px] md:h-[115px] w-[98px] h-[81px]  bg-[#034FE31A] rounded-[10px] absolute top-0 right-0"></section>
              <img
                className="md:w-[499.17px] md:h-[577px] w-[352px] h-[408px] object-cover rounded-[10px]"
                src="/ZthHackathon.png" //change later
                alt=""
              />
              <section className="md:w-[138px] md:h-[115px] w-[98px] h-[81px] bg-[#034FE3] rounded-[10px] absolute bottom-0 left-0 z-30"></section>
              <section className="md:w-[145px] md:h-[122px] w-[105px] h-[88px] bg-[#F5F5F5] rounded-tr-[10px] absolute bottom-0 left-0 z-10"></section>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* other sections  */}
      <div className=" w-full bg-[#F5F5F5]">
        <div className=" w-full  bg-[#EBECED]">
          <div className=" smm:max-w-[90%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%] ml-auto border-l border-[#034FE31A] ">
            <HowItWorks />
          </div>
        </div>

        <div className=" flex flex-col smm:max-w-[80%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-[#034FE31A]  ">
          <Whyjoin hackathon={hackathon} />
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
