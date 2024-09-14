import React from "react";
import { Reviewimg, enterprice, individual, logo } from "../../assets";

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
  return (
    <div className="py-[80px] relative ">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[99px] -left-[1.5px]"></span>
      <div className=" px-2 ">
        <p className=" font-[600] text-[48px] text-[#333]">
          <span className=" text-[#034FE3]">Benefits</span> Of Training With Us
        </p>
        <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
          With these benefits, you wouldn’t want to learn anywhere else :)
        </p>
      </div>

      <div className=" py-[76px] gap-[24px] flex flex-col">
        <div className=" flex gap-[24px]">
          <section className=" flex flex-col   border border-gray-400 rounded-[10px] bg-white py-[14px] pl-[14px]">
            <div className=" px-[32px] pb-[24px] pt-[36px] text-[#626262] flex flex-col gap-[20px]">
              <p className=" flex text-[12px] font-[700] items-center gap-[5px] px-[14px] py-[10px] bg-[#E2E2E2] rounded-[10px] w-fit">
                {dot} CREDENTIALS
              </p>
              <p className="  text-[28px] font-[600]">Certifications</p>
              <p className="  text-[18px] font-[300] w-[404px]">
                Upon completing our courses, you will earn industry-recognized
                certifications that validate your expertise and enhance your
                professional credentials.
              </p>
            </div>
            <div className=" bg-[#F5F5F5] ml-1 flex items-center justify-center py-[20px] rounded-tl-[10px] rounded-bl-[10px]">
              <img
                className=" w-[381px] h-[268px] border border-black"
                src=""
                alt="img"
              />
            </div>
          </section>
          <section className=" flex flex-col justify-between   border border-gray-400 rounded-[10px] bg-white">
            <div className=" px-[32px] pb-[24px] pt-[36px] text-[#626262] flex flex-col gap-[20px]">
              <p className=" flex text-[12px] font-[700] items-center gap-[5px] px-[14px] py-[10px] bg-[#D6E2D3] rounded-[10px] w-fit text-[#527455]">
                {dot} REAL WORLD PRACTICES
              </p>
              <p className="  text-[28px] font-[600] text-[#527455]">
                Hands on real world projects
              </p>
              <p className="  text-[18px] font-[300] w-[695px]">
                Our training programs include hands-on real-world projects that
                allow you to apply your skills in practical scenarios, bridging
                the gap between theory and practice.
              </p>
            </div>
            <div className=" bg-[#F5F5F5] ml-[14px] flex flex-col  rounded-tl-[10px] rounded-bl-[10px]">
              <div className=" flex  gap-[16px] px-[40px] items-center border-b border-gray-300 py-[20px]">
                <span className=" p-[19px] bg-[#E1E1E1] rounded-full ">
                  {flash}
                </span>
                <p className=" text-[24px] font-[600] text-[#527455]">
                  Apply your skills on real world tasks{" "}
                </p>
              </div>
              <div className="  px-[40px]   py-[20px] w-[759px] overflow-scroll">
                <div className="flex flex-wrap items-center  gap-[24px]  w-[800px] ">
                  <p className=" p-[10px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] text-[20px] font-[600] gap-[12px]">
                    <img
                      className=" w-[45px] h-[45px] rounded-full object-cover"
                      src={Reviewimg}
                      alt=""
                    />
                    <span className=" pr-[10px]">Zapier</span>{" "}
                  </p>
                  <p className=" p-[10px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] text-[20px] font-[600] gap-[12px]">
                    <img
                      className=" w-[45px] h-[45px] rounded-full object-cover"
                      src={Reviewimg}
                      alt=""
                    />
                    <span className=" pr-[10px]">Slack</span>
                  </p>
                  <p className=" p-[10px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] text-[20px] font-[600] gap-[12px]">
                    <img
                      className=" w-[45px] h-[45px] rounded-full object-cover"
                      src={Reviewimg}
                      alt=""
                    />
                    <span className=" pr-[10px]">Google Analystics</span>
                  </p>
                  <p className=" p-[10px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] text-[20px] font-[600] gap-[12px]">
                    <img
                      className=" w-[45px] h-[45px] rounded-full object-cover"
                      src={Reviewimg}
                      alt=""
                    />
                    <span className=" pr-[10px]">R Studio</span>
                  </p>
                  <p className=" p-[10px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] text-[20px] font-[600] gap-[12px]">
                    <img
                      className=" w-[45px] h-[45px] rounded-full object-cover"
                      src={Reviewimg}
                      alt=""
                    />
                    <span className=" pr-[10px]">Google Sheets</span>
                  </p>
                  <p className=" p-[10px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] text-[20px] font-[600] gap-[12px]">
                    <img
                      className=" w-[45px] h-[45px] rounded-full object-cover"
                      src={Reviewimg}
                      alt=""
                    />
                    <span className=" pr-[10px]">Excel</span>
                  </p>
                  <p className=" p-[10px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] text-[20px] font-[600] gap-[12px]">
                    <img
                      className=" w-[45px] h-[45px] rounded-full object-cover"
                      src={Reviewimg}
                      alt=""
                    />
                    <span className=" pr-[10px]">Discord</span>
                  </p>
                  <p className=" p-[10px] flex items-center justify-center border-[#527455] rounded-full text-[#527455] border-[3px] text-[20px] font-[600] gap-[12px]">
                    <img
                      className=" w-[45px] h-[45px] rounded-full object-cover"
                      src={Reviewimg}
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
        <div className=" flex gap-[24px]">
          <section className=" flex flex-col justify-between   border border-gray-400 rounded-[10px] bg-white">
            <div className=" px-[32px] pb-[24px] pt-[36px] text-[#626262] flex flex-col gap-[20px]">
              <p className=" flex text-[12px] font-[700] items-center gap-[5px] px-[14px] py-[10px] bg-[#E1E7F5] rounded-[10px] w-fit text-[#4768A8]">
                {dot} OPTIMIZATION
              </p>
              <p className="  text-[28px] font-[600] text-[#4768A8]">
                LinkedIn Branding
              </p>
              <p className="  text-[18px] font-[300] w-[645px]">
                By optimizing your profile, we carryout effective LinkedIn
                branding that <br /> positions you for global opportunities by
                showcasing your expertise, achievements, and unique value
                proposition to a wide audience of potential employers and
                collaborators.
              </p>
            </div>
            <div className=" ml-[14px] flex  flex-col overflow-scroll  rounded-tl-[10px] rounded-bl-[10px] w-[709px]">
              <div className="w-[864px]">
                <img
                  className=" w-full h-[172px] object-cover"
                  src={Reviewimg}
                  alt=""
                />
                <div className=" flex justify-between relative">
                  <img
                    className=" absolute w-[120px] h-[120px] rounded-full -top-[80px] left-5 border-[4px] border-white"
                    src={Reviewimg}
                    alt=""
                  />
                  <section className=" flex  flex-col flex-1 px-[27px] pt-[44px]">
                    <p className=" text-[24px] font-[600] text-[#1A1A1ACC]">
                      Ndomo Godsent
                    </p>
                    <p className=" text-[18px] font-[300] text-[#1A1A1ACC] pb-[8px]">
                      Data analyst
                    </p>
                    <p className=" text-[14px] font-[500] text-[#1A1A1ACC]">
                      Location . Contact info
                    </p>
                  </section>
                  <section className=" flex-1  flex justify-center items-center">
                    <div className="flex flex-col items-start">
                      <div className=" flex items-center gap-[16px] justify-center">
                        <img className=" w-[40px] h-[40px]" src={logo} alt="" />{" "}
                        <p className=" text-[16px] font-[600] text-[#1A1A1ACC] pb-[8px]">
                          Zion Tech Hub
                        </p>
                      </div>
                      <div className=" flex items-center gap-[16px] justify-center">
                        <img className=" w-[40px] h-[40px]" src={logo} alt="" />{" "}
                        <p className=" text-[16px] font-[600] text-[#1A1A1ACC] pb-[8px]">
                          Univesity of PH
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          {/* part 2 of part 1 */}
          <section className=" flex flex-col   border border-gray-400 rounded-[10px] bg-white py-[14px] p-[14px]">
            <div className=" px-[32px] pb-[24px] pt-[20px]  flex flex-col gap-[20px] text-[#A85847]">
              <p className=" flex text-[12px] font-[700] items-center gap-[5px] px-[14px] py-[10px] bg-[#F5E9E1] rounded-[10px] w-fit">
                {dot} INTERNSHIPS
              </p>
              <p className="  text-[28px] font-[600]">
                Internship Opportunities{" "}
              </p>
              <p className="  text-[18px] font-[300] w-[440px] text-[#626262]">
                Our internship opportunities provide valuable hands-on
                experience and exposure to real-world projects, allowing you to
                apply your skills in a professional setting and gain insights
                into your chosen field.
              </p>
            </div>
            <div className=" bg-[#EEEEEE] ml-1 flex items-center justify-center py-[20px] rounded-tl-[10px] rounded-bl-[10px]">
              <img
                className=" w-[381px] h-[268px] border border-black"
                src=""
                alt="img"
              />
            </div>
          </section>
        </div>
        {/* third part */}
        <div className=" flex gap-[24px] max-w-[1300px] overflow-hidden">
          <div className=" w-fit flex flex-col py-[14px] justify-between   border border-gray-400 rounded-[10px] bg-white">
            <section className=" ml-[14px] flex  flex-col overflow-scroll  rounded-tl-[10px] rounded-bl-[10px]  w-[617px]">
              <div className="w-[864px]">
                <img
                  className=" w-full h-[250px] object-cover"
                  src={Reviewimg}
                  alt=""
                />
              </div>
            </section>

            <section className=" pt-[36px] px-[28px]">
              <h3 className=" text-[28px] font-[600] text-[#6C47A8]">
                Collaboration on projects with industry <br /> experts{" "}
              </h3>
              <p className=" text-[18px] font-[300] text-[#1A1A1A66] w-[573px] ">
                Collaborating on projects with industry experts offers you the
                unique opportunity to gain insights from seasoned professionals,
                enhancing your skills and understanding through practical,
                real-world experience.
              </p>
            </section>
          </div>
          {/* 3rd part 2 */}
          <div className="  flex flex-col py-[14px]   border border-gray-400 rounded-[10px] bg-white">
            <section className=" ml-[14px] flex  flex-col overflow-scroll  rounded-tl-[10px] rounded-bl-[10px] w-[617px] h-[250px]">
              <div className="pl-[60px] pt-[50px]">
                <section className=" rounded-[10px] border border-gray-400  w-fit">
                  <article className=" flex items-center  px-[32px] py-[14px] border-b border-gray-400 gap-[16px] text-[#36303099]">
                    <p className="text-[16px] font-[400]">
                      <b>Michael</b> started a call in
                    </p>
                    <p className="text-[14px] font-[400] py-[6px] px-[14px] bg-[#1A1A1A1A] rounded-[10px]">
                      #community-calls
                    </p>
                    <p className="text-[14px] font-[400]">2 Mentors present</p>
                  </article>
                  <article className=" py-[16px] px-[32px] flex gap-[24px]">
                    <img
                      className=" w-[120px] h-[60px] rounded-full"
                      src={Reviewimg}
                      alt=""
                    />
                    <div className=" flex flex-col gap-[24px] ">
                      <section className=" flex gap-[10px] items-center">
                        <p className="text-[16px] font-[400]">Michael</p>
                        <p className="text-[14px] font-[400] py-[6px] px-[14px] bg-[#034FE31A] text-[#034FE3] rounded-[10px]">
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
            <section className=" pt-[36px] px-[32px]">
              <h3 className=" text-[28px] font-[600] text-[#D564BC]">
                Mentorship from seasoned data <br />
                experts
              </h3>
              <p className=" text-[18px] font-[300] text-[#1A1A1A66] w-[573px] ">
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
