import React from "react";
import { individual } from "../../assets";

function ContactUs() {
  return (
    <div className="pt-[324px] pb-[88px]">
      <div className=" flex flex-col py-[36px] px-[48px] items-center  gap-[36px] bg-[#034FE3] rounded-[10px] ">
        <div>
          <h1 className=" text-[48px] font-[700] text-[#FFFFFF]">Contact Us</h1>
        </div>
        <span className=" w-[1223px] bg-[#FFFFFF4D] h-[1px]"></span>
        <div className="flex items-center gap-[60px]">
          <section className=" flex gap-[10px]">
            <img
              className="w-[24px] h-[24] object-cover"
              src={individual}
              alt=""
            />
            <section className=" text-white ">
              <h3 className=" text-[24px] font-[400]">Email Address</h3>
              <p className=" text-[18px] font-[300]">info@ziontechub.com</p>
            </section>
          </section>
          <section className=" flex gap-[10px]">
            <img
              className="w-[24px] h-[24] object-cover"
              src={individual}
              alt=""
            />
            <section className=" text-white ">
              <h3 className=" text-[24px] font-[400]">Phone Number </h3>
              <p className=" text-[18px] font-[300]">+234 902 366 7623</p>
            </section>
          </section>
          <section className=" flex gap-[10px]">
            <img
              className="w-[24px] h-[24] object-cover"
              src={individual}
              alt=""
            />
            <section className=" text-white ">
              <h3 className=" text-[24px] font-[400]">
                Our Whatsapp Community{" "}
              </h3>
              <p className=" text-[18px] font-[300]">Click here to join us </p>
            </section>
          </section>
          <section className=" flex gap-[10px]">
            <img
              className="w-[24px] h-[24] object-cover"
              src={individual}
              alt=""
            />
            <section className=" text-white">
              <h3 className=" text-[24px] font-[400]">
                Follow Us on our Socials{" "}
              </h3>
              <p className=" text-[18px] font-[300]">
                Click here to follow our pages
              </p>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
