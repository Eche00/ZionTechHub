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
      We're offering Data Consultation Services. Book now to get updated with
      your business. <span className="font-[600] underline px-5">Book Now</span>
    </p>
  );

  // Reusable dropdown menu for courses
  const CoursesDropdown = () =>
    course && (
      <div className="text-[16px] font-[400] text-[#1A1A1A80] flex flex-col items-start gap-[10px] absolute bg-[#F0F0F0] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] z-40">
        <div className="font-[400] text-[16px] p-[12px] flex flex-col">
          <Link
            to="/data-analystics-training"
            className="p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]">
            Data Analytics
          </Link>
          <Link
            to="/data-science-course"
            className="p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]">
            Data Science
          </Link>
          <Link
            to="/web-development-training"
            className="p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]">
            Web Development
          </Link>
          <Link
            to="/cloud-computing-course"
            className="p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] whitespace-nowrap">
            Cloud Computing & DevOps
          </Link>
          <Link
            to="/machine-learning-course"
            className="p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]">
            Machine Learning
          </Link>
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
        onClick={() => setCourse((prev) => !prev)}>
        Courses <KeyboardArrowDownIcon />
        <CoursesDropdown />
      </div>
      <NavLink to="/data-consultation">Consultation</NavLink>
      <NavLink to="/contact-us">Contact</NavLink>
      <button className="bg-[#034FE3] text-white font-[500] rounded-[10px] text-[16px] px-[24px] py-[12px]">
        <Link to="/enroll">Enroll</Link>
      </button>
    </section>
  );

  // Dynamic banner configs for courses
  const courseBanners = {
    "/data-analystics-training": "Complete Data Analytics Course:",
    "/data-science-course": "Complete Data Science Course:",
    "/web-development-training": "Complete Web Development Course:",
    "/cloud-computing-course": "Cloud Computing & DevOps:",
    "/machine-learning-course": "Machine Learning:",
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
        "/eche-acces-create-blog",
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
                  <p className="sm:text-[14px] text-[12px] font-[700] text-white">
                    Starts Aug 21
                  </p>
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
