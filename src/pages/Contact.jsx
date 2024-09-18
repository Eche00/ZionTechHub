import { Phone } from "@mui/icons-material";
import { div } from "framer-motion/client";
import React from "react";
import Contactfaqs from "./Contactuscomponenet/Contactfaqs";

function Contact() {
  return (
    <div>
      <div className=" pt-[130px]    bg-[linear-gradient(to_right,#4f4f4f0e_1px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_1px,transparent_0.1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]   sm:h-[100vh]   w-full">
        <div>
          <div className=" flex items-center justify-center pt-[150px]">
            <div className=" flex flex-col gap-[24px] items-center">
              <p className=" text-[14px]  font-[400] py-[10px] px-[24px] border rounded-full w-fit ">
                ZION TECH HUB
              </p>
              <h1 className=" text-[#1A1A1A] font-[700] text-[64px] ">
                Contact our team
              </h1>
              <p className=" text-[#1A1A1A] font-[300] text-[24px]">
                Let us know how we can help
              </p>
            </div>
          </div>
          {/* part 2 */}
          <div className=" flex flex-wrap  gap-[33px] items-center justify-center py-[100px]">
            {/* count  */}
            <div className=" py-[25px] px-[40px] flex flex-col gap-[48px] border border-[#1A1A1A33] rounded-[10px] bg-[#F0F0F0]">
              <span className=" p-[10px] rounded-[5px] border border-[#1A1A1A33] w-fit">
                <Phone />
              </span>
              <section className="text-[#1A1A1A] flex flex-col gap-[24px]">
                <p className=" text-[18px] font-[200] ">
                  <span className=" text-[24px] font-[600] ">Call us</span>{" "}
                  <br />
                  Mon-Fri from 8am to 5pm
                </p>
                <p className=" text-[18px] font-[600] underline">
                  +234 902 366 7623
                </p>
              </section>
            </div>
            {/* count  */}
            <div className=" py-[25px] px-[40px] flex flex-col gap-[48px] border border-[#1A1A1A33] rounded-[10px] bg-[#F0F0F0]">
              <span className=" p-[10px] rounded-[5px] border border-[#1A1A1A33] w-fit">
                <Phone />
              </span>
              <section className="text-[#1A1A1A] flex flex-col gap-[24px]">
                <p className=" text-[18px] font-[200] ">
                  <span className=" text-[24px] font-[600] ">Call us</span>{" "}
                  <br />
                  Mon-Fri from 8am to 5pm
                </p>
                <p className=" text-[18px] font-[600] underline">
                  +234 902 366 7623
                </p>
              </section>
            </div>
            {/* count  */}
            <div className=" py-[25px] px-[40px] flex flex-col gap-[48px] border border-[#1A1A1A33] rounded-[10px] bg-[#F0F0F0]">
              <span className=" p-[10px] rounded-[5px] border border-[#1A1A1A33] w-fit">
                <Phone />
              </span>
              <section className="text-[#1A1A1A] flex flex-col gap-[24px]">
                <p className=" text-[18px] font-[200] ">
                  <span className=" text-[24px] font-[600] ">Call us</span>{" "}
                  <br />
                  Mon-Fri from 8am to 5pm
                </p>
                <p className=" text-[18px] font-[600] underline">
                  +234 902 366 7623
                </p>
              </section>
            </div>
            {/* count  */}
            <div className=" py-[25px] px-[40px] flex flex-col gap-[48px] border border-[#1A1A1A33] rounded-[10px] bg-[#F0F0F0]">
              <span className=" p-[10px] rounded-[5px] border border-[#1A1A1A33] w-fit">
                <Phone />
              </span>
              <section className="text-[#1A1A1A] flex flex-col gap-[24px]">
                <p className=" text-[18px] font-[200] ">
                  <span className=" text-[24px] font-[600] ">Call us</span>{" "}
                  <br />
                  Mon-Fri from 8am to 5pm
                </p>
                <p className=" text-[18px] font-[600] underline">
                  +234 902 366 7623
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Contactfaqs />
    </div>
  );
}

export default Contact;
