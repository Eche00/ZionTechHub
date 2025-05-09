import { Star } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Navbar from "./Navbar";

function Topheader() {
  const [course, setCourse] = useState(false);

  return (
    <div>
      {/* home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? " flex w-full   justify-center flex-col" : " hidden"
        }>
        <p className=" md:text-[18px] lg:text-[14px] text-[12px] text-[#FFFFFF] font-[300]   p-[16px] bg-[#1A1A1A] w-full  text-center">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>

        <Navbar />
      </NavLink>

      {/* about */}
      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          isActive ? " flex w-full  justify-center flex-col" : " hidden"
        }>
        <p className=" md:text-[18px] lg:text-[14px] text-[12px] text-[#FFFFFF] font-[300]   p-[16px] bg-[#1A1A1A] w-full  text-center">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
        <Navbar />
      </NavLink>

      {/* data analysis */}
      <NavLink
        to="/data-analystics-training"
        className={({ isActive }) =>
          isActive ? " flex w-full bg-[#1A1A1A] items-center " : " hidden"
        }>
        <div className=" w-[90%] mx-auto flex items-center justify-between sm:py-[8px]  py-[16px]">
          <section className=" flex-1 ">
            <article className=" flex items-center sm:gap-[5px] ">
              <h2 className=" md:text-[18px] lg:text-[12px] text-[10px] font-[600] text-white">
                Complete Data Analytics Course:
              </h2>
              <p className=" sm:text-[16px] text-[12px] font-[600] text-white">
                4.8
              </p>
              <p className=" text-[12px] font-[400] text-white underline flex items-center">
                <span className=" text-[#034FE3]">
                  <Star fontSize="medium" />
                </span>
                (75,765 reviews)
              </p>
            </article>
            <p className=" sm:text-[14px] text-[12px] font-[700] text-white">
              Starts Aug 21
            </p>
          </section>
          <section className=" sm:flex  hidden flex-1 items-center justify-between text-[16px] font-[400]   text-gray-500 ">
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
            <NavLink
              className=" group-hover:hidden relative "
              onClick={() => setCourse(!course)}>
              Courses <KeyboardArrowDownIcon />
              {course && (
                <div className=" text-[16px]  font-[400] text-[#1A1A1A80]  flex flex-col items-start gap-[10px] absolute bg-[#F0F0F0]   rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] z-40  group">
                  <div className="  font-[400] text-[16px]  p-[12px] flex flex-col ">
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
                      to="//web-development-training"
                      className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                      Web Development
                    </Link>
                    <Link
                      to="/cloud-computing-course"
                      className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]  whitespace-nowrap">
                      Cloud Computing & DevOps
                    </Link>
                    <Link
                      to="//machine-learning-course"
                      className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                      Machine Learning
                    </Link>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink
              to="/data-consultation"
              className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
              Consultation
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
        </div>
      </NavLink>

      {/* data science */}
      <NavLink
        to="/data-science-course"
        className={({ isActive }) =>
          isActive ? " flex w-full bg-[#1A1A1A] items-center " : " hidden"
        }>
        <div className=" w-[90%] mx-auto flex items-center justify-between sm:py-[8px]  py-[16px]">
          <section className=" flex-1 ">
            <article className=" flex items-center sm:gap-[5px] ">
              <h2 className=" sm:text-[18px] text-[12px] font-[600] text-white">
                Complete Data Science Course:
              </h2>
              <p className=" sm:text-[16px] text-[12px] font-[600] text-white">
                4.8
              </p>
              <p className=" text-[12px] font-[400] text-white underline flex items-center">
                <span className=" text-[#034FE3]">
                  <Star fontSize="medium" />
                </span>
                (75,765 reviews)
              </p>
            </article>
            <p className=" sm:text-[14px] text-[12px] font-[700] text-white">
              Starts Aug 21
            </p>
          </section>
          <section className=" sm:flex  hidden flex-1 items-center justify-between text-[16px] font-[400]   text-gray-500 ">
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
            <NavLink
              className=" group-hover:hidden relative "
              onClick={() => setCourse(!course)}>
              Courses <KeyboardArrowDownIcon />
              {course && (
                <div className=" text-[16px]  font-[400] text-[#1A1A1A80]  flex flex-col items-start gap-[10px] absolute bg-[#F0F0F0]   rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] z-40  group">
                  <div className="  font-[400] text-[16px]  p-[12px] flex flex-col ">
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
                      to="/cloudcomputing"
                      className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px]  whitespace-nowrap">
                      Cloud Computing & DevOps
                    </Link>
                    <Link
                      to="//machine-learning-course"
                      className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                      Machine Learning
                    </Link>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink
              to="/data-consultation"
              className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
              Consultation
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
        </div>
      </NavLink>

      {/* web development */}
      <NavLink
        to="/web-development-training"
        className={({ isActive }) =>
          isActive ? " flex w-full bg-[#1A1A1A] items-center " : " hidden"
        }>
        <div className=" w-[95%] sm:w-[90%] mx-auto flex items-center justify-between sm:py-[8px]  py-[16px]">
          <section className=" flex-1 ">
            <article className=" flex items-center sm:gap-[5px]  whitespace-nowrap">
              <h2 className=" md:text-[18px] lg:text-[12px] text-[11.5px] font-[600] text-white">
                Complete Web Development Course:
              </h2>
              <p className=" sm:text-[16px] text-[12px] font-[600] text-white">
                4.8
              </p>
              <p className=" text-[12px] font-[400] text-white underline flex items-center whitespace-nowrap">
                <span className=" text-[#034FE3]">
                  <Star fontSize="medium" />
                </span>
                (75,765 reviews)
              </p>
            </article>
            <p className=" sm:text-[14px] text-[12px] font-[700] text-white">
              Starts Aug 21
            </p>
          </section>
          <section className=" sm:flex  hidden flex-1 items-center justify-between text-[16px] font-[400]   text-gray-500 ">
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
            <NavLink
              className=" group-hover:hidden relative "
              onClick={() => setCourse(!course)}>
              Courses <KeyboardArrowDownIcon />
              {course && (
                <div className=" text-[16px]  font-[400] text-[#1A1A1A80]  flex flex-col items-start gap-[10px] absolute bg-[#F0F0F0]   rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] z-40  group">
                  <div className="  font-[400] text-[16px]  p-[12px] flex flex-col ">
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
                      to="//machine-learning-course"
                      className=" p-[16px] hover:bg-[#1A1A1A26] rounded-[5px] ">
                      Machine Learning
                    </Link>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink
              to="/data-consultation"
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
      </NavLink>

      {/* Cloud competing & Dev ops */}
      <NavLink
        to="/cloud-computing-course"
        className={({ isActive }) =>
          isActive ? " flex w-full bg-[#1A1A1A] items-center " : " hidden"
        }>
        <div className=" w-[95%] sm:w-[90%] mx-auto flex items-center justify-between sm:py-[8px]  py-[16px]">
          <section className=" flex-1 ">
            <article className=" flex items-center sm:gap-[5px]  whitespace-nowrap">
              <h2 className=" sm:text-[18px] text-[12px] font-[600] text-white">
                Cloud Computing & Dev Ops:
              </h2>
              <p className=" sm:text-[16px] text-[12px] font-[600] text-white">
                4.8
              </p>
              <p className=" text-[12px] font-[400] text-white underline flex items-center whitespace-nowrap">
                <span className=" text-[#034FE3]">
                  <Star fontSize="medium" />
                </span>
                (75,765 reviews)
              </p>
            </article>
            <p className=" sm:text-[14px] text-[12px] font-[700] text-white">
              Starts Aug 21
            </p>
          </section>
          <section className=" sm:flex  hidden flex-1 items-center justify-between text-[16px] font-[400]   text-gray-500 ">
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
                      to="//web-development-training"
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
              )}
            </NavLink>

            <NavLink
              to="/data-consultation"
              className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
              Consultation
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
        </div>
      </NavLink>

      {/* machine learning */}
      <NavLink
        to="/machine-learning-course"
        className={({ isActive }) =>
          isActive ? " flex w-full bg-[#1A1A1A] items-center " : " hidden"
        }>
        <div className=" w-[95%] sm:w-[90%] mx-auto flex items-center justify-between sm:py-[8px]  py-[16px]">
          <section className=" flex-1 ">
            <article className=" flex items-center sm:gap-[5px]  whitespace-nowrap">
              <h2 className=" sm:text-[18px] text-[12px] font-[600] text-white">
                Machine Learning:
              </h2>
              <p className=" sm:text-[16px] text-[12px] font-[600] text-white">
                4.8
              </p>
              <p className=" text-[12px] font-[400] text-white underline flex items-center whitespace-nowrap">
                <span className=" text-[#034FE3]">
                  <Star fontSize="medium" />
                </span>
                (75,765 reviews)
              </p>
            </article>
            <p className=" sm:text-[14px] text-[12px] font-[700] text-white">
              Starts Aug 21
            </p>
          </section>
          <section className=" sm:flex  hidden flex-1 items-center justify-between text-[16px] font-[400]   text-gray-500 ">
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
                      to="//web-development-training"
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
              )}
            </NavLink>

            <NavLink
              to="/data-consultation"
              className={({ isActive }) => (isActive ? "text-[#1A1A1A]" : "")}>
              Consultation
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
        </div>
      </NavLink>

      {/* consult */}
      <NavLink
        to="/data-consultation"
        className={({ isActive }) =>
          isActive ? " flex w-full  justify-center flex-col" : " hidden"
        }>
        <p className=" md:text-[18px] lg:text-[14px] text-[12px] text-[#FFFFFF] font-[300]   p-[16px] bg-[#1A1A1A] w-full  text-center">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
        <Navbar />
      </NavLink>

      {/* partnerwithus */}
      <NavLink
        to="/partner-with-us"
        className={({ isActive }) =>
          isActive ? " flex w-full  justify-center flex-col" : " hidden"
        }>
        <p className=" md:text-[18px] lg:text-[14px] text-[12px] text-[#FFFFFF] font-[300]   p-[16px] bg-[#1A1A1A] w-full  text-center">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
        <Navbar />
      </NavLink>

      {/* contact */}
      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          isActive ? " flex w-full  justify-center flex-col" : " hidden"
        }>
        <p className=" md:text-[18px] lg:text-[14px] text-[12px] text-[#FFFFFF] font-[300]   p-[16px] bg-[#1A1A1A] w-full  text-center">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
        <Navbar />
      </NavLink>
      <NavLink
        to="/zion-tech-hub-weekend-webinar"
        className={({ isActive }) =>
          isActive ? " flex w-full  justify-center flex-col" : " hidden"
        }>
        <p className=" md:text-[18px] lg:text-[14px] text-[12px] text-[#FFFFFF] font-[300]   p-[16px] bg-[#1A1A1A] w-full  text-center">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
        <Navbar />
      </NavLink>
      <NavLink
        to="/zion-tech-hub-hackathon"
        className={({ isActive }) =>
          isActive ? " flex w-full  justify-center flex-col" : " hidden"
        }>
        <p className=" md:text-[18px] lg:text-[14px] text-[12px] text-[#FFFFFF] font-[300]   p-[16px] bg-[#1A1A1A] w-full  text-center">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
        <Navbar />
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? " flex w-full  justify-center flex-col" : " hidden"
        }>
        <p className=" md:text-[18px] lg:text-[14px] text-[12px] text-[#FFFFFF] font-[300]   p-[16px] bg-[#1A1A1A] w-full  text-center">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
        <Navbar />
      </NavLink>
    </div>
  );
}

export default Topheader;
