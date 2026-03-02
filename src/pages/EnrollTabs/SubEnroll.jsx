import React, { useEffect, useState } from "react";
import { Battery0Bar, KeyboardArrowDown, KeyboardArrowUp, Warning } from "@mui/icons-material";
import { techhublogo } from "../../assets";
import "../Enroll.css";
import { db } from "../../lib/Config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
  onSnapshot
} from "firebase/firestore";
function SubEnroll() {
  const [course, setCourse] = useState(false);
  const [selectCourse, setSelectCourse] = useState(false);
  const [cohortActive, setCohortActive] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    refferalId: "",
    course: "Select course",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.course === "Select course") {
      setSelectCourse(true);
      return;
    }

    setLoading(true);

    try {
      /*       1. FIND AFFILIATE
    */
      const q = query(
        collection(db, "users"),
        where("referralCode", "==", formData.refferalId.trim())
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        alert("Invalid Referral ID");
        setLoading(false);
        return;
      }

      /*       2. GET AFFILIATE DOC
    */
      const affiliateDoc = snapshot.docs[0];
      const affiliateRef = doc(db, "users", affiliateDoc.id);

      /*       3. CREATE REGISTERED USER DATA
    */
      const newReferral = {
        name: formData.name,
        course: formData.course,
        referralId: formData.refferalId,
        registeredAt: new Date(),
      };

      /*       4. UPDATE REFERRALS ARRAY
    */
      await updateDoc(affiliateRef, {
        referrals: arrayUnion(newReferral),
      });

      alert("Registration successful ! You will be redirected to WhatsApp in 10 seconds.");

      /*       5. WAIT 10 SECONDS
    */
      setTimeout(() => {
        let number = "+2348055094738";

        let url =
          "https://wa.me/" +
          number +
          "?text=" +
          "FullName: " +
          formData.name +
          "%0a" +
          "Course: " +
          formData.course +
          "%0a";

        window.open(url, "_blank").focus();
      }, 10000);

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
    setSelectCourse(false);
  };

  //  React State
  const [link, setLink] = useState(null);

  // FETCH WORKSHOP DETAILS
  useEffect(() => {
    const docRef = doc(db, "enroll", "main");

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setLink(docSnap.data());
      } else {
        setLink(null); // Or handle document not existing
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

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
                Join the next Cohort Now !
                {/* {link?.title} */}
              </h1>
              <p className=" md:text-[16px] text-[12px] font-[300] ">
                {/* Hey 👋 Send us a message on Whatsapp to process  your
                enrollment. See you at the top! */}
                Hey 👋 Click the button below to register,
                {/*for {link?.title}{" "} */}
                <br />
                We can’t wait to see you at the top!
              </p>
            </section>
            {cohortActive ? (
              <form
                className=" flex flex-col gap-[24px]"
                onSubmit={handleSubmit}>
                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
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
                    Refferal ID
                  </p>
                  <input
                    className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                    type="text"
                    placeholder="Enter Enter refferal ID"
                    onChange={(e) =>
                      setFormData({ ...formData, refferalId: e.target.value })
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
                        <KeyboardArrowUp fontSize="medium" />
                      ) : (
                        <KeyboardArrowDown fontSize="medium" />
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
                        <button
                          value="
                       Digital Marketing
                      "
                          type="button"
                          className="  flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full"
                          onClick={(e) =>
                            setFormData({ ...formData, course: e.target.value })
                          }>
                          <span>
                            <Battery0Bar />
                          </span>{" "}
                          Digital Marketing
                        </button>
                      </div>
                    )}
                  </div>
                  {selectCourse && (
                    <p className=" text-[16px] font-bold text-red-500 ">
                      Please select a course
                    </p>
                  )}
                  <a
                    href={link?.enrollLink}
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
