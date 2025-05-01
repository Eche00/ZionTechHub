import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Battery0Bar, Warning } from "@mui/icons-material";
import { techhublogo } from "../../assets";
import "../Enroll.css";

function SubEnroll() {
  const [course, setCourse] = useState(false);
  const [selectCourse, setSelectCourse] = useState(false);
  const [cohortActive, setCohortActive] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    course: "Select course",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.course === "Select course") {
      setSelectCourse(true);
      return;
    }
    try {
      let number = "+2348055094738";
      let url =
        "https://wa.me/" +
        number +
        "?text=" +
        "FullName: " +
        " " +
        formData.name +
        "%0a" +
        "Course: " +
        " " +
        formData.course +
        "%0a";
      window.open(url, "_blank").focus();
    } catch (error) {}
    setSelectCourse(false);
    alert("Registration for Cohort 7.0 has ended.");
    console.log(formData);
  };
  return (
    <div className="">
      <div className=" ">
        <div className=" flex flex-col items-center gap-[24px]">
          <div className=" w-fit border-[3px] border-[#FFFFFF] rounded-full">
            <img
              className=" w-[100px] h-[100px] object-cover rounded-full"
              src={techhublogo}
              alt=""
            />
          </div>
          <div className=" flex flex-col p-[32px] gap-[48px] bg-[#FFFFFF] rounded-[10px]">
            <section className=" flex flex-col items-center justify-center text-center text-[#1A1A1ACC] md:gap-[12px] gap-[8px]">
              <h1 className=" md:text-[32px] text-[24px] font-[600]">
                {/* Send us a message */}
                Cohort 8.0
              </h1>
              <p className=" md:text-[16px] text-[12px] font-[300] ">
                {/* Hey 👋 Send us a message on Whatsapp to process  your
                enrollment. See you at the top! */}
                Hey 👋 Click the button below to register for Cohort 8.0 <br />
                We can’t wait to see you at the top!
              </p>
            </section>
            {cohortActive ? (
              <form
                className=" flex flex-col gap-[24px]"
                onSubmit={handleSubmit}>
                <section className="flex flex-col gap-[10px]">
                  {/*      <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Full Name
                  </p>
                  <input
                    className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                    type="text"
                    placeholder="Enter your full name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </section>
                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Select Course
                  </p>
                  <div
                    className=" py-[18px] px-[16px] text-[14px] font-[400] text-[#1A1A1A33] border border-[#C7D1D4] rounded-[10px] flex justify-between items-center relative"
                    type="button">
                    {formData.course}

                    <span
                      className="text-[#1A1A1ACC]"
                      onClick={() => setCourse(!course)}>
                      {" "}
                      {course ? (
                        <KeyboardArrowUpIcon fontSize="medium" />
                      ) : (
                        <KeyboardArrowDownIcon fontSize="medium" />
                      )}
                    </span>
                    {course && (
                      <div
                        className=" absolute  -left-[1px] -right-[1px] top-[50px] border border-[#C7D1D4] bg-[#FFFFFF] text-[12px] font-[500] text-[#1A1A1A99] rounded-b-[10px] overflow-hidden"
                        onClick={() => setCourse(!course)}>
                        <button
                          value="
                      Data Analytics
                      "
                          type="button"
                          className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
                          <span>
                            <Battery0Bar />
                          </span>{" "}
                          Data Analytics
                        </button>
                        <button
                          value="
                      Data Science
                      "
                          type="button"
                          className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
                          <span>
                            <Battery0Bar />
                          </span>{" "}
                          Data Science
                        </button>
                        <button
                          value="
                      Web Development
                      "
                          type="button"
                          className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
                          <span>
                            <Battery0Bar />
                          </span>{" "}
                          Web Development
                        </button>

                        <button
                          value="
                      Cloud Computing & DevOps
                      "
                          type="button"
                          className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
                          <span>
                            <Battery0Bar />
                          </span>{" "}
                          Cloud Computing & DevOps
                        </button>
                        <button
                          value="
                       Machine Learning
                      "
                          type="button"
                          className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
                          <span>
                            <Battery0Bar />
                          </span>{" "}
                          Machine Learning
                        </button>
                      </div>
                    )}
                  </div>
                  {selectCourse && (
                    <p className=" text-[16px] font-bold text-red-500 ">
                      Please select a course
                    </p>
                  )} */}
                  <a
                    href="https://forms.office.com/r/25cUiU2sBd"
                    target="_blank"
                    className="py-[18px] px-[16px] rounded-[10px] text-white bg-[#207C3F] mt-[14px] cursor-pointer text-center">
                    Register here
                  </a>
                </section>
              </form>
            ) : (
              <p className=" text-[16px] font-bold text-red-500  text-center">
                <Warning /> <br /> Registration for Cohort 7.0 <br /> has ended.{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubEnroll;
