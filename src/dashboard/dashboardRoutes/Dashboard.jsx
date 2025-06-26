import React from "react";
import { Link } from "react-router-dom";
import Chart from "../dashboardcomponents/Chart";

function Dashboard() {
  return (
    <div className="h-fit pt-10">
      <div className="flex items-center gap-[20px] border-b-2 border-gray-700 py-[10px]">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <Link
          to="/dashboard/viewblogs"
          className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full hover:scale-[102%] transition">
          View Blogs
        </Link>
        <button className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full cursor-default">
          1 Image per Blog / Title = Meta title
        </button>
      </div>
      {/* main  */}

      <main className=" flex flex-col gap-10 w-full pb-[400px] mt-10 ">
        <section className="flex flex-1  gap-2  border-2 border-gray-700  w-full px-3 py-4 rounded-[10px] text-white ">
          <Chart />
        </section>
        {/* bottom section  */}
        <section className=" flex w-full  gap-10">
          <div className="flex flex-1  gap-2  border-4 border-gray-700  w-full px-3 py-4 rounded-[10px]  "></div>
          <div className="flex flex-1  gap-2  border-4 border-gray-700  w-full px-3 py-4 rounded-[10px]  "></div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
