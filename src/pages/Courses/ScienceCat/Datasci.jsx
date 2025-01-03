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
function Datasci() {
  const [firstmonth, setFirstMonth] = useState(false);
  const [secondmonth, setSecondMonth] = useState(false);
  const [thirdmonth, setThirdtMonth] = useState(false);
  const [fourthmonth, setFourthMonth] = useState(false);
  const [fifthmonth, setFifthMonth] = useState(false);
  const [sixthmonth, setSixtMonth] = useState(false);

  const [seventhmonth, setSeventhMonth] = useState(false);
  const [eighthmonth, setEighthMonth] = useState(false);
  const [ninethmonth, setNinethtMonth] = useState(false);
  const [tenthmonth, setTenthMonth] = useState(false);
  const [eleventhmonth, setEleventhMonth] = useState(false);
  const [twelvethmonth, setTwelvethMonth] = useState(false);
  const [thirtheenthmonth, setThirtheenthMonth] = useState(false);
  const [fourtenthmonth, setFourtenthMonth] = useState(false);
  const [fifteenthmonth, setFifteenthtMonth] = useState(false);
  const [sixteenthmonth, setSixteenthMonth] = useState(false);
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
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
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
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
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
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
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
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
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
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
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
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
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
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
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
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
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
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
  };
  const tenthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
    setNinethtMonth(false);
    setTenthMonth(!tenthmonth);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
  };
  const eleventhM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
    setNinethtMonth(false);
    setTenthMonth(false);
    setEleventhMonth(!eleventhmonth);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
  };
  const twelvethM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
    setNinethtMonth(false);
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(!twelvethmonth);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
  };
  const thirtheenthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
    setNinethtMonth(false);
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(!thirtheenthmonth);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
  };
  const fourtenthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
    setNinethtMonth(false);
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(!fourtenthmonth);
    setFifteenthtMonth(false);
    setSixteenthMonth(false);
  };
  const fifteenthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
    setNinethtMonth(false);
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(!fifteenthmonth);
    setSixteenthMonth(false);
  };
  const sixteenthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEighthMonth(false);
    setNinethtMonth(false);
    setTenthMonth(false);
    setEleventhMonth(false);
    setTwelvethMonth(false);
    setThirtheenthMonth(false);
    setFourtenthMonth(false);
    setFifteenthtMonth(false);
    setSixteenthMonth(!sixteenthmonth);
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
              Session_1A: Introduction to Python for Data Analysis
            </p>
          </div>
          {firstmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Overview of Python
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Introduction to Python Programming Language
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Importance of Python in Data Analysis
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Key Python Libraries for Data Analysis (e.g.,
                NumPy, Pandas, Matplotlib)
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Setting Up Python Environment
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Installing Python and Anaconda Distribution
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Introduction to Jupyter Notebooks
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Setting Up Development Environment
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
              Session_1B: Python Basics
            </p>
          </div>{" "}
          {secondmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Python Fundamentals
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Variables, Data Types, and Operators
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Control Structures (e.g., Conditional
                Statements, Loops)
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Functions and Modules
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Working with Data Structures
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Lists, Tuples, and Dictionaries
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Array Operations with NumPy
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Data Manipulation with Pandas DataFrames
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
              Session_2A: Data Wrangling with Pandas
            </p>
          </div>
          {thirdmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Data Loading and Inspection
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Reading Data from Different Sources (e.g.,
                CSV, Excel, SQL)
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Inspecting DataFrames and Series
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Handling Missing Values and Duplicates
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Data Cleaning and Transformation
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Data Filtering and Selection
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Data Sorting and Aggregation
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Applying Functions and Methods to Data
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
              Session_2B: Exploratory Data Analysis (EDA)
            </p>
          </div>
          {fourthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Understanding EDA
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Importance of Exploratory Data Analysis in
                Data Science
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Goals and Techniques of EDA
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> EDA Techniques in Python
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Descriptive Statistics
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Data Visualization with Matplotlib and Seaborn
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Correlation Analysis and Heatmaps
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
              Session_3A: Statistical Analysis with Python
            </p>
          </div>
          {fifthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>⁠Statistical Concepts
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Probability Distributions (e.g., Normal,
                Binomial)
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Hypothesis Testing (e.g., t-tests,
                chi-square tests)
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Regression Analysis
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
              Session_3B: Implementation in Python
            </p>
          </div>
          {sixthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Statistical Functions in NumPy and SciPy
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Regression Analysis with StatsModels library
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Practical Examples and Case Studies
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
              Session_4A: Data Visualization with Matplotlib and Seaborn
            </p>
          </div>
          {seventhmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Introduction to Data Visualization
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Importance of Data Visualization in Data
                Analysis
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Principles of Effective Visualization Design
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
              Session_4B: Plotting with Matplotlib
            </p>
          </div>
          {eighthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Basic Plots (e.g., Line Plot, Scatter Plot,
                Bar Plot)
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Customizing Plots (e.g., Titles, Labels,
                Legends)
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Advanced Visualization with Seaborn
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Seaborn's High-Level Interface for Statistical
                Visualization
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Categorical Plots, Distribution Plots, and
                Pair Plots
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Plot Styling and Themes
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
              Session_5A: Introduction to Machine Learning
            </p>
          </div>
          {ninethmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Overview of Machine Learning
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Introduction to Supervised and Unsupervised
                Learning
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Hypothesis Testing (e.g., t-tests,
                chi-square tests)
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Types of Machine Learning Algorithms (e.g.,
                Classification, Regression, Clustering)
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={tenthM}>
            {tenthmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session _5B: Machine Learning Libraries in Python
            </p>
          </div>
          {tenthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Introduction to Scikit-Learn
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Basics of Model Training, Evaluation, and
                Prediction
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={eleventhM}>
            {eleventhmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session_6A: Practical Projects and Case Studies
            </p>
          </div>
          {eleventhmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Hands-on Data Analysis Projects
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Analyzing Real-world Datasets (e.g., Iris
                Dataset, Titanic Dataset)
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Building Predictive Models (e.g.,
                Classification, Regression)
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={twelvethM}>
            {twelvethmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session_6B: Case Studies in Data Analysis
            </p>
          </div>
          {twelvethmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Exploring Data Analysis in Industry Verticals
                (e.g., Finance, Healthcare, Marketing)
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Solving Business Problems with Data
                Analytics using python
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> ⁠Hypothesis Testing (e.g., t-tests,
                chi-square tests)
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Regression Analysis
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Data Cleaning and Transformation
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Data Filtering and Selection
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Data Sorting and Aggregation
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Applying Functions and Methods to Data
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={thirtheenthM}>
            {thirtheenthmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session_7A. Python for Data Visualization
            </p>
          </div>
          {thirtheenthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>⁠Interactive Data Visualization with Plotly
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Introduction to Plotly Library
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Creating Interactive Charts and Dashboards
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Deployment of Interactive Visualizations
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={fourtenthM}>
            {fourtenthmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session_7B: Deployment and Productionization
            </p>
          </div>
          {fourtenthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Packaging and Deployment of Python
                Applications
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Packaging Python Code with setuptools
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Creating Executables and Deployment Packages
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={fifteenthM}>
            {fifteenthmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session_8A: eb Applications with Flask
            </p>
          </div>
          {fifteenthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>⁠Building Web Applications for Data
                Visualization
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Integrating Flask with Python Data Analysis
                Libraries
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={sixteenthM}>
            {sixteenthmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session _8B: Conclusion and Next Steps
            </p>
          </div>
          {sixteenthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>Recap of Key Concepts and Techniques
              </p>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Continuing Learning Paths in Data
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Regression Analysis
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

export default Datasci;
