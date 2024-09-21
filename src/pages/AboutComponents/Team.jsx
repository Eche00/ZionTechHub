import React from "react";
import TeamCard from "./TeamCard";
import TeamDetails from "../../lib/Teamdetails";

function Team() {
  return (
    <div className=" relative pb-[180px] ">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[5px] -left-[1.5px]"></span>
      <div className=" px-[20px] pb-[69px]">
        <p className=" font-[600] sm:text-[48px] text-[32px] text-[#333]">
          <span className=" text-[#034FE3]">Meet</span> the team
        </p>
        <p className=" text-[18px] font-[300] text-[#1A1A1A66]">
          We offer amazing services crafted specially for you here at zion tech
          hub.
        </p>
      </div>
      <div className=" overflow-x-scroll ">
        <div className=" relative flex sm:w-[3400px] w-[3100px] gap-[24px] overflow-scroll  pr-[10px]">
          {TeamDetails.map((team) => (
            <TeamCard key={team.name} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
