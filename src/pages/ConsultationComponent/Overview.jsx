import React from "react";
import { Reviewimg } from "../../assets";

function Overview() {
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
  return (
    <div>
      <div className=" pt-[50px]  relative">
        <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute md:top-[69px] top-[57px] -left-[1.5px]"></span>
        <div className=" px-2 ">
          <p className=" font-[600] md:text-[48px] text-[32px] text-[#333]">
            Overview
          </p>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row sm:gap-[72px] gap-[40px] pt-[68px]">
        <div className=" w-fit relative">
          <section className="md:w-[155px] md:h-[129px] w-[98px] h-[81px]  bg-[#034FE31A] rounded-[10px] absolute top-0 right-0"></section>
          <img
            className="md:w-[558px] md:h-[645px] w-[352px] h-[408px] object-cover rounded-[10px]"
            src={Reviewimg}
            alt=""
          />
          <section className="md:w-[155px] md:h-[129px] w-[98px] h-[81px] bg-[#034FE31A] rounded-[10px] absolute bottom-0 left-0"></section>
        </div>
        <div className=" flex flex-col md:gap-[64px] gap-[40px] items-center justify-center">
          <section className=" flex gap-[14px] items-baseline">
            <span>{dot}</span>
            <section className=" flex flex-col gap-[24px]">
              <h2 className=" md:text-[32px] text-[20px] font-[600] text-[#034FE3]">
                In today's data-driven world,
              </h2>
              <p className=" md:text-[20px] text-[16px] font-[300] text-[#1A1A1ACC] md:w-[580px] w-[316]">
                making informed decisions requires more than just access to
                data; it demands insightful analysis and strategic planning. Our
                data consultation services are designed to help organizations
                unlock the full potential of their data, transforming raw
                information into actionable insights.
              </p>
            </section>
          </section>
          {/* part 2 */}
          <section className=" flex gap-[14px] items-baseline">
            <span>{dot}</span>
            <section className=" flex flex-col gap-[24px]">
              <h2 className=" md:text-[32px] text-[20px]  font-[600] text-[#034FE3]">
                At Zion Tech Hub,
              </h2>
              <p className="md:text-[20px] text-[16px] font-[300] text-[#1A1A1ACC] md:w-[580px] w-[316]">
                we are committed to empowering businesses with the tools and
                expertise they need to navigate the complex landscape of data.
                Our team of seasoned data consultants brings a wealth of
                experience across various industries, ensuring that we can
                tailor our solutions to meet your unique needs.
              </p>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Overview;
