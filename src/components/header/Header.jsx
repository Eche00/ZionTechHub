import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { logo } from "../../assets";
import Topheader from "./Topheader";
import { Menu } from "@mui/material";

function Header() {
  const [course, setCourse] = useState(false);
  return (
    <header className=" w-full   fixed z-50 bg-[#F5F5F5]/70 backdrop-blur-sm">
      <Topheader />

      <div className=" flex justify-between items-center max-w-[90%] mx-auto  font-sans py-[10px]">
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
        <section className=" sm:flex hidden flex-1 items-center justify-between text-[16px] font-[400]   text-gray-500 ">
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
            className=" group-hover:hidden relative "
            onClick={() => setCourse(!course)}>
            Courses <KeyboardArrowDownIcon />
            {course && (
              <div className=" text-[16px]  font-[400] text-[#1A1A1A80]  flex flex-col items-start gap-[10px] absolute bg-[#F0F0F0]   rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] z-40  group">
                <div className="  font-[400] text-[16px]  p-[12px] flex flex-col ">
                  <Link
                    to="/dataanalystics"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]">
                    Data Analystics
                  </Link>
                  <Link
                    to="/datascience"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                    Data Science
                  </Link>
                  <Link
                    to="/webdevelopment"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                    Web Development
                  </Link>
                  <Link
                    to="/cloudcomputing"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]  whitespace-nowrap">
                    Cloud Computing & DevOps
                  </Link>
                  <Link
                    to="/machinelearning"
                    className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
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
        <div className=" sm:hidden flex  gap-[27px] items-center">
          <button className=" bg-[#034FE3] text-white font-[500] rounded-[5px] text-[14px] px-[20px] py-[10px]">
            <Link to="/enroll"> Enroll</Link>
          </button>
          <span className=" text-[28px] text-[#333333]">&#9776;</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
