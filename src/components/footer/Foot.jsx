import React from "react";
import { logo } from "../../assets";
import {
  ArrowForward,
  Check,
  Facebook,
  GitHub,
  Instagram,
  Twitter,
} from "@mui/icons-material";

function Foot() {
  const checkMark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none">
      <g clip-path="url(#clip0_475_298)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.852Z"
          fill="#034FE3"
        />
      </g>
      <defs>
        <clipPath id="clip0_475_298">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <footer className=" bg-[#E7E7E7]">
      <div className=" pt-[110px] ">
        <div className=" max-w-[70%] mx-auto flex items-center justify-between pb-[55px] border-b border-black">
          <div className=" flex flex-col gap-[32px] items-start">
            <img
              className=" w-[95px] h-[51px]  border-none object-cover"
              src={logo}
              alt=""
            />
            <div className=" flex gap-[32px]">
              <section className=" flex flex-col gap-[8px]">
                <p className=" text-[14px] font-[400] text-[#040505CC]">
                  Email
                </p>
                <p className=" font-[400] text-[16px] text-[#040505]">
                  info@ziontechhub.com
                </p>
              </section>
              <section className=" flex flex-col gap-[8px]">
                <p className=" text-[14px] font-[400] text-[#040505CC]">
                  Phone Number
                </p>
                <p className=" font-[400] text-[16px] text-[#040505]">
                  +234 902 366 7623
                </p>
              </section>
            </div>
          </div>
          <div className=" flex flex-col gap-[32px]">
            <h3 className=" font-[600] text-24px] text-[#040505]">
              Start your training with <br /> Zion Tech Hub
            </h3>
            <section className=" flex gap-[10px]">
              <button className=" py-[12px] px-[24px] gap-[10px] flex items-center justify-center  bg-[#2563EB] text-[18px] text-white font-[500] rounded-[10px] ">
                Enroll <ArrowForward />
              </button>
              <button className=" py-[12px] px-[24px] ] flex items-center justify-center text-[18px]  font-[400] rounded-[10px] border border-gray-300 ">
                Book a Consultation
              </button>
            </section>
          </div>
        </div>

        <div className=" max-w-[70%] mx-auto pt-[55px] flex justify-between">
          <section className=" flex items-center  text-[14px] font-[400] text-[#040505] gap-[8px]">
            {" "}
            <span>{checkMark}</span> Follow us on all Platforms
          </section>
          <section className=" flex items-center gap-[12px]">
            <a
              className=" p-[8px] rounded-full text-[#040505] bg-[#0405051A] "
              href="">
              <Instagram />
            </a>
            <a
              className=" p-[8px] rounded-full text-[#040505] bg-[#0405051A] "
              href="">
              <Facebook />
            </a>
            <a
              className=" p-[8px] rounded-full text-[#040505] bg-[#0405051A] "
              href="">
              <Twitter />
            </a>
            <a
              className=" p-[8px] rounded-full text-[#040505] bg-[#0405051A] "
              href="">
              <GitHub />
            </a>
          </section>
        </div>
        <div className=" text-[220px] font-[900] text-[#C3C3C333] p-0 m-0">
          ZION TECH HUB
        </div>
      </div>
    </footer>
  );
}

export default Foot;
