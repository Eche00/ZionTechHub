import React from "react";
import { Link } from "react-router-dom";
import Chart from "../dashboardcomponents/Chart";
import Links from "../dashboardcomponents/Links";
import Recent from "../dashboardcomponents/Recent";

function Dashboard() {
  return (
    <div className="h-[100vh] pt-10 overflow-scroll">
      <div className="flex smm:flex-row flex-col items-center gap-[20px] border-b-2 border-gray-700 py-[10px]">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="sm:flex hidden flex-wrap items-center gap-[20px] border-b-2 border-gray-700 py-[10px]">
          <Link
            to="/dashboard/viewblogs"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer">
            View Blogs
          </Link>
          <Link
            to="/dashboard/create-blog"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer">
            Create Blogs
          </Link>
          <Link
            to="/dashboard/event-attendees"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer">
            Event attendees
          </Link>
          <Link
            to="/dashboard/create-webinar"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer">
            Webinar/workshop
          </Link>
          <Link
            to="/dashboard/users"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full w-[140px] text-nowrap flex items-center justify-center hover:scale-[105%] transition-all duration-300 cursor-pointer">
            Users
          </Link>
        </div>
      </div>
      {/* main  */}

      <main className=" flex flex-col gap-5 w-full pb-[200px] mt-10 ">
        <section className="flex flex-1  gap-2  border-4 border-gray-700  w-full px-3 py-4 rounded-[10px] text-white ">
          <Chart />
        </section>
        {/* bottom section  */}
        <section className=" flex sm:flex-row flex-col w-full  gap-10">
          {/* Recent  */}
          <div className="flex flex-1  gap-2  border-4 border-gray-700  w-full px-3 py-4 rounded-[10px] overflow-hidden">
            <Recent />
          </div>
          {/* link  */}
          <div className="flex sm:w-[30%] w-full gap-2  border-4 border-gray-700  px-3 py-4 rounded-[10px]  ">
            <Links />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
