import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Battery0Bar, Warning } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { KeyboardArrowRight } from "@mui/icons-material";
import "./Enroll.css";
import { logo } from "../assets";
import SubEnroll from "./EnrollTabs/SubEnroll";
import HealthcareReg from "./EnrollTabs/HealthcareReg";
import { Helmet } from "react-helmet";

function Enroll() {
  const [enroll, setEnroll] = useState(true);
  const [health, setHealth] = useState(false);
  const [nav, setNav] = useState(false);
  const [coursee, setCoursee] = useState(false);

  const exit = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none">
      <path
        d="M18 1L1.66666 17.3333M1.66666 1L18 17.3333"
        stroke="#333333"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const handleClose = () => {
    setNav(false);
  };

  const handleSwitch = (e) => {
    e.preventDefault();
    if (e.target.id === "enroll") {
      setEnroll(true);
      setHealth(false);
    } else {
      setEnroll(false);
      setHealth(true);
    }
  };
  return (
    <div className="">
      <Helmet>
        <title>Enroll Today, Secure Your Spot Now! | Zion Tech Hub</title>
        <meta
          name="description"
          content="Take the first step toward something great—enroll now! Don’t miss your chance to join a community that’s built for your success."
        />
      </Helmet>
      <div className=" flex justify-between items-center max-w-[90%] mx-auto  font-sans py-[10px]">
        {/* logo */}
        <section className=" flex-1 text-xl font-bold flex items-baseline gap-1">
          <div className="">
            <Link to="/">
              <img
                className=" width-[89px]  h-[51px]  object-cover"
                src={logo}
                alt=""
              />
            </Link>
          </div>
        </section>
        <div className=" sm:hidden flex  gap-[27px] items-center z-0">
          <span
            className=" text-[28px] text-[#333333] cursor-pointer"
            onClick={() => setNav(true)}>
            &#9776;
          </span>
          {nav && (
            <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 z-10 h-screen">
              <div className=" flex sm:hidden flex-col absolute left-0 right-0 top-0 bg-[#FFFFFF] duration-300 z-50">
                <section className=" flex items-center justify-end">
                  <span
                    className=" py-[24px] px-[20px]"
                    onClick={() => setNav(false)}>
                    {exit}
                  </span>
                </section>

                <div className=" flex flex-col">
                  <Link
                    to="/"
                    onClick={() => setNav(false)}
                    className=" py-[15px] px-[20px] text-[14px] text-[#1A1A1A] border-b border-[#C3C3C3]">
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setNav(false)}
                    className=" py-[15px] px-[20px] text-[14px] text-[#1A1A1A] border-b border-[#C3C3C3]">
                    About Us
                  </Link>
                  <p className=" py-[15px] px-[20px] text-[14px] text-[#1A1A1A] flex items-center justify-between border-b border-[#C3C3C3] relative">
                    Courses
                    <span onClick={() => setCoursee(!coursee)}>
                      {coursee ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </span>
                    {/* opened coursee content in mobile view  */}
                    {coursee && (
                      <div
                        className="    flex flex-col  absolute top-[100%] left-0 right-0 bg-[#F6F6F6]  "
                        onClick={handleClose}>
                        <div className=" text-[#1A1A1A]  flex flex-col ">
                          <Link
                            to="/dataanalystics"
                            className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                            Data Analystics <KeyboardArrowRight />
                          </Link>
                          <Link
                            to="/datascience"
                            className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                            Data Science <KeyboardArrowRight />
                          </Link>
                          <Link
                            to="/webdevelopment"
                            className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                            Web Development <KeyboardArrowRight />
                          </Link>
                          <Link
                            to="/cloudcomputing"
                            className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                            Cloud Computing & DevOps <KeyboardArrowRight />
                          </Link>
                          <Link
                            to="/machinelearning"
                            className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                            Machine Learning <KeyboardArrowRight />
                          </Link>
                        </div>
                      </div>
                    )}
                  </p>
                  <Link
                    to="/consult"
                    onClick={() => setNav(false)}
                    className=" py-[15px] px-[20px] text-[14px] text-[#1A1A1A] border-b border-[#C3C3C3]">
                    Consultation
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setNav(false)}
                    className=" py-[15px] px-[20px] text-[14px] text-[#1A1A1A] border-b border-[#C3C3C3]">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* buttons  */}
      <div className="one flex md:items-center  flex-col  md:h-[100vh] h-[120vh] gap-[50px]">
        <section className=" flex items-center justify-center w-[90%] mx-auto">
          {/* <div className="flex items-center bg-gray-300 rounded-[10px] p-[10px] gap-[10px]">
            <button
              id="enroll"
              className={
                enroll
                  ? " bg-[#034FE3] text-white font-bold rounded-[10px] text-[14px] px-[16px] py-[8px] duration-500"
                  : "  font-[500]  text-[14px] px-[16px] py-[8px] text-gray-700 duration-500"
              }
              onClick={handleSwitch}>
              Cohort
            </button>
            <button
              id="health"
              className={
                health
                  ? " bg-[#034FE3] text-white font-bold rounded-[10px] text-[14px] px-[16px] py-[8px] duration-500"
                  : "  font-[500]  text-[14px] px-[16px] py-[8px] text-gray-700 duration-500"
              }
              onClick={handleSwitch}>
              Health
            </button>
          </div> */}
        </section>
        <section className="">
          {enroll ? <SubEnroll /> : <HealthcareReg />}
        </section>
      </div>
    </div>
  );
}

export default Enroll;
