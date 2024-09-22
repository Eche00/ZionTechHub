import { Star } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Topheader() {
  const [course, setCourse] = useState(false);

  return (
    <div>
      {/* home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " flex w-full bg-[#1A1A1A] items-center justify-center"
            : " hidden"
        }>
        <p className=" sm:text-[18px] text-[14px] text-[#FFFFFF] font-[300]   p-[16px]">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
      </NavLink>

      {/* about */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? " flex w-full bg-[#1A1A1A] items-center justify-center"
            : " hidden"
        }>
        <p className=" sm:text-[18px] text-[12px] text-[#FFFFFF] font-[300]   p-[16px]">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
      </NavLink>

      {/* data analysis */}
      <NavLink
        to="/dataanalystics"
        className={({ isActive }) =>
          isActive ? " flex w-full bg-[#1A1A1A] items-center " : " hidden"
        }>
        <div className=" w-[90%] mx-auto flex items-center justify-between sm:py-[8px]  py-[16px]">
          <section className=" flex-1 ">
            <article className=" flex items-center sm:gap-[5px] ">
              <h2 className=" sm:text-[18px] text-[12px] font-[600] text-white">
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
        </div>
      </NavLink>

      {/* data science */}
      <NavLink
        to="/datascience"
        className={({ isActive }) =>
          isActive ? " flex w-full bg-[#1A1A1A] items-center " : " hidden"
        }>
        <div className=" w-[90%] mx-auto flex items-center justify-between py-[8px] ">
          <section className=" flex-1 ">
            <article className=" flex items-center gap-[5px]">
              <h2 className=" text-[18px] font-[600] text-white">
                Complete Data Analytics Course:
              </h2>
              <p className=" text-[16px] font-[600] text-white">4.8</p>
              <p className=" text-[12px] font-[400] text-white underline flex items-center">
                <span className=" text-[#034FE3]">
                  <Star fontSize="medium" />
                </span>
                (75,765 reviews)
              </p>
            </article>
            <p className=" text-[14px] font-[700] text-white">Starts Aug 21</p>
          </section>
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
        </div>
      </NavLink>

      {/* web development */}
      <NavLink
        to="/webdevelopment"
        className={({ isActive }) =>
          isActive
            ? " flex w-full bg-[#1A1A1A] items-center justify-center"
            : " hidden"
        }>
        {/* data science  */}
        <div className=" w-[90%] mx-auto flex items-center justify-between py-[8px] ">
          <section className=" flex-1 ">
            <article className=" flex items-center gap-[5px]">
              <h2 className=" text-[18px] font-[600] text-white">
                Web Development Course:
              </h2>
              <p className=" text-[16px] font-[600] text-white">4.8</p>
              <p className=" text-[12px] font-[400] text-white underline flex items-center">
                <span className=" text-[#034FE3]">
                  <Star fontSize="medium" />
                </span>
                (75,765 reviews)
              </p>
            </article>
            <p className=" text-[14px] font-[700] text-white">Starts Aug 21</p>
          </section>
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
        </div>
      </NavLink>

      {/* Cloud competing & Dev ops */}
      <NavLink
        to="/cloudcomputing"
        className={({ isActive }) =>
          isActive
            ? " flex w-full bg-[#1A1A1A] items-center justify-center"
            : " hidden"
        }>
        {/* data science  */}
        <div className=" w-[90%] mx-auto flex items-center justify-between py-[8px] ">
          <section className=" flex-1 ">
            <article className=" flex items-center gap-[5px]">
              <h2 className=" text-[18px] font-[600] text-white">
                Cloud Computing & DevOps
              </h2>
              <p className=" text-[16px] font-[600] text-white">4.8</p>
              <p className=" text-[12px] font-[400] text-white underline flex items-center">
                <span className=" text-[#034FE3]">
                  <Star fontSize="medium" />
                </span>
                (75,765 reviews)
              </p>
            </article>
            <p className=" text-[14px] font-[700] text-white">Starts Aug 21</p>
          </section>
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
        </div>
      </NavLink>

      {/* machine learning */}
      <NavLink
        to="/machinelearning"
        className={({ isActive }) =>
          isActive
            ? " flex w-full bg-[#1A1A1A] items-center justify-center"
            : " hidden"
        }>
        {/* data science  */}
        <div className=" w-[90%] mx-auto flex items-center justify-between py-[8px] ">
          <section className=" flex-1 ">
            <article className=" flex items-center gap-[5px]">
              <h2 className=" text-[18px] font-[600] text-white">
                Machine Learning Training
              </h2>
              <p className=" text-[16px] font-[600] text-white">4.8</p>
              <p className=" text-[12px] font-[400] text-white underline flex items-center">
                <span className=" text-[#034FE3]">
                  <Star fontSize="medium" />
                </span>
                (75,765 reviews)
              </p>
            </article>
            <p className=" text-[14px] font-[700] text-white">Starts Aug 21</p>
          </section>
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
        </div>
      </NavLink>

      {/* consult */}
      <NavLink
        to="/consult"
        className={({ isActive }) =>
          isActive
            ? " flex w-full bg-[#1A1A1A] items-center justify-center"
            : " hidden"
        }>
        <p className=" text-[18px] text-[#FFFFFF] font-[300]   p-[16px]">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
      </NavLink>

      {/* contact */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? " flex w-full bg-[#1A1A1A] items-center justify-center"
            : " hidden"
        }>
        <p className=" text-[18px] text-[#FFFFFF] font-[300]   p-[16px]">
          We're offering Data Consultation Services. Book now to get updated
          with your business.{" "}
          <span className=" font-[600] underline  px-5">Book Now</span>
        </p>
      </NavLink>
    </div>
  );
}

export default Topheader;
