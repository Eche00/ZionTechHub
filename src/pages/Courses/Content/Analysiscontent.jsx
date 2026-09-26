import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Reviewimg,
  SirGodsentprofile,
  googlemeet,
  individual,
} from "../../../assets";

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
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[6px] -left-[1.5px]"></span>
      <div className=" px-[20px]  pb-[68px]">
        <p className=" font-[600] sm:text-[48px] text-[32px] text-[#333]">
          <span className=" text-[#034FE3]">Course </span>content
        </p>
      </div>

      <div className="flex sm:flex-row flex-col-reverse gap-[25px] smm:w-[1238px] sm:w-[1150px]">
        {/* course content section  */}
        <div className=" flex-1 flex flex-col rounded-tr-[10px] overflow-hidden border border-gray-300 h-fit">
          {/* first month  */}
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
              <p className=" sm:text-[20px] text-[18px] md:w-full w-[287px] font-[600] text-[#1A1A1A]">
                Month 1: Foundations of Data Analytics
              </p>
            </div>
            {firstmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#0a0505cc]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Overview of data analytics and its
                  significance in business and industry
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Understanding the data analytics lifecycle:
                  data collection, processing, analysis, and visualization
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to tools and technologies:
                  Excel, SQL, Python/R, Tableau
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Techniques for data collection from various
                  sources (databases, APIs, web scraping)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Data cleaning and preprocessing: handling
                  missing values, outliers, and duplicates
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Data transformation: normalizing, encoding
                  categorical variables, and feature <br /> scaling
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to descriptive statistics:
                  mean, median, mode, standard deviation, variance
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Visualizing data with charts and graphs
                  (histograms, box plots, scatter plots)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span>Identifying patterns, trends, and
                  correlations in data using EDA techniques
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Basics of SQL for data manipulation:
                  SELECT, INSERT, UPDATE, DELETE
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Writing complex queries: JOINs, subqueries,
                  and aggregations
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to database management systems
                  (DBMS) and SQL best practices
                </p>
              </section>
            )}
          </div>
          {/* second month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
              onClick={secondM}>
              {secondmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] md:w-full w-[287px] font-[600] text-[#1A1A1A]">
                Month 2: Data Analysis Techniques
              </p>
            </div>{" "}
            {secondmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span>Using Excel for data manipulation and
                  analysis
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Advanced Excel functions: VLOOKUP,
                  PivotTables, and data visualization
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Automating tasks with Excel macros
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Principles of effective data visualization
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span>Creating dashboards and reports using
                  Tableau/Power BI
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to data storytelling:
                  communicating insights effectively
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to inferential statistics:
                  hypothesis testing, confidence intervals
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Understanding correlation and regression
                  analysis
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Applying statistical techniques to
                  real-world datasets
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Setting up the Python/R environment for
                  data analysis
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Using libraries like Pandas, NumPy (Python)
                  or dplyr, tidyr (R) for data manipulation
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span>Data visualization with Matplotlib/Seaborn
                  (Python) or ggplot2 (R)
                </p>
              </section>
            )}
          </div>{" "}
          {/* third month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full "
              onClick={thirdM}>
              {thirdmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] md:w-full w-[287px] font-[600] text-[#1A1A1A]">
                Month 3: Advanced Data Analytics and Capstone Project
              </p>
            </div>
            {thirdmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span>Introduction to predictive modeling and
                  machine learning basics
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Building and evaluating simple models
                  (linear regression, decision trees)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Time series forecasting techniques
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to big data concepts and
                  technologies (Hadoop, Spark)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span>Overview of cloud-based analytics platforms
                  (AWS, Google Cloud, Azure)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Using big data tools for data processing
                  and analysis
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Defining the problem statement and
                  objectives for the project
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Collecting and preparing data for analysis
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Designing the analysis framework and
                  selecting appropriate tools
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Conducting data analysis and generating
                  insights
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Creating visualizations and compiling the
                  final report
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center md:w-full w-[329px]">
                  <span>{dot}</span> Presenting findings and recommendations to
                  peers and mentors
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
    </div>
  );
}

export default Analysiscontent;
