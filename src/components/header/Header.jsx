import React from "react";
import Topheader from "./Topheader";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  
  // All course routes (old and new)
  const courseRoutes = [
   
    
    // New courses
    "/healthcare-data-analytics",
    "/financial-data-analytics",
    "/sales-marketing-data-analytics",
    "/supply-chain-analytics",
    "/data-science-and-ai",
    "/ai-automation",
  ];
  
  // Check if current route is a course route
  const isCourseRoute = courseRoutes.includes(location.pathname);

  return (
    <header>
      {/* Fixed top header - always show on all pages */}
      <div className="w-full fixed z-50 bg-[#F5F5F5]/60 backdrop-blur-sm">
        <Topheader />
      </div>

      {/* Render Navbar only on course routes */}
      {isCourseRoute && (
        <div className="pt-20">
          <Navbar />
        </div>
      )}
    </header>
  );
}

export default Header;