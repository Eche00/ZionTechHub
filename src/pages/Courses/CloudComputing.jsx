import { ArrowForward, Star } from "@mui/icons-material";
import React from "react";
import {
  certificate1,
  certificate2,
  cloudhero1,
  cloudhero2,
  cloudhero3,
  cloudhero4,
  cloudhero5,
  cloudhero6,
  googlemeet,
} from "../../assets";
import Faqs from "../HomeComponents/Faqs";
import CoursesTestimonial from "./CoursesTestimonial";
import ExpectComputing from "../../lib/ExpectComputing";
import CloudComputingcontent from "./Content/Cloudcomputingcontent";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CloudComputing() {
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
  const microp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none">
      <path
        d="M9.13797 1.96826C8.37074 1.96826 7.63493 2.27304 7.09242 2.81556C6.5499 3.35808 6.24512 4.09389 6.24512 4.86112V10.004C6.24512 10.3839 6.31994 10.76 6.46532 11.111C6.6107 11.462 6.82379 11.7809 7.09242 12.0495C7.36104 12.3182 7.67995 12.5312 8.03093 12.6766C8.3819 12.822 8.75808 12.8968 9.13797 12.8968C9.51787 12.8968 9.89405 12.822 10.245 12.6766C10.596 12.5312 10.9149 12.3182 11.1835 12.0495C11.4522 11.7809 11.6652 11.462 11.8106 11.111C11.956 10.76 12.0308 10.3839 12.0308 10.004V4.86112C12.0308 4.09389 11.726 3.35808 11.1835 2.81556C10.641 2.27304 9.90521 1.96826 9.13797 1.96826ZM7.2094 4.86112C7.2094 4.60786 7.25929 4.35707 7.35621 4.12309C7.45313 3.8891 7.59518 3.6765 7.77427 3.49741C7.95335 3.31833 8.16596 3.17627 8.39994 3.07935C8.63393 2.98243 8.88471 2.93255 9.13797 2.93255C9.39124 2.93255 9.64202 2.98243 9.87601 3.07935C10.11 3.17627 10.3226 3.31833 10.5017 3.49741C10.6808 3.6765 10.8228 3.8891 10.9197 4.12309C11.0167 4.35707 11.0665 4.60786 11.0665 4.86112V10.004C11.0665 10.2572 11.0167 10.508 10.9197 10.742C10.8228 10.976 10.6808 11.1886 10.5017 11.3677C10.3226 11.5468 10.11 11.6888 9.87601 11.7857C9.64202 11.8827 9.39124 11.9325 9.13797 11.9325C8.88471 11.9325 8.63393 11.8827 8.39994 11.7857C8.16596 11.6888 7.95335 11.5468 7.77427 11.3677C7.59518 11.1886 7.45313 10.976 7.35621 10.742C7.25929 10.508 7.2094 10.2572 7.2094 10.004V4.86112ZM4.9594 9.52183C4.9594 9.39396 4.90861 9.27133 4.81819 9.18091C4.72777 9.09049 4.60513 9.03969 4.47726 9.03969C4.34939 9.03969 4.22675 9.09049 4.13633 9.18091C4.04591 9.27133 3.99512 9.39396 3.99512 9.52183V10.004C3.99508 11.2845 4.47276 12.519 5.33473 13.466C6.1967 14.4129 7.38094 15.0043 8.65583 15.1243V16.9147C8.65583 17.0426 8.70663 17.1652 8.79705 17.2556C8.88747 17.346 9.0101 17.3968 9.13797 17.3968C9.26585 17.3968 9.38848 17.346 9.4789 17.2556C9.56932 17.1652 9.62012 17.0426 9.62012 16.9147V15.1243C10.895 15.0043 12.0793 14.4129 12.9412 13.466C13.8032 12.519 14.2809 11.2845 14.2808 10.004V9.52183C14.2808 9.39396 14.23 9.27133 14.1396 9.18091C14.0492 9.09049 13.9266 9.03969 13.7987 9.03969C13.6708 9.03969 13.5482 9.09049 13.4578 9.18091C13.3673 9.27133 13.3165 9.39396 13.3165 9.52183V10.004C13.3165 11.1122 12.8763 12.175 12.0927 12.9587C11.309 13.7423 10.2462 14.1825 9.13797 14.1825C8.02975 14.1825 6.96691 13.7423 6.18328 12.9587C5.39964 12.175 4.9594 11.1122 4.9594 10.004V9.52183Z"
        fill="#034FE3"
      />
    </svg>
  );

  const videocam = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none">
      <path
        d="M4.63848 4.28223C3.92239 4.28223 3.23564 4.56669 2.72929 5.07304C2.22294 5.57939 1.93848 6.26614 1.93848 6.98223V12.3822C1.93848 13.0983 2.22294 13.7851 2.72929 14.2914C3.23564 14.7978 3.92239 15.0822 4.63848 15.0822H9.13848C9.85456 15.0822 10.5413 14.7978 11.0477 14.2914C11.554 13.7851 11.8385 13.0983 11.8385 12.3822V12.0933L14.5718 13.9806C14.7406 14.0972 14.9382 14.1653 15.143 14.1777C15.3478 14.19 15.5521 14.1462 15.7337 14.0508C15.9154 13.9554 16.0675 13.8122 16.1736 13.6366C16.2797 13.461 16.3358 13.2597 16.3358 13.0545V6.30903C16.3356 6.10393 16.2795 5.90277 16.1733 5.72729C16.0671 5.55182 15.9149 5.40872 15.7333 5.31345C15.5517 5.21819 15.3475 5.17439 15.1427 5.18679C14.938 5.1992 14.7406 5.26733 14.5718 5.38383L11.8385 7.27023V6.98223C11.8385 6.26614 11.554 5.57939 11.0477 5.07304C10.5413 4.56669 9.85456 4.28223 9.13848 4.28223H4.63848ZM11.8385 8.36463L15.083 6.12363C15.1168 6.10031 15.1563 6.08668 15.1973 6.08421C15.2382 6.08175 15.2791 6.09054 15.3154 6.10964C15.3518 6.12873 15.3822 6.1574 15.4034 6.19255C15.4246 6.2277 15.4358 6.26798 15.4358 6.30903V13.0545C15.4358 13.0956 15.4246 13.1359 15.4034 13.171C15.3822 13.2061 15.3518 13.2348 15.3154 13.2539C15.2791 13.273 15.2382 13.2818 15.1973 13.2793C15.1563 13.2769 15.1168 13.2632 15.083 13.2399L11.8385 10.9989V8.36463ZM2.83848 6.98223C2.83848 6.50484 3.02812 6.047 3.36568 5.70943C3.70325 5.37187 4.16109 5.18223 4.63848 5.18223H9.13848C9.61587 5.18223 10.0737 5.37187 10.4113 5.70943C10.7488 6.047 10.9385 6.50484 10.9385 6.98223V12.3822C10.9385 12.8596 10.7488 13.3175 10.4113 13.655C10.0737 13.9926 9.61587 14.1822 9.13848 14.1822H4.63848C4.16109 14.1822 3.70325 13.9926 3.36568 13.655C3.02812 13.3175 2.83848 12.8596 2.83848 12.3822V6.98223Z"
        fill="#034FE3"
      />
    </svg>
  );

  const monitor = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none">
      <path
        d="M6.88818 15.6826V14.1826H3.60018C3.25468 14.1826 2.96643 14.0671 2.73543 13.8361C2.50443 13.6051 2.38868 13.3166 2.38818 12.9706V4.89462C2.38818 4.54912 2.50393 4.26087 2.73543 4.02987C2.96693 3.79887 3.25493 3.68312 3.59943 3.68262H14.6769C15.0219 3.68262 15.3099 3.79837 15.5409 4.02987C15.7719 4.26137 15.8877 4.54962 15.8882 4.89462V12.9714C15.8882 13.3164 15.7724 13.6046 15.5409 13.8361C15.3094 14.0676 15.0214 14.1831 14.6769 14.1826H11.3882V15.6826H6.88818ZM3.60018 13.4326H14.6769C14.7919 13.4326 14.8977 13.3846 14.9942 13.2886C15.0907 13.1926 15.1387 13.0866 15.1382 12.9706V4.89462C15.1382 4.77912 15.0902 4.67312 14.9942 4.57662C14.8982 4.48012 14.7924 4.43212 14.6769 4.43262H3.59943C3.48443 4.43262 3.37868 4.48062 3.28218 4.57662C3.18568 4.67262 3.13768 4.77862 3.13818 4.89462V12.9714C3.13818 13.0864 3.18618 13.1921 3.28218 13.2886C3.37818 13.3851 3.48393 13.4331 3.59943 13.4326"
        fill="#034FE3"
      />
    </svg>
  );

  const text = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none">
      <path
        d="M6.13818 7.80762C5.88954 7.80762 5.65109 7.90639 5.47527 8.0822C5.29946 8.25802 5.20068 8.49648 5.20068 8.74512C5.20068 8.99376 5.29946 9.23221 5.47527 9.40803C5.65109 9.58385 5.88954 9.68262 6.13818 9.68262C6.38682 9.68262 6.62528 9.58385 6.8011 9.40803C6.97691 9.23221 7.07568 8.99376 7.07568 8.74512C7.07568 8.49648 6.97691 8.25802 6.8011 8.0822C6.62528 7.90639 6.38682 7.80762 6.13818 7.80762ZM9.13818 7.80762C8.88954 7.80762 8.65109 7.90639 8.47527 8.0822C8.29946 8.25802 8.20068 8.49648 8.20068 8.74512C8.20068 8.99376 8.29946 9.23221 8.47527 9.40803C8.65109 9.58385 8.88954 9.68262 9.13818 9.68262C9.38682 9.68262 9.62528 9.58385 9.8011 9.40803C9.97691 9.23221 10.0757 8.99376 10.0757 8.74512C10.0757 8.49648 9.97691 8.25802 9.8011 8.0822C9.62528 7.90639 9.38682 7.80762 9.13818 7.80762ZM11.2007 8.74512C11.2007 8.49648 11.2995 8.25802 11.4753 8.0822C11.6511 7.90639 11.8895 7.80762 12.1382 7.80762C12.3868 7.80762 12.6253 7.90639 12.8011 8.0822C12.9769 8.25802 13.0757 8.49648 13.0757 8.74512C13.0757 8.99376 12.9769 9.23221 12.8011 9.40803C12.6253 9.58385 12.3868 9.68262 12.1382 9.68262C11.8895 9.68262 11.6511 9.58385 11.4753 9.40803C11.2995 9.23221 11.2007 8.99376 11.2007 8.74512Z"
        fill="#034FE3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.2132 4.12745C10.1927 3.95513 8.16173 3.9451 6.13968 4.09745L5.99493 4.1087C5.06524 4.17886 4.19637 4.59765 3.56232 5.28121C2.92828 5.96476 2.57588 6.86261 2.57568 7.79495V14.1827C2.57577 14.2799 2.60106 14.3755 2.6491 14.4601C2.69713 14.5446 2.76626 14.6153 2.84974 14.6651C2.93323 14.715 3.02821 14.7424 3.12543 14.7446C3.22265 14.7468 3.31877 14.7237 3.40443 14.6777L6.33693 13.1019C6.47365 13.0285 6.62647 12.9901 6.78168 12.9902H13.5137C14.3627 12.9902 15.0902 12.3827 15.2424 11.5479C15.5514 9.8552 15.5754 8.1227 15.3144 6.4217L15.2379 5.91995C15.1699 5.47667 14.9549 5.06913 14.6273 4.7628C14.2998 4.45648 13.8788 4.26916 13.4319 4.23095L12.2132 4.12745ZM6.22518 5.21945C8.18729 5.07141 10.1581 5.08094 12.1187 5.24795L13.3367 5.3522C13.7387 5.3867 14.0657 5.69195 14.1264 6.09095L14.2037 6.59195C14.4453 8.16946 14.4225 9.77619 14.1362 11.3462C14.1097 11.4918 14.0329 11.6235 13.9193 11.7183C13.8057 11.8132 13.6624 11.8651 13.5144 11.8652H6.78168C6.44086 11.8653 6.10536 11.9498 5.80518 12.1112L3.70068 13.2422V7.79495C3.70072 7.14633 3.94578 6.52167 4.38678 6.04604C4.82778 5.57041 5.43217 5.27893 6.07893 5.22995L6.22518 5.21945Z"
        fill="#034FE3"
      />
    </svg>
  );

  const seting = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.13832 3.68262C9.43917 3.68262 9.73574 3.7049 10.0246 3.74776L10.46 5.0669C10.8415 5.17576 11.204 5.3309 11.54 5.52633L12.7915 4.9229C13.2346 5.26319 13.6289 5.66433 13.9615 6.11347L13.3357 7.35376C13.5252 7.69319 13.6743 8.05833 13.7763 8.44233L15.0877 8.89919C15.16 9.45376 15.1551 10.0157 15.0732 10.5689L13.754 11.0043C13.6459 11.3819 13.4916 11.7446 13.2946 12.0843L13.898 13.3358C13.5573 13.779 13.1566 14.1728 12.7075 14.5058L11.4672 13.88C11.1241 14.0716 10.7584 14.2196 10.3786 14.3206L9.92174 15.632C9.36717 15.7043 8.80526 15.6994 8.25203 15.6175L7.8166 14.2983C7.43907 14.1902 7.07632 14.0359 6.7366 13.8389L5.48517 14.4423C5.04191 14.1016 4.64814 13.7009 4.31517 13.2518L4.94089 12.0115C4.74975 11.6681 4.60177 11.3025 4.50032 10.9229L3.18889 10.4652C3.11671 9.9109 3.12161 9.34928 3.20346 8.79633L4.5226 8.3609C4.63146 7.97947 4.7866 7.6169 4.98203 7.2809L4.3786 6.02947C4.71935 5.58621 5.12004 5.19244 5.56917 4.85947L6.80946 5.48519C7.15256 5.29359 7.51825 5.14559 7.89803 5.04462L8.35574 3.73319C8.61523 3.69943 8.87664 3.68254 9.13832 3.68262Z"
        stroke="#034FE3"
        stroke-width="0.933"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.13783 12.2542C10.558 12.2542 11.7093 11.1029 11.7093 9.68276C11.7093 8.2626 10.558 7.11133 9.13783 7.11133C7.71767 7.11133 6.56641 8.2626 6.56641 9.68276C6.56641 11.1029 7.71767 12.2542 9.13783 12.2542Z"
        stroke="#034FE3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  return (
    <div className="bg-[#F5F5F5]">
      <span className="  md:h-[104px] md:w-[104px] h-[50px] w-[50px]   bg-[#034FE30D] absolute md:top-[50px] md:right-[640px] top-[134px] right-[60px] "></span>
      <span className="  md:h-[104px] md:w-[104px] w-[50px] h-[50px]  bg-[#034FE30D] absolute md:top-[350px] md:left-[314px] top-[282px] left-0  "></span>{" "}
      <div className="     bg-[linear-gradient(to_right,#4f4f4f0e_1px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_1px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]   smm:h-[78vh] sm:h-[90vh]   w-full border-b">
        <motion.div
          initial={{ opacity: 0.45 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className=" w-[90%] mx-auto flex md:flex-row flex-col justify-between   py-[70px] items-center">
          <div className=" flex-1   flex flex-col justify-end">
            <div className=" flex flex-col gap-[24px]">
              <p className=" sm:text-[14px] text-[12px]  font-[400] py-[10px] sm:px-[24px] px-[14px] border rounded-full w-fit ">
                TRAINING & CONSULTATION
              </p>
              <h1 className=" text-[#1A1A1A] font-[700] sm:text-[64px] text-[40px] sm:w-full w-[320px] sm:whitespace-nowrap sm:leading-[130%] sm:tracker-[1.28px] leading-[120%] tracker-[0.8px]">
                Cloud Computing & <br />
                <span className=" text-[#034FE3]">DevOps</span> Training
              </h1>
              <p className=" text-[#1A1A1A] font-[300] sm:text-[24px] text-[18px] sm:w-[650px] w-[335px]">
                Get to know your tutors, understand the role of cloud computing,
                and devOps training in our everyday lives.
              </p>
              <p className=" text-[#1A1A1A66] font-[300] text-[20px] flex items-center gap-[12px] ">
                Live on{" "}
                <img
                  className=" sm:w-[193px] sm:h-[35px] w-[159px] h-[29px] object-cover"
                  src={googlemeet}
                  alt=""
                />
              </p>
            </div>
            <div className=" flex gap-[24px] sm:pt-[50px] pt-[36px]">
              <Link
                to="/enroll"
                className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white sm:py-[20px] sm:px-[36px] py-[12px] px-[24px] sm:text-[18px] text-[16px] font-[500]">
                Enroll for the next cohort
                <ArrowForward />
              </Link>
            </div>
          </div>
          {/* hero images */}
          <div className=" flex-1 flex justify-end sm:pt-0 pt-10">
            <div className=" flex flex-col  sm:gap-[34px] gap-[20px]  bg-[#F1F1F1] rounded-[10px] sm:p-[23px] p-[10px] shadow-lg">
              <div className=" grid grid-cols-3 sm:gap-x-[31.6px] sm:gap-y-[19.25px] gap-x-[15px] gap-y-[12px]">
                <img
                  className=" sm:w-[146.64px] sm:h-[146.64px] w-[97px] h-[97px] rounded-[10px] object-cover"
                  src={cloudhero1}
                  alt=""
                />
                <img
                  className=" sm:w-[146.64px] sm:h-[146.64px] w-[97px] h-[97px] rounded-[10px] object-cover"
                  src={cloudhero2}
                  alt=""
                />
                <img
                  className=" sm:w-[146.64px] sm:h-[146.64px] w-[97px] h-[97px] rounded-[10px] object-cover"
                  src={cloudhero3}
                  alt=""
                />
                <img
                  className=" sm:w-[146.64px] sm:h-[146.64px] w-[97px] h-[97px] rounded-[10px] object-cover"
                  src={cloudhero4}
                  alt=""
                />
                <img
                  className=" sm:w-[146.64px] sm:h-[146.64px] w-[97px] h-[97px] rounded-[10px] object-cover"
                  src={cloudhero5}
                  alt=""
                />
                <img
                  className=" sm:w-[146.64px] sm:h-[146.64px] w-[97px] h-[97px] rounded-[10px] object-cover"
                  src={cloudhero6}
                  alt=""
                />
              </div>
              <div className=" flex sm:gap-[24px] gap-[12px] p-[20px] items-center justify-center">
                <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                  {" "}
                  {microp}
                </section>
                <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                  {" "}
                  {videocam}
                </section>
                <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                  {" "}
                  {monitor}
                </section>
                <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                  {" "}
                  {text}
                </section>
                <section className="p-[13px] bg-[#FFFFFF] rounded-full">
                  {" "}
                  {seting}
                </section>
              </div>
            </div>
          </div>
        </motion.div>
        {/* course info  */}
        <div className=" flex sm:flex-row flex-col justify-around sm:items-center smm:max-w-[80%] sm:max-w-[88%]  max-w-[90%] mx-auto  text-[24px] font-[400] text-[#1A1A1A] bg-[#EBECED] rounded-[10px] py-[36px] sm:px-0 px-[40px] sm:gap-0 gap-[24px] shadow-2xl">
          <section className=" flex flex-col">
            <h3 className="text-[24px] font-[600] text-[#1A1A1A] flex gap-[8px] items-center">
              <span className=" text-[#034FE3] ">
                <Star />
              </span>{" "}
              4.8
            </h3>
            <p className="text-[16px] font-[300] text-[#1A1A1A] flex gap-[8px]">
              (75,765 reviews)
            </p>
          </section>
          <span className=" sm:bg-[#034FE3] sm:w-[1px] sm:h-[44px]  h-[0px] sm:border-none border border-dashed border-[#034FE34D]"></span>{" "}
          <section className=" flex flex-col">
            <h3 className="text-[24px] font-[600] text-[#1A1A1A] flex gap-[8px] items-center">
              7 course series
            </h3>
            <p className="text-[16px] font-[300] text-[#1A1A1A] flex gap-[8px]">
              Earn a career credential that <br /> demonstrates your expertise
            </p>
          </section>
          <span className=" sm:bg-[#034FE3] sm:w-[1px] sm:h-[44px]  h-[0px] sm:border-none border border-dashed border-[#034FE34D]"></span>{" "}
          <section className=" flex flex-col">
            <h3 className="text-[24px] font-[600] text-[#1A1A1A] flex gap-[8px] items-center">
              Fixed schedule
            </h3>
            <p className="text-[16px] font-[300] text-[#1A1A1A] flex gap-[8px]">
              3 months data analytics <br /> curriculum
            </p>
          </section>
          <span className=" sm:bg-[#034FE3] sm:w-[1px] sm:h-[44px]  h-[0px] sm:border-none border border-dashed border-[#034FE34D]"></span>{" "}
          <section className=" flex flex-col">
            <h3 className="text-[24px] font-[600] text-[#1A1A1A] flex gap-[8px] items-center">
              Earn a certificate
            </h3>
            <p className="text-[16px] font-[300] text-[#1A1A1A] flex gap-[8px]">
              Earn a career credential that <br /> demonstrates your expertise
            </p>
          </section>
        </div>
      </div>
      {/* component 2 */}
      <div className="">
        {/* what to expect section */}
        <div className=" pt-[310px]  smm:max-w-[80%] sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-gray-200 relative">
          <span className="  h-[100px] w-[100px]    bg-[#EBECED] border-[1px] border-[#034FE30D] absolute top-[280px] right-[100px]  md:flex hidden"></span>{" "}
          <span className="  h-[100px] w-[100px]    bg-[#EBECED] border-[1px] border-[#034FE30D] absolute top-[180px] right-[0px]  md:flex hidden"></span>{" "}
          <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[329px] top-[185px] -left-[1.5px]"></span>
          <div className=" px-[20px] ">
            <p className=" font-[600] sm:text-[48px] text-[32px] text-[#333]">
              <span className=" text-[#034FE3]">What </span>to expect
            </p>
          </div>
          <div className="flex flex-wrap py-[68px] sm:gap-y-[68px] sm:gap-x-[48px] gap-y-[24px] lg:gap-x-[5px] ">
            {ExpectComputing.map((expect) => (
              <section className=" flex md:gap-[14px] gap-[5px] sm:py-[48px] py-[36px] sm:px-[36px] lg:px-[16px] px-[10px]  items-baseline bg-[#EBECED] rounded-[10px]">
                <span>{dot}</span>
                <p className="font-[600] sm:text-[20px] text-[16px] text-[#1A1A1ACC] w-[298px] h-[165px]">
                   {" "}
                  <span className="text-[#034FE3] ">
                    {expect.headmsg} <br />
                  </span>
                  {expect.message}
                </p>
              </section>
            ))}
          </div>
        </div>
        {/* skills to gain  section*/}
        <div className=" py-[160px]  smm:max-w-[80%] sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-gray-200 relative">
          <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[179px] top-[165px] -left-[1.5px]"></span>
          <div className=" px-[20px] ">
            <p className=" font-[600] sm:text-[48px] text-[32px] text-[#333]">
              <span className=" text-[#034FE3]">Skills </span>you'll gain
            </p>
            <p className=" text-[18px] font-[300] text-[#1A1A1ACC]">
              We offer amazing services crafted specially for you here at zion
              tech hub.
            </p>
          </div>
          <div className="flex md:flex-row md:flex-wrap flex-col py-[68px] gap-[32px] sm:w-[1292px] sm:px-[20px] px-[10px]">
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED]  w-fit rounded-[10px]">
              Cloud Platform Proficiency
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED]  w-fit rounded-[10px]">
              Infrastructure as Code (IaC)
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED]  w-fit rounded-[10px]">
              Containerization
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED]  w-fit rounded-[10px]">
              Container Orchestration
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED]  w-fit rounded-[10px]">
              Continuous Integration/Continuous Deployment (CI/CD)
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED]  w-fit rounded-[10px]">
              Monitoring and Logging
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED]  w-fit rounded-[10px]">
              Security Best Practices
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED]  w-fit rounded-[10px]">
              Version Control
            </p>
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED]  w-fit rounded-[10px]">
              Scripting and Automation
            </p>{" "}
            <p className="px-[32px] py-[10px]  text-[18px] font-[600] text-[#1A1A1ACC] bg-[#EBECED]  w-fit rounded-[10px]">
              Collaboration Tools
            </p>
          </div>
        </div>
        {/* details to know section */}
        <div className=" sm:pb-[180px] pb-[100px]  smm:max-w-[80%] sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-gray-200 relative">
          <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[6px] -left-[1.5px]"></span>
          <div className=" px-[20px] ">
            <p className=" font-[600] sm:text-[48px] text-[32px] text-[#333]">
              <span className=" text-[#034FE3]">Details </span>to know
            </p>
            <p className=" text-[18px] font-[300] text-[#1A1A1ACC]">
              <b className=" text-[#1A1A1ACC]">Shareable certificate</b> - Add
              to your LinkedIn profile
            </p>
          </div>
          <div className="flex sm:flex-row flex-col  py-[68px] sm:gap-[94px] gap-[36px]">
            <section className=" w-fit md:p-[52px]  lg:p-[32px] p-[25px] bg-[#EBECED] rounded-[10px]">
              <img
                className=" sm:w-[448.09px] sm:h-[315.19px] w-[281px] h-[199px]  object-cover  rounded-[10px]"
                src={certificate1}
                alt=""
              />
            </section>
            <section className=" w-fit  md:p-[52px]  lg:p-[32px] p-[25px] bg-[#EBECED] rounded-[10px]">
              <img
                className=" sm:w-[448.09px] sm:h-[315.19px] w-[281px] h-[199px] object-cover  rounded-[10px]"
                src={certificate2}
                alt=""
              />
            </section>
          </div>
        </div>
        {/* course content */}
        <div className=" flex flex-col smm:max-w-[80%] sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-gray-300 ">
          <CloudComputingcontent />
        </div>

        <div className=" flex flex-col smm:max-w-[90%] sm:max-w-[94%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%]  ml-auto border-l border-gray-300  overflow-x-hidden">
          <CoursesTestimonial />
        </div>
        <div className=" flex flex-col  smm:max-w-[80%] sm:max-w-[88%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-gray-300 ">
          <Faqs />
        </div>
      </div>
    </div>
  );
}

export default CloudComputing;
