import { ArrowForward, Star } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { industryhero } from "../assets";

function IndustryAndExpertise() {
  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none">
      <path
        d="M24.8291 12.6717L20.0918 16.7595L21.5351 22.8728C21.6147 23.2047 21.5942 23.5527 21.4761 23.8729C21.3581 24.1931 21.1478 24.4711 20.8718 24.6719C20.5958 24.8726 20.2665 24.9871 19.9255 25.0008C19.5845 25.0145 19.2471 24.9268 18.9559 24.7488L13.6395 21.4769L8.32002 24.7488C8.02886 24.9257 7.69186 25.0126 7.35144 24.9984C7.01102 24.9842 6.68241 24.8696 6.40698 24.669C6.13156 24.4685 5.92164 24.1909 5.80366 23.8713C5.68568 23.5516 5.66491 23.2042 5.74396 22.8728L7.19254 16.7595L2.4552 12.6717C2.19759 12.4491 2.01129 12.1555 1.91955 11.8276C1.82781 11.4997 1.83471 11.152 1.93938 10.828C2.04404 10.504 2.24185 10.2181 2.50808 10.0058C2.77431 9.79356 3.09718 9.66444 3.43636 9.63459L9.64753 9.13348L12.0436 3.33499C12.1733 3.01897 12.394 2.74866 12.6777 2.55842C12.9614 2.36818 13.2953 2.2666 13.6369 2.2666C13.9785 2.2666 14.3124 2.36818 14.5961 2.55842C14.8798 2.74866 15.1005 3.01897 15.2302 3.33499L17.6252 9.13348L23.8364 9.63459C24.1762 9.66333 24.5 9.79173 24.7672 10.0037C25.0344 10.2156 25.2331 10.5017 25.3385 10.8261C25.4438 11.1505 25.451 11.4988 25.3593 11.8273C25.2676 12.1558 25.0809 12.4499 24.8228 12.6728L24.8291 12.6717Z"
        fill="#ECBC2C"
      />
    </svg>
  );
  return (
    <div className=" relative py-[150px] flex flex-col gap-[60px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[170px] top-[157px]  -left-[1.5px]"></span>
      <div className=" px-[20px] ">
        <p className=" font-[600] sm:text-[48px] text-[32px] text-[#333] sm:w-full w-[300px]">
          <span className=" text-[#034FE3]">Our Industry</span> & Expertise
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-[65px] relative">
        <div className="px-[20px] flex flex-col gap-[39px]">
          <p className=" text-[#1A1A1AB2] sm:text-[20px] text-[18px] font-[400] md:w-[596px] w-[330px]">
            Our partnership with leading organizations like{" "}
            <b>All Stars Educational Consults Ltd</b> and{" "}
            <b>
              Bonelham Integrated Services
              <br className=" hidden md:flex" /> Ltd
            </b>{" "}
            showcases our ability to deliver impactful, scalable training in
            Data Analytics and consulting. <br /> <br />
            We bring in-depth industry expertise, resource personnel, and the
            technical know-how to ensure every project’s success.{" "}
            <br className=" hidden md:flex" /> With us, you're joining a network
            dedicated to <br className=" hidden md:flex" />{" "}
            excellence and result
          </p>
          <Link
            to="/enroll"
            className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white sm:py-[12px] sm:px-[32px] py-[12px] px-[24px] text-[16px] sm:text-[18px] font-[500] w-fit">
            Partner with us
            <ArrowForward />
          </Link>
        </div>
        <img
          className="sm:w-[574px] sm:h-[500px] w-[357px] h-[335px] object-cover rounded-[10px]"
          src={industryhero}
          alt=""
        />
        <div className=" p-[23px] absolute sm:bottom-[-80px] sm:left-[40%] bottom-[-130px] left-[8%]  bg-white/50 rounded-[16px] flex flex-col md:gap-[14px] gap-[12px]">
          <p className="md:text-[20px] text-[17px] font-[700] text-[#162915] text-center">
            5-star reviews
          </p>
          <div className="flex gap-[10px] justify-center">
            {star}
            {star}
            {star}
            {star}
            {star}
          </div>
          <p className="md:text-[14px] test-[12px] font-[400] text-[#162915]  w-[250px]">
            <i>
              “Zion Tech Hub offers the agility, innovation, and drive to create
              measurable impact."
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndustryAndExpertise;
