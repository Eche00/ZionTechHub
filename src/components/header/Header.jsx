import React from "react";
import Topheader from "./Topheader";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  // all routes where Navbar should show
  const navbarRoutes = [
    // Old courses
    /*"/data-analystics-training",
    "/data-science-course",
    "/web-development-training",
    "/cloud-computing-course",
    "/machine-learning-course",
    "/digital-marketing-training",*/
    
    // New courses
    "/healthcare-data-analytics",
    "/financial-data-analytics",
    "/sales-marketing-data-analytics",
    "/supply-chain-analytics",
    "/data-science-and-ai",
    "/ai-automation",
  ];

  return (
    <header>
      {/* Fixed top header */}
      <div className="w-full fixed z-50 bg-[#F5F5F5]/60 backdrop-blur-sm">
        <Topheader />
      </div>

      {/* Render Navbar only when route is active */}
      {navbarRoutes.map((route) => (
        <NavLink
          key={route}
          to={route}
          className={({ isActive }) => (isActive ? "w-full" : "hidden")}>
          <div className="pt-20">
            <Navbar />
          </div>
        </NavLink>
      ))}
    </header>
  );
}

export default Header;
