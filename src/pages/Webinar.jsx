// React & Libraries
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Icons
import { ArrowForward } from "@mui/icons-material";

// Firebase
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../lib/Config/firebase";

// Components
import Speaker from "./Webinarcomponents/Speaker";
import WhatYLearn from "./Webinarcomponents/WhatYLearn";

function Webinar() {
  // STATE
  const [formData, setFormData] = useState({
    Email: "",
    FName: "",
    LName: "",
  });

  const [emailExists, setEmailExists] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [webinar, setWebinar] = useState(null);

  // ICON
  const calendar = (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 13.8442H16.5V16.6642L18.94 18.0742L18.19 19.3742L15 17.5342V13.8442ZM19 8.84424H5V19.8442H9.67C9.24 18.9342 9 17.9142 9 16.8442C9 14.9877 9.7375 13.2072 11.0503 11.8945C12.363 10.5817 14.1435 9.84424 16 9.84424C17.07 9.84424 18.09 10.0842 19 10.5142V8.84424ZM5 21.8442C4.46957 21.8442 3.96086 21.6335 3.58579 21.2585C3.21071 20.8834 3 20.3747 3 19.8442V5.84424C3 4.73424 3.89 3.84424 5 3.84424H6V1.84424H8V3.84424H16V1.84424H18V3.84424H19C19.5304 3.84424 20.0391 4.05495 20.4142 4.43002C20.7893 4.8051 21 5.31381 21 5.84424V11.9442C22.24 13.2042 23 14.9342 23 16.8442C23 18.7008 22.2625 20.4812 20.9497 21.794C19.637 23.1067 17.8565 23.8442 16 23.8442C14.09 23.8442 12.36 23.0842 11.1 21.8442H5ZM16 11.9942C14.7137 11.9942 13.4801 12.5052 12.5705 13.4148C11.661 14.3243 11.15 15.5579 11.15 16.8442C11.15 19.5242 13.32 21.6942 16 21.6942C16.6369 21.6942 17.2676 21.5688 17.856 21.3251C18.4444 21.0813 18.9791 20.7241 19.4295 20.2737C19.8798 19.8233 20.2371 19.2887 20.4808 18.7003C20.7246 18.1118 20.85 17.4811 20.85 16.8442C20.85 14.1642 18.68 11.9942 16 11.9942Z"
        fill="#034FE3"
      />
    </svg>
  );

  // FETCH WEBINAR DETAILS
  useEffect(() => {
    const docRef = doc(db, "webinarinfo", "main");

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setWebinar(docSnap.data());
      } else {
        setWebinar(null); // Or handle document not existing
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  // FORM INPUT HANDLER
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const q = query(
        collection(db, "webinarattendees"),
        where("Email", "==", formData.Email)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setEmailExists(true);
        setSuccessMessage("");
        return;
      }

      const docRef = await addDoc(collection(db, "webinarattendees"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      console.log("Document written with ID: ", docRef.id);

      setFormData({ Email: "", FName: "", LName: "" });
      setEmailExists(false);
      setSuccessMessage("Registration successful! Thank you.");
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  // AUTO-CLEAR MESSAGES
  useEffect(() => {
    if (emailExists || successMessage) {
      const timer = setTimeout(() => {
        setEmailExists(false);
        setSuccessMessage("");
        setFormData({ Email: "", FName: "", LName: "" });
        setLoading(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [emailExists, successMessage]);

  // SCROLL TO TOP FUNCTION
  const scrollTo = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className=" w-full flex flex-col bg-[#F5F5F5]">
      <Helmet>
        <title>
          Join Our Weekend Webinar, Get Tech Skills | Zion Tech Hub{" "}
        </title>
        <meta
          name="description"
          content="Don’t miss our power-packed weekend webinar! Learn in-demand tech skills from experts. Click now to reserve your spot—spaces fill fast!"
        />
      </Helmet>
      <span className="  md:h-[104px] md:w-[104px] h-[50px] w-[50px]   bg-[#034FE30D] absolute md:top-[50px] md:right-[640px] top-[150px] right-[60px] "></span>
      <span className="  md:h-[104px] md:w-[104px] w-[50px] h-[50px]  bg-[#034FE30D] absolute md:top-[400px] md:left-[314px] top-[300px] left-0  "></span>
      {/* hero section  */}
      <div className=" pt-[130px]    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] overflow-hidden  sm:h-[100vh]  flex  items-center  w-full border-b">
        {/* container   */}
        <motion.div
          initial={{ opacity: 0.45 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className=" w-[90%] mx-auto flex sm:flex-row flex-col justify-between  sm:gap-0 gap-[50px] ">
          {/* left hero section  */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "linear" }}
            className=" flex-1   flex flex-col justify-end sm:pt-0 pt-[80px] ">
            <div className=" flex flex-col gap-[24px]">
              <p className=" sm:text-[14px] text-[12px]  font-[400] py-[10px] sm:px-[24px] px-[14px] border rounded-full w-fit ">
                Upcoming Webinar
              </p>
              <h1 className=" text-[#034FE3] font-[700] sm:text-[64px] text-[40px] sm:w-full w-[320px] sm:leading-[130%] sm:tracker-[1.28px] leading-[120%] tracker-[0.8px]">
                Leveraging Predictive Analytics to Transform Business
              </h1>
              <p className=" text-[#1A1A1A] font-[300] sm:text-[24px] text-[18px] sm:w-[712px] w-[325px]">
                The Zion Tech hub weekend webinar is designed to provide clarity
                and guidance and support to you helping you navigate through
                your career journey seamlessly and with ease
              </p>
            </div>
            <div className=" flex gap-[24px] pt-[70px]">
              <button className="flex items-center justify-center sm:gap-[10px] gap-[5px] rounded-[10px] bg-[#E7E7E7] text-[#034FE3] sm:py-[20px] sm:px-[36px] py-[12px] px-[24px] sm:text-[18px] text-[14px] font-[500]">
                <span>{calendar}</span>
                {/* {webinar?.event} */}
              </button>
            </div>
          </motion.div>

          {/* right hero section  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            viewport={{ once: true }}
            className=" flex-1 flex  items-center justify-center gap-[24px]">
            <form className="bg-[#F9F9F9] sm:w-[451px] w-full h-fit p-[21px] rounded-[17.66px] flex flex-col gap-[12px] shadow-lg">
              <h2 className=" text-[32px] font-[600] text-[#1A1A1ACC] text-center">
                ZTH Webinar
              </h2>
              <section className="flex flex-col gap-[14px]">
                {/* input  */}
                <div className="flex flex-col gap-[10px]">
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#6B6F71] font-[500]">
                    Email address <span className="text-[#D22616]">*</span>
                  </label>
                  <input
                    type="text"
                    className=" border-[1px] border-[#C7D1D4] py-[18px] px-[16px] rounded-[10px] w-full placeholder:text-[#1A1A1A33] bg-transparent"
                    placeholder="Your answer"
                    name="Email"
                    id="Email"
                    onChange={handleChange}
                    value={formData.Email}
                    required
                  />
                </div>
                {/* input  */}
                <div className="flex flex-col gap-[10px]">
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#6B6F71] font-[500]">
                    First name <span className="text-[#D22616]">*</span>
                  </label>
                  <input
                    type="text"
                    className=" border-[1px] border-[#C7D1D4] py-[18px] px-[16px] rounded-[10px] w-full placeholder:text-[#1A1A1A33] bg-transparent"
                    placeholder="Your answer"
                    name="FName"
                    id="FName"
                    onChange={handleChange}
                    value={formData.FName}
                    required
                  />
                </div>
                {/* input  */}
                <div className="flex flex-col gap-[10px]">
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#6B6F71] font-[500]">
                    Last name <span className="text-[#D22616]">*</span>
                  </label>
                  <input
                    type="text"
                    className=" border-[1px] border-[#C7D1D4] py-[18px] px-[16px] rounded-[10px] w-full placeholder:text-[#1A1A1A33] bg-transparent"
                    placeholder="Your answer"
                    name="LName"
                    id="LName"
                    onChange={handleChange}
                    value={formData.LName}
                    required
                  />
                </div>
              </section>
              <button
                disabled={loading}
                type="button"
                // onClick={handleSubmit}
                className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white sm:py-[20px] sm:px-[36px] py-[12px] px-[24px] sm:text-[18px] text-[16px] font-[500] disabled:cursor-not-allowed cursor-pointer">
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-9 8text-gray-200 animate-spin dark:text-gray-600 fill-gray-500"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <span className="flex items-center justify-center gap-[10px]">
                    Register Now
                    <ArrowForward />
                  </span>
                )}
              </button>
              {emailExists && (
                <p className="text-red-500 mt-2 font-bold text-center">
                  This email is already registered.
                </p>
              )}
              {successMessage && (
                <p className="text-green-500 mt-2 font-bold text-center">
                  {successMessage}
                </p>
              )}
              <p className="text-[14px] text-[#6B6F71] font-[500] text-center">
                {" "}
                Already registered?{" "}
                <a
                  className="text-[#034FE3]"
                  // href={`${webinar?.link}`}
                  // target="_blank"
                >
                  Join here
                </a>
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* other sections  */}
      <div className=" w-full bg-[#F5F5F5]">
        <div className=" w-full  bg-[#EBECED]">
          <div className=" smm:max-w-[90%] md:max-w-[96%] lg:max-w-[96%] xl:max-w-[98%] ml-auto border-l border-[#034FE31A] ">
            {/* <Speaker /> */}
          </div>
        </div>

        <div className=" flex flex-col smm:max-w-[80%] md:max-w-[92%] lg:max-w-[92%] max-w-[96%] mx-auto border-l border-[#034FE31A]  ">
          <WhatYLearn scrollTo={scrollTo} />
        </div>
      </div>
    </div>
  );
}

export default Webinar;
