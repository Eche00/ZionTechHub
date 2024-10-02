import React, { useState } from "react";
import { Reviewimg, logo } from "../assets";
import { Link } from "react-router-dom";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Battery0Bar } from "@mui/icons-material";

function Enroll() {
  const [course, setCourse] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Select Course");

  const handleSelectedCourse = (e) => {
    setCourse(false);
    setSelectedCourse(e.target.value);
  };

  return (
    <div className="">
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
      </div>

      <div className=" flex md:items-center justify-center  md:h-[100vh] h-[120vh]">
        <div className=" flex flex-col items-center gap-[24px]">
          <div className=" w-fit border-[3px] border-[#FFFFFF] rounded-full">
            <img
              className=" w-[100px] h-[100px] object-cover rounded-full"
              src={Reviewimg}
              alt=""
            />
          </div>
          <div className=" flex flex-col p-[32px] gap-[48px] bg-[#FFFFFF] rounded-[10px]">
            <section className=" flex flex-col items-center justify-center text-center text-[#1A1A1ACC] gap-[12px]">
              <h1 className=" text-[32px] font-[600]">Send us a message</h1>
              <p className=" text-[16px] font-[300] ">
                Hey 👋 Send us a message on Whatsapp to process <br /> your
                enrollment. See you at the top!
              </p>
            </section>
            <form className=" flex flex-col gap-[24px]">
              <section className="flex flex-col gap-[10px]">
                <p className=" text-[#6B6F71] text-[12px] font-[500]">
                  Full Name
                </p>
                <input
                  className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                  type="text"
                  placeholder="Enter your full name"
                />
              </section>
              <section className="flex flex-col gap-[10px]">
                <p className=" text-[#6B6F71] text-[12px] font-[500]">
                  Select Course
                </p>
                <button
                  className=" py-[18px] px-[16px] text-[14px] font-[400] text-[#1A1A1A33] border border-[#C7D1D4] rounded-[10px] flex justify-between items-center relative"
                  type="button">
                  {selectedCourse}

                  <span
                    className="text-[#1A1A1ACC]"
                    onClick={() => setCourse(!course)}>
                    {" "}
                    {course ? (
                      <KeyboardArrowUpIcon fontSize="medium" />
                    ) : (
                      <KeyboardArrowDownIcon fontSize="medium" />
                    )}
                  </span>
                  {course && (
                    <div className=" absolute  -left-[1px] -right-[1px] top-[50px] border border-[#C7D1D4] bg-[#FFFFFF] text-[12px] font-[500] text-[#1A1A1A99] rounded-b-[10px] overflow-hidden">
                      <button
                        value="
                        Data Analytics
                        "
                        type="button"
                        className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                        onClick={handleSelectedCourse}>
                        <span>
                          <Battery0Bar />
                        </span>{" "}
                        Data Analytics
                      </button>
                      <button
                        value="
                        Data Science
                        "
                        type="button"
                        className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                        onClick={handleSelectedCourse}>
                        <span>
                          <Battery0Bar />
                        </span>{" "}
                        Data Science
                      </button>
                      <button
                        value="
                        Web Development
                        "
                        type="button"
                        className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                        onClick={handleSelectedCourse}>
                        <span>
                          <Battery0Bar />
                        </span>{" "}
                        Web Development
                      </button>

                      <button
                        value="
                        Cloud Computing & DevOps
                        "
                        type="button"
                        className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                        onClick={handleSelectedCourse}>
                        <span>
                          <Battery0Bar />
                        </span>{" "}
                        Cloud Computing & DevOps
                      </button>
                      <button
                        value="
                         Machine Learning
                        "
                        type="button"
                        className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                        onClick={handleSelectedCourse}>
                        <span>
                          <Battery0Bar />
                        </span>{" "}
                        Machine Learning
                      </button>
                    </div>
                  )}
                </button>
                <button className="py-[18px] px-[16px] rounded-[10px] text-white bg-[#207C3F] mt-[14px]">
                  Say Hi
                </button>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
