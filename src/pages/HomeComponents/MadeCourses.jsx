import React, { useState } from "react";
import { Classeshome, Joinhome, Registerhome } from "../../assets";

function MadeCourses() {
  const [enroll, setEnroll] = useState(true);

  const [join, setJoin] = useState(false);
  const [classes, setClasses] = useState(false);

  const handleEnrollDisplay = () => {
    setEnroll(true);
    setJoin(false);
    setClasses(false);
  };
  const handleJoinDisplay = () => {
    setEnroll(false);
    setJoin(true);
    setClasses(false);
  };

  const handleClassesDisplay = () => {
    setEnroll(false);
    setJoin(false);
    setClasses(true);
  };

  const individual = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none">
      <path
        d="M15.5 4C14.4391 4 13.4217 4.42143 12.6716 5.17157C11.9214 5.92172 11.5 6.93913 11.5 8C11.5 9.06087 11.9214 10.0783 12.6716 10.8284C13.4217 11.5786 14.4391 12 15.5 12C16.5609 12 17.5783 11.5786 18.3284 10.8284C19.0786 10.0783 19.5 9.06087 19.5 8C19.5 6.93913 19.0786 5.92172 18.3284 5.17157C17.5783 4.42143 16.5609 4 15.5 4ZM15.5 5.9C15.7758 5.9 16.0489 5.95432 16.3036 6.05985C16.5584 6.16539 16.7899 6.32007 16.9849 6.51508C17.1799 6.71008 17.3346 6.94158 17.4401 7.19636C17.5457 7.45115 17.6 7.72422 17.6 8C17.6 8.27578 17.5457 8.54885 17.4401 8.80364C17.3346 9.05842 17.1799 9.28992 16.9849 9.48492C16.7899 9.67993 16.5584 9.83461 16.3036 9.94015C16.0489 10.0457 15.7758 10.1 15.5 10.1C15.2242 10.1 14.9511 10.0457 14.6964 9.94015C14.4416 9.83461 14.2101 9.67993 14.0151 9.48492C13.8201 9.28992 13.6654 9.05842 13.5599 8.80364C13.4543 8.54885 13.4 8.27578 13.4 8C13.4 7.44305 13.6212 6.9089 14.0151 6.51508C14.4089 6.12125 14.943 5.9 15.5 5.9ZM4.5 7V10H1.5V12H4.5V15H6.5V12H9.5V10H6.5V7H4.5ZM15.5 13C12.83 13 7.5 14.33 7.5 17V20H23.5V17C23.5 14.33 18.17 13 15.5 13ZM15.5 14.9C18.47 14.9 21.6 16.36 21.6 17V18.1H9.4V17C9.4 16.36 12.5 14.9 15.5 14.9Z"
        fill="#034FE3"
      />
    </svg>
  );
  const whatsapp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none">
      <path
        d="M19.55 4.91005C18.6331 3.98416 17.5411 3.25002 16.3376 2.75042C15.134 2.25081 13.8431 1.99574 12.54 2.00005C7.08005 2.00005 2.63005 6.45005 2.63005 11.9101C2.63005 13.6601 3.09005 15.3601 3.95005 16.8601L2.55005 22.0001L7.80005 20.6201C9.25005 21.4101 10.88 21.8301 12.54 21.8301C18 21.8301 22.4501 17.3801 22.4501 11.9201C22.4501 9.27005 21.42 6.78005 19.55 4.91005ZM12.54 20.1501C11.06 20.1501 9.61005 19.7501 8.34005 19.0001L8.04005 18.8201L4.92005 19.6401L5.75005 16.6001L5.55005 16.2901C4.7276 14.9771 4.29097 13.4593 4.29005 11.9101C4.29005 7.37005 7.99005 3.67005 12.53 3.67005C14.73 3.67005 16.8 4.53005 18.35 6.09005C19.1177 6.85392 19.726 7.7626 20.1397 8.76338C20.5534 9.76417 20.7642 10.8371 20.76 11.9201C20.7801 16.4601 17.08 20.1501 12.54 20.1501ZM17.06 13.9901C16.81 13.8701 15.59 13.2701 15.37 13.1801C15.14 13.1001 14.98 13.0601 14.81 13.3001C14.64 13.5501 14.17 14.1101 14.03 14.2701C13.89 14.4401 13.74 14.4601 13.49 14.3301C13.24 14.2101 12.44 13.9401 11.5 13.1001C10.76 12.4401 10.27 11.6301 10.12 11.3801C9.98005 11.1301 10.1 11.0001 10.23 10.8701C10.34 10.7601 10.48 10.5801 10.6 10.4401C10.72 10.3001 10.77 10.1901 10.85 10.0301C10.93 9.86005 10.89 9.72005 10.83 9.60005C10.77 9.48005 10.27 8.26005 10.07 7.76005C9.87005 7.28005 9.66005 7.34005 9.51005 7.33005H9.03005C8.86005 7.33005 8.60005 7.39005 8.37005 7.64005C8.15005 7.89005 7.51005 8.49005 7.51005 9.71005C7.51005 10.9301 8.40005 12.1101 8.52005 12.2701C8.64005 12.4401 10.27 14.9401 12.75 16.0101C13.34 16.2701 13.8 16.4201 14.16 16.5301C14.75 16.7201 15.29 16.6901 15.72 16.6301C16.2 16.5601 17.19 16.0301 17.39 15.4501C17.6 14.8701 17.6 14.3801 17.53 14.2701C17.46 14.1601 17.31 14.1101 17.06 13.9901Z"
        fill="#0F973D"
      />
    </svg>
  );
  const google = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="none">
      <g clip-path="url(#clip0_488_1023)">
        <path
          d="M14.0771 9.98334L16.4169 12.6578L19.5633 14.6682L20.1106 10.0002L19.5633 5.4375L16.3566 7.20366L14.0771 9.98334Z"
          fill="#00832D"
        />
        <path
          d="M0.5 14.2338V18.2117C0.5 19.1199 1.23725 19.8573 2.14569 19.8573H6.1235L6.94719 16.8518L6.1235 14.2338L3.39444 13.4102L0.5 14.2338Z"
          fill="#0066DA"
        />
        <path
          d="M6.1235 0.109375L0.5 5.73287L3.39462 6.55459L6.1235 5.73287L6.93219 3.15053L6.1235 0.109375Z"
          fill="#E94235"
        />
        <path d="M0.5 14.2354H6.12341V5.73267H0.5V14.2354Z" fill="#2684FC" />
        <path
          d="M23.1556 2.49047L19.5632 5.4376V14.6682L23.1705 17.6268C23.7105 18.0498 24.5004 17.6643 24.5004 16.9778V3.12628C24.5004 2.43225 23.6916 2.04863 23.1555 2.49056"
          fill="#00AC47"
        />
        <path
          d="M14.0771 9.9834V14.2338H6.12354V19.8573H17.9177C18.8261 19.8573 19.5633 19.1199 19.5633 18.2116V14.6683L14.0771 9.9834Z"
          fill="#00AC47"
        />
        <path
          d="M17.9177 0.109375H6.12354V5.73287H14.0771V9.98331L19.5633 5.43738V1.75516C19.5633 0.846719 18.8261 0.109469 17.9177 0.109469"
          fill="#FFBA00"
        />
      </g>
      <defs>
        <clipPath id="clip0_488_1023">
          <rect
            width="24"
            height="19.7812"
            fill="white"
            transform="translate(0.5 0.109375)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const pointer = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="39"
      viewBox="0 0 38 39"
      fill="none">
      <circle
        cx="19"
        cy="19.5"
        r="18.5"
        stroke="#034FE3"
        stroke-opacity="0.5"
      />
      <circle
        cx="19"
        cy="19.5"
        r="12.5"
        stroke="#034FE3"
        stroke-opacity="0.5"
      />
      <circle cx="19" cy="19.5" r="7" fill="#034FE3" />
    </svg>
  );
  return (
    <div className=" relative pt-[80px] ">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[99px] top-[85px] -left-[1.5px]"></span>
      <div className=" px-[20px]   sm:w-full w-[300px]">
        <p className=" font-[600] sm:text-[48px] text-[32px]  text-[#333]">
          <span className=" text-[#034FE3]">Ready-made courses</span> for your
          success
        </p>
        <p className=" sm:text-[18px] text-[16px]  font-[300] text-[#1A1A1A66]">
          Our trainings and courses are delicately specified to prove its
          tailored to your needs.
        </p>
      </div>
      <div className=" py-[107px] flex gap-[107px] sm:items-center sm:justify-center ">
        <div className="flex flex-col gap-[74px]  w-[357px] sm:px-[30px] relative">
          <span className=" absolute -left-[19px] -top-20 hidden sm:flex">
            {pointer}
          </span>
          <span
            className={` absolute -left-[4px] -top-16 hidden sm:flex p-[4px] bg-[#034FE3]  rounded-b-full  ${
              enroll && "h-[100px] duration-500"
            } ${join && "h-[320px] duration-500"} ${
              classes && "h-[535px] duration-500"
            }`}></span>
          <section className=" flex flex-col gap-[24px]">
            <span
              className=" border border-[#034FE399] w-fit p-[10px] rounded-[5px] "
              onClick={handleEnrollDisplay}>
              {individual}
            </span>
            <div>
              <h3 className="text-[20px] font-[600] text-[#034FE3]">Enroll</h3>{" "}
              <p className="text-[14px] font-[300] text-[#1A1A1ACC] w-[357px]">
                Reach out to our admin on Whatsapp and enroll for <br /> the
                next cohort. Payments will be made on Whatsapp.
              </p>
            </div>
            <img
              className=" sm:hidden flex w-[343px] h-[200px] my-2 rounded-[10px] object-cover "
              src={Registerhome}
              alt=""
            />
          </section>
          <section className=" flex flex-col gap-[24px]">
            <span
              className=" border  border-[#0F973D] w-fit p-[10px] rounded-[5px] "
              onClick={handleJoinDisplay}>
              {whatsapp}
            </span>
            <div>
              <h3
                className="text-[20px] font-[600]   text-[#0F973D]
                ">
                Join the community
              </h3>{" "}
              <p className="text-[14px] font-[300] text-[#1A1A1ACC] w-[357px]">
                You’ll be eligible to our private community where we <br /> are
                with you in every step of your training.
              </p>
            </div>
            <img
              className=" sm:hidden flex w-[343px] h-[200px] my-2 rounded-[10px] object-cover"
              src={Joinhome}
              alt=""
            />
          </section>{" "}
          <section className=" flex flex-col gap-[24px]">
            <span
              className=" border  border-[#DDA249] w-fit p-[10px] rounded-[5px]"
              onClick={handleClassesDisplay}>
              {google}
            </span>
            <div>
              <h3 className="text-[20px] font-[600]  text-[#DDA249]">
                Classes on Meet
              </h3>{" "}
              <p className="text-[14px] font-[300] text-[#1A1A1ACC] w-[357px]">
                All that’s left now is to start your classes. Classes will{" "}
                <br /> be held virtually on Google Meet.
              </p>
            </div>
            <img
              className=" sm:hidden flex w-[343px] h-[200px] my-2 rounded-[10px] object-cover"
              src={Classeshome}
              alt=""
            />
          </section>
        </div>
        <div className=" flex-1 sm:flex hidden">
          {enroll && (
            <img
              className=" h-[717px] w-full object-cover rounded-t-[10px]"
              src={Registerhome}
              alt=""
            />
          )}
          {join && (
            <img
              className=" h-[717px] w-full object-cover rounded-t-[10px]"
              src={Joinhome}
              alt=""
            />
          )}{" "}
          {classes && (
            <img
              className=" h-[717px] w-full object-cover rounded-t-[10px]"
              src={Classeshome}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MadeCourses;
