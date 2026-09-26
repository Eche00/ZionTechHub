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
function Sql() {
  const [firstmonth, setFirstMonth] = useState(false);
  const [secondmonth, setSecondMonth] = useState(false);
  const [thirdmonth, setThirdtMonth] = useState(false);
  const [fourthmonth, setFourthMonth] = useState(false);
  const [fifthmonth, setFifthMonth] = useState(false);
  const [sixthmonth, setSixtMonth] = useState(false);
  const [seventhmonth, setSeventhMonth] = useState(false);
  const [eightmonth, setEightMonth] = useState(false);
  const firstM = (e) => {
    e.preventDefault();
    setFirstMonth(!firstmonth);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEightMonth(false);
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
    setEightMonth(false);
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
    setEightMonth(false);
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
    setEightMonth(false);
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
    setEightMonth(false);
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
    setEightMonth(false);
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
    setEightMonth(false);
  };
  const eightM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
    setSeventhMonth(false);
    setEightMonth(!eightmonth);
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
              Session 1: Introduction and Basics
            </p>
          </div>
          {firstmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>1. Introduction to SQL
              </p>
              <div className=" pl-[50px] flex flex-col gap-[15px]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Definition and purpose of SQL
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Understanding relational databases
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Overview of Database Management Systems (DBMS)
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> 2. Basic SQL Syntax
              </p>{" "}
              <div className=" pl-[50px] flex flex-col gap-[15px]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px] px-[16px] items-center  md:w-full w-[329px]">
                     - SELECT statement
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px] px-[16px] items-center  md:w-full w-[329px]">
                     - FROM clause
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px] px-[16px] items-center  md:w-full w-[329px]">
                     - WHERE clause
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px] px-[16px] items-center  md:w-full w-[329px]">
                  {" "}
                  - ORDER BY clause
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px] px-[16px] items-center  md:w-full w-[329px]">
                     - GROUP BY clause
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Assignment
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
              Session 2: Data Types and Data Definition
            </p>
          </div>{" "}
          {secondmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>1. Data Types
              </p>
              <div className=" pl-[50px] flex flex-col gap-[15px]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Integer
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Floating-point
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Character{" "}
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Date{" "}
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - VARCHAR{" "}
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - TEXT{" "}
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - BOOLEAN{" "}
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> 2. Data Definition            
              </p>{" "}
              <div className=" pl-[50px] flex flex-col gap-[15px]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                     - CREATE statement
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                    - ALTER statement
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                     - DROP statement
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  {" "}
                  - Indexes
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Assignment 2
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
               Session 3: Data Manipulation and Filtering
            </p>
          </div>
          {thirdmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>1. Data Manipulation         
              </p>
              <div className=" pl-[50px] flex flex-col gap-[15px]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - INSERT statement
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - UPDATE statement
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - DELETE statement
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> 2. Query Filtering and Sorting      
              </p>{" "}
              <div className=" pl-[50px] flex flex-col gap-[15px]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                     - WHERE clause for filtering data
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                     - AND, OR conditions
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                        - ORDER BY clause for sorting data (Ascending and
                  Descending)
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Assignment 3
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
              Session 4: Aggregation and Joins
            </p>
          </div>
          {fourthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>1. Data Aggregation            
              </p>
              <div className=" pl-[50px] flex flex-col gap-[]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - SUM function
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - AVG function
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - COUNT function
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - MIN function
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> 2. Joins and Relationships            
              </p>{" "}
              <div className=" pl-[50px] flex flex-col gap-[]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                     - INNER JOIN
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                     - LEFT JOIN
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                     - RIGHT JOIN
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  {" "}
                  - FULL OUTER JOIN
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> 3. Advanced Joins and Set Operations      
              </p>{" "}
              <div className=" pl-[50px] flex flex-col gap-[]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                     - CROSS JOIN
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                     - UNION, INTERSECT, EXCEPT
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Assignment 4
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Assignment 5
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
              Session 5: Advanced Query Techniques
            </p>
          </div>
          {fifthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>1. Subqueries
              </p>
              <div className=" pl-[50px] flex flex-col gap-[15px]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Subqueries used in filtering data
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Correlated subqueries
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>2. Views
              </p>{" "}
              <div className=" pl-[50px] flex flex-col gap-[15px]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Creating views
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Modifying views
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Dropping views
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Assignment 6
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
              Session 6: Conditional Logic and Data Import/Export
            </p>
          </div>
          {sixthmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>1. Case Statements
              </p>
              <div className=" pl-[50px] flex flex-col gap-[]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Using CASE statements for conditional logic
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> 2. Data Import and Export
              </p>{" "}
              <div className=" pl-[50px] flex flex-col gap-[]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Importing and exporting data (e.g., CSV, JSON)
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Project 1
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Assignment 7
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
              Session 7: Intermediate Level Concepts
            </p>
          </div>
          {seventhmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>1. Case Statements
              </p>
              <div className=" pl-[50px] flex flex-col gap-[]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Using CASE statements for conditional logic
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> 2. Data Integrity
              </p>{" "}
              <div className=" pl-[50px] flex flex-col gap-[]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Primary key constraint
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Foreign key constraint
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Project 2
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Assignment 8
              </p>{" "}
            </section>
          )}
        </div>
        <div>
          <div
            className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
            onClick={eightM}>
            {eightmonth ? (
              <KeyboardArrowUpIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
            <p className=" sm:text-[20px] text-[18px] md:w-full w-full font-[600] text-[#1A1A1A]">
              Session 8: Advanced Techniques, Assignments, and Career
            </p>
          </div>
          {eightmonth && (
            <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1A]">
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>1. Error Handling and Debugging
              </p>
              <div className=" pl-[50px] flex flex-col gap-[15px]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Handling errors in SQL
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Debugging techniques for troubleshooting queries
                </p>{" "}
              </div>
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span> Project 3 & 4
              </p>{" "}
              <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                <span>{dot}</span>3. Feedback and Career Guidance
              </p>
              <div className=" pl-[50px] flex flex-col gap-[15px]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Feedback and corrections from the facilitator
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px]  sm:px-[48px]  px-[16px] items-center  md:w-full w-[329px]">
                  - Career session
                </p>{" "}
              </div>
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

export default Sql;
