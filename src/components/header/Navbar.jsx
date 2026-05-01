import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../assets";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/Config/firebase";


function Navbar() {
  const [courseOpen, setCourseOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [workshop, setWorkshop] = useState(null);

  // Fetch workshop details from Firestore
  useEffect(() => {
    const docRef = doc(db, "workshopinfo", "main");
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      setWorkshop(docSnap.exists() ? docSnap.data() : null);
    });
    return () => unsubscribe();
  }, []);

  // Exit SVG for mobile
  const ExitIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none">
      <path
        d="M18 1L1.66666 17.3333M1.66666 1L18 17.3333"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Updated course links to match new offerings
  const courseLinks = [
   { to: "/healthcare-data-analytics", label: "Healthcare Data Analytics" },
    { to: "/financial-data-analytics", label: "Financial Data Analytics" },
    { to: "/sales-marketing-data-analytics", label: "Sales and Marketing Data Analytics" },
    { to: "/supply-chain-analytics", label: "Supply Chain Analytics" },
    { to: "/data-science-and-ai", label: "Data Science and AI" },
    { to: "/ai-automation", label: "AI Automation" },
  ];

  // Shared others links
  const othersLinks = [
    { to: "/blog", label: "Blogs" },
    { to: "/partner-with-us", label: "Partner with us" },
    {
      to: "/zion-tech-hub-workshop-webinar",
      label: workshop?.type === "Webinar" ? "Webinar" : "Workshop",
    },
    { to: "/zion-tech-hub-hackathon", label: "Hackathon" },
    { to: "/affiliate-program", label: "Affiliate Program" },
  ];

  // Reusable dropdown (desktop)
  const Dropdown = ({ links }) => (
    <div className="hidden group-hover:flex flex-col text-[16px] font-[400] text-[#1A1A1A80] absolute bg-[#F0F0F0] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] z-40 p-[12px] text-nowrap">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]">
          {link.label}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="relative z-20">
      <div className="flex justify-between items-center max-w-[90%] mx-auto py-[10px] font-sans">
        {/* Logo */}
        <Link to="/" className="flex-1">
          <img
            src={logo}
            alt="Logo"
            className="sm:w-[95px] sm:h-[51px] w-[67px] h-[39px] object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-1 items-center justify-between text-[16px] font-[400] text-gray-500 gap-[10px]">
          <NavLink
            to="/"
            className={({ isActive }) => isActive && "text-[#1A1A1A]"}>
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => isActive && "text-[#1A1A1A]"}>
            About
          </NavLink>

          {/* Courses Dropdown */}
          <div className="group relative cursor-pointer">
            <span className="flex items-center">
              Courses <KeyboardArrowDown fontSize="small" />
            </span>
            <Dropdown links={courseLinks} />
          </div>

          <NavLink
            to="/data-consultation"
            className={({ isActive }) => isActive && "text-[#1A1A1A]"}>
            Consultation
          </NavLink>

          {/* Others Dropdown */}
          <div className="group relative cursor-pointer">
            <span className="flex items-center">
              Others <KeyboardArrowDown fontSize="small" />
            </span>
            <Dropdown links={othersLinks} />
          </div>

          <NavLink
            to="/contact-us"
            className={({ isActive }) => isActive && "text-[#1A1A1A]"}>
            Contact
          </NavLink>

          <Link to="/enroll">
            <button className="bg-[#034FE3] text-white font-[500] rounded-[10px] text-[16px] px-[24px] py-[12px]">
              Enroll
            </button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex gap-[27px] items-center">
          <Link to="/enroll">
            <button className="bg-[#034FE3] text-white font-[500] rounded-[5px] text-[14px] px-[20px] py-[10px]">
              Enroll
            </button>
          </Link>
          <span
            className="text-[28px] text-[#333333] cursor-pointer"
            onClick={() => setMobileNavOpen(true)}>
            &#9776;
          </span>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileNavOpen && (
        <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 z-10 h-screen">
          <div className="flex flex-col absolute left-0 right-0 top-0 bg-white z-50">
            {/* Close button */}
            <div className="flex justify-end">
              <span
                className="py-[24px] px-[20px] cursor-pointer"
                onClick={() => setMobileNavOpen(false)}>
                <ExitIcon />
              </span>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col">
              {/* Main links */}
              {[
                { to: "/", label: "Home" },
                { to: "/about-us", label: "About Us" },
                { to: "/data-consultation", label: "Consultation" },
                { to: "/contact-us", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileNavOpen(false)}
                  className="py-[15px] px-[20px] text-[14px] text-[#1A1A1A] border-b border-[#C3C3C3]">
                  {link.label}
                </Link>
              ))}

              {/* Courses accordion */}
              <button
                onClick={() => setCourseOpen(!courseOpen)}
                className="py-[15px] px-[20px] text-[14px] flex justify-between items-center border-b border-[#C3C3C3]">
                Courses{" "}
                {courseOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </button>
              {courseOpen && (
                <div className="flex flex-col bg-[#F6F6F6] ">
                  {courseLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileNavOpen(false)}
                      className="py-[17px] px-[20px] font-[400] flex justify-between">
                      {link.label} <KeyboardArrowRight />
                    </Link>
                  ))}
                </div>
              )}

              {/* Others accordion */}
              <button
                onClick={() => setOthersOpen(!othersOpen)}
                className="py-[15px] px-[20px] text-[14px] flex justify-between items-center border-b border-[#C3C3C3]">
                Others{" "}
                {othersOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </button>
              {othersOpen && (
                <div className="flex flex-col bg-[#F6F6F6]">
                  {othersLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileNavOpen(false)}
                      className="py-[17px] px-[20px] font-[400] flex justify-between">
                      {link.label} <KeyboardArrowRight />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
