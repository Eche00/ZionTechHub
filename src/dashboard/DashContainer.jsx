import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/Config/firebase";

function DashContainer() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signin");
      }
    });

    return () => unsubscribe;
  }, [navigate]);
  return (
    <div className="h-[100vh] relative sm:h-full bg-[#1F1F1F] ">
      {/* outlet for pages and sidebar  */}
      <section className=" w-full flex  relative bg-white dark:bg-[#1F1F1F]">
        <div className="hidden md:flex fixed left-0">
          <Sidebar />
        </div>
        <div className="ml-0 md:ml-[300px] flex-1 p-5 h-[100vh] bg-[#1F1F1F]">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default DashContainer;
