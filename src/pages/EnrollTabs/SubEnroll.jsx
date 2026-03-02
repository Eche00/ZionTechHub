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
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
function SubEnroll() {
  // STATE
  const [course, setCourse] = useState(false);
  const [selectCourse, setSelectCourse] = useState(false);
  const [cohortActive, setCohortActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referralId: "",
    course: "Select course",
  });

  const location = useLocation();


  // AUTO-SET REFERRAL FROM URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    // your link uses ?affliate=
    const affiliateCode = params.get("affliate");

    if (affiliateCode) {
      setFormData((prev) => ({
        ...prev,
        referralId: affiliateCode,
      }));
    }
  }, [location.search]);


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


  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.course === "Select course") {
      setSelectCourse(true);
      return;
    }

    setLoading(true);

    try {
      const referralId = formData.referralId?.trim();
      const email = formData.email?.trim().toLowerCase();

      // IF NO REFERRAL ID → CONTINUE
      if (!referralId) {
        toast.success(
          "Registration successful! Redirecting to WhatsApp in 10 seconds..."
        );
      } else {
        // 1. FIND AFFILIATE
        const q = query(
          collection(db, "users"),
          where("referralCode", "==", referralId)
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          toast.error("Invalid Referral ID");
          setLoading(false);
          return;
        }

        const affiliateDoc = snapshot.docs[0];
        const affiliateData = affiliateDoc.data();
        const affiliateRef = doc(db, "users", affiliateDoc.id);

        // 2. PREVENT DUPLICATE BY EMAIL
        const alreadyReferred = affiliateData.referrals?.some(
          (ref) =>
            ref.email?.toLowerCase() === email &&
            ref.course === formData.course
        );

        if (alreadyReferred) {
          toast.error(
            "This email has already registered under this referral ID."
          );
          setLoading(false);
          return;
        }

        // 3. CREATE REFERRAL DATA
        const newReferral = {
          name: formData.name,
          email: email,
          course: formData.course,
          referralId: referralId,
          registeredAt: new Date(),
        };

        // 4. UPDATE AFFILIATE REFERRALS
        await updateDoc(affiliateRef, {
          referrals: arrayUnion(newReferral),
        });

        toast.success(
          "Registration successful! Redirecting to WhatsApp in 10 seconds..."
        );
      }

      // WAIT 10 SECONDS BEFORE NAVIGATION
      setTimeout(() => {
        let number = "+2348055094738";

        let url =
          "https://wa.me/" +
          number +
          "?text=" +
          "FullName: " +
          formData.name +
          "%0a" +
          "Email: " +
          email +
          "%0a" +
          "Course: " +
          formData.course +
          "%0a";

        window.location.href = url;
      }, 10000);

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }

    setLoading(false);
    setSelectCourse(false);
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
                    Email
                  </p>
                  <input
                    className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </section>
                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Referral ID
                  </p>
                  <input
                    className="py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px]"
                    type="text"
                    placeholder="Enter referral ID"
                    value={formData.referralId}
                    onChange={(e) =>
                      setFormData({ ...formData, referralId: e.target.value })
                    }
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
                      className="text-[#1A1A1ACC] cursor-pointer"
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
                        className="py-5 absolute  -left-[1px] -right-[1px] bottom-[50px] border-x border-t border-[#C7D1D4] bg-[#FFFFFF] text-[12px] font-[500] text-[#1A1A1A99] rounded-t-[10px] overflow-scroll"
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
                  <button
                    // href={link?.enrollLink}
                    // target="_blank"
                    onClick={handleSubmit}
                    className="py-[18px] px-[16px] rounded-[10px] text-white bg-[#207C3F] mt-[14px] cursor-pointer text-center">
                    {loading ? "Registering..." : "Register Now"}
                  </button>
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
