import React from "react";
import { Reviewimg, SirGodsentprofile } from "../../assets";

function Foundermessage() {
  const linkedld = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
        fill="#F1F1F1"
      />
    </svg>
  );
  return (
    <div className="relative pb-[272px] mt-[50px]">
      <div className=" z-0">
        <span className="  h-[100px] w-[100px]    bg-[#EBECED] border-[1px] border-[#034FE30D] absolute  -top-[230px] right-[100px] md:flex hidden"></span>{" "}
        <span className="  h-[100px] w-[100px]    bg-[#EBECED] border-[1px] border-[#034FE30D] absolute -top-[130px] right-[200px] md:flex hidden"></span>{" "}
        <span className="  h-[100px] w-[100px]    bg-[#EBECED] border-[1px] border-[#034FE30D] absolute -top-[30px] right-[300px] md:flex hidden z-0"></span>{" "}
      </div>
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[10px] -left-[1.5px] "></span>
      <div className=" px-[20px]">
        <p className=" font-[600] sm:text-[48px] text-[36px] text-[#333]">
          <span className=" text-[#034FE3]">Message</span> from our founder
        </p>
      </div>
      <div className=" flex flex-col gap-[32px] py-[32px] px-[20px]  bg-[#F5F5F5] z-10">
        <div className="sm:h-fit h-[337px]">
          <div className=" absolute sm:right-32 sm:top-0 top-[120px] sm:p-[32px] md:p-[20px] lg:p-[18px] xl:p-[15px]  border border-[#034FE314] rounded-full ">
            <div className=" sm:p-[37px] md:p-[20px] lg:p-[18px] xl:p-[15px]  border border-[#034FE314] rounded-full">
              <div className=" sm:p-[38px] md:p-[20px] lg:p-[18px] xl:p-[15px]  border border-[#034FE31A] rounded-full">
                <div className=" sm:p-[39px] md:p-[20px] lg:p-[18px] xl:p-[15px] border border-[#034FE333] rounded-full">
                  <img
                    className=" sm:w-[284px] sm:h-[284px]  w-[172px] h-[172px] object-cover rounded-full  "
                    src={SirGodsentprofile}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-[36px] md:items-end sm:items-start">
          <p className=" sm:w-[620px] md:w-[341px] lg:w-[341px] w-[341px] sm:text-[20px] text-[18px] text-[#1A1A1ACC] font-[300]">
            We envision a transformed Africa, empowered by revolutionary
            technological innovations, and recognized as a global hub of
            creativity and progress.
            <br />
            <br />
            <br />
            We strive to be the leading data consultancy in Africa, providing
            strategic insights that fuel phenomenal growth for businesses within
            and beyond the continent.
          </p>
          <p className=" text-[#034FE3] text-[20px] font-[400]">
            ~ Ndoma Godsent
          </p>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/zion-tech-hub/?viewAsMember=true">
            <button className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white py-[14px] px-[32px] text-[20px] font-[600]">
              Reach out on {linkedld}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Foundermessage;
