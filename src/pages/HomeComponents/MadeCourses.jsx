import React from "react";
import { Reviewimg } from "../../assets";

function MadeCourses() {
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
        fill="#1A1A1A"
        fill-opacity="0.4"
      />
    </svg>
  );
  const google = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none">
      <g clip-path="url(#clip0_841_1766)">
        <path
          d="M6.03 2.13004L0.5 7.75004H6.03V2.13004ZM6.428 2.13004V7.75004H14.036V11.4L19.506 6.95004C19.492 5.73004 19.537 4.70004 19.481 3.49004C19.333 2.40004 18.194 2.02004 17.245 2.13004H6.428ZM23.6 4.32004C22.798 4.61504 22.242 5.31504 21.553 5.81004C19.047 7.86004 16.571 9.93004 14.085 12C17.11 14.59 20.125 17.18 23.15 19.76C24.368 20.431 24.578 18.946 24.478 18.12V5.12004C24.4775 5.00739 24.4541 4.89602 24.4092 4.79272C24.3642 4.68942 24.2988 4.59634 24.2167 4.51916C24.1347 4.44197 24.0378 4.3823 23.9319 4.34377C23.8261 4.30524 23.7135 4.28866 23.601 4.29504L23.6 4.32004ZM0.538 8.15004V15.85H6.068V8.15004H0.538ZM14.115 16.25H6.508V21.87C10.372 21.864 14.245 21.881 18.088 21.861C19.108 21.791 19.706 20.741 19.556 19.791V17.281L14.086 12.601V16.251L14.115 16.25ZM0.538 16.25C0.558 17.69 0.497 19.13 0.571 20.56C0.733 21.508 1.729 21.99 2.618 21.87H6.082V16.25H0.538Z"
          fill="#1A1A1A"
          fill-opacity="0.4"
        />
      </g>
      <defs>
        <clipPath id="clip0_841_1766">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <div className=" relative pt-[80px] ">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute top-[99px] -left-[1.5px]"></span>
      <div className=" px-2  ">
        <p className=" font-[600] text-[48px] text-[#333]">
          <span className=" text-[#034FE3]">Ready-made courses</span> for your
          success
        </p>
        <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
          Our trainings and courses are delicately specified to prove its
          tailored to your needs.
        </p>
      </div>

      <div className=" py-[107px] flex gap-[107px] items-center justify-center">
        <div className="flex flex-col gap-[74px]  w-[357px] px-[30px]">
          <section className=" flex flex-col gap-[24px]">
            <span className=" border border-[#034FE399] w-fit p-[10px] rounded-[5px]">
              {individual}
            </span>
            <div>
              <h3 className="text-[20px] font-[600] text-[#034FE3]">Enroll</h3>{" "}
              <p className="text-[14px] font-[300] text-[#1A1A1ACC] w-[357px]">
                Reach out to our admin on Whatsapp and enroll for <br /> the
                next cohort. Payments will be made on Whatsapp.
              </p>
            </div>
          </section>
          <section className=" flex flex-col gap-[24px]">
            <span className=" border border-gray-400 w-fit p-[10px] rounded-[5px]">
              {whatsapp}
            </span>
            <div>
              <h3 className="text-[20px] font-[600] text-[#626262]">
                Join the community
              </h3>{" "}
              <p className="text-[14px] font-[300] text-[#1A1A1ACC] w-[357px]">
                You’ll be eligible to our private community where we <br /> are
                with you in every step of your training.
              </p>
            </div>
          </section>{" "}
          <section className=" flex flex-col gap-[24px]">
            <span className=" border border-gray-400 w-fit p-[10px] rounded-[5px]">
              {google}
            </span>
            <div>
              <h3 className="text-[20px] font-[600] text-[#626262]">
                Classes on Meet
              </h3>{" "}
              <p className="text-[14px] font-[300] text-[#1A1A1ACC] w-[357px]">
                All that’s left now is to start your classes. Classes will{" "}
                <br /> be held virtually on Google Meet.
              </p>
            </div>
          </section>
        </div>
        <div className=" flex-1">
          <img
            className=" h-[717px] w-full object-cover rounded-t-[10px]"
            src={Reviewimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MadeCourses;
