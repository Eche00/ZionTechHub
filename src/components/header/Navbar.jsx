import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../assets";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { KeyboardArrowRight } from "@mui/icons-material";

function Navbar() {
  const [course, setCourse] = useState(false);
  const [others, setOthers] = useState(false);
  const [nav, setNav] = useState(false);
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
  const handleOpen = (e) => {
    if (e.target.id === "course") {
      setCourse(!course);
      setOthers(false);
    } else if (e.target.id === "others") {
      setCourse(false);
      setOthers(!others);
    }
  };

  const handleClose = (e) => {
    setNav(false);
    if (e.target.id === "course") {
      setCourse(false);
    }
    if (e.target.id === "others") {
      setOthers(false);
    }
  };
  return (
    <div>
      <div className="relative z-20">
        <div className=" flex justify-between items-center max-w-[90%] mx-auto  font-sans py-[10px] ">
          {/* logo */}
          <section className=" flex-1 text-xl font-bold flex items-baseline gap-1">
            <div className="">
              <img
                className=" sm:w-[95px] sm:h-[51px] w-[67px] h-[39px]   object-cover"
                src={logo}
                alt=""
              />
            </div>
          </section>

          {/*  navigation  & signin/profile  */}
          <section className=" sm:flex hidden flex-1 items-center justify-between text-[16px] text-nowrap font-[400]   text-gray-500  sm:gap-[10px] gap-0">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
              About
            </NavLink>
            {/* Courses  */}
            <NavLink
              className=" group group-hover:block relative  "
              onClick={() => setCourse(!course)}>
              Courses <KeyboardArrowDownIcon />
              <div className=" text-[16px]  font-[400] text-[#1A1A1A80]  flex flex-col items-start gap-[10px] absolute bg-[#F0F0F0]   rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] z-40  ">
                <div className="  font-[400] text-[16px]  p-[12px] hidden group-hover:flex flex-col">
                  <Link
                    to="/data-analystics-training"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]">
                    Data Analystics
                  </Link>
                  <Link
                    to="/data-science-course"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                    Data Science
                  </Link>
                  <Link
                    to="/web-development-training"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                    Web Development
                  </Link>
                  <Link
                    to="/cloud-computing-course"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]  whitespace-nowrap">
                    Cloud Computing & DevOps
                  </Link>
                  <Link
                    to="/machine-learning-course"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                    Machine Learning
                  </Link>
                </div>
              </div>
            </NavLink>

            <NavLink
              to="/data-consultation"
              className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
              Consultation
            </NavLink>
            {/* Others  */}
            <NavLink
              className=" group group-hover:block relative  "
              onClick={() => setOthers(!others)}>
              Others <KeyboardArrowDownIcon />
              <div className=" text-[16px]  font-[400] text-[#1A1A1A80]  flex flex-col items-start gap-[10px] absolute bg-[#F0F0F0]   rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] z-40  ">
                <div className="  font-[400] text-[16px]  p-[12px] hidden group-hover:flex flex-col">
                  <Link
                    to="/blog"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                    Blogs
                  </Link>
                  <Link
                    to="/partner-with-us"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]">
                    Partner with us
                  </Link>

                  <Link
                    to="/zion-tech-hub-webinar"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                    Webinar
                  </Link>
                  <Link
                    to="/zion-tech-hub-hackathon"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]  whitespace-nowrap">
                    Hackathon
                  </Link>
                </div>
              </div>
            </NavLink>

            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
              Contact
            </NavLink>

            <button className=" bg-[#034FE3] text-white font-[500] rounded-[10px] text-[16px] px-[24px] py-[12px]">
              <Link to="/enroll"> Enroll</Link>
            </button>
          </section>
          <div className=" sm:hidden flex  gap-[27px] items-center z-0">
            <button className=" bg-[#034FE3] text-white font-[500] rounded-[5px] text-[14px] px-[20px] py-[10px]">
              <Link to="/enroll"> Enroll</Link>
            </button>
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
                      to="/about-us"
                      onClick={() => setNav(false)}
                      className=" py-[15px] px-[20px] text-[14px] text-[#1A1A1A] border-b border-[#C3C3C3]">
                      About Us
                    </Link>
                    {/* courses  */}
                    <p
                      className=" py-[15px] px-[20px] text-[14px] text-[#1A1A1A] flex items-center justify-between border-b border-[#C3C3C3] relative z-20"
                      onClick={handleOpen}
                      id="course">
                      Courses
                      <span>
                        {course ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </span>
                      {/* opened course content in mobile view  */}
                      {course && (
                        <div
                          className="    flex flex-col  absolute top-[100%] left-0 right-0 bg-[#F6F6F6]  "
                          onClick={handleClose}
                          id="course">
                          <div className=" text-[#1A1A1A]  flex flex-col ">
                            <Link
                              to="/data-analystics-training"
                              className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                              Data Analystics <KeyboardArrowRight />
                            </Link>
                            <Link
                              to="/data-science-course"
                              className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                              Data Science <KeyboardArrowRight />
                            </Link>
                            <Link
                              to="/web-development-training"
                              className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                              Web Development <KeyboardArrowRight />
                            </Link>
                            <Link
                              to="/cloud-computing-course"
                              className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                              Cloud Computing & DevOps <KeyboardArrowRight />
                            </Link>
                            <Link
                              to="/machine-learning-course"
                              className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                              Machine Learning <KeyboardArrowRight />
                            </Link>
                          </div>
                        </div>
                      )}
                    </p>
                    <Link
                      to="/data-consultation"
                      onClick={() => setNav(false)}
                      className=" py-[15px] px-[20px] text-[14px] text-[#1A1A1A] border-b border-[#C3C3C3]">
                      Consultation
                    </Link>

                    {/* others  */}
                    <p
                      className=" py-[15px] px-[20px] text-[14px] text-[#1A1A1A] flex items-center justify-between border-b border-[#C3C3C3] relative z-10"
                      onClick={handleOpen}
                      id="others">
                      Others
                      <span>
                        {others ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </span>
                      {/* opened course content in mobile view  */}
                      {others && (
                        <div
                          className="    flex flex-col  absolute top-[100%] left-0 right-0 bg-[#F6F6F6]  "
                          onClick={handleClose}
                          id="others">
                          <div className=" text-[#1A1A1A]  flex flex-col ">
                            <Link
                              to="/blog"
                              className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                              Blogs <KeyboardArrowRight />
                            </Link>
                            <Link
                              to="/partner-with-us"
                              className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                              Partner with us <KeyboardArrowRight />
                            </Link>
                            <Link
                              to="/zion-tech-hub-webinar"
                              className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                              Webinar
                              <KeyboardArrowRight />
                            </Link>
                            <Link
                              to="/zion-tech-hub-hackathon"
                              className=" py-[17px] px-[20px] font-[400]  flex items-center justify-between w-full">
                              Hackathon <KeyboardArrowRight />
                            </Link>
                          </div>
                        </div>
                      )}
                    </p>
                    <Link
                      to="/contact-us"
                      onClick={() => setNav(false)}
                      className=" py-[15px] px-[20px] text-[14px] text-[#1A1A1A] border-b border-[#514545]">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
