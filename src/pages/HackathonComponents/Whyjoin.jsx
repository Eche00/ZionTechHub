import React from "react";

function Whyjoin() {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none">
      <path
        d="M3.70006 14.722V4.5C3.70006 3.96957 3.91077 3.46086 4.28585 3.08579C4.66092 2.71071 5.16963 2.5 5.70006 2.5H19.3001C19.8305 2.5 20.3392 2.71071 20.7143 3.08579C21.0893 3.46086 21.3001 3.96957 21.3001 4.5V14.722M3.70006 14.722H21.3001M3.70006 14.722L2.22006 19.956C2.136 20.2534 2.122 20.5662 2.17916 20.8699C2.23631 21.1736 2.36307 21.4599 2.54948 21.7064C2.73589 21.9529 2.97689 22.1528 3.25355 22.2905C3.53022 22.4282 3.83502 22.4999 4.14406 22.5H20.8561C21.1651 22.4999 21.4699 22.4282 21.7466 22.2905C22.0232 22.1528 22.2642 21.9529 22.4506 21.7064C22.637 21.4599 22.7638 21.1736 22.821 20.8699C22.8781 20.5662 22.8641 20.2534 22.7801 19.956L21.3001 14.722"
        stroke="#034FE3"
        stroke-width="1.5"
      />
      <path
        d="M11.5 19.5H13.5"
        stroke="#034FE3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  return (
    <div className=" relative pb-[100px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[10px] -left-[1.5px]"></span>
      <div className=" px-[20px] ">
        <p className=" font-[600] sm:text-[48px] text-[36px] text-[#333] sm:w-full w-[260px]">
          Here’s why you should <span className=" text-[#034FE3] ">join</span>{" "}
        </p>
      </div>

      <div className=" my-[69px] flex flex-wrap md:gap-[25px]  gap-[69px] max-w-[1265px] text-[#1A1A1A]">
        {/* why 1  */}
        <section className="   sm:py-[40] sm:px-[40px] py-[40px] lg:px-[20px] px-[15px] rounded-[10px] bg-[#EBECED] flex flex-col gap-[12px] md:w-fit w-[95%]">
          <span className="w-[45px] h-[45px]  bg-white flex items-center justify-center p-[10px] rounded-[5px] border border-gray-400">
            {icon}
          </span>
          <h3 className="  font-[600] sm:text-[28px] text-[20px] sm:h-[84px]  w-fit">
            Gain hands-on experience <br /> with real-world challenges
          </h3>
        </section>
        {/* why 2  */}
        <section className="sm:py-[40] sm:px-[40px] py-[40px] lg:px-[20px] px-[15px] rounded-[10px] bg-[#EBECED] flex flex-col gap-[12px]  md:w-fit w-[95%]">
          <span className="w-[45px] h-[45px]  bg-white flex items-center justify-center p-[10px] rounded-[5px] border border-gray-400">
            {icon}
          </span>
          <h3 className="  font-[600] sm:text-[28px] text-[20px] h-[84px]  w-fit">
            Collaborate with like- <br />
            minded tech talents
          </h3>
        </section>
        {/* why 3  */}
        <section className=" sm:py-[40] sm:px-[40px] py-[40px] lg:px-[20px] px-[15px] rounded-[10px] bg-[#EBECED] flex flex-col gap-[12px] md:w-fit w-[95%]">
          <span className="w-[45px] h-[45px]  bg-white flex items-center justify-center p-[10px] rounded-[5px] border border-gray-400">
            {icon}
          </span>
          <h3 className=" font-[600] sm:text-[28px] text-[20px] h-[84px]  w-fit">
            Get noticed by industry <br /> professionals and recruiters
          </h3>
        </section>
        {/* why 4 */}
        <section className=" sm:py-[40] sm:px-[40px] py-[40px] lg:px-[20px] px-[15px] rounded-[10px] bg-[#EBECED] flex flex-col gap-[12px] md:w-fit w-[95%]">
          <span className="w-[45px] h-[45px]  bg-white flex items-center justify-center p-[10px] rounded-[5px] border border-gray-400">
            {icon}
          </span>
          <h3 className="  font-[600] sm:text-[28px] text-[20px] h-[84px]  w-fit">
            Win money while <br /> building your portfolio
          </h3>
        </section>
        {/* why 5  */}
        <section className=" sm:py-[40] sm:px-[40px] py-[40px] lg:px-[20px] px-[15px] rounded-[10px] bg-[#EBECED] flex flex-col gap-[12px]  md:w-fit w-[95%]">
          <span className="w-[45px] h-[45px]  bg-white flex items-center justify-center p-[10px] rounded-[5px] border border-gray-400">
            {icon}
          </span>
          <h3 className="  font-[600] sm:text-[28px] text-[20px] h-[84px]  w-fit">
            It’s the perfect launchpad <br /> for your data career
          </h3>
        </section>
      </div>
    </div>
  );
}

export default Whyjoin;
