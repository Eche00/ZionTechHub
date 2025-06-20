import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NextCohort() {
  const individual = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 28.8C18.1974 28.8 19.8253 28.1257 21.0255 26.9255C22.2257 25.7252 22.9 24.0974 22.9 22.4C22.9 20.7026 22.2257 19.0747 21.0255 17.8745C19.8253 16.6743 18.1974 16 16.5 16C14.8026 16 13.1748 16.6743 11.9745 17.8745C10.7743 19.0747 10.1 20.7026 10.1 22.4C10.1 24.0974 10.7743 25.7252 11.9745 26.9255C13.1748 28.1257 14.8026 28.8 16.5 28.8ZM16.5 32C17.7607 32 19.0091 31.7517 20.1738 31.2692C21.3385 30.7868 22.3968 30.0797 23.2882 29.1882C24.1797 28.2968 24.8868 27.2385 25.3693 26.0738C25.8517 24.909 26.1 23.6607 26.1 22.4C26.1 21.1393 25.8517 19.891 25.3693 18.7262C24.8868 17.5615 24.1797 16.5032 23.2882 15.6118C22.3968 14.7203 21.3385 14.0132 20.1738 13.5308C19.0091 13.0483 17.7607 12.8 16.5 12.8C13.9539 12.8 11.5121 13.8114 9.7118 15.6118C7.91145 17.4121 6.90002 19.8539 6.90002 22.4C6.90002 24.9461 7.91145 27.3879 9.7118 29.1882C11.5121 30.9886 13.9539 32 16.5 32Z"
        fill="#4768A8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.8328 28.4672C12.9819 28.6158 13.1001 28.7924 13.1807 28.9868C13.2614 29.1812 13.3029 29.3895 13.3029 29.6C13.3029 29.8105 13.2614 30.0188 13.1807 30.2132C13.1001 30.4076 12.9819 30.5842 12.8328 30.7328L11.7512 31.8112C9.66976 33.8933 8.50032 36.7167 8.50005 39.6608V45.6C8.50005 46.0243 8.33148 46.4313 8.03142 46.7314C7.73136 47.0314 7.3244 47.2 6.90005 47.2C6.4757 47.2 6.06874 47.0314 5.76868 46.7314C5.46862 46.4313 5.30005 46.0243 5.30005 45.6V39.6608C5.3005 35.8681 6.8072 32.2308 9.48885 29.5488L10.5672 28.4672C10.7159 28.3182 10.8924 28.2 11.0868 28.1193C11.2812 28.0387 11.4896 27.9971 11.7 27.9971C11.9105 27.9971 12.1189 28.0387 12.3133 28.1193C12.5077 28.2 12.6842 28.3182 12.8328 28.4672ZM50.5672 27.5072C50.4182 27.6558 50.3 27.8324 50.2194 28.0268C50.1387 28.2212 50.0972 28.4295 50.0972 28.64C50.0972 28.8505 50.1387 29.0588 50.2194 29.2532C50.3 29.4476 50.4182 29.6242 50.5672 29.7728L51.6488 30.8512C52.6796 31.882 53.4973 33.1058 54.0551 34.4526C54.613 35.7995 54.9001 37.243 54.9001 38.7008V45.6C54.9001 46.0243 55.0686 46.4313 55.3687 46.7314C55.6687 47.0314 56.0757 47.2 56.5 47.2C56.9244 47.2 57.3314 47.0314 57.6314 46.7314C57.9315 46.4313 58.1 46.0243 58.1 45.6V38.7008C58.0996 34.9081 56.5929 31.2708 53.9113 28.5888L52.8329 27.5072C52.6842 27.3582 52.5077 27.24 52.3133 27.1593C52.1189 27.0787 51.9105 27.0371 51.7001 27.0371C51.4896 27.0371 51.2812 27.0787 51.0868 27.1593C50.8924 27.24 50.7159 27.3582 50.5672 27.5072Z"
        fill="#4768A8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.3001 28.8C43.6027 28.8 41.9748 28.1257 40.7746 26.9255C39.5744 25.7252 38.9001 24.0974 38.9001 22.4C38.9001 20.7026 39.5744 19.0747 40.7746 17.8745C41.9748 16.6743 43.6027 16 45.3001 16C46.9975 16 48.6253 16.6743 49.8256 17.8745C51.0258 19.0747 51.7001 20.7026 51.7001 22.4C51.7001 24.0974 51.0258 25.7252 49.8256 26.9255C48.6253 28.1257 46.9975 28.8 45.3001 28.8ZM45.3001 32C44.0394 32 42.791 31.7517 41.6263 31.2692C40.4616 30.7868 39.4033 30.0797 38.5119 29.1882C37.6204 28.2968 36.9133 27.2385 36.4308 26.0738C35.9484 24.909 35.7001 23.6607 35.7001 22.4C35.7001 21.1393 35.9484 19.891 36.4308 18.7262C36.9133 17.5615 37.6204 16.5032 38.5119 15.6118C39.4033 14.7203 40.4616 14.0132 41.6263 13.5308C42.791 13.0483 44.0394 12.8 45.3001 12.8C47.8462 12.8 50.288 13.8114 52.0883 15.6118C53.8887 17.4121 54.9001 19.8539 54.9001 22.4C54.9001 24.9461 53.8887 27.3879 52.0883 29.1882C50.288 30.9886 47.8462 32 45.3001 32ZM30.9001 42.4C28.7783 42.4 26.7435 43.2428 25.2432 44.7431C23.7429 46.2434 22.9001 48.2783 22.9001 50.4V54.56C22.9001 54.9843 22.7315 55.3913 22.4314 55.6914C22.1314 55.9914 21.7244 56.16 21.3001 56.16C20.8757 56.16 20.4688 55.9914 20.1687 55.6914C19.8686 55.3913 19.7001 54.9843 19.7001 54.56V50.4C19.7001 47.4296 20.8801 44.5808 22.9805 42.4804C25.0809 40.38 27.9297 39.2 30.9001 39.2C33.8705 39.2 36.7193 40.38 38.8197 42.4804C40.9201 44.5808 42.1001 47.4296 42.1001 50.4V54.56C42.1001 54.9843 41.9315 55.3913 41.6314 55.6914C41.3314 55.9914 40.9244 56.16 40.5001 56.16C40.0757 56.16 39.6688 55.9914 39.3687 55.6914C39.0686 55.3913 38.9001 54.9843 38.9001 54.56V50.4C38.9001 49.3494 38.6932 48.3091 38.2911 47.3385C37.8891 46.3679 37.2998 45.486 36.5569 44.7431C35.8141 44.0003 34.9321 43.411 33.9615 43.009C32.9909 42.6069 31.9507 42.4 30.9001 42.4Z"
        fill="#4768A8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.9 37.6C32.5974 37.6 34.2253 36.9257 35.4255 35.7255C36.6258 34.5252 37.3 32.8974 37.3 31.2C37.3 29.5026 36.6258 27.8747 35.4255 26.6745C34.2253 25.4743 32.5974 24.8 30.9 24.8C29.2027 24.8 27.5748 25.4743 26.3746 26.6745C25.1743 27.8747 24.5 29.5026 24.5 31.2C24.5 32.8974 25.1743 34.5252 26.3746 35.7255C27.5748 36.9257 29.2027 37.6 30.9 37.6ZM30.9 40.8C33.4461 40.8 35.8879 39.7886 37.6883 37.9882C39.4886 36.1879 40.5 33.7461 40.5 31.2C40.5 28.6539 39.4886 26.2121 37.6883 24.4118C35.8879 22.6114 33.4461 21.6 30.9 21.6C28.354 21.6 25.9122 22.6114 24.1118 24.4118C22.3115 26.2121 21.3 28.6539 21.3 31.2C21.3 33.7461 22.3115 36.1879 24.1118 37.9882C25.9122 39.7886 28.354 40.8 30.9 40.8Z"
        fill="#4768A8"
      />
    </svg>
  );
  const world = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none">
      <path
        d="M14 6.676C17.039 4.9178 20.489 3.99459 24 4C35.046 4 44 12.954 44 24C44 35.046 35.046 44 24 44C12.954 44 4 35.046 4 24C4 20.358 4.974 16.94 6.676 14"
        stroke="#4768A8"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M29.656 38.142C28.914 40 28.032 41.472 27.062 42.478C26.09 43.482 25.05 44 24 44C22.95 44 21.91 43.482 20.94 42.478C19.968 41.472 19.086 39.998 18.344 38.142C17.6 36.284 17.01 34.082 16.608 31.654C16.1979 29.1234 15.9946 26.5636 16 24C16 21.374 16.206 18.772 16.608 16.346C17.01 13.92 17.6 11.716 18.344 9.85799C19.086 7.99999 19.968 6.52799 20.938 5.52199C21.91 4.51999 22.95 3.99999 24 3.99999C25.05 3.99999 26.09 4.51799 27.06 5.52199C28.032 6.52799 28.914 8.00199 29.656 9.85799C30.4 11.716 30.99 13.918 31.39 16.346C31.794 18.772 32 21.374 32 24C32 26.626 31.792 29.228 31.39 31.654M4 24H20M44 24H28"
        stroke="#4768A8"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );

  const calender = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none">
      <path
        d="M28.5 44H20.5C12.958 44 9.186 44 6.844 41.656C4.5 39.314 4.5 35.542 4.5 28V24C4.5 16.458 4.5 12.686 6.844 10.344C9.186 8 12.958 8 20.5 8H28.5C36.042 8 39.814 8 42.156 10.344C44.5 12.686 44.5 16.458 44.5 24V28C44.5 35.542 44.5 39.314 42.156 41.656C40.85 42.964 39.1 43.542 36.5 43.796M14.5 8V5M34.5 8V5M43.5 18H22M4.5 18H12.25"
        stroke="#4768A8"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M36.5 34C36.5 34.5304 36.2893 35.0391 35.9142 35.4142C35.5391 35.7893 35.0304 36 34.5 36C33.9696 36 33.4609 35.7893 33.0858 35.4142C32.7107 35.0391 32.5 34.5304 32.5 34C32.5 33.4696 32.7107 32.9609 33.0858 32.5858C33.4609 32.2107 33.9696 32 34.5 32C35.0304 32 35.5391 32.2107 35.9142 32.5858C36.2893 32.9609 36.5 33.4696 36.5 34ZM36.5 26C36.5 26.5304 36.2893 27.0391 35.9142 27.4142C35.5391 27.7893 35.0304 28 34.5 28C33.9696 28 33.4609 27.7893 33.0858 27.4142C32.7107 27.0391 32.5 26.5304 32.5 26C32.5 25.4696 32.7107 24.9609 33.0858 24.5858C33.4609 24.2107 33.9696 24 34.5 24C35.0304 24 35.5391 24.2107 35.9142 24.5858C36.2893 24.9609 36.5 25.4696 36.5 26ZM26.5 34C26.5 34.5304 26.2893 35.0391 25.9142 35.4142C25.5391 35.7893 25.0304 36 24.5 36C23.9696 36 23.4609 35.7893 23.0858 35.4142C22.7107 35.0391 22.5 34.5304 22.5 34C22.5 33.4696 22.7107 32.9609 23.0858 32.5858C23.4609 32.2107 23.9696 32 24.5 32C25.0304 32 25.5391 32.2107 25.9142 32.5858C26.2893 32.9609 26.5 33.4696 26.5 34ZM26.5 26C26.5 26.5304 26.2893 27.0391 25.9142 27.4142C25.5391 27.7893 25.0304 28 24.5 28C23.9696 28 23.4609 27.7893 23.0858 27.4142C22.7107 27.0391 22.5 26.5304 22.5 26C22.5 25.4696 22.7107 24.9609 23.0858 24.5858C23.4609 24.2107 23.9696 24 24.5 24C25.0304 24 25.5391 24.2107 25.9142 24.5858C26.2893 24.9609 26.5 25.4696 26.5 26ZM16.5 34C16.5 34.5304 16.2893 35.0391 15.9142 35.4142C15.5391 35.7893 15.0304 36 14.5 36C13.9696 36 13.4609 35.7893 13.0858 35.4142C12.7107 35.0391 12.5 34.5304 12.5 34C12.5 33.4696 12.7107 32.9609 13.0858 32.5858C13.4609 32.2107 13.9696 32 14.5 32C15.0304 32 15.5391 32.2107 15.9142 32.5858C16.2893 32.9609 16.5 33.4696 16.5 34ZM16.5 26C16.5 26.5304 16.2893 27.0391 15.9142 27.4142C15.5391 27.7893 15.0304 28 14.5 28C13.9696 28 13.4609 27.7893 13.0858 27.4142C12.7107 27.0391 12.5 26.5304 12.5 26C12.5 25.4696 12.7107 24.9609 13.0858 24.5858C13.4609 24.2107 13.9696 24 14.5 24C15.0304 24 15.5391 24.2107 15.9142 24.5858C16.2893 24.9609 16.5 25.4696 16.5 26Z"
        fill="#4768A8"
      />
    </svg>
  );

  const verified = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none">
      <path
        d="M24.5 4L29.753 7.832L36.256 7.82L38.253 14.008L43.521 17.82L41.5 24L43.521 30.18L38.253 33.992L36.256 40.18L29.753 40.168L24.5 44L19.247 40.168L12.744 40.18L10.747 33.992L5.479 30.18L7.5 24L5.479 17.82L10.747 14.008L12.744 7.82L19.247 7.832L24.5 4Z"
        stroke="#4768A8"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 24L22.5 29L32.5 19"
        stroke="#4768A8"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  // handling navigating
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/enroll");
  };
  return (
    <div className=" bg-[#EBECED]">
      <div className=" flex flex-col sm:max-w-[80%] max-w-full mx-auto sm:border-l sm:border-gray-300 ">
        <div className=" w-full  flex sm:flex-row flex-col items-center py-[82px] md:flex-row">
          {/* cohort info  */}
          <div className=" flex flex-1 items-center justify-center flex-wrap sm:gap-[24px] gap-[10px] ">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0, ease: "linear" }}
              viewport={{ once: true }}
              className="    ">
              <article className=" flex flex-col sm:gap-[30px] gap-[10px] items-center justify-center sm:w-[290px] sm:h-[335px] w-[160px] h-[180px] bg-white sm:rounded-[30px] rounded-[20px] shadow-lg">
                <div>{individual}</div>
                <div className=" flex flex-col items-center justify-center text-[#1A1A1ACC] ">
                  <h2 className=" sm:text-[84px] text-[36px] font-[700]">
                    321
                  </h2>
                  <p className=" sm:text-[24px] text-[14px] font-[300]">
                    Registered students
                  </p>
                </div>
              </article>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "linear" }}
              viewport={{ once: true }}
              className=" shadow-[24px 24px 140px 0px rgba(0, 0, 0, 0.15)]">
              <article className=" flex flex-col sm:gap-[30px] gap-[10px] items-center justify-center sm:w-[290px] sm:h-[335px] w-[160px] h-[180px] bg-white sm:rounded-[30px] rounded-[20px] border border-[#1A1A1A4D]">
                <div>{world}</div>
                <div className=" flex flex-col items-center justify-center text-[#1A1A1ACC] ">
                  <h2 className=" sm:text-[84px] text-[36px] font-[700]">12</h2>
                  <p className=" sm:text-[24px] text-[14px] font-[300]">
                    Countries globally
                  </p>
                </div>
              </article>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.35, ease: "linear" }}
              viewport={{ once: true }}
              className=" shadow-[24px 24px 140px 0px rgba(0, 0, 0, 0.15)]">
              <article className=" flex flex-col sm:gap-[30px] gap-[10px] items-center justify-center sm:w-[290px] sm:h-[335px] w-[160px] h-[180px] bg-white sm:rounded-[30px] rounded-[20px] border border-[#1A1A1A4D]">
                <div>{calender}</div>
                <div className=" flex flex-col items-center justify-center text-[#1A1A1ACC] ">
                  <h2 className=" sm:text-[84px] text-[36px] font-[700]">12</h2>
                  <p className=" sm:text-[24px] text-[14px] font-[300]">
                    Weeks long
                  </p>
                </div>
              </article>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: "linear" }}
              viewport={{ once: true }}
              className=" shadow-[24px 24px 140px 0px rgba(0, 0, 0, 0.15)]">
              <article className=" flex flex-col sm:gap-[30px] gap-[10px] items-center justify-center sm:w-[290px] sm:h-[335px] w-[160px] h-[180px] bg-white sm:rounded-[30px] rounded-[20px] border border-[#1A1A1A4D]">
                <div>{verified}</div>
                <div className=" flex flex-col items-center justify-center text-[#1A1A1ACC] ">
                  <h2 className=" sm:text-[84px] text-[36px] font-[700]">
                    98%
                  </h2>
                  <p className=" sm:text-[24px] text-[14px] font-[300]">
                    Success rate
                  </p>
                </div>
              </article>
            </motion.section>
          </div>

          {/* Next cohort write up  */}
          <div className=" flex-1 flex flex-col gap-[29px] sm:items-start sm:justify-start items-center justify-center   h-fit">
            <div className=" flex  flex-col gap-[24px] text-[#1A1A1ACC]  ">
              <h1 className=" sm:text-[96px] text-[56px] font-[700] sm:px-0 px-[10px] sm:leading-[130%] sm:tracker-[1.28px] leading-[120%] tracker-[0.8px]">
                <span className=" text-[#034FE3]">Join </span>Our <br /> Next
                Cohort
              </h1>
              <p className=" sm:text-[28px] text-[20px] font-[300] sm:w-[658px] w-[353px] sm:px-0 px-[10px]">
                We believe in the words of our students, with each student and
                client, we get closer to our vision <br />{" "}
                <b className="  font-[600]  text-black">one step at a time.</b>
              </p>
            </div>
            <div className=" flex sm:gap-[24px] gap-[12px] rounded-[10px] sm:px-0 px-[10px]">
              <motion.button
                onClick={handleNavigate}
                whileInView={{
                  rotate: [0, -10, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 5,
                  delay: 1,
                }}
                viewport={{ once: true }}
                className=" py-[10px] px-[32px] bg-[#034FE3] text-white sm:text-[20px] text-[18px] whitespace-nowrap font-[700] rounded-[5px] shadow-[24px 24px 40px 0px rgba(0, 0, 0, 0.10) flex items-center shadow-lg">
                Apply now
              </motion.button>
              <section className=" sm:py-[10px] py-[8px] text-[#1A1A1ACC] bg-[#F0F0F0] rounded-[10px] flex sm:gap-[12px] gap-[8px]">
                <div className=" flex flex-col items-center px-[10px]">
                  <p className=" sm:text-[10px] text-[8px] font-[400]">
                    START DATE
                  </p>{" "}
                  <p className=" text-[#034FE3] sm:p-[8px] p-[4] sm:text-[16px] text-[14px] font-[400]">
                    23/04/24
                  </p>
                </div>
                <span className=" w-[1px] h-[50px] bg-[#1A1A1A1A]"></span>
                <div className=" flex flex-col items-center px-[10px]">
                  <p className=" sm:text-[10px] text-[8px] font-[400]">
                    END DATE
                  </p>{" "}
                  <p className=" text-[#034FE3] sm:p-[8px] p-[4] sm:text-[16px] text-[14px] font-[400]">
                    07/07/24
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextCohort;
