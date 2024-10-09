import React, { useState } from "react";
import Frontend from "../WebCat/Frontend";
import Backend from "../WebCat/Backend";

function Webcontent() {
  const [frontEnd, setFrontEnd] = useState(true);
  const [backEnd, setBackEnd] = useState(false);
  const handleFrontEnd = (e) => {
    e.preventDefault();
    setFrontEnd(true);
    setBackEnd(false);
  };
  const handleBackEnd = (e) => {
    e.preventDefault();
    setFrontEnd(false);
    setBackEnd(true);
  };

  return (
    <div className=" relative pb-[180px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[19px] -left-[1.5px]"></span>
      <div className=" px-[20px]  pb-[68px]">
        <p className=" font-[600] text-[48px] text-[#333]">
          <span className=" text-[#034FE3]">Course </span>content
        </p>
        <div className=" mt-[43px]   flex items-center justify-between bg-[#E9E9E9] rounded-full md:w-[597px] w-[320px]  ">
          <button
            onClick={handleFrontEnd}
            className={
              frontEnd
                ? " flex-1 bg-white rounded-full md:py-[16px] py-[10px] text-[#034FE3] whitespace-nowrap  md:text-[18px] font-[500]  text-[12px] md:px-0 px-[10px]"
                : " flex-1 md:text-[18px] font-[500]  text-[12px] text-[#1A1A1ACC] whitespace-nowrap md:px-0 px-[10px]"
            }>
            Frontend course content
          </button>
          <button
            onClick={handleBackEnd}
            className={
              backEnd
                ? " flex-1 bg-white rounded-full md:py-[16px] py-[10px] text-[#034FE3] whitespace-nowrap  md:text-[18px] font-[500] text-[12px] md:px-0 px-[10px]"
                : " flex-1 md:text-[18px] font-[500]  text-[12px] text-[#1A1A1ACC] whitespace-nowrap md:px-0 px-[10px]"
            }>
            Backend course content
          </button>
        </div>
      </div>
      {frontEnd ? <Frontend /> : <Backend />}
    </div>
  );
}

export default Webcontent;
