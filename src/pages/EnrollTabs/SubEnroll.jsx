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

  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referralId: "",
    mobile: 0,
    course: "Select course",
  });

  // Course list
  const courseList = [
    "Healthcare Data Analytics",
    "Financial Data Analytics",
    "Sales and Marketing Data Analytics",
    "Supply Chain Analytics",
    "Data Science and AI",
    "AI Automation"
  ];

  // Function to generate unique referral code
  const generateReferralCode = (name, email) => {
    // Take first 4 letters of name (remove spaces) + random 4 digit number
    const namePart = name.replace(/\s/g, '').substring(0, 4).toUpperCase();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const emailPart = email.split('@')[0].substring(0, 3).toUpperCase();
    return `${namePart}${emailPart}${randomNum}`;
  };

  // AUTO-SET COURSE FROM NAVIGATION STATE (when coming from course page)
  useEffect(() => {
    const passedCourse = location.state?.selectedCourse;
    
    if (passedCourse) {
      // Map course titles from template to dropdown values
      const courseMapping = {
        "Healthcare Data Analytics": "Healthcare Data Analytics",
        "Financial Data Analytics": "Financial Data Analytics",
        "Sales and Marketing Data Analytics": "Sales and Marketing Data Analytics",
        "Supply Chain Analytics": "Supply Chain Analytics",
        "Data Science and AI": "Data Science and AI",
        "AI Automation": "AI Automation",
        // Handle any variations or typos if needed
        "Data Science": "Data Science and AI",
        "Data Analytics": "Sales and Marketing Data Analytics",
        "Healthcare Analytics": "Healthcare Data Analytics",
        "Financial Analytics": "Financial Data Analytics",
        "Supply Chain": "Supply Chain Analytics",
        "AI & Automation": "AI Automation",
      };
      
      const mappedCourse = courseMapping[passedCourse] || passedCourse;
      
      // Check if mapped course exists in the dropdown options
      if (courseList.includes(mappedCourse)) {
        setFormData(prev => ({
          ...prev,
          course: mappedCourse
        }));
        setIsCourseDisabled(true);
      }
    }
  }, [location.state]);

  // AUTO-SET REFERRAL FROM URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
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
        setLink(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const name = formData.name?.trim();

      // OPTIONAL: PREVENT DUPLICATE REGISTRATION (GLOBAL)
      const existingQuery = query(
        collection(db, "course-registrants"),
        where("email", "==", email),
        where("course", "==", formData.course)
      );

      const existingSnap = await getDocs(existingQuery);

      if (!existingSnap.empty) {
        toast.error("You have already registered for this course.");
        setLoading(false);
        return;
      }

      // Generate unique referral code for the registrant
      const generatedReferralCode = generateReferralCode(name, email);
      
      // Check if generated code already exists (to ensure uniqueness)
      const codeCheckQuery = query(
        collection(db, "course-registrants"),
        where("generatedReferralCode", "==", generatedReferralCode)
      );
      const codeCheckSnap = await getDocs(codeCheckQuery);
      
      let finalReferralCode = generatedReferralCode;
      if (!codeCheckSnap.empty) {
        // If code exists, add timestamp to make it unique
        finalReferralCode = `${generatedReferralCode}${Date.now().toString().slice(-4)}`;
      }

      // SAVE EVERY REGISTRANT (WITH OR WITHOUT REFERRAL)
      await addDoc(collection(db, "course-registrants"), {
        name: formData.name,
        email: email,
        mobile: formData.mobile,
        course: formData.course,
        referralId: referralId || null,
        generatedReferralCode: finalReferralCode, // Store the generated code
        registeredAt: new Date(),
        registrationTimestamp: serverTimestamp(), // Firestore timestamp
        canRefer: true, // Flag indicating this user can refer others
      });

      // Also add to a separate collection for referrers
      await addDoc(collection(db, "referrers"), {
        name: formData.name,
        email: email,
        referralCode: finalReferralCode,
        course: formData.course,
        createdAt: serverTimestamp(),
        totalReferrals: 0,
        approved: true, // Automatically approved
      });

      // 🔥 AFFILIATE FLOW (ONLY IF REFERRAL EXISTS)
      if (referralId) {
        const q = query(
          collection(db, "affliates"),
          where("referralCode", "==", referralId)
        );

        const snapshot = await getDocs(q);

        // INVALID REFERRAL CODE
        if (snapshot.empty) {
          toast.error("Invalid Referral ID");
          setLoading(false);
          return;
        }

        const affiliateDoc = snapshot.docs[0];
        const affiliateData = affiliateDoc.data();
        const affiliateRef = doc(db, "affliates", affiliateDoc.id);

        // CHECK APPROVAL
        if (affiliateData.approved === false) {
          toast.error("This referrer has been declined");
          setLoading(false);
          return;
        }

        if (affiliateData.approved === null) {
          toast.error("This referral code is still pending approval");
          setLoading(false);
          return;
        }

        // CHECK DUPLICATE UNDER SAME REFERRAL
        const alreadyReferred =
          affiliateData.referrals?.some(
            (ref) =>
              ref.email?.toLowerCase() === email &&
              ref.course === formData.course
          ) || false;

        if (alreadyReferred) {
          toast.error(
            "You have already registered under this Referral ID for this course."
          );
          setLoading(false);
          return;
        }

        // CREATE REFERRAL
        const newReferral = {
          name: formData.name,
          email: email,
          course: formData.course,
          referralId: referralId,
          mobile: formData.mobile,
          registeredAt: new Date(),
          registrationTimestamp: new Date().toISOString(),
          generatedReferralCode: finalReferralCode,
        };

        // SAVE TO AFFILIATE
        await updateDoc(affiliateRef, {
          referrals: arrayUnion(newReferral),
        });

        toast.success(
          `Registration successful! Your referral code: ${finalReferralCode}\nRedirecting to WhatsApp in 2 seconds...`
        );
      } else {
        // NO REFERRAL
        toast.success(
          `Registration successful! Your referral code: ${finalReferralCode}\nRedirecting to WhatsApp in 2 seconds...`
        );
      }

      // REDIRECT - Update WhatsApp numbers based on course
      let number = "2349047214533"; // Default number
      
      // Route to different WhatsApp numbers based on course
      switch(formData.course) {
        case "Healthcare Data Analytics":
          number = "2348055094738";
          break;
        case "Financial Data Analytics":
          number = "2348055094738";
          break;
        case "Sales and Marketing Data Analytics":
          number = "2348055094738";
          break;
        case "Supply Chain Analytics":
          number = "2348055094738";
          break;
        case "Data Science and AI":
          number = "2348055094738";
          break;
        case "AI Automation":
          number = "2348055094738";
          break;
        default:
          number = "2348055094738";
      }

      setTimeout(() => {
        let url =
          `https://wa.me/${number}?text=` +
          `🎉 Registration Successful! 🎉%0a%0a` +
          `FullName: ${formData.name}%0a` +
          `Email: ${email}%0a` +
          `Course: ${formData.course}%0a` +
          `My Partnership Referral Code: ${finalReferralCode}%0a%0a` +
          `%0a` +
          `My Referral Link: https://ziontechhub.com/enroll?affliate=${finalReferralCode}`;

        window.location.href = url;
      }, 2000);

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
                Join the Partnership Program Now !
              </h1>
              <p className=" md:text-[16px] text-[12px] font-[300] ">
                Hey 👋 Click the button below to register for our Partnership Program,
                <br />
                We can't wait to see you at the top!
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
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
                    Don't have one? Leave blank - you'll get your own referral code after registration!
                  </p>
                </section>
                
                <section className="flex flex-col gap-[10px]">
                  <p className=" text-[#6B6F71] text-[12px] font-[500]">
                    Select Course <span className="text-red-500">*</span>
                  </p>
                  <div
                    className={`py-[18px] px-[16px] text-[14px] font-[400] border border-[#C7D1D4] rounded-[10px] flex justify-between items-center relative ${
                      isCourseDisabled ? "bg-[#f5f5f5] cursor-not-allowed" : ""
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
                            onClick={(e) => {
                              setFormData({ ...formData, course: e.target.value });
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
                    {loading ? "Registering..." : "Register"}
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
