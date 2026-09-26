import React, { useState } from "react";
import Datasci from "../ScienceCat/Datasci";
import Sql from "../ScienceCat/Sql";
import Excel from "../ScienceCat/Excel";
import PowerBi from "../ScienceCat/PowerBi";

function ScienceContent() {
  const [dataScience, setDataScience] = useState(true);
  const [sql, setSql] = useState(false);
  const [power, setPower] = useState(false);
  const [excel, setExcel] = useState(false);

  // handling data science click
  const handleDataScience = (e) => {
    e.preventDefault();
    setDataScience(true);
    setSql(false);
    setPower(false);
    setExcel(false);
  };
  // handling sql click
  const handleSql = (e) => {
    e.preventDefault();
    setDataScience(false);
    setSql(true);
    setPower(false);
    setExcel(false);
  };
  // handling power click
  const handlePower = (e) => {
    e.preventDefault();
    setDataScience(false);
    setSql(false);
    setPower(true);
    setExcel(false);
  };
  // handling excel click
  const handleExcel = (e) => {
    e.preventDefault();
    setDataScience(false);
    setSql(false);
    setPower(false);
    setExcel(true);
  };

  return (
    <div className=" relative pb-[180px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[19px] -left-[1.5px]"></span>
      <div className=" px-[20px]  pb-[68px]">
        <p className=" font-[600] text-[48px] text-[#333]">
          <span className=" text-[#034FE3]">Course </span>content
        </p>
        <div className=" mt-[43px]   flex items-center justify-between bg-[#E9E9E9] rounded-full md:flex-row flex-col md:gap-0 gap-[10px] md:p-0 p-[10px]">
          {/* Data Science  */}
          <button
            onClick={handleDataScience}
            className={
              dataScience
                ? " flex-1 bg-white rounded-full md:py-[16px] py-[10px] text-[#034FE3] whitespace-nowrap  md:text-[18px] font-[500]  text-[12px] md:px-0 px-[10px]"
                : " flex-1 md:text-[18px] font-[500]  text-[12px] text-[#1A1A1ACC] whitespace-nowrap md:px-0 px-[10px]"
            }>
            Data Science
          </button>
          {/* Session Breakdown SQL  */}
          <button
            onClick={handleSql}
            className={
              sql
                ? " flex-1 bg-white rounded-full md:py-[16px] py-[10px] text-[#034FE3] whitespace-nowrap  md:text-[18px] font-[500] text-[12px] md:px-0 px-[10px]"
                : " flex-1 md:text-[18px] font-[500]  text-[12px] text-[#1A1A1ACC] whitespace-nowrap md:px-0 px-[10px]"
            }>
            Session Breakdown SQL
          </button>
          {/* Power Bi Curriculum  */}
          <button
            onClick={handlePower}
            className={
              power
                ? " flex-1 bg-white rounded-full md:py-[16px] py-[10px] text-[#034FE3] whitespace-nowrap  md:text-[18px] font-[500] text-[12px] md:px-0 px-[10px]"
                : " flex-1 md:text-[18px] font-[500]  text-[12px] text-[#1A1A1ACC] whitespace-nowrap md:px-0 px-[10px]"
            }>
            Power Bi Curriculum
          </button>
          {/* Excel Curriculum  */}
          <button
            onClick={handleExcel}
            className={
              excel
                ? " flex-1 bg-white rounded-full md:py-[16px] py-[10px] text-[#034FE3] whitespace-nowrap  md:text-[18px] font-[500] text-[12px] md:px-0 px-[10px]"
                : " flex-1 md:text-[18px] font-[500]  text-[12px] text-[#1A1A1ACC] whitespace-nowrap md:px-0 px-[10px]"
            }>
            Excel Curriculum
          </button>
        </div>
      </div>
      {dataScience && <Datasci />}
      {sql && <Sql />}
      {power && <PowerBi />}
      {excel && <Excel />}
    </div>
  );
}

export default ScienceContent;
