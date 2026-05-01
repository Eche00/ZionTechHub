import { Star } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Topheader() {
  const [course, setCourse] = useState(false);
  const { pathname } = useLocation();

  // Reusable banner text
  const bannerMessage = (
    <p className="md:text-[18px] lg:text-[14px] text-[12px] text-[#FFFFFF] font-[300] p-[16px] bg-[#1A1A1A] w-full text-center">
      Join our Affliate Marketing Program and earn up to 10% commission on every referral!
      <Link to="/affiliate-program" className="font-[600] underline px-5">Join Now</Link>
    </p>
  );

  // All courses (new courses only)
  const allCourses = [
    { to: "/healthcare-data-analytics", label: "Healthcare Data Analytics" },
    { to: "/financial-data-analytics", label: "Financial Data Analytics" },
    { to: "/sales-marketing-data-analytics", label: "Sales & Marketing Data Analytics" },
    { to: "/supply-chain-analytics", label: "Supply Chain Analytics" },
    { to: "/data-science-and-ai", label: "Data Science and AI" },
    { to: "/ai-automation", label: "AI Automation" },
  ];

  // Reusable dropdown menu for courses (block layout)
  const CoursesDropdown = () =>
    course && (
      <div className="text-[16px] font-[400] text-[#1A1A1A80] absolute bg-[#F0F0F0] rounded-[20px] z-40 mt-2">
        <div className="flex flex-col p-[12px] min-w-[250px]">
          {allCourses.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="p-[12px] hover:bg-[#1A1A1A26] rounded-[8px] whitespace-nowrap"
              onClick={() => setCourse(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );

  // Reusable navigation section
  const NavSection = () => (
    <section className="sm:flex hidden flex-1 items-center justify-between text-[16px] font-[400] text-gray-500">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-us">About</NavLink>
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setCourse(true)}
        onMouseLeave={() => setCourse(false)}>
        <span className="flex items-center">
          Courses <KeyboardArrowDownIcon />
        </span>
        <CoursesDropdown />
      </div>
      <NavLink to="/data-consultation">Consultation</NavLink>
      <NavLink to="/contact-us">Contact</NavLink>
      <button className="bg-[#034FE3] text-white font-[500] rounded-[10px] text-[16px] px-[24px] py-[12px]">
        <Link to="/enroll">Enroll</Link>
      </button>
    </section>
  );

  // Dynamic banner configs for all courses
  const courseBanners = {
    // New courses
    "/healthcare-data-analytics": "Healthcare Data Analytics Course:",
    "/financial-data-analytics": "Financial Data Analytics Course:",
    "/sales-marketing-data-analytics": "Sales & Marketing Data Analytics Course:",
    "/supply-chain-analytics": "Supply Chain Analytics Course:",
    "/data-science-and-ai": "Data Science and AI Course:",
    "/ai-automation": "AI Automation Course:",
  };

  return (
    <div>
      {/* General pages with simple banner + navbar */}
      {[
        "/",
        "/about-us",
        "/data-consultation",
        "/partner-with-us",
        "/contact-us",
        "/zion-tech-hub-workshop-webinar",
        "/zion-tech-hub-hackathon",
        "/blog",
        "/affiliate-program",
      ].includes(pathname) && (
          <>
            {bannerMessage}
            <Navbar />
          </>
        )}

      {/* Course pages with detailed headers */}
      {Object.keys(courseBanners).map(
        (route) =>
          pathname === route && (
            <div key={route} className="flex w-full bg-[#1A1A1A] items-center">
              <div className="w-[90%] mx-auto flex items-center justify-between sm:py-[8px] py-[16px]">
                {/* Left section: course details */}
                <section className="flex-1">
                  <article className="flex items-center sm:gap-[5px] whitespace-nowrap">
                    <h2 className="md:text-[18px] lg:text-[12px] text-[11.5px] font-[600] text-white">
                      {courseBanners[route]}
                    </h2>
                    <p className="sm:text-[16px] text-[12px] font-[600] text-white">
                      4.8
                    </p>
                    <p className="text-[12px] font-[400] text-white underline flex items-center">
                      <span className="text-[#034FE3]">
                        <Star fontSize="medium" />
                      </span>
                      (75,765 reviews)
                    </p>
                  </article>
                </section>

                {/* Right section: navigation */}
                <NavSection />
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Topheader;
