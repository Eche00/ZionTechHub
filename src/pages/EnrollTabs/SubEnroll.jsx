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
  onSnapshot,
  addDoc,
  serverTimestamp
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
  const [isCourseDisabled, setIsCourseDisabled] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referralId: "",
    mobile: "",
    country: "",
    course: "Select course",
  });

  const location = useLocation();


  // COURSE LIST
  const courseList = [
    "Healthcare Data Analytics",
    "Financial Data Analytics",
    "Sales and Marketing Data Analytics",
    "Supply Chain Analytics",
    "Data Science and AI",
    "AI Automation",
  ];


  // AUTO-SET REFERRAL FROM URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    // your link uses ?partnership-registrants=
    const partnerCode = params.get("partnership-registrants");

    if (partnerCode) {
      setFormData((prev) => ({
        ...prev,
        referralId: partnerCode,
      }));
    }
  }, [location.search]);


  // AUTO-SET COURSE FROM NAVIGATION STATE
  useEffect(() => {
    const passedCourse = location.state?.selectedCourse;

    if (passedCourse) {
      const courseMapping = {
        "Healthcare Data Analytics": "Healthcare Data Analytics",
        "Financial Data Analytics": "Financial Data Analytics",
        "Sales and Marketing Data Analytics": "Sales and Marketing Data Analytics",
        "Supply Chain Analytics": "Supply Chain Analytics",
        "Data Science and AI": "Data Science and AI",
        "AI Automation": "AI Automation",

        // aliases
        "Data Science": "Data Science and AI",
        "Data Analytics": "Sales and Marketing Data Analytics",
        "Healthcare Analytics": "Healthcare Data Analytics",
        "Financial Analytics": "Financial Data Analytics",
        "Supply Chain": "Supply Chain Analytics",
        "AI & Automation": "AI Automation",
      };

      const mappedCourse = courseMapping[passedCourse] || passedCourse;

      if (courseList.includes(mappedCourse)) {
        setFormData((prev) => ({
          ...prev,
          course: mappedCourse,
        }));
      }
    }
  }, [location.state]);


  // FETCH WORKSHOP DETAILS
  useEffect(() => {
    const docRef = doc(db, "enroll", "main");

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setLink(docSnap.data());
      } else {
        setLink(null);
      }
    });

    return () => unsubscribe();
  }, []);


  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.course === "Select course") {
      setSelectCourse(true);
      return;
    }

    setLoading(true);

    try {
      const referralId = formData.referralId?.trim();
      const email = formData.email?.trim().toLowerCase();

      let validReferralDoc = null;

      // ONLY CHECK IF REFERRAL EXISTS
      if (referralId) {
        const referralQuery = query(
          collection(db, "partnership-registrants"),
          where("referralCode", "==", referralId)
        );

        const referralSnap = await getDocs(referralQuery);

        if (referralSnap.empty) {
          toast.error("Invalid Referral ID");
          return;
        }

        validReferralDoc = referralSnap.docs[0];
      }

      // SAVE REGISTRANT (always)
      await addDoc(collection(db, "course-registrants"), {
        name: formData.name,
        email,
        mobile: formData.mobile,
        course: formData.course,
        referralId: referralId || null,
        country: formData.country,
        registeredAt: serverTimestamp(),
      });

      // SAVE REFERRAL (only if exists)
      if (validReferralDoc) {
        const partnerRef = doc(
          db,
          "partnership-registrants",
          validReferralDoc.id
        );

        await updateDoc(partnerRef, {
          referrals: arrayUnion({
            name: formData.name,
            email,
            course: formData.course,
            referralId,
            mobile: formData.mobile,
            country: formData.country,
            registeredAt: Date.now(),
          }),
        });
      }

      toast.success(
        "Registration successful! Redirecting to WhatsApp in 2 seconds..."
      );
      setFormData({
        name: "",
        email: "",
        referralId: "",
        mobile: "",
        country: "",
        course: "Select course",
      });
      const number = "2348055094738";

      setTimeout(() => {
        const url =
          `https://wa.me/${number}?text=` +
          `Hi, My Name is ${formData.name}%0a` +
          `and i just registered for ${formData.course}%0a`;

        window.location.href = url;
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      setSelectCourse(false);
    }
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
            <section className="flex flex-col items-center justify-center text-center text-[#1A1A1ACC] md:gap-[12px] gap-[8px]">
              <h1 className="md:text-[32px] text-[24px] font-[600] leading-tight">
                Enroll Today, Secure Your Spot Now!
              </h1>

              <p className="md:text-[16px] text-[12px] font-[300] leading-relaxed max-w-[500px]">
                Hey 👋 Complete the form below to enroll in your preferred course
                and begin your learning journey with us.
                <br className="hidden md:block" />
                We can’t wait to see you succeed!
              </p>
            </section>
            {cohortActive ? (
              <form
                className=" flex flex-col gap-[24px]"
                onSubmit={handleSubmit}>
                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Full Name <span className="text-red-500">*</span>
                  </p>
                  <input
                    className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </section>

                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Email <span className="text-red-500">*</span>
                  </p>
                  <input
                    className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </section>
                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Country <span className="text-red-500">*</span>
                  </p>
                  <input
                    className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                    type="text"
                    placeholder="Enter your country"
                    required
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  />

                </section>

                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Mobile Number <span className="text-red-500">*</span>
                  </p>
                  <input
                    className=" py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px] text-[#1A1A1ACC] placeholder:text-[#1A1A1A33]"
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </section>

                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Referral ID (Optional)
                  </p>
                  <input
                    className="py-[18px] px-[16px] border border-[#C7D1D4] rounded-[10px]"
                    type="text"
                    placeholder="Enter referral ID if you have one"
                    value={formData.referralId}
                    onChange={(e) =>
                      setFormData({ ...formData, referralId: e.target.value })
                    }
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    You'll get a new referral code for EACH registration!
                  </p>
                </section>

                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Select Course <span className="text-red-500">*</span>
                  </p>
                  <div
                    className={`py-[18px] px-[16px] text-[14px] font-[400] border border-[#C7D1D4] rounded-[10px] flex justify-between items-center relative ${isCourseDisabled ? "bg-[#f5f5f5] cursor-not-allowed" : ""
                      }`}
                    style={{
                      backgroundColor: isCourseDisabled ? "#f5f5f5" : "white",
                      opacity: isCourseDisabled ? 0.8 : 1
                    }}>
                    <span style={{ color: isCourseDisabled ? "#1A1A1A" : "#1A1A1A33" }}>
                      {formData.course}
                    </span>

                    {!isCourseDisabled && (
                      <span
                        className="text-[#1A1A1ACC] cursor-pointer"
                        onClick={() => setCourse(!course)}>
                        {course ? (
                          <KeyboardArrowUp fontSize="medium" />
                        ) : (
                          <KeyboardArrowDown fontSize="medium" />
                        )}
                      </span>
                    )}

                    {course && !isCourseDisabled && (
                      <div
                        className="py-5 absolute -left-[1px] -right-[1px] bottom-[50px] border-x border-t border-[#C7D1D4] bg-[#FFFFFF] text-[12px] font-[500] text-[#1A1A1A99] rounded-t-[10px] overflow-scroll max-h-[300px] overflow-y-auto z-50"
                        onClick={() => setCourse(!course)}>
                        {courseList.map((courseName, index) => (
                          <button
                            key={index}
                            value={courseName}
                            type="button"
                            className="flex gap-[12px] py-[14px] px-[18px] hover:bg-[#F5F5F5] hover:text-black w-full text-left"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, course: courseName }));
                              setCourse(false);
                            }}>
                            <span>
                              <Battery0Bar />
                            </span>
                            {courseName}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {isCourseDisabled && (
                    <p className="text-sm text-gray-500 mt-1">
                      Course has been preselected based on your previous selection.
                    </p>
                  )}

                  {selectCourse && (
                    <p className=" text-[16px] font-bold text-red-500 ">
                      Please select a course
                    </p>
                  )}

                  <button
                    type="submit"
                    className="py-[18px] px-[16px] rounded-[10px] text-white bg-[#207C3F] mt-[14px] cursor-pointer text-center hover:bg-[#1a5f30] transition-colors"
                    disabled={loading}>
                    {loading ? <div className="mx-auto w-6 h-6 rounded-full bg-transparent border-2 border-t-white border-gray-400 animate-spin"></div> : "Register"}
                  </button>


                </section>
              </form>
            ) : (
              <p className=" text-[16px] font-bold text-red-500 text-center">
                <Warning /> <br /> Registration for Partnership Program <br /> has ended.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubEnroll;
