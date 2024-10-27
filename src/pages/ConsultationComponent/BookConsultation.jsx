import React from "react";
import { consultationpopup } from "../../assets";

function BookConsultation() {
  return (
    <div className="bg-[#FFF] w-fit mx-auto  h-[688px] rounded-[10px] mt-[130px] p-[26px]">
      <div className=" flex  gap-[52px] ">
        <img
          src={consultationpopup}
          className="h-[635px] w-[469px] object-cover rounded-[5px]"
          alt=""
        />

        <div className=" flex flex-col">
          <h2 className="text-[36px] font-[600] text-[#034FE3]">
            Book Your Consultation
          </h2>
          <p className="text-[16px] font-[300] pb-[33px]">
            Fill in the input fields with relevant information.
          </p>
          <form className=" flex flex-col gap-[25px]" action="">
            {/* inputs  */}
            <div className=" flex gap-[14px]">
              <input
                className=" p-[13px] bg-[#F6F6F6]  font-[300] text-[16px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px]"
                type="text"
                placeholder="First name"
              />
              <input
                className=" p-[13px] bg-[#F6F6F6]  font-[300] text-[16px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px]"
                type="text"
                placeholder="First name"
              />
            </div>
            {/* inputs  */}
            <input
              className=" p-[13px] bg-[#F6F6F6]  font-[300] text-[16px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px]"
              type="text"
              placeholder="Email"
            />
            <input
              className=" p-[13px] bg-[#F6F6F6]  font-[300] text-[16px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px]"
              type="text"
              placeholder="Service sector"
            />
            <input
              className=" p-[13px] bg-[#F6F6F6]  font-[300] text-[16px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px]"
              type="text"
              placeholder="Choose date and time"
            />
            {/* <input
              className=" p-[13px] bg-[#F6F6F6]  font-[300] text-[16px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px] h-[148px] flex items-start"
              type="text"
            /> */}
            <textarea
              name=""
              id=""
              placeholder="Leave a message"
              className=" p-[13px] bg-[#F6F6F6]  font-[300] text-[16px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px] h-[148px] flex items-start"></textarea>
            <button className=" bg-[#034FE3] text-[#FFF] font-[600] text-[16px] py-[13px] rounded-[6px]">
              Book now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookConsultation;
