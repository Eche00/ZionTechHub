import React from "react";
import {
  Reviewimg,
  SirGodsentprofile,
  amazonlogo,
  applelogo,
  certificatehome,
  collabimagehome,
  discord,
  emojiprofile,
  enterprice,
  excel,
  googleanalytics,
  googlelogo,
  googlesheets,
  individual,
  linkedlncover,
  logo,
  metalogo,
  microsoft,
  microsoftlogo,
  notionlogo,
  rstudio,
  secondlogo,
  slack,
  unilogo,
  zapier,
} from "../../assets";

function Benefits() {
  const dot = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none">
      <circle cx="5.5" cy="5.5" r="5" fill="#626262" />
    </svg>
  );
  const greendot = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none">
      <circle cx="5.5" cy="5.5" r="5" fill="#527455" />
    </svg>
  );
  const bluedot = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none">
      <circle cx="5.5" cy="5.5" r="5" fill="#4768A8" />
    </svg>
  );
  const orangedot = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none">
      <circle cx="5.5" cy="5.5" r="5" fill="#A85847" />
    </svg>
  );

  const flash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none">
      <g clip-path="url(#clip0_597_2098)">
        <path
          d="M21.78 0.88L18.66 13.2H21.54C22.34 13.2 22.66 13.84 22.18 14.64L11.94 31.36C13.4219 31.7847 14.9558 32.0002 16.4974 32H16.5C25.3374 31.9933 32.4974 24.828 32.4974 15.9893C32.4974 9.044 28.0747 3.13067 21.8907 0.914667L21.7787 0.88H21.78ZM14.34 18.72H11.46C10.66 18.72 10.34 18.08 10.82 17.28L21.06 0.64C19.5782 0.215254 18.0442 -0.00016583 16.5027 9.5779e-08H16.5C7.66269 0.00666676 0.502686 7.172 0.502686 16.0107C0.502686 22.956 4.92535 28.8693 11.1094 31.0853L11.2214 31.12L14.34 18.72Z"
          fill="#527455"
        />
      </g>
      <defs>
        <clipPath id="clip0_597_2098">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  const mprofile = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none">
      <circle cx="30.5" cy="30" r="30" fill="#33502A" />
    </svg>
  );
  return (
    <div className="py-[80px] relative ">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[99px] top-[89px] -left-[1.5px]"></span>
      <div className=" px-[20px] ">
        <p className=" font-[600] sm:text-[48px] text-[36px] text-[#333]  w-[320px] sm:w-full">
          <span className=" text-[#034FE3]">Benefits</span> Of Training With Us
        </p>
        <p className=" text-[18px] font-[300] text-[#1A1A1A66]  w-[340px] sm:w-full">
          With these benefits, you wouldn’t want to learn anywhere else :)
        </p>
      </div>

      <div className=" py-[76px] gap-[24px] flex flex-col">
        <div className=" flex sm:flex-row flex-col gap-[24px]">
          <section className=" flex flex-col   border border-gray-400 rounded-[10px] bg-white sm:py-[14px] sm:pl-[14px] sm:p-0 p-[14px]">
            <div className=" sm:px-[32px] px-[10px] pb-[24px] pt-[36px] text-[#626262] flex flex-col gap-[20px]">
              <p className=" flex sm:text-[12px] text-[10px] font-[700] items-center gap-[5px] px-[14px] sm:py-[10px] py-[8px] bg-[#E2E2E2] rounded-[10px] w-fit">
                {dot} CREDENTIALS
              </p>
              <p className="  sm:text-[28px] text-[20px] font-[600]">
                Certifications
              </p>
              <p className="  sm:text-[18px] text-[14px] font-[300] sm:w-[404px]">
                Upon completing our courses, you will earn industry-recognized
                certifications that validate your expertise and enhance your
                professional credentials.
              </p>
            </div>
            <div className=" bg-[#F5F5F5] ml-1 flex items-center justify-center sm:py-[20px] py-[15px] sm:rounded-l-[10px]  sm:rounded-none rounded-[10px]">
              <img
                className=" sm:w-[381px] sm:h-[268px] w-[244px] h-[172px] object-cover rounded-[10px]"
                src={certificatehome}
                alt="img"
              />
            </div>
          </section>
          <section className=" flex flex-col justify-between   border border-gray-400 rounded-[10px] bg-white  pt-[10px]">
            <div className=" sm:px-[32px] px-[20px] pb-[24px] pt-[36px] text-[#626262] flex flex-col gap-[20px]">
              <p className=" flex sm:text-[12px] text-[10px] font-[700] items-center gap-[5px] px-[14px] sm:py-[10px] py-[8px] bg-[#D6E2D3] rounded-[10px] w-fit text-[#527455]">
                {greendot} REAL WORLD PRACTICES
              </p>
              <p className="  text-[20px] sm:text-[28px] font-[600] text-[#527455]">
                Hands on real world projects
              </p>
              <p className=" text-[14px]  sm:text-[18px] font-[300] sm:w-[695px]">
                Our training programs include hands-on real-world projects that
                allow you to apply your skills in practical scenarios, bridging
                the gap between theory and practice.
              </p>
            </div>
            <div className=" bg-[#F5F5F5] ml-[14px] flex flex-col  rounded-tl-[10px] rounded-bl-[10px] overflow-hidden ">
              <div className=" flex  gap-[16px] sm:px-[40px] px-[20px] items-center border-b border-gray-300 py-[20px]">
                <span className=" sm:p-[19px] p-[10px] bg-[#E1E1E1] rounded-full ">
                  {flash}
                </span>
                <p className=" sm:text-[24px] text-[13px] font-[600] text-[#527455] whitespace-nowrap">
                  Apply your skills on real world tasks{" "}
                </p>
              </div>
              <div className="  px-[40px]   py-[30px] sm:w-[759px]  w-[459px] overflow-scroll  scrollbar-hide  ">
                <div className="flex flex-wrap items-center  gap-[24px]  sm:w-[800px] w-[700px]  ">
                  <p className=" sm:p-[10px] p-[5px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] sm:text-[20px] text-[12px] font-[600] gap-[12px]">
                    <img
                      className=" sm:w-[45px] sm:h-[45px] w-[36px] h-[36px] rounded-full object-cover"
                      src={zapier}
                      alt=""
                    />
                    <span className=" pr-[10px]">Zapier</span>{" "}
                  </p>
                  <p className=" sm:p-[10px] p-[5px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] sm:text-[20px] text-[12px] font-[600] gap-[12px]">
                    <img
                      className=" sm:w-[45px] sm:h-[45px] w-[36px] h-[36px] rounded-full object-cover"
                      src={slack}
                      alt=""
                    />
                    <span className=" pr-[10px]">Slack</span>
                  </p>
                  <p className=" sm:p-[10px] p-[5px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] sm:text-[20px] text-[12px] font-[600] gap-[12px]">
                    <img
                      className=" sm:w-[45px] sm:h-[45px] w-[36px] h-[36px] rounded-full object-cover"
                      src={googleanalytics}
                      alt=""
                    />
                    <span className=" pr-[10px]">Google Analystics</span>
                  </p>
                  <p className=" sm:p-[10px] p-[5px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] sm:text-[20px] text-[12px] font-[600] gap-[12px]">
                    <img
                      className=" sm:w-[45px] sm:h-[45px] w-[36px] h-[36px] rounded-full object-cover"
                      src={rstudio}
                      alt=""
                    />
                    <span className=" pr-[10px]">R Studio</span>
                  </p>
                  <p className=" sm:p-[10px] p-[5px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] sm:text-[20px] text-[12px] font-[600] gap-[12px]">
                    <img
                      className=" sm:w-[45px] sm:h-[45px] w-[36px] h-[36px] rounded-full object-cover"
                      src={googlesheets}
                      alt=""
                    />
                    <span className=" pr-[10px]">Google Sheets</span>
                  </p>
                  <p className=" sm:p-[10px] p-[5px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] sm:text-[20px] text-[12px] font-[600] gap-[12px]">
                    <img
                      className=" sm:w-[45px] sm:h-[45px] w-[36px] h-[36px] rounded-full object-cover"
                      src={excel}
                      alt=""
                    />
                    <span className=" pr-[10px]">Excel</span>
                  </p>
                  <p className=" sm:p-[10px] p-[5px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] sm:text-[20px] text-[12px] font-[600] gap-[12px]">
                    <img
                      className=" sm:w-[45px] sm:h-[45px] w-[36px] h-[36px] rounded-full object-cover"
                      src={discord}
                      alt=""
                    />
                    <span className=" pr-[10px]">Discord</span>
                  </p>
                  <p className=" sm:p-[10px] p-[5px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] sm:text-[20px] text-[12px] font-[600] gap-[12px]">
                    <img
                      className=" sm:w-[45px] sm:h-[45px] w-[36px] h-[36px] rounded-full object-cover"
                      src={microsoft}
                      alt=""
                    />
                    <span className=" pr-[10px]">Microsoft</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* second part */}
        <div className=" flex sm:flex-row flex-col gap-[24px]">
          <section className=" flex flex-col justify-between   border border-gray-400 rounded-[10px] bg-[#F5F5F5] overflow-hidden">
            <div className=" sm:px-[32px] px-[20px] pb-[24px] pt-[36px] text-[#626262] flex flex-col gap-[20px]">
              <p className=" flex sm:text-[12px] text-[10px] font-[700] items-center gap-[5px] px-[14px] py-[10px] bg-[#E1E7F5] rounded-[10px] w-fit text-[#4768A8]">
                {bluedot} OPTIMIZATION
              </p>
              <p className="  sm:text-[28px] text-[20px] font-[600] text-[#4768A8]">
                LinkedIn Branding
              </p>
              <p className="  sm:text-[18px] text-[14px] font-[300] sm:w-[620px] ">
                By optimizing your profile, we carryout effective LinkedIn
                branding that positions you for global opportunities by
                showcasing your expertise, achievements, and unique value
                proposition to a wide audience of potential employers and
                collaborators.
              </p>
            </div>
            <div className=" ml-[14px] flex  flex-col overflow-scroll  rounded-tl-[10px] rounded-bl-[10px] w-[709px] bg-[#FFFFFF] scrollbar-hide">
              <div className="sm:w-[864px] w-[468px]">
                <img
                  className=" w-full sm:h-[172px] h-[120px] object-cover"
                  src={linkedlncover}
                  alt=""
                />
                <div className=" flex sm:justify-between relative">
                  <img
                    className=" absolute sm:w-[120px] sm:h-[120px] w-[60px] h-[60px] rounded-full sm:-top-[80px] sm:left-5 -top-[30px] left-5 border-[4px] border-white object-cover"
                    src={SirGodsentprofile}
                    alt=""
                  />
                  <section className=" flex  flex-col flex-1 sm:px-[27px] px-[20px] sm:pt-[44px] pt-[24px]">
                    <p className=" sm:text-[24px] text-[16px] font-[600] text-[#1A1A1ACC]">
                      Ndomo Godsent
                    </p>
                    <p className=" sm:text-[18px] text-[14px] font-[300] text-[#1A1A1ACC] sm:pb-[8px] pb-[4px]">
                      Data analyst
                    </p>
                    <p className=" sm:text-[14px] text-[12px] font-[500] text-[#1A1A1ACC]">
                      Location . Contact info
                    </p>
                  </section>
                  <section className=" flex-1  flex sm:justify-center items-center  justify-start">
                    <div className="flex flex-col items-start">
                      <div className=" flex items-center sm:gap-[16px] gap-[8px] justify-center">
                        <img
                          className="w-[40px] sm:h-[40px]  h-[30px]"
                          src={secondlogo}
                          alt=""
                        />{" "}
                        <p className=" sm:text-[16px] text-[10px] font-[600] text-[#1A1A1ACC] pb-[8px]">
                          Zion Tech Hub
                        </p>
                      </div>
                      <div className=" flex items-center sm:gap-[16px] gap-[8px] justify-center">
                        <img
                          className="w-[40px] sm:h-[40px]  h-[30px]"
                          src={unilogo}
                          alt=""
                        />{" "}
                        <p className=" sm:text-[16px] text-[10px] font-[600] text-[#1A1A1ACC] pb-[8px]">
                          Univesity of PH
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          {/* part 2 of part 2 */}
          <section className=" flex flex-col   border border-gray-400 rounded-[10px] bg-[#F5F5F5] sm:py-[14px] p-[14px] overflow-hidden">
            <div className=" sm:px-[32px] px-[10px] pb-[24px] pt-[20px]  flex flex-col gap-[20px] text-[#A85847]">
              <p className=" flex sm:text-[12px] text-[10px] font-[700] items-center gap-[5px] px-[14px] py-[10px] bg-[#F5E9E1] rounded-[10px] w-fit">
                {orangedot} INTERNSHIPS
              </p>
              <p className="  sm:text-[28px] text-[20px] font-[600]">
                Internship Opportunities{" "}
              </p>
              <p className="  sm:text-[18px] text-[14px] font-[300] sm:w-[440px] w-[306px] text-[#626262]">
                Our internship opportunities provide valuable hands-on
                experience and exposure to real-world projects, allowing you to
                apply your skills in a professional setting and gain insights
                into your chosen field.
              </p>
            </div>
            <div className="   flex items-center justify-center relative sm:h-fit h-[300px]">
              <div className=" absolute  sm:top-5 top-14 p-[40px]  border-[6px] border-[#F5E9E1] rounded-full sm:w-fit w-[450px]">
                <div className=" p-[40px]  border-[6px] border-[#F5E9E1] rounded-full">
                  <div className=" p-[40px]  border-[6px] border-[#F5E9E1] rounded-full">
                    <div className=" p-[40px]  border-[6px] border-[#F5E9E1] rounded-full">
                      <img
                        className=" sm:w-[100px] sm:h-[100px] w-[84px] h-[84px] object-cover rounded-full  "
                        src={emojiprofile}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <img
                  className=" sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] rounded-full object-cover absolute bottom-[42%] sm:left-5 left-8"
                  src={metalogo}
                  alt=""
                />
                <img
                  className="  sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]  rounded-full object-cover absolute bottom-[60%] left-[55px]"
                  src={applelogo}
                  alt=""
                />
                <img
                  className="  sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]  rounded-full object-cover absolute bottom-[80%] left-[120px]"
                  src={googlelogo}
                  alt=""
                />
                <img
                  className="  sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]  rounded-full object-cover absolute bottom-[72%] right-[160px]"
                  src={microsoftlogo}
                  alt=""
                />
                <img
                  className="  sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]  rounded-full object-cover absolute bottom-[60%] right-[55px]"
                  src={amazonlogo}
                  alt=""
                />
                <img
                  className="  sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]  rounded-full object-cover absolute bottom-[38.5%] sm:right-5 right-8"
                  src={notionlogo}
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
        {/* third part */}
        <div className=" flex sm:flex-row flex-col gap-[24px] max-w-[1300px] overflow-hidden">
          <div className=" w-fit flex flex-col py-[14px] justify-between   border border-gray-400 rounded-[10px] bg-[#F5F5F5]">
            <section className=" sm:ml-[14px] px-[14px] sm:px-0 flex  flex-col overflow-scroll  rounded-tl-[10px] rounded-bl-[10px]  sm:w-[617px]">
              <div className="sm:w-[724px]">
                <img
                  className=" sm:w-full w-[324px] sm:h-[250px] h-[121px] object-cover"
                  src={collabimagehome}
                  alt=""
                />
              </div>
            </section>

            <section className=" pt-[36px] sm:px-[28px] px-[14px]">
              <h3 className=" sm:text-[28px] text-[20px]  font-[600] text-[#6C47A8]">
                Collaboration on projects with industry experts{" "}
              </h3>
              <p className=" sm:text-[18px] text-[14px] font-[300] text-[#1A1A1A66] sm:w-[573px] ">
                Collaborating on projects with industry experts offers you the
                unique opportunity to gain insights from seasoned professionals,
                enhancing your skills and understanding through practical,
                real-world experience.
              </p>
            </section>
          </div>
          {/* 3rd part 2 */}
          <div className="  flex flex-col py-[14px]   border border-gray-400 rounded-[10px] bg-white">
            <section className=" ml-[14px] flex  flex-col overflow-scroll  rounded-tl-[10px] rounded-bl-[10px] w-[617px] h-[250px] scrollbar-hide">
              <div className="sm:pl-[60px] sm:pt-[50px] pt-[20px]">
                <section className=" rounded-t-[10px] border border-gray-400  sm:w-fit w-[962px]">
                  <article className=" flex items-center  px-[32px] py-[14px] border-b border-gray-400 gap-[16px] text-[#3e363699]">
                    <p className="sm:text-[16px] text-[14px] font-[400]">
                      <b>Michael</b> started a call in
                    </p>
                    <p className="text-[14px] font-[400] py-[6px] px-[14px] bg-[#1A1A1A1A] rounded-[10px]">
                      #community-calls
                    </p>
                    <p className="text-[14px] font-[400]">2 Mentors present</p>
                  </article>
                  <article className=" py-[16px] px-[32px] flex gap-[24px]">
                    <article className=" w-fit relative">
                      {mprofile}
                      <p className="font-[400] text-[24px] text-[#FFFFFF] absolute  m-auto top-[10%] left-[32%]">
                        M
                      </p>
                    </article>
                    <div className=" flex flex-col gap-[24px] ">
                      <section className=" flex gap-[10px] items-center">
                        <p className="sm:text-[16px] text-[14px] font-[400]">
                          Michael
                        </p>
                        <p className="sm:text-[14px] text-[12px] font-[400] py-[6px] px-[14px] bg-[#034FE31A] text-[#034FE3] rounded-[10px]">
                          Verified Mentor
                        </p>
                        <p className="text-[16px] font-[400]">36 sec ago</p>
                      </section>
                      <p className="text-[16px] font-[300] text-[#1A1A1A99] w-[536px]">
                        Live call started! We will be covering all your
                        questions and thoughts concerning sourcing products.
                        Feel free to ask questions where you <br /> aren’t
                        clear.
                      </p>
                    </div>
                  </article>
                </section>
              </div>
            </section>
            <section className=" pt-[36px] sm:px-[32px] px-[20px]">
              <h3 className=" sm:text-[28px] text-[20px] font-[600] text-[#D564BC] sm:w-[440px] w-[280px]">
                Mentorship from seasoned data experts
              </h3>
              <p className=" sm:text-[18px] text-[14px] font-[300] text-[#1A1A1A66] sm:w-[573px] ">
                Receive personalized guidance from seasoned experts who provide
                valuable insights and practical advice, helping you navigate
                your career path with confidence.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
