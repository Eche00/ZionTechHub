import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/Config/firebase";
import { Link, useNavigate } from "react-router-dom";

// Register modules
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  const [attendees, setAttendees] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  // Fetch Attendees
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "workshopattendees"),
      (snapshot) => {
        const updated = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAttendees(updated);
      }
    );

    return () => unsubscribe();
  }, []);

  // Fetch Blogs
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "blogs"), (snapshot) => {
      const blogData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogData);
      console.log(blogData);
    });

    return () => unsubscribe();
  }, []);

  // Prepare Attendee Chart Data
  const countryCounts = {};
  attendees.forEach((person) => {
    const country = person.Country?.trim();
    if (country) {
      countryCounts[country] = (countryCounts[country] || 0) + 1;
    }
  });

  const attendeeLabels = Object.keys(countryCounts);
  const attendeeDataValues = Object.values(countryCounts);
  const attendeeColors = attendeeLabels.map(
    (_, i) =>
      ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#F472B6"][i % 6]
  );

  const attendeeChartData = {
    labels: attendeeLabels,
    datasets: [
      {
        label: "Attendees by Country",
        data: attendeeDataValues,
        backgroundColor: attendeeColors,
        borderColor: "#FFFFFF",
        borderWidth: 2,
      },
    ],
  };

  const attendeeOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    cutout: "40%",
  };

  // Blog Half Doughnut Data (fixed to one slice)
  const blogChartData = {
    labels: ["Blogs Uploaded"],
    datasets: [
      {
        data: [blogs.length, 100 - blogs.length], // You can adjust the total to something realistic
        backgroundColor: ["#3B82F6", "#E5E7EB"], // blue and light gray
        borderColor: "#FFFFFF",
        borderWidth: 2,
      },
    ],
  };

  const blogOptions = {
    responsive: true,
    rotation: -90,
    circumference: 180,
    cutout: "50%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex xxl:flex-row flex-col w-full gap-14 items-center justify-evenly ">
      {/* Attendee Doughnut */}
      <div className="max-w-fit w-full flex flex-1 sm:flex-row  flex-col">
        {/* attendee  graph  */}
        <div className="max-w-lg w-full  flex-1  flex items-center justify-center">
          {" "}
          {attendeeLabels.length > 0 ? (
            <Pie data={attendeeChartData} options={attendeeOptions} />
          ) : (
            <p className="text-gray-500 text-center border-2 border-gray-700 px-4 py-2 rounded-full mr-2">
              No attendee data to display
            </p>
          )}
        </div>
        {/* attendee count  */}
        <div className="flex sm:flex-col flex-row sm:items-start items-center gap-[10px] sm:mt-0 mt-3">
          <p className=" text-white font-bold flex items-center gap-[10px]">
            Attendees:{" "}
            <span className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-1 rounded-[10px] ">
              {attendees.length}
            </span>
          </p>
          <Link
            to="/dashboard/event-attendees"
            className="bg-[#034FE3] text-white px-4 py-2 rounded-full flex items-center justify-center cursor-pointer hover:scale-[105%] transition-all duration-300 sm:w-full w-[120px]">
            View
          </Link>
        </div>
      </div>
      <div className=" xxl:w-1 w-full xxl:h-full h-[2px] bg-gray-500 rounded-full"></div>
      {/* Blogs Doughnut */}
      <div className="max-w-sm w-full flex flex-1 sm:flex-row flex-col sm:items-start items-center justify-center ">
        <div className="max-w-lg w-full  flex-1  flex items-center justify-center">
          <Doughnut data={blogChartData} options={blogOptions} />
        </div>
        {/* blogs count  */}
        <div className="flex sm:flex-col flex-row sm:items-start items-center gap-[10px] sm:mt-0 mt-3">
          <p className=" text-white font-bold flex items-center gap-[10px]">
            Blogs:{" "}
            <span className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-1 rounded-[10px] ">
              {blogs.length}
            </span>
          </p>
          <Link
            to="/dashboard/viewblogs"
            className="bg-[#034FE3] text-white px-4 py-2 rounded-full flex items-center justify-center cursor-pointer sm:w-full w-[120px] hover:scale-[105%] transition-all duration-300">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Chart;
