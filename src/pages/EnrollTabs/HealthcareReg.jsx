import React, { useState } from "react";
import { ArrowDownward, Warning } from "@mui/icons-material";
import { techhublogo } from "../../assets";
import "../Enroll.css";

function HealthcareReg() {
  const [cohortActive, setCohortActive] = useState(true);

  return (
    <div className="">
      <div className=" flex flex-col items-center gap-[24px]">
        <div className=" w-fit border-[3px] border-[#FFFFFF] rounded-full">
          <img
            className=" w-[100px] h-[100px] object-cover rounded-full"
            src={techhublogo}
            alt=""
          />
        </div>
        <div className=" flex flex-col p-[32px] gap-[48px] bg-[#FFFFFF] rounded-[10px]">
          <section className=" flex flex-col items-center justify-center text-center text-[#1A1A1ACC] md:gap-[12px] gap-[8px]">
            <h1 className=" md:text-[32px] text-[24px] font-[600]">
              Healthcare Analytics
            </h1>
            <p className=" md:text-[16px] text-[12px] font-[300] ">
              Register for our Healthcare Analytics program <br /> today. See
              you at the top!
            </p>
          </section>
          {cohortActive ? (
            <form className=" flex flex-col gap-[12px]">
              <section className="flex flex-col gap-[10px]">
                <p className=" text-[#6B6F71] text-[12px] font-[500] text-center">
                  click the button below <ArrowDownward fontSize="small" />
                </p>
                {/* <input
                  className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                  type="text"
                  placeholder="Enter your full name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                /> */}
              </section>
              <section className="flex flex-col gap-[10px]">
                <a
                  href="https://forms.office.com/r/GJJV1EH7Af"
                  className="py-[18px] px-[16px] rounded-[10px] text-white bg-[#207C3F] mt-[14px] cursor-pointer flex items-center justify-center"
                  target="_blank">
                  Register now
                </a>
              </section>
            </form>
          ) : (
            <p className=" text-[16px] font-bold text-red-500  text-center">
              <Warning /> Registration for Cohort 7.0 has ended. <Warning />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HealthcareReg;
