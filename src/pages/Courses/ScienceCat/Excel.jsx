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
function Excel() {
  const [firstmonth, setFirstMonth] = useState(false);
  const [secondmonth, setSecondMonth] = useState(false);
  const [thirdmonth, setThirdtMonth] = useState(false);
  const [fourthmonth, setFourthMonth] = useState(false);
  const [fifthmonth, setFifthMonth] = useState(false);
  const [sixthmonth, setSixtMonth] = useState(false);
  const [seventhmonth, setSeventhMonth] = useState(false);
  const [eighthmonth, setEighthMonth] = useState(false);
  const [ninethmonth, setNinethtMonth] = useState(false);

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
    setNinethtMonth(false);
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
    setNinethtMonth(false);
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
    setNinethtMonth(false);
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
    setNinethtMonth(false);
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
    setNinethtMonth(false);
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
    setNinethtMonth(false);
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
    setNinethtMonth(false);
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
    setNinethtMonth(false);
  };
  const ninethM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
    setNinethtMonth(!ninethmonth);
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
              Session_1A: Introduction to Excel
            </p>
          </div>
          {firstmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Overview of Excel interface: Introduction to
                Excel's ribbon, tabs, and basic functions.
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Understanding workbooks, worksheets, rows,
                columns, and cells: Explanation of the structure of Excel files.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Navigating Excel workbooks efficiently:
                Techniques for moving around workbooks using scrollbars,
                keyboard shortcuts, and navigation panes.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>  Basic Spreadsheet Operations
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Entering and formatting data: Methods for
                inputting data into cells and basic formatting options such as
                font styles, colors, and cell alignment 
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Using basic formulas and functions:
                Introduction to arithmetic operations (e.g., addition,
                subtraction) and functions like SUM, AVERAGE, SUMIFS, IF(AND)...
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
              Session _1B: Introduction to absolute and relative cell
              referencing and calculations 
            </p>
          </div>{" "}
          {secondmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Understanding relative and absolute cell
                references, performing simple calculations with cells
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Managing Worksheets: Renaming, inserting, and
                deleting worksheets: How to modify worksheet names and add or
                remove worksheets from a workbook.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Moving and copying data between worksheets:
                Techniques for transferring data between different sheets within
                a workbook 
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Organizing data with grouping and outlining
                features: Using grouping and outlining to organize and collapse
                rows or columns for better data visibility 
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
              Session _2A: Understanding and working with Data Analysis Tools
            </p>
          </div>
          {thirdmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Sorting and filtering data effectively:
                Sorting data alphabetically or numerically, applying filters to
                view specific subsets of data
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Introduction to conditional formatting for
                data visualization: Applying conditional formatting rules to
                highlight data based on specific criteria 
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Creating simple charts: Generating basic
                charts such as columns, pie charts or line charts to visualize
                data and trends 
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Text and String Functions; <br />
                CONCATENATE, TEXT, LEN, LEFT, RIGHT, MID: Concatenating strings,
                formatting text, calculating the length of text strings and
                extracting substrings 
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>UPPER, LOWER, PROPER: Converting text to
                uppercase, lowercase, or proper case.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> FIND, SEARCH, REPLACE: Finding and replacing
                text within strings.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> TRIM, CLEAN, SUBSTITUTE: Removing extra
                spaces, non-printable characters, and substituting text within
                strings.
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
              Session _2B: Advanced Formulas and Functions (Intermediate level)
            </p>
          </div>
          {fourthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Utilizing logical functions: Understanding IF,
                AND, OR functions for conditional logic.
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Working with lookup and reference functions:
                Exploring VLOOKUP, HLOOKUP, INDEX, MATCH functions for searching
                and retrieving data 
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Harnessing the power of array formulas: Using
                array formulas for complex calculations across ranges of data.
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
              Data Management Techniques 
            </p>
          </div>
          {fifthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Implementing data validation: Setting up
                validation rules to control data input.
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Consolidating data from multiple sources:
                Combining data from different sheets or workbooks using
                consolidation tools.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Analyzing data efficiently using pivot tables
                and pivot charts: Creating pivot tables to summarize and analyze
                large datasets.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Aggregate Functions
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>IFS, SWITCH: Simplifying nested IF statements
                or multiple conditions using IFS or SWITCH functions.
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
              Session_ 3A: Advanced Data Analysis (Advance level)
            </p>
          </div>
          {sixthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Utilizing advanced sorting and filtering
                techniques: Sorting data by multiple criteria, using advanced
                filtering options.
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Employing subtotal and database functions for
                data summarization: Generating subtotals and summaries for large
                datasets.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Performing what-if analysis with Goal Seek
                and Scenario Manager: Using these tools to analyze different
                scenarios and achieve desired results 
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Advanced Charting Techniques
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Creating dynamic charts with named ranges and
                data validation: Building charts that automatically update with
                changes to data ranges.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Exploring advanced chart types: Generating
                combo charts, sparklines, and other specialized chart types.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Enhancing charts with trendlines and
                secondary axes: Adding trendlines and secondary axes to
                visualize trends and comparisons.
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
              Session _3B: Data Analysis with PivotTables
            </p>
          </div>
          {seventhmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Creating and customizing pivot tables and
                pivot charts: Setting up pivot tables and pivot charts to
                summarize and analyze data
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Enhancing interactivity with slicers,
                timelines, and calculated fields: Adding slicers and timelines
                to filter pivot table data dynamically.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Implementing advanced pivot table techniques:
                Using calculated fields, grouping data, and formatting pivot
                tables for better analysis 
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Data Visualization and Dashboards
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Applying design principles for effective data
                visualization: Designing visually appealing and informative
                dashboards.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Constructing interactive dashboards with
                Excel: Building interactive dashboards that allow users to
                explore data dynamically.
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
              Session_4A : Excel Macros and VBA Programming
            </p>
          </div>
          {eighthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Recording and running macros for task
                automation: Automating repetitive tasks by recording and
                executing macros.
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Introduction to Visual Basic for Applications
                (VBA): Understanding the basics of VBA programming language.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Developing VBA macros to automate complex
                tasks and streamline workflows: Writing and debugging VBA code
                to customize Excel functionality.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Date Functions
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>DATE, DATEVALUE, DAY, MONTH, YEAR: Extracting
                components of dates, converting text to dates.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> WEEKDAY, WEEKNUM: Determining the day of the
                week or week number from a given date.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> EOMONTH, WORKDAY, NETWORKDAYS: Calculating
                end-of-month dates, workdays, and the number of working days
                between two dates.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>DATEDIF: Calculating the difference between
                two dates in various units (e.g., years, months, days).
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> TODAY, NOW: Returning the current date or
                date and time.
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={ninethM}>
            {ninethmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session _4B: Final Assessment and Additional Topics 
            </p>
          </div>
          {ninethmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Excel assignment after every class.
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> 3 solid real-world projects. 
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> 2 presentations and review.
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Feedback and corrections from the
                facilitator.
              </p>{" "}
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

export default Excel;
