import React, { useState } from "react";
import { logo, techhublogo } from "../assets";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Battery0Bar, Warning } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { KeyboardArrowRight } from "@mui/icons-material";
import "./Enroll.css";

function Enroll() {
  const [course, setCourse] = useState(false);
  const [selectCourse, setSelectCourse] = useState(false);
  const [coursee, setCoursee] = useState(false);
  const [nav, setNav] = useState(false);
  const [cohortActive, setCohortActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    course: "Select course",
  });

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
    setCourse(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.course === "Select course") {
      setSelectCourse(true);
      return;
    }
    try {
      let number = "+2348055094738";
      let url =
        "https://wa.me/" +
        number +
        "?text=" +
        "FullName: " +
        " " +
        formData.name +
        "%0a" +
        "Course: " +
        " " +
        formData.course +
        "%0a";
      window.open(url, "_blank").focus();
    } catch (error) {}
    setSelectCourse(false);
    alert("Registration for Cohort 7.0 has ended.");
    console.log(formData);
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

      <div className=" flex md:items-center justify-center  md:h-[100vh] h-[120vh] one">
        <div className=" flex flex-col items-center gap-[24px]">
          <div className=" w-fit border-[3px] border-[#FFFFFF] rounded-full">
            <img
              className=" w-[100px] h-[100px] object-cover rounded-full"
              src={techhublogo}
              alt=""
            />
          </div>
          <div className=" flex flex-col p-[32px] gap-[48px] bg-[#FFFFFF] rounded-[10px]">
            <section className=" flex flex-col items-center justify-center text-center text-[#1A1A1ACC] md:gap-[12px] gap-[8px]">
              <h1 className=" md:text-[32px] text-[24px] font-[600]">
                Send us a message
              </h1>
              <p className=" md:text-[16px] text-[12px] font-[300] ">
                Hey 👋 Send us a message on Whatsapp to process <br /> your
                enrollment. See you at the top!
              </p>
            </section>
            {cohortActive ? (
              <form
                className=" flex flex-col gap-[24px]"
                onSubmit={handleSubmit}>
                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Full Name
                  </p>
                  <input
                    className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                    type="text"
                    placeholder="Enter your full name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </section>
                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Select Course
                  </p>
                  <div
                    className=" py-[18px] px-[16px] text-[14px] font-[400] text-[#1A1A1A33] border border-[#C7D1D4] rounded-[10px] flex justify-between items-center relative"
                    type="button">
                    {formData.course}

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
                      <div
                        className=" absolute  -left-[1px] -right-[1px] top-[50px] border border-[#C7D1D4] bg-[#FFFFFF] text-[12px] font-[500] text-[#1A1A1A99] rounded-b-[10px] overflow-hidden"
                        onClick={() => setCourse(!course)}>
                        <button
                          value="
                      Data Analytics
                      "
                          type="button"
                          className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
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
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
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
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
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
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
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
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
                          <span>
                            <Battery0Bar />
                          </span>{" "}
                          Machine Learning
                        </button>
                      </div>
                    )}
                  </div>
                  {selectCourse && (
                    <p className=" text-[16px] font-bold text-red-500 ">
                      Please select a course
                    </p>
                  )}
                  <button className="py-[18px] px-[16px] rounded-[10px] text-white bg-[#207C3F] mt-[14px] cursor-not-allowed">
                    Say Hi
                  </button>
                </section>
              </form>
            ) : (
              <p className=" text-[16px] font-bold text-red-500  text-center">
                <Warning /> Registration for Cohort 7.0 has ended. <Warning />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
