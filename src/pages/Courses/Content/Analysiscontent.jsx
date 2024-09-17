import React, { useState } from "react";
import { ArrowBackIos } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Reviewimg, individual } from "../../../assets";

function Analysiscontent() {
  const button = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="188"
      height="50"
      viewBox="0 0 188 50"
      fill="none">
      <rect
        y="0.442383"
        width="188"
        height="49.1156"
        rx="24.5578"
        fill="white"
      />
    </svg>
  );
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
  const [firstmonth, setFirstMonth] = useState(false);
  const [secondmonth, setSecondMonth] = useState(false);
  const [thirdmonth, setThirdtMonth] = useState(false);
  const firstM = (e) => {
    e.preventDefault();
    setFirstMonth(!firstmonth);
    setSecondMonth(false);
    setThirdtMonth(false);
  };
  const secondM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(!secondmonth);
    setThirdtMonth(false);
  };
  const thirdM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(!thirdmonth);
  };

  return (
    <div className=" relative pb-[180px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[19px] -left-[1.5px]"></span>
      <div className=" px-[20px]  pb-[68px]">
        <p className=" font-[600] text-[48px] text-[#333]">
          <span className=" text-[#034FE3]">Course </span>content
        </p>
        <div
          className={
            !firstmonth && !secondmonth && !thirdmonth
              ? ` mt-[43px] px-[4px] py-[20px]  flex gap-[68px] items-center justify-between bg-[#E9E9E9] rounded-full w-[597px]  `
              : ` mt-[43px] p-[4px] flex gap-[68px] items-center justify-between bg-[#E9E9E9] rounded-full w-[597px]  `
          }>
          <button
            onClick={firstM}
            className={`${
              firstmonth && "text-[18px] font-[500] relative w-fit"
            }`}>
            {firstmonth && button}{" "}
            <span
              className={`${
                firstmonth
                  ? "absolute top-4 left-20 text-[#034FE3]"
                  : " pl-20 text-center text-[#1A1A1ACC]"
              }`}>
              Month 1
            </span>
          </button>
          <button
            onClick={secondM}
            className={`${
              secondmonth && "text-[18px] font-[500] relative w-fit"
            }`}>
            {secondmonth && button}{" "}
            <span
              className={`${
                secondmonth
                  ? "absolute top-4 right-20 text-[#034FE3]"
                  : " pr-20 text-[#1A1A1ACC]" &&
                    thirdmonth &&
                    " pl-20 text-[#1A1A1ACC] "
              } `}>
              Month 2
            </span>
          </button>
          <button
            onClick={thirdM}
            className={`${
              thirdmonth && "text-[18px] font-[500] relative w-fit"
            }`}>
            {thirdmonth && button}{" "}
            <span
              className={`${
                thirdmonth
                  ? "absolute top-4 right-20 text-[#034FE3]"
                  : " pr-20 text-[#1A1A1ACC] "
              } `}>
              Month 3
            </span>
          </button>
        </div>
      </div>
      <p className=" text-[24px] font-[500] text-[#1A1A1AB2] px-[20px] pb-[24px]">
        Session Breakdown SQL Curriculum
      </p>
      <div className="flex gap-[25px] w-[1238px] ">
        <div className=" flex-1 flex flex-col rounded-tr-[10px] overflow-hidden border border-gray-300 h-fit">
          <div>
            <div
              className="py-[24px] px-[40px] flex gap-[10px] items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer "
              onClick={firstM}>
              {" "}
              {firstmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" text-[20px] font-[600] text-[#1A1A1A]">
                Month 1: Foundations of Data Analytics
              </p>
            </div>
            {firstmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Overview of data analytics and its
                  significance in business and industry
                </p>
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Understanding the data analytics lifecycle:
                  data collection, processing, analysis, and visualization
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Introduction to tools and technologies:
                  Excel, SQL, Python/R, Tableau
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Techniques for data collection from various
                  sources (databases, APIs, web scraping)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Data cleaning and preprocessing: handling
                  missing values, outliers, and duplicates
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Data transformation: normalizing, encoding
                  categorical variables, and feature <br /> scaling
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Introduction to descriptive statistics:
                  mean, median, mode, standard deviation, variance
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Visualizing data with charts and graphs
                  (histograms, box plots, scatter plots)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Identifying patterns, trends, and
                  correlations in data using EDA techniques
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Basics of SQL for data manipulation:
                  SELECT, INSERT, UPDATE, DELETE
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Writing complex queries: JOINs, subqueries,
                  and aggregations
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Introduction to database management systems
                  (DBMS) and SQL best practices
                </p>
              </section>
            )}
          </div>
          <div>
            <div
              className="py-[24px] px-[40px] flex gap-[10px] items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer "
              onClick={secondM}>
              {secondmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" text-[20px] font-[600] text-[#1A1A1A]">
                Month 2: Data Analysis Techniques
              </p>
            </div>{" "}
            {secondmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Using Excel for data manipulation and
                  analysis
                </p>
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Advanced Excel functions: VLOOKUP,
                  PivotTables, and data visualization
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Automating tasks with Excel macros
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Principles of effective data visualization
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Creating dashboards and reports using
                  Tableau/Power BI
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Introduction to data storytelling:
                  communicating insights effectively
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Introduction to inferential statistics:
                  hypothesis testing, confidence intervals
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Understanding correlation and regression
                  analysis
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Applying statistical techniques to
                  real-world datasets
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Setting up the Python/R environment for
                  data analysis
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Using libraries like Pandas, NumPy (Python)
                  or dplyr, tidyr (R) for data manipulation
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Data visualization with Matplotlib/Seaborn
                  (Python) or ggplot2 (R)
                </p>
              </section>
            )}
          </div>{" "}
          <div>
            <div
              className="py-[24px] px-[40px] flex gap-[10px] items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer "
              onClick={thirdM}>
              {thirdmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" text-[20px] font-[600] text-[#1A1A1A]">
                Month 3: Advanced Data Analytics and Capstone Project
              </p>
            </div>
            {thirdmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Introduction to predictive modeling and
                  machine learning basics
                </p>
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Building and evaluating simple models
                  (linear regression, decision trees)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Time series forecasting techniques
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Introduction to big data concepts and
                  technologies (Hadoop, Spark)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Overview of cloud-based analytics platforms
                  (AWS, Google Cloud, Azure)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Using big data tools for data processing
                  and analysis
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Defining the problem statement and
                  objectives for the project
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Collecting and preparing data for analysis
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Designing the analysis framework and
                  selecting appropriate tools
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Conducting data analysis and generating
                  insights
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Creating visualizations and compiling the
                  final report
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Presenting findings and recommendations to
                  peers and mentors
                </p>
              </section>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[36px] py-[32px] px-[48px] bg-[#EBECED] rounded-[10px] border border-gray-300 h-fit">
          <section className=" flex flex-col gap-[24px]">
            <section className=" flex flex-col">
              {" "}
              <h2 className=" text-[24px] text-[#034FE3] font-[600]">
                Instructor
              </h2>
              <p className=" text-[16px] text-[#1A1A1ACC] font-[300]">
                Certified Trainer at Zion Tech Hub
              </p>
            </section>
            <section className=" flex  gap-[14px]">
              <img
                className="w-[60px] h-[60px] object-cover rounded-full"
                src={Reviewimg}
                alt=""
              />
              <div className=" flex flex-col text-[#1A1A1A]">
                <p className=" text-[18px] font-[600]">Ndoma Godsent</p>
                <p className=" text-[12px] font-[300]">
                  Co-Founder, Data Analyst
                </p>
              </div>
            </section>
          </section>
          <span className=" h-[1px] w-[317px] bg-[#1A1A1A1A]"></span>
          <section className="flex gap-[12px]">
            <p className=" text-[20px] font-[300] ">Live on</p>{" "}
            <img
              className=" w-[193px] h-[35px] object-cover "
              src={individual}
              alt=""
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Analysiscontent;
