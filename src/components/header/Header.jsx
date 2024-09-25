import React, { useState } from "react";
import Topheader from "./Topheader";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className=" w-full   fixed  z-50 bg-[#F5F5F5]/60  backdrop-blur-sm">
        <Topheader />
      </div>
      <NavLink
        to="/dataanalystics"
        className={({ isActive }) => (isActive ? " w-full " : " hidden")}>
        <div className="pt-20  ">
          <Navbar />
        </div>
      </NavLink>
      <NavLink
        to="/datascience"
        className={({ isActive }) => (isActive ? " w-full " : " hidden")}>
        <div className="pt-20 o">
          <Navbar />
        </div>
      </NavLink>
      <NavLink
        to="/webdevelopment"
        className={({ isActive }) => (isActive ? " w-full " : " hidden")}>
        <div className="pt-20 o">
          <Navbar />
        </div>
      </NavLink>
      <NavLink
        to="/cloudcomputing"
        className={({ isActive }) => (isActive ? " w-full " : " hidden")}>
        <div className="pt-20 o">
          <Navbar />
        </div>
      </NavLink>
      <NavLink
        to="/machinelearning"
        className={({ isActive }) => (isActive ? " w-full " : " hidden")}>
        <div className="pt-20 o">
          <Navbar />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
