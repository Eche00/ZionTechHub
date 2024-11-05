import React from "react";
import { logo } from "../../assets";
import {
  ArrowForward,
  Check,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const Discord = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      width="18"
      height="18"
      fill="none">
      <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
    </svg>
  );
  return (
    <footer className=" bg-[#E7E7E7]">
      <div className=" pt-[110px] ">
        <div className="  smm:max-w-[80%] sm:max-w-[88%] max-w-full mx-auto flex sm:flex-row flex-col sm:items-center px-[20px] sm:px-0 justify-between pb-[55px] border-b border-black">
          <div className=" flex flex-col gap-[32px] items-start pb-[48px] sm:pb-0">
            <img
              className=" sm:w-[95px] w-[89px] h-[51px]  border-none object-cover"
              src={logo}
              alt=""
            />
            <div className=" flex gap-[32px]">
              <section className=" flex flex-col gap-[8px]">
                <p className=" sm:text-[14px] text-[12px] font-[400] text-[#040505CC]">
                  Email
                </p>
                <p className=" font-[400] text-[16px] text-[#040505]">
                  info@ziontechub.com
                </p>
              </section>
              <section className=" flex flex-col gap-[8px]">
                <p className=" sm:text-[14px] text-[12px] font-[400] text-[#040505CC]">
                  Phone Number
                </p>
                <p className=" font-[400] text-[16px] text-[#040505]">
                  +234 805 509 4738
                </p>
              </section>
            </div>
          </div>
          <div className=" flex flex-col gap-[32px]  ">
            <h3 className=" font-[600] text-24px] text-[#040505]">
              Start your training with <br /> Zion Tech Hub
            </h3>
            <section className=" flex gap-[10px]">
              <Link
                to="/enroll"
                className=" py-[12px] sm:px-[24px] px-[20px] gap-[10px] flex items-center justify-center  bg-[#2563EB] sm:text-[18px] text-[16px] text-white font-[500] rounded-[10px] ">
                Enroll <ArrowForward />
              </Link>
              <Link
                to="/consult"
                className=" py-[12px] sm:px-[24px] px-[20px] flex items-center justify-center sm:text-[18px] text-[16px]  font-[400] rounded-[10px] border border-gray-300 ">
                Book a Consultation
              </Link>
            </section>
          </div>
        </div>

        <div className=" smm:max-w-[80%] sm:max-w-[88%] max-w-full mx-auto pt-[55px] flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-[24px]">
          <section className=" flex items-center  text-[14px] font-[400] text-[#040505] gap-[8px]">
            {" "}
            <span>{checkMark}</span> Follow us on all Platforms
          </section>
          <section className=" flex items-center gap-[12px]">
            <a
              className=" p-[8px] rounded-full text-[#040505] bg-[#0405051A] "
              href="https://www.instagram.com/zion_tech_hub/profilecard/?igsh=dHRzc3dkMDJmZHdk">
              <Instagram />
            </a>
            <a
              className=" p-[8px] rounded-full text-[#040505] bg-[#0405051A] "
              href="https://web.facebook.com/profile.php?id=61552268671280">
              <Facebook />
            </a>
            <a
              className=" p-[8px] rounded-full text-[#040505] bg-[#0405051A] "
              href="https://www.linkedin.com/company/zion-tech-hub/?viewAsMember=true">
              <LinkedIn />
            </a>
            <a
              className=" p-[8px] rounded-full text-[#040505] bg-[#0405051A] "
              href="https://discord.com/invite/s9PpHNv8h3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22"
                width="22"
                viewBox="0 0 640 512">
                <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
              </svg>
            </a>
          </section>
        </div>
        <div className=" sm:text-[220px] md:text-[120px] text-[80px] whitespace-nowrap font-[900] text-[#C3C3C333] p-0 m-0">
          ZION TECH HUB
        </div>
      </div>
    </footer>
  );
}

export default Foot;
