import React, { useState } from "react";
import { consultationpopup } from "../../assets";
import { motion } from "framer-motion";

function BookConsultation() {
  const [pickDate, setPickDate] = useState(false);
  const calendar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none">
      <path
        d="M2.57422 10.0329C2.57422 6.89038 2.57422 5.31871 3.55089 4.34288C4.52672 3.36621 6.09839 3.36621 9.24089 3.36621H12.5742C15.7167 3.36621 17.2884 3.36621 18.2642 4.34288C19.2409 5.31871 19.2409 6.89038 19.2409 10.0329V11.6995C19.2409 14.842 19.2409 16.4137 18.2642 17.3895C17.2884 18.3662 15.7167 18.3662 12.5742 18.3662H9.24089C6.09839 18.3662 4.52672 18.3662 3.55089 17.3895C2.57422 16.4137 2.57422 14.842 2.57422 11.6995V10.0329Z"
        stroke="#1A1A1A"
        stroke-opacity="0.5"
        stroke-width="1.5"
      />
      <path
        d="M6.74219 3.36621V2.11621M15.0755 3.36621V2.11621M2.99219 7.53288H18.8255"
        stroke="#1A1A1A"
        stroke-opacity="0.5"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M15.9062 14.1999C15.9062 14.4209 15.8185 14.6328 15.6622 14.7891C15.5059 14.9454 15.2939 15.0332 15.0729 15.0332C14.8519 15.0332 14.6399 14.9454 14.4837 14.7891C14.3274 14.6328 14.2396 14.4209 14.2396 14.1999C14.2396 13.9789 14.3274 13.7669 14.4837 13.6106C14.6399 13.4543 14.8519 13.3665 15.0729 13.3665C15.2939 13.3665 15.5059 13.4543 15.6622 13.6106C15.8185 13.7669 15.9062 13.9789 15.9062 14.1999ZM15.9062 10.8665C15.9062 11.0876 15.8185 11.2995 15.6622 11.4558C15.5059 11.6121 15.2939 11.6999 15.0729 11.6999C14.8519 11.6999 14.6399 11.6121 14.4837 11.4558C14.3274 11.2995 14.2396 11.0876 14.2396 10.8665C14.2396 10.6455 14.3274 10.4336 14.4837 10.2773C14.6399 10.121 14.8519 10.0332 15.0729 10.0332C15.2939 10.0332 15.5059 10.121 15.6622 10.2773C15.8185 10.4336 15.9062 10.6455 15.9062 10.8665ZM11.7396 14.1999C11.7396 14.4209 11.6518 14.6328 11.4955 14.7891C11.3392 14.9454 11.1273 15.0332 10.9062 15.0332C10.6852 15.0332 10.4733 14.9454 10.317 14.7891C10.1607 14.6328 10.0729 14.4209 10.0729 14.1999C10.0729 13.9789 10.1607 13.7669 10.317 13.6106C10.4733 13.4543 10.6852 13.3665 10.9062 13.3665C11.1273 13.3665 11.3392 13.4543 11.4955 13.6106C11.6518 13.7669 11.7396 13.9789 11.7396 14.1999ZM11.7396 10.8665C11.7396 11.0876 11.6518 11.2995 11.4955 11.4558C11.3392 11.6121 11.1273 11.6999 10.9062 11.6999C10.6852 11.6999 10.4733 11.6121 10.317 11.4558C10.1607 11.2995 10.0729 11.0876 10.0729 10.8665C10.0729 10.6455 10.1607 10.4336 10.317 10.2773C10.4733 10.121 10.6852 10.0332 10.9062 10.0332C11.1273 10.0332 11.3392 10.121 11.4955 10.2773C11.6518 10.4336 11.7396 10.6455 11.7396 10.8665ZM7.57292 14.1999C7.57292 14.4209 7.48512 14.6328 7.32884 14.7891C7.17256 14.9454 6.9606 15.0332 6.73958 15.0332C6.51857 15.0332 6.30661 14.9454 6.15033 14.7891C5.99405 14.6328 5.90625 14.4209 5.90625 14.1999C5.90625 13.9789 5.99405 13.7669 6.15033 13.6106C6.30661 13.4543 6.51857 13.3665 6.73958 13.3665C6.9606 13.3665 7.17256 13.4543 7.32884 13.6106C7.48512 13.7669 7.57292 13.9789 7.57292 14.1999ZM7.57292 10.8665C7.57292 11.0876 7.48512 11.2995 7.32884 11.4558C7.17256 11.6121 6.9606 11.6999 6.73958 11.6999C6.51857 11.6999 6.30661 11.6121 6.15033 11.4558C5.99405 11.2995 5.90625 11.0876 5.90625 10.8665C5.90625 10.6455 5.99405 10.4336 6.15033 10.2773C6.30661 10.121 6.51857 10.0332 6.73958 10.0332C6.9606 10.0332 7.17256 10.121 7.32884 10.2773C7.48512 10.4336 7.57292 10.6455 7.57292 10.8665Z"
        fill="#1A1A1A"
        fill-opacity="0.5"
      />
    </svg>
  );
  return (
    <div className="bg-[#FFF] w-fit mx-auto  h-[688px] rounded-[10px] mt-[130px] md:p-[26px] p-[18px]">
      <div className=" flex  gap-[52px]  md:flex-row flex-col">
        <img
          src={consultationpopup}
          className="h-[635px] w-[469px] object-cover rounded-[5px] md:flex hidden"
          alt=""
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear", delay: 1 }}
          className=" flex flex-col">
          <h2 className="md:text-[36px] text-[24px] font-[600] text-[#034FE3]">
            Book Your Consultation
          </h2>
          <p className="md:text-[16px] text-[14px] font-[300] pb-[33px]">
            Fill in the input fields with relevant information.
          </p>
          <form className=" flex flex-col gap-[25px] relative" action="">
            {/* inputs  */}
            <div className=" flex gap-[14px]">
              <input
                className=" p-[13px] bg-[#F6F6F6]  font-[300] md:text-[16px] text-[14px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px] md:w-full w-[150px]"
                type="text"
                placeholder="First name"
              />
              <input
                className=" p-[13px] bg-[#F6F6F6]  font-[300] md:text-[16px] text-[14px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px] md:w-full w-[150px]"
                type="text"
                placeholder="Last name"
              />
            </div>
            {/* inputs  */}
            <input
              className=" p-[13px] bg-[#F6F6F6]  font-[300] md:text-[16px] text-[14px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px] md:w-full w-[320px] "
              type="text"
              placeholder="Email"
            />
            <input
              className=" p-[13px] bg-[#F6F6F6]  font-[300] md:text-[16px] text-[14px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px] md:w-full w-[320px]"
              type="text"
              placeholder="Service sector"
            />

            <section
              className=" p-[13px] bg-[#F6F6F6]  font-[300] md:text-[16px] text-[14px]  rounded-[5px] md:w-full w-[320px] flex items-center justify-between  cursor-pointer"
              onClick={() => setPickDate(!pickDate)}>
              <p className="text-gray-400">Choose date and time</p>
              {calendar}
            </section>

            <textarea
              name=""
              id=""
              placeholder="Leave a message"
              className=" p-[13px] bg-[#F6F6F6]  font-[300] md:text-[16px] text-[14px] text-[rgba(26, 26, 26, 0.50)] rounded-[5px] md:w-full w-[320px] h-[148px] flex items-start resize-none"></textarea>
            <button className=" bg-[#034FE3] text-[#FFF] font-[600] text-[16px] py-[13px] rounded-[6px]">
              Book now
            </button>
            {/* calendar  */}
            {pickDate && <div className="absolute">hello</div>}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default BookConsultation;
