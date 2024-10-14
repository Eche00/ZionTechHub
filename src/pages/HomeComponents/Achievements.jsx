import React from "react";

function Achievements() {
  const individual = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none">
      <path
        d="M28.0026 2.26662L28.0014 2.26661C24.4964 2.26195 21.1077 3.52413 18.4598 5.82061C15.8119 8.1171 14.0832 11.2932 13.5921 14.7636C13.101 18.234 13.8806 21.7651 15.7873 24.7061C17.0643 26.6758 18.7893 28.2919 20.8013 29.4354C17.5576 30.2755 14.6939 31.7715 12.38 34.0522C8.46181 37.9106 6.56006 43.5869 6.56006 50.7733C6.56006 51.5088 6.85225 52.2142 7.37235 52.7343C7.89245 53.2544 8.59786 53.5466 9.33339 53.5466C10.0689 53.5466 10.7743 53.2544 11.2944 52.7343C11.8145 52.2142 12.1067 51.5088 12.1067 50.7733C12.1067 44.5207 13.7511 40.486 16.2736 38.0008L15.5718 37.2885L16.2736 38.0008C18.803 35.5088 22.663 34.1333 28.0001 34.1333C33.3369 34.1333 37.1973 35.5087 39.7307 38.0013C42.2499 40.4908 43.8934 44.5224 43.8934 50.7733C43.8934 51.5088 44.1856 52.2142 44.7057 52.7343C45.2258 53.2544 45.9312 53.5466 46.6667 53.5466C47.4023 53.5466 48.1077 53.2544 48.6278 52.7343C49.1479 52.2142 49.4401 51.5088 49.4401 50.7733C49.4401 43.5868 47.5383 37.9145 43.6168 34.0526C41.3042 31.7703 38.4334 30.2715 35.1816 29.4313C37.1895 28.2835 38.9096 26.6646 40.1818 24.6939C42.0786 21.7558 42.8529 18.2326 42.3629 14.77C41.8729 11.3074 40.1514 8.13734 37.5139 5.84091C34.8765 3.54449 31.4997 2.27553 28.0026 2.26662ZM19.0134 16.7999C19.0134 14.4165 19.9602 12.1307 21.6455 10.4454C23.3309 8.76009 25.6166 7.81328 28.0001 7.81328C30.3835 7.81328 32.6693 8.76009 34.3546 10.4454C36.0399 12.1307 36.9867 14.4165 36.9867 16.7999C36.9867 19.1834 36.0399 21.4692 34.3546 23.1545C32.6693 24.8398 30.3835 25.7866 28.0001 25.7866C25.6166 25.7866 23.3309 24.8398 21.6455 23.1545C19.9602 21.4692 19.0134 19.1834 19.0134 16.7999Z"
        fill="#6D9357"
        stroke="#6D9357"
        stroke-width="2"
      />
    </svg>
  );

  const individual2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="56"
      viewBox="0 0 57 56"
      fill="none">
      <path
        d="M28.5 23.3332C33.6546 23.3332 37.8333 19.1545 37.8333 13.9998C37.8333 8.84518 33.6546 4.6665 28.5 4.6665C23.3453 4.6665 19.1666 8.84518 19.1666 13.9998C19.1666 19.1545 23.3453 23.3332 28.5 23.3332Z"
        fill="#034FE3"
        stroke="#034FE3"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.5 51.333C49.5 39.7352 40.0978 30.333 28.5 30.333C16.9022 30.333 7.5 39.7352 7.5 51.333"
        stroke="#034FE3"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.5 51.333L33.1667 45.4997L28.5 30.333L23.8334 45.4997L28.5 51.333Z"
        fill="#034FE3"
        stroke="#034FE3"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const world = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="56"
      viewBox="0 0 57 56"
      fill="none">
      <path
        d="M51.8334 27.9998C51.8334 15.1128 41.3871 4.6665 28.5001 4.6665C15.6131 4.6665 5.16675 15.1128 5.16675 27.9998C5.16675 40.8868 15.6131 51.3332 28.5001 51.3332C41.3871 51.3332 51.8334 40.8868 51.8334 27.9998Z"
        stroke="#DDA249"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M47.1668 13.2975C44.9851 13.4538 42.1921 14.3008 40.2554 16.8068C36.7554 21.3335 33.2577 21.7138 30.9244 20.2042C27.4244 17.9408 30.3667 14.2705 26.2601 12.2778C23.5837 10.9782 23.2104 7.44317 24.7014 4.6665M5.16675 25.6665C6.94708 27.2112 9.43675 28.6252 12.3744 28.6252C18.4411 28.6252 19.6544 29.7848 19.6544 34.4212C19.6544 39.0575 19.6544 39.0575 20.8677 42.5342C21.6564 44.7975 21.9317 47.0562 20.3591 48.9998M51.8334 31.3878C49.7638 30.1978 47.1667 29.7055 44.5371 31.5932C39.5087 35.2098 36.0391 32.2138 34.4781 35.2075C32.1798 39.6128 40.3908 40.9965 33.1667 51.3332"
        stroke="#DDA249"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const dot1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="30"
      viewBox="0 0 60 30"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60 30C60 13.4314 46.5685 0 30 0C13.4315 0 0 13.4314 0 30H60Z"
        fill="#BAD1AB"
      />
    </svg>
  );
  const dot2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <circle cx="10" cy="10" r="10" fill="#BAD1AB" />
    </svg>
  );
  const dot3 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <circle cx="10" cy="10" r="10" fill="#BAD1AB" />
    </svg>
  );

  const dot4 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none">
      <circle cx="12.5" cy="12.5" r="12.5" fill="#BAD1AB" />
    </svg>
  );
  const dot5 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none">
      <circle cx="5" cy="5" r="5" fill="#BAD1AB" />
    </svg>
  );

  const dot6 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="30"
      viewBox="0 0 60 30"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30H60Z"
        fill="#034FE3"
        fill-opacity="0.2"
      />
    </svg>
  );
  const dot7 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <circle cx="10" cy="10" r="10" fill="#034FE3" fill-opacity="0.2" />
    </svg>
  );
  const dot8 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none">
      <circle cx="7.5" cy="7.5" r="7.5" fill="#034FE3" fill-opacity="0.2" />
    </svg>
  );

  const dot9 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none">
      <circle cx="12.5" cy="12.5" r="12.5" fill="#034FE3" fill-opacity="0.2" />
    </svg>
  );
  const dot10 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none">
      <circle cx="5" cy="5" r="5" fill="#034FE3" fill-opacity="0.2" />
    </svg>
  );

  const dot11 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="30"
      viewBox="0 0 60 30"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30H60Z"
        fill="#DDB16F"
        fill-opacity="0.4"
      />
    </svg>
  );
  const dot12 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <circle cx="10" cy="10" r="10" fill="#DDB16F" fill-opacity="0.4" />
    </svg>
  );
  const dot13 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none">
      <circle cx="7.5" cy="7.5" r="7.5" fill="#DDB16F" fill-opacity="0.4" />
    </svg>
  );

  const dot14 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none">
      <circle cx="12.5" cy="12.5" r="12.5" fill="#DDB16F" fill-opacity="0.4" />
    </svg>
  );
  const dot15 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none">
      <circle cx="5" cy="5" r="5" fill="#DDB16F" fill-opacity="0.4" />
    </svg>
  );
  return (
    <div className=" relative py-[150px] flex flex-col gap-[60px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[170px] top-[157px]  -left-[1.5px]"></span>
      <div className=" px-[20px] ">
        <p className=" font-[600] sm:text-[48px] text-[32px] text-[#333] sm:w-full w-[300px]">
          Our achievements at {" "}
          <span className=" text-[#034FE3]">Zion Tech Hub</span>
        </p>
        <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
          These are few of the stats of our accomplishment during the past one
          year.
        </p>
      </div>
      <div className="flex sm:flex-row  flex-col gap-[30px] sm:items-center sm:h-fit h-[750px]">
        <section className=" flex-1 flex flex-col items-center justify-center bg-[#D3DDCD66] sm:h-[316px] h-[553px] rounded-[10px] relative">
          <div className=" flex gap-[14px] items-center justify-center">
            {individual}
            <span className=" sm:text-[64px] text-[48px]  font-[700] text-[#6D9357]">
              321
            </span>
          </div>
          <p className=" sm:text-[20px] text-[16px]  font-[400] text-[#6D9357] text-center">
            data analysts and data <br /> scientists trained
          </p>
          <span className=" absolute bottom-0 right-5">{dot1}</span>
          <span className=" absolute sm:bottom-10 bottom-3 sm:left-[150px] left-[100px]">
            {dot2}
          </span>
          <span className=" absolute sm:bottom-[80px] bottom-[60px] left-0">
            {dot2}
          </span>
          <span className=" absolute sm:bottom-[110px] bottom-[80px] right-12">
            {dot3}
          </span>
          <span className=" absolute sm:bottom-[200px] bottom-[150px] sm:left-20 left-14">
            {dot2}
          </span>
          <span className=" absolute sm:bottom-[230px] bottom-[160px] right-20">
            {dot4}
          </span>
          <span className=" absolute sm:bottom-[290px] bottom-[210px] sm:left-[160px] left-[100px]">
            {dot5}
          </span>
        </section>
        <section className=" flex-1 flex flex-col items-center justify-center bg-[#034FE30D] h-[316px] rounded-[10px] relative">
          <div className=" flex gap-[14px] items-center justify-center">
            {individual2}
            <span className=" sm:text-[64px] text-[48px]  font-[700] text-[#034FE3]">
              63%
            </span>
          </div>
          <p className=" sm:text-[20px] text-[16px] font-[400] text-[#034FE3] text-center">
            connected to local and <br /> global opportunities.
          </p>
          <span className=" absolute bottom-0 right-5">{dot6}</span>
          <span className=" absolute sm:bottom-10 bottom-3 sm:left-[150px] left-[100px]">
            {dot7}
          </span>
          <span className=" absolute sm:bottom-[80px] bottom-[60px] left-0">
            {dot7}
          </span>
          <span className=" absolute sm:bottom-[110px] bottom-[80px] right-12">
            {dot8}
          </span>
          <span className=" absolute sm:bottom-[200px] bottom-[150px] sm:left-20 left-14">
            {dot7}
          </span>
          <span className=" absolute sm:bottom-[230px] bottom-[160px] right-20">
            {dot9}
          </span>
          <span className=" absolute sm:bottom-[290px] bottom-[210px] sm:left-[160px] left-[100px]">
            {dot10}
          </span>
        </section>
        <section className=" flex-1 flex flex-col items-center justify-center bg-[#F1D3AF66] h-[316px] rounded-[10px] relative">
          <div className=" flex gap-[14px] items-center justify-center">
            {world}
            <span className=" sm:text-[64px] text-[48px]  font-[700] text-[#DDA249]">
              12
            </span>
          </div>
          <p className=" sm:text-[20px] text-[16px] font-[400] text-[#DDA249] text-center">
            different countries
          </p>
          <span className=" absolute bottom-0 right-5">{dot11}</span>
          <span className=" absolute sm:bottom-10 bottom-3 sm:left-[150px] left-[100px]">
            {dot12}
          </span>
          <span className=" absolute sm:bottom-[80px] bottom-[60px] left-0">
            {dot12}
          </span>
          <span className=" absolute sm:bottom-[110px] bottom-[80px] right-12">
            {dot13}
          </span>
          <span className=" absolute sm:bottom-[200px] bottom-[150px] sm:left-20 left-14">
            {dot12}
          </span>
          <span className=" absolute sm:bottom-[230px] bottom-[160px] right-20">
            {dot14}
          </span>
          <span className=" absolute sm:bottom-[290px] bottom-[210px] sm:left-[160px] left-[100px]">
            {dot15}
          </span>
        </section>
      </div>
    </div>
  );
}

export default Achievements;
