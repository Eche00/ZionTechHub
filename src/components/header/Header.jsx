import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { logo } from "../../assets";

function Header() {
  const [course, setCourse] = useState(false);
  return (
    <header className=" w-full   fixed z-50 bg-white/70 backdrop-blur-sm">
      <div className=" bg-[#1A1A1A]">
        <p className=" text-[18px] text-[#FFFFFF] font-[300]  text-center p-[16px]">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
      </div>
      <div className=" flex justify-between items-center max-w-[90%] mx-auto  font-sans p-[10px]">
        {/* logo */}
        <section className=" flex-1 text-xl font-bold flex items-baseline gap-1">
          <div className="">
            <img
              className=" w-[95px] h-[51px]   object-cover"
              src={logo}
              alt=""
            />
          </div>
        </section>

        {/*  navigation  & signin/profile  */}
        <section className=" flex flex-1 items-center justify-between text-[16px] font-[400]   text-gray-500 ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#1A1A1A] relative" : ""
            }
            onClick={() => setCourse(!course)}>
            Courses <KeyboardArrowDownIcon />
            {course && (
              <div className=" text-[16px]  font-[400] text-[#1A1A1A80]  flex flex-col items-start gap-[10px] absolute bg-[#F0F0F0]   rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] z-40">
                <div className="  font-[400] text-[16px]  p-[24px] flex flex-col ">
                  <Link to="/dataanalystics" className=" p-[16px] ">
                    Data Analystics
                  </Link>
                  <Link to="/datascience" className=" p-[16px] ">
                    Data Science
                  </Link>
                  <Link to="/webdevelopment" className=" p-[16px] ">
                    Web Development
                  </Link>
                  <Link
                    to="/cloudcomputing"
                    className=" p-[16px]  whitespace-nowrap">
                    Cloud Computing & DevOps
                  </Link>
                  <Link to="/machinelearning" className=" p-[16px] ">
                    Machine Learning
                  </Link>
                </div>
              </div>
            )}
          </NavLink>

          <NavLink
            to="/consult"
            className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
            Consultation
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
            Contact
          </NavLink>

          <button className=" bg-[#034FE3] text-white font-[500] rounded-[10px] text-[16px] px-[24px] py-[12px]">
            <Link to="/enroll"> Enroll</Link>
          </button>
        </section>
      </div>
    </header>
  );
}

export default Header;
