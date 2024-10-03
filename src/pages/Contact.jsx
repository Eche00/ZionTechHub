import { Phone } from "@mui/icons-material";
import { div } from "framer-motion/client";
import React from "react";
import Contactfaqs from "./Contactuscomponenet/Contactfaqs";
import { motion } from "framer-motion";

function Contact() {
  const dot = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none">
      <circle cx="4.00391" cy="4.5" r="4" fill="#034FE3" />
    </svg>
  );
  const phone = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
        stroke="#034FE3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const message = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none">
      <path
        d="M10 0C4.547 0 0 3.75 0 8.5C0 10.93 1.33 13.048 3.219 14.594C3.09605 15.4152 2.76217 16.1904 2.25 16.844C2.04089 17.1122 1.82208 17.3727 1.594 17.625C1.47603 17.7493 1.37115 17.8853 1.281 18.031C1.224 18.124 1.135 18.228 1.094 18.438C1.053 18.648 1.109 18.991 1.281 19.25L1.406 19.469L1.656 19.594C2.531 20.031 3.476 19.954 4.344 19.719C5.211 19.483 6.045 19.079 6.844 18.656C7.643 18.233 8.401 17.792 9 17.469C9.084 17.424 9.138 17.413 9.219 17.375C10.796 19.543 13.684 21 16.906 21C16.937 21.004 16.966 21 17 21C18.3 21 22.5 25.294 25 23.594C25.1 23.195 22.802 22.194 22.687 19.219C24.644 17.836 25.907 15.779 25.907 13.5C25.907 10.128 23.231 7.342 19.657 6.344C18.526 2.664 14.594 0 10 0ZM10 2C14.547 2 18 5.05 18 8.5C18 11.95 14.547 15 10 15C9.188 15 8.722 15.332 8.062 15.688C7.402 16.044 6.645 16.484 5.906 16.875C5.266 17.213 4.656 17.473 4.094 17.656C4.641 16.866 5.212 15.827 5.312 14.375L5.344 13.812L4.875 13.469C3.093 12.22 2 10.423 2 8.5C2 5.05 5.453 2 10 2Z"
        fill="#034FE3"
      />
    </svg>
  );

  const chat = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none">
      <path
        d="M13.3027 20.8324C14.0653 20.7782 14.8179 20.6565 15.5603 20.4673C16.474 20.7411 17.4379 20.8034 18.3792 20.6493C18.4166 20.6445 18.4542 20.6416 18.4918 20.6406C18.8277 20.6406 19.2686 20.8335 19.911 21.2397V20.5724C19.9112 20.4561 19.9425 20.342 20.0018 20.242C20.061 20.142 20.146 20.0596 20.2479 20.0036C20.5274 19.8487 20.7874 19.6678 21.0247 19.4706C21.9607 18.6874 22.4893 17.6441 22.4893 16.5391C22.489 16.1737 22.4309 15.8107 22.3171 15.4634C22.5988 14.9434 22.8284 14.3952 22.9963 13.8276C23.538 14.6292 23.8305 15.5717 23.8327 16.5391C23.8327 18.0406 23.1242 19.4425 21.8989 20.4662C21.694 20.6367 21.4787 20.7945 21.2543 20.9386V22.5007C21.2543 23.0381 20.626 23.3457 20.1829 23.0272C19.7637 22.7177 19.3299 22.4284 18.8829 22.1606C18.7544 22.085 18.6208 22.0184 18.4832 21.9612C18.1148 22.0161 17.74 22.0439 17.3587 22.0446C15.829 22.0446 14.4153 21.5918 13.3027 20.8324ZM5.21452 17.7059C3.28185 16.0917 2.16602 13.8861 2.16602 11.5266C2.16602 6.70139 6.77885 2.84473 12.4111 2.84473C18.0433 2.84473 22.6573 6.70139 22.6573 11.5266C22.6573 16.3517 18.0433 20.2073 12.4111 20.2073C11.7777 20.2073 11.1537 20.1593 10.5391 20.0632C10.2737 20.125 9.2131 20.7468 7.68451 21.8486C7.13202 22.2483 6.34552 21.8626 6.34552 21.1899V18.5249C5.94949 18.28 5.57153 18.007 5.21452 17.7081M10.577 18.4209C10.6225 18.4209 10.6695 18.4245 10.7178 18.4317C11.2775 18.5245 11.8438 18.5709 12.4111 18.5704C17.1691 18.5704 20.977 15.3865 20.977 11.5266C20.977 7.66664 17.1691 4.48381 12.4111 4.48381C7.65527 4.48381 3.84518 7.66773 3.84518 11.5266C3.84518 13.3931 4.7346 15.1503 6.3076 16.4655C6.70482 16.7963 7.13671 17.0927 7.60327 17.3549C7.86435 17.5011 8.02576 17.772 8.02576 18.0645V19.6017C9.23477 18.8001 10.0299 18.4209 10.5759 18.4209"
        fill="#034FE3"
      />
      <path
        d="M8.26042 12.9998C8.61956 12.9998 8.964 12.8572 9.21796 12.6032C9.47191 12.3493 9.61458 12.0048 9.61458 11.6457C9.61458 11.2865 9.47191 10.9421 9.21796 10.6881C8.964 10.4342 8.61956 10.2915 8.26042 10.2915C7.90127 10.2915 7.55683 10.4342 7.30288 10.6881C7.04892 10.9421 6.90625 11.2865 6.90625 11.6457C6.90625 12.0048 7.04892 12.3493 7.30288 12.6032C7.55683 12.8572 7.90127 12.9998 8.26042 12.9998ZM12.6609 12.9998C13.0201 12.9998 13.3645 12.8572 13.6185 12.6032C13.8724 12.3493 14.0151 12.0048 14.0151 11.6457C14.0151 11.2865 13.8724 10.9421 13.6185 10.6881C13.3645 10.4342 13.0201 10.2915 12.6609 10.2915C12.3018 10.2915 11.9573 10.4342 11.7034 10.6881C11.4494 10.9421 11.3068 11.2865 11.3068 11.6457C11.3068 12.0048 11.4494 12.3493 11.7034 12.6032C11.9573 12.8572 12.3018 12.9998 12.6609 12.9998ZM17.0625 13.0009C17.4216 13.0009 17.7661 12.8583 18.02 12.6043C18.274 12.3503 18.4167 12.0059 18.4167 11.6468C18.4167 11.2876 18.274 10.9432 18.02 10.6892C17.7661 10.4353 17.4216 10.2926 17.0625 10.2926C16.7034 10.2926 16.3589 10.4353 16.105 10.6892C15.851 10.9432 15.7083 11.2876 15.7083 11.6468C15.7083 12.0059 15.851 12.3503 16.105 12.6043C16.3589 12.8583 16.7034 13.0009 17.0625 13.0009Z"
        fill="#034FE3"
      />
    </svg>
  );

  const linkedln = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5936 10.262V12.2418C15.0082 11.6103 15.5797 11.0972 16.2521 10.7528C16.9245 10.4084 17.6749 10.2445 18.4296 10.2772C22.4605 10.2772 23.332 12.7972 23.332 16.0755V22.75H19.5986V16.8327C19.5986 15.421 19.314 13.6057 17.116 13.6057C14.9845 13.6057 14.6205 15.1422 14.6205 16.7277V22.75H10.8988V10.262H14.5936ZM8.39863 7.12367C8.39817 7.4935 8.28854 7.85497 8.08349 8.16276C7.87844 8.47055 7.58708 8.71095 7.24596 8.85383C6.90498 8.99556 6.52954 9.03264 6.16742 8.96034C5.8053 8.88804 5.47288 8.70963 5.21246 8.44783C4.95155 8.18587 4.77393 7.85261 4.70192 7.48996C4.62991 7.12731 4.66673 6.75147 4.80776 6.4097C4.94878 6.06792 5.18771 5.77547 5.4945 5.56913C5.80129 5.36278 6.16224 5.25175 6.53196 5.25C6.77769 5.25 7.02099 5.29851 7.24792 5.39276C7.47486 5.487 7.68095 5.62513 7.85438 5.79921C8.0278 5.97328 8.16515 6.17989 8.25855 6.40717C8.35195 6.63446 8.39955 6.87794 8.39863 7.12367Z"
        fill="#034FE3"
      />
      <path
        d="M8.39935 10.2773H4.66602V22.7502H8.39935V10.2773Z"
        fill="#034FE3"
      />
    </svg>
  );
  return (
    <div className="relative">
      <span className="  md:h-[104px] md:w-[104px] h-[50px] w-[50px]   bg-[#034FE30D] absolute md:top-[50px] md:right-[640px] top-[150px] right-[60px] "></span>
      <span className="  md:h-[104px] md:w-[104px] w-[50px] h-[50px]  bg-[#034FE30D] absolute md:top-[417px] md:left-[314px] top-[300px] left-0  "></span>
      <div className=" pt-[130px]    bg-[linear-gradient(to_right,#4f4f4f0e_1px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_1px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]   sm:h-[100vh]   w-full">
        <motion.div
          initial={{ opacity: 0.45 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}>
          <div className=" flex items-center justify-center pt-[150px]">
            <div className=" flex flex-col md:gap-[24px] gap-[14px] items-center">
              <p className=" md:text-[14px] text-[12px]  font-[400] py-[10px] px-[24px] border rounded-full w-fit  flex items-center md:gap-[10px] gap-[6px]">
                {dot} ZION TECH HUB
              </p>
              <h1 className=" text-[#1A1A1A] font-[700] md:text-[64px]  text-[33px]">
                Contact our team
              </h1>
              <p className=" text-[#1A1A1A] font-[300] sm:text-[24px] text-[16px]">
                Let us know how we can help
              </p>
            </div>
          </div>
          {/* part 2 */}
          <div className=" flex flex-wrap  gap-[33px] items-center justify-center py-[100px]">
            {/* count  */}
            <div className=" py-[25px] px-[40px] flex flex-col gap-[48px] border border-[#1A1A1A33] rounded-[10px] bg-[#F0F0F0] md:w-fit w-[90%]">
              <span className=" p-[10px] rounded-[5px] border border-[#1A1A1A33] w-fit">
                {phone}
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
            <div className=" py-[25px] px-[40px] flex flex-col gap-[48px] border border-[#1A1A1A33] rounded-[10px] bg-[#F0F0F0] md:w-fit w-[90%] ">
              <span className=" p-[10px] rounded-[5px] border border-[#1A1A1A33] w-fit">
                {message}
              </span>
              <section className="text-[#1A1A1A] flex flex-col gap-[24px]">
                <p className=" text-[18px] font-[200] ">
                  <span className=" text-[24px] font-[600] ">
                    Chat to support
                  </span>{" "}
                  <br />
                  Chat to our support team
                </p>
                <p className=" text-[18px] font-[600] underline">
                  info@ziontechub.com
                </p>
              </section>
            </div>
            {/* count  */}
            <div className=" py-[25px] px-[40px] flex flex-col gap-[48px] border border-[#1A1A1A33] rounded-[10px] bg-[#F0F0F0] md:w-fit w-[90%]">
              <span className=" p-[10px] rounded-[5px] border border-[#1A1A1A33] w-fit">
                {chat}
              </span>
              <section className="text-[#1A1A1A] flex flex-col gap-[24px]">
                <p className=" text-[18px] font-[200] ">
                  <span className=" text-[24px] font-[600] ">
                    Chat to sales
                  </span>{" "}
                  <br />
                  Chat to our sales team
                </p>
                <p className=" text-[18px] font-[600] underline">
                  info.sales@ziontechub.com
                </p>
              </section>
            </div>
            {/* count  */}
            <div className=" py-[25px] px-[40px] flex flex-col gap-[48px] border border-[#1A1A1A33] rounded-[10px] bg-[#F0F0F0] md:w-fit w-[90%]">
              <span className=" p-[10px] rounded-[5px] border border-[#1A1A1A33] w-fit">
                {linkedln}
              </span>
              <section className="text-[#1A1A1A] flex flex-col gap-[24px]">
                <p className=" text-[18px] font-[200] ">
                  <span className=" text-[24px] font-[600] ">
                    Chat on LinkedIn
                  </span>{" "}
                  <br />
                  Chat to us on LinkedIn
                </p>
                <p className=" text-[18px] font-[600] underline">Click here</p>
              </section>
            </div>
            {/* count  */}
          </div>
        </motion.div>
      </div>
      <Contactfaqs />
    </div>
  );
}

export default Contact;
