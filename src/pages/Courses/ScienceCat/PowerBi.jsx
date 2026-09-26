import React, { useState } from "react";
import { SirGodsentprofile, googlemeet } from "../../../assets";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const dot = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none">
    <g clip-path="url(#clip0_841_1900)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.852Z"
        fill="#034FE3"
      />
    </g>
    <defs>
      <clipPath id="clip0_841_1900">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
function powerBi() {
  const [firstmonth, setFirstMonth] = useState(false);
  const [secondmonth, setSecondMonth] = useState(false);
  const [thirdmonth, setThirdtMonth] = useState(false);
  const [fourthmonth, setFourthMonth] = useState(false);
  const [fifthmonth, setFifthMonth] = useState(false);
  const [sixthmonth, setSixtMonth] = useState(false);
  const [seventhmonth, setSeventhMonth] = useState(false);
  const [eighthmonth, setEighthMonth] = useState(false);

  const firstM = (e) => {
    e.preventDefault();
    setFirstMonth(!firstmonth);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
  };
  const secondM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(!secondmonth);
    setThirdtMonth(false);

    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
  };
  const thirdM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(!thirdmonth);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
  };
  const fourthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(!fourthmonth);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
  };
  const fifthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(!fifthmonth);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
  };
  const sixthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(!sixthmonth);
    setSeventhMonth(false);
    setEighthMonth(false);
  };
  const seventhM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(!seventhmonth);
    setEighthMonth(false);
  };
  const eighthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(!eighthmonth);
  };
  return (
    <div className="flex sm:flex-row flex-col-reverse gap-[25px] smm:w-[1238px] sm:w-[1150px] ">
      <div className=" flex-1 flex flex-col rounded-tr-[10px] overflow-hidden border border-gray-300 h-fit">
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={firstM}>
            {" "}
            {firstmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session _1A :Introduction to Power BI
            </p>
          </div>
          {firstmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Understanding Business Intelligence with Power
                BI
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Role of Power BI in modern data analytics
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Comparing Power BI with other BI tools like
                Tableau
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Overview of Microsoft Power Platform and
                Power BI products
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Transitioning from Excel to Power BI for data
                analysis
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={secondM}>
            {secondmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session_1B: Power BI Desktop Essentials
            </p>
          </div>{" "}
          {secondmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Installing and navigating Power BI Desktop
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Exploring Power BI Desktop interface
                components
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Connecting to data sources: Excel, SQL
                Server, Web, etc.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Data import methods: Import vs. DirectQuery
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Overview of Power BI Service and mobile
                capabilities
              </p>{" "}
            </section>
          )}
        </div>{" "}
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={thirdM}>
            {thirdmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session _2A: Building Your First Power BI Report
            </p>
          </div>
          {thirdmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Importing and transforming data in Power BI
                Desktop
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>  Creating visualizations: Bar, line, pie
                charts, etc.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>  Adding interactivity with slicers, filters,
                and drill-down paths
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Saving and publishing reports to Power BI
                Service
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Exploring Power BI Service features:
                Dashboards, data refresh, mobile access
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={fourthM}>
            {fourthmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session _2B: Data Transformation and Modeling 2.1. Power Query
              Essentials
            </p>
          </div>
          {fourthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Introduction to Power Query and Query Editor
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Data transformation tasks: Cleaning, shaping,
                and combining data
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Removing duplicates, handling errors, and
                data type conversions
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={fifthM}>
            {fifthmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session _3A: Data Modeling in Power BI
            </p>
          </div>
          {fifthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Understanding data modeling concepts and best
                practices
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Creating relationships between tables:
                One-to-one, one-to-many, many-to-many
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Working with calculated columns and measures
                for enhanced analysis
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Implementing data hierarchies and custom sort
                orders
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={sixthM}>
            {sixthmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session _3B: Advanced Data Visualization Techniques
            </p>
          </div>
          {sixthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Exploring advanced chart types: Treemap,
                scatter, funnel, gauge, etc.
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Customizing visuals: Formatting, colors,
                axes, legends, and tooltips
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Creating dynamic and interactive reports with
                bookmarks and buttons
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Assignment  Incorporating custom visuals and
                third-party integrations7
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={seventhM}>
            {seventhmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session_4A: DAX Fundamentals and Advanced Calculations
            </p>
          </div>
          {seventhmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Introduction to DAX
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Understanding Data Analysis Expressions (DAX)
                syntax and concepts
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Working with tables, columns, and rows in DAX
                expressions
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Introduction to row context and filter
                context
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Basic DAX Functions
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={eighthM}>
            {eighthmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session _4B: Capstone projects for project portfolio.
            </p>
          </div>
          {eighthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Capstone projects for project portfolio.
              </p>
            </section>
          )}
        </div>
      </div>
      {/* instructor section  */}
      <div className="flex flex-col gap-[36px] sm:py-[32px] py-[24px] sm:px-[48px] px-[20px] bg-[#EBECED] rounded-[10px] border border-gray-300 h-fit w-fit">
        <section className=" flex flex-col gap-[24px] ">
          <section className=" flex flex-col">
            {" "}
            <h2 className=" sm:text-[24px] text-[20px] text-[#034FE3] font-[600] w-fit">
              Instructor
            </h2>
            <p className=" text-[16px] text-[#1A1A1ACC] font-[300] w-fit">
              Certified Trainer at Zion Tech Hub
            </p>
          </section>
          <section className=" flex  gap-[14px] ">
            <img
              className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] object-cover rounded-full"
              src={SirGodsentprofile}
              alt=""
            />
            <div className=" flex flex-col text-[#1A1A1A] w-fit">
              <p className=" text-[18px] font-[600]">Ndoma Godsent</p>
              <p className=" text-[12px] font-[300]">
                Co-Founder, Data Analyst
              </p>
            </div>
          </section>
        </section>
        <span className=" h-[1px] sm:w-[317px] w-[300px] bg-[#1A1A1A1A]"></span>
        <section className="flex gap-[12px] w-fit items-center">
          <p className=" sm:text-[20px] text-[18px] font-[300] ">Live on</p>{" "}
          <img
            className=" w-[100px] h-[36px] object-cover"
            src={googlemeet}
            alt=""
          />
        </section>
      </div>
    </div>
  );
}

export default powerBi;
