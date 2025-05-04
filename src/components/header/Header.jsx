import React, { useState } from "react";
import Topheader from "./Topheader";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className=" w-full   fixed  z-50 bg-[#F5F5F5]/60  backdrop-blur-sm ">
        <Topheader />
      </div>
      <NavLink
        to="/data-analystics-training"
        className={({ isActive }) => (isActive ? " w-full " : " hidden")}>
        <div className="pt-20  z-0">
          <Navbar />
        </div>
      </NavLink>
      <NavLink
        to="/data-science-course"
        className={({ isActive }) => (isActive ? " w-full " : " hidden")}>
        <div className="pt-20 o">
          <Navbar />
        </div>
      </NavLink>
      <NavLink
        to="/web-development-training"
        className={({ isActive }) => (isActive ? " w-full " : " hidden")}>
        <div className="pt-20 o">
          <Navbar />
        </div>
      </NavLink>
      <NavLink
        to="/cloud-computing-course"
        className={({ isActive }) => (isActive ? " w-full " : " hidden")}>
        <div className="pt-20 o">
          <Navbar />
        </div>
      </NavLink>
      <NavLink
        to="/machine-learning-course"
        className={({ isActive }) => (isActive ? " w-full " : " hidden")}>
        <div className="pt-20 ">
          <Navbar />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
