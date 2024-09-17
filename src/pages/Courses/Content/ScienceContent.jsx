import React, { useState } from "react";
import { Reviewimg, individual } from "../../../assets";
import { ArrowBackIos } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ScienceContent() {
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
      </div>

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
                Month 1: Foundations of Data Science
              </p>
            </div>
            {firstmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Overview of the data science lifecycle
                </p>
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Understanding the role of a data scientist
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Setting up the development environment
                  (Python, Jupyter Notebooks, R)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Data types and structures
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Importing data from various sources (CSV,
                  Excel, SQL, APIs)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Data cleaning techniques: handling missing
                  data, data transformation, and normalization
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Descriptive statistics (mean, median, mode,
                  variance)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Data visualization basics with Matplotlib
                  and Seaborn
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Identifying trends, patterns, and outliers
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Probability theory and distributions
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Hypothesis testing and confidence intervals
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Correlation and covariance
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
                Month 2: Core Data Science Skills
              </p>
            </div>{" "}
            {secondmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Overview of machine learning concepts
                </p>
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Supervised vs. unsupervised learning
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Introduction to linear regression and
                  classification
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Decision trees, random forests, and support
                  vector machines (SVM)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Clustering algorithms (K-means, hierarchical
                  clustering)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Model evaluation: accuracy, precision,
                  recall, F1-score
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Advanced data visualization techniques with
                  Tableau or Power BI
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Creating interactive dashboards
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Storytelling with data: how to present your
                  findings effectively
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Introduction to big data concepts and tools
                  (Hadoop, Spark)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Working with large datasets in Python
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Introduction to SQL for data querying and
                  management
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
                Month 3: Applied Data Science and Projects
              </p>
            </div>
            {thirdmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Introduction to time series data
                </p>
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Time series forecasting methods (ARIMA,
                  exponential smoothing)
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Dealing with seasonality and trends
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Basics of text mining and NLP
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span>Sentiment analysis and text classification
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Introduction to word embeddings and topic
                  modeling
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Choosing a data science project
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Data collection and preparation
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Project planning and defining objectives
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Implementing your data science project
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Analyzing results and drawing conclusions
                </p>{" "}
                <p className=" text-[20px] font-[300] flex gap-[14px] py-[24px] px-[48px] items-center">
                  <span>{dot}</span> Preparing a final report and presenting
                  your project
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

export default ScienceContent;
