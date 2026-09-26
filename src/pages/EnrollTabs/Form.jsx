import React, { useEffect, useState } from "react";
import { ArrowBack, Battery0Bar, KeyboardArrowDown, KeyboardArrowUp, Lock, Warning } from "@mui/icons-material";
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



function Form({
    setStep,
    activeTab,
    setActiveTab,
    selectedPackage,
    setSelectedPackage,
}) {
    // state
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
        course: "Select track",
        enrollmentPackage: "",
        heardAboutUs: "",
    });

    const location = useLocation();

    // course list
    const courseList = [
        "Healthcare Data Analytics",
        "Financial Data Analytics",
        "Data Analytics",
        "AI ML Engineering",
        "Data Science and AI",
    ];

    const trackCourseMapping = {
        "healthcare data analytics": "Healthcare Data Analytics",
        "financial data analytics": "Financial Data Analytics",
        "data-analytics": "Data Analytics",
        "ai-ml-engineering": "AI ML Engineering",
        "data-science and ai": "Data Science and AI",
        "artificial-intelligence": "Artificial Intelligence",
    };

    const courseTrackMapping = {
        "Healthcare Data Analytics": "healthcare data analytics",
        "Financial Data Analytics": "financial data analytics",
        "Data Analytics": "data-analytics",
        "AI ML Engineering": "ai-ml-engineering",
        "Data Science and AI": "data-science and ai",
    };

    const packageMapping = {
        Basic: "basic",
        "Global Talent": "global",
    };
    // auto-set referral from url
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const referralCode = params.get("ref");

        if (referralCode) {
            setFormData((prev) => ({ ...prev, referralId: referralCode }));
            toast.success("Referral code detected");
        }
    }, [location.search]);

    // auto-set course from selected track
    useEffect(() => {
        const mappedCourse = trackCourseMapping[activeTab];

        if (mappedCourse) {
            setFormData((prev) => ({ ...prev, course: mappedCourse }));
        }
    }, [activeTab]);
    // auto-set package from selected package
    useEffect(() => {
        const mappedPackage = selectedPackage === "basic" ? "Basic" : "Global Talent";

        setFormData((prev) => ({
            ...prev,
            enrollmentPackage: mappedPackage,
        }));
    }, [selectedPackage]);
    // auto-set course from navigation state
    useEffect(() => {
        const passedCourse = location.state?.selectedCourse;

        if (passedCourse) {
            const courseMapping = {
                // Main course names
                "Healthcare Data Analytics": "Healthcare Data Analytics",
                "Financial Data Analytics": "Financial Data Analytics",
                "Data Analytics": "Data Analytics",
                "AI ML Engineering": "AI ML Engineering",
                "Data Science and AI": "Data Science and AI",

                // Alternative category names
                "Healthcare Analytics": "Healthcare Data Analytics",
                "Financial Analytics": "Financial Data Analytics",
                "Advanced Analytics": "Data Analytics",
                "AI & Machine Learning": "AI ML Engineering",
                "Machine Learning": "AI ML Engineering",
                "Data Science & Analytics": "Data Science",
                "Artificial Intelligence": "Artificial Intelligence",
            };

            const mappedCourse = courseMapping[passedCourse] || passedCourse;

            if (courseList.includes(mappedCourse)) {
                setFormData((prev) => ({ ...prev, course: mappedCourse }));
            }
        }
    }, [location.state]);

    // fetch workshop details
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

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        // Required fields
        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.country.trim() ||
            !formData.mobile.trim()
        ) {
            toast.error("Please fill in all required fields");
            return;
        }

        // Course is required
        if (!formData.course) {
            setSelectCourse(true);
            toast.error("Please select a track");
            return;
        }

        // Enrollment package is required
        if (!formData.enrollmentPackage) {
            toast.error("Please select an enrollment package");
            return;
        }

        // How did you hear about us is required
        if (!formData.heardAboutUs) {
            toast.error("Please tell us how you heard about Zion Tech Hub");
            return;
        }

        setLoading(true);

        try {
            const referralId = formData.referralId?.trim();
            const email = formData.email?.trim().toLowerCase();

            let validReferralDoc = null;

            // Check referral only when provided
            if (referralId) {
                const referralQuery = query(
                    collection(db, "partnership-registrants"),
                    where("referralCode", "==", referralId)
                );

                const referralSnap = await getDocs(referralQuery);

                if (referralSnap.empty) {
                    toast.error("Invalid Referral ID");
                    setLoading(false);
                    return;
                }

                validReferralDoc = referralSnap.docs[0];
            }

            // Save registrant
            await addDoc(collection(db, "course-registrants"), {
                name: formData.name.trim(),
                email,
                mobile: formData.mobile.trim(),
                country: formData.country.trim(),
                course: formData.course,
                enrollmentPackage: formData.enrollmentPackage,
                heardAboutUs: formData.heardAboutUs,
                referralId: referralId || null,
                registeredAt: serverTimestamp(),
            });

            // Send to Zapier
            const payload = new FormData();

            payload.append("name", formData.name.trim());
            payload.append("email", email);
            payload.append("course", formData.course);
            payload.append("enrollmentPackage", formData.enrollmentPackage);
            payload.append("heardAboutUs", formData.heardAboutUs);
            payload.append("mobile", formData.mobile.trim());
            payload.append("referralId", referralId || "");
            payload.append("country", formData.country.trim());

            await fetch(
                "https://hooks.zapier.com/hooks/catch/28045596/421gzed/",
                {
                    method: "POST",
                    body: payload,
                }
            );

            // Save referral
            if (validReferralDoc) {
                const partnerRef = doc(
                    db,
                    "partnership-registrants",
                    validReferralDoc.id
                );

                await updateDoc(partnerRef, {
                    referrals: arrayUnion({
                        name: formData.name.trim(),
                        email,
                        course: formData.course,
                        enrollmentPackage: formData.enrollmentPackage,
                        referralId,
                        mobile: formData.mobile.trim(),
                        country: formData.country.trim(),
                        registeredAt: Date.now(),
                    }),
                });
            }

            toast.success(
                "Registration successful! Redirecting to WhatsApp in 2 seconds..."
            );

            const whatsappNumber = "2348055094738";

            const registeredName = formData.name.trim();
            const registeredCourse = formData.course;

            setFormData({
                name: "",
                email: "",
                country: "",
                mobile: "",
                referralId: "",
                course: "",
                enrollmentPackage: "",
                heardAboutUs: "",
            });

            setTimeout(() => {
                const url =
                    `https://wa.me/${whatsappNumber}?text=` +
                    `Hi, My Name is ${encodeURIComponent(registeredName)}%0a` +
                    `and I just registered for ${encodeURIComponent(
                        registeredCourse
                    )}%0a`;

                window.location.href = url;
            }, 2000);
        } catch (error) {
            console.error("Registration error:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
            setSelectCourse(false);
        }
    };
    return (
        <div className="min-h-screen bg-white py-8 sm:py-12 px-4">
            {/* Dotted Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        "radial-gradient(#CBD5E1 0.8px, transparent 0.8px)",
                    backgroundSize: "9px 9px",
                }}
            />
            <div className="w-full max-w-[850px] mx-auto">
                <div className="relative bg-white rounded-[22px] border border-[#E8EDF3] shadow-[0_8px_30px_rgba(16,24,40,0.06)] overflow-visible">
                    {/* Dotted Background */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-50"
                        style={{
                            backgroundImage:
                                "radial-gradient(#CBD5E1 0.8px, transparent 0.8px)",
                            backgroundSize: "9px 9px",
                        }}
                    />
                    <div className="px-5 sm:px-8 md:px-12 py-8 sm:py-10">

                        {/* Logo */}
                        <div className="flex justify-center mb-5">
                            <div className="w-[82px] h-[82px] rounded-full bg-white border-[3px] border-[#FFFFFF] shadow-md overflow-hidden">
                                <img
                                    className="w-full h-full object-cover rounded-full"
                                    src={techhublogo}
                                    alt="Zion Tech Hub"
                                />
                            </div>
                        </div>

                        {/* Header */}
                        <section className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-[28px] sm:text-[32px] font-[600] leading-tight text-[#101828]">
                                Cohort 12.0
                            </h1>

                            <p className="mt-3 text-[12px] sm:text-[14px] font-[300] leading-6 text-[#667085] max-w-[560px]">
                                Hey 👋 Complete the form below to enroll in your preferred track
                                and begin your learning journey with us.
                                <br className="hidden sm:block" />
                                We can’t wait to see you succeed!
                            </p>
                        </section>

                        {cohortActive ? (
                            <form
                                className="mt-8 sm:mt-10 flex flex-col gap-6"
                                onSubmit={handleSubmit}
                            >

                                {/* Selected Course Banner */}
                                <div className="flex items-center justify-between gap-4 rounded-[14px] border border-[#CFE3FF] bg-[#F2F8FF] px-4 sm:px-5 py-3.5 z-40">

                                    <div className="flex items-center gap-3 min-w-0 ">
                                        <span className="flex-shrink-0 w-[8px] h-[8px] rounded-full bg-[#034FE3]" />

                                        <p className="text-[11px] sm:text-[13px] text-[#667085] truncate">
                                            Choosen Track:{" "}
                                            <span className="font-[600] text-[#344054]">
                                                {formData.course || "No track selected"}
                                            </span>
                                        </p>
                                    </div>

                                    {!isCourseDisabled && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setCourse(true);
                                                window.scrollTo({
                                                    top: window.scrollY,
                                                    behavior: "smooth",
                                                });
                                            }}
                                            className="flex-shrink-0 text-[11px] sm:text-[12px] font-[500] text-[#034FE3] underline underline-offset-2 hover:text-[#023DB0]"
                                        >
                                            Change
                                        </button>
                                    )}
                                </div>

                                {/* Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">

                                    {/* Full Name */}
                                    <section className="flex flex-col gap-2">
                                        <label className="text-[11px] sm:text-[12px] font-[500] text-[#475467]">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            className="w-full h-[50px] px-4 border border-[#D0D5DD] rounded-[11px] bg-white text-[13px] text-[#1A1A1A] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#034FE3] focus:ring-[3px] focus:ring-[#034FE3]/10"
                                            type="text"
                                            placeholder="Enter your full name"
                                            required
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </section>

                                    {/* Email */}
                                    <section className="flex flex-col gap-2">
                                        <label className="text-[11px] sm:text-[12px] font-[500] text-[#475467]">
                                            Email <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            className="w-full h-[50px] px-4 border border-[#D0D5DD] rounded-[11px] bg-white text-[13px] text-[#1A1A1A] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#034FE3] focus:ring-[3px] focus:ring-[#034FE3]/10"
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </section>

                                    {/* Country */}
                                    <section className="flex flex-col gap-2">
                                        <label className="text-[11px] sm:text-[12px] font-[500] text-[#475467]">
                                            Country <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            className="w-full h-[50px] px-4 border border-[#D0D5DD] rounded-[11px] bg-white text-[13px] text-[#1A1A1A] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#034FE3] focus:ring-[3px] focus:ring-[#034FE3]/10"
                                            type="text"
                                            placeholder="Enter your country"
                                            required
                                            value={formData.country}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    country: e.target.value,
                                                })
                                            }
                                        />
                                    </section>

                                    {/* Mobile */}
                                    <section className="flex flex-col gap-2">
                                        <label className="text-[11px] sm:text-[12px] font-[500] text-[#475467]">
                                            Mobile Number <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            className="w-full h-[50px] px-4 border border-[#D0D5DD] rounded-[11px] bg-white text-[13px] text-[#1A1A1A] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#034FE3] focus:ring-[3px] focus:ring-[#034FE3]/10"
                                            type="tel"
                                            placeholder="Enter your mobile number"
                                            required
                                            value={formData.mobile}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    mobile: e.target.value,
                                                })
                                            }
                                        />
                                    </section>

                                    {/* Referral ID */}
                                    <section className="flex flex-col gap-2">
                                        <label className="text-[11px] sm:text-[12px] font-[500] text-[#475467]">
                                            Referral ID{" "}
                                            <span className="text-[#98A2B3]">(Optional)</span>
                                        </label>

                                        <input
                                            className="w-full h-[50px] px-4 border border-[#D0D5DD] rounded-[11px] bg-white text-[13px] text-[#1A1A1A] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#034FE3] focus:ring-[3px] focus:ring-[#034FE3]/10"
                                            type="text"
                                            placeholder="Enter referral ID if you have one"
                                            value={formData.referralId}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    referralId: e.target.value,
                                                })
                                            }
                                        />

                                        <p className="text-[10px] text-[#98A2B3]">
                                            You'll get a new referral code for EACH registration!
                                        </p>
                                    </section>

                                    {/* Course */}
                                    <section className="flex flex-col gap-2">
                                        <label className="text-[11px] sm:text-[12px] font-[500] text-[#475467]">
                                            Chose a Track <span className="text-red-500">*</span>
                                        </label>

                                        <div className="relative">
                                            <button
                                                type="button"
                                                disabled={isCourseDisabled}
                                                onClick={() => setCourse(!course)}
                                                className={`
                      w-full h-[50px] px-4
                      border border-[#D0D5DD]
                      rounded-[11px]
                      bg-white
                      flex items-center justify-between
                      text-left
                      text-[13px]
                      transition-all
                      ${isCourseDisabled
                                                        ? "bg-[#F5F5F5] cursor-not-allowed opacity-80"
                                                        : "hover:border-[#98A2B3] focus:border-[#034FE3]"
                                                    }
                    `}
                                            >
                                                <span
                                                    className={
                                                        formData.course
                                                            ? "text-[#344054]"
                                                            : "text-[#98A2B3]"
                                                    }
                                                >
                                                    {formData.course || "Select a track"}
                                                </span>

                                                {!isCourseDisabled &&
                                                    (course ? (
                                                        <KeyboardArrowUp
                                                            fontSize="small"
                                                            className="text-[#667085]"
                                                        />
                                                    ) : (
                                                        <KeyboardArrowDown
                                                            fontSize="small"
                                                            className="text-[#667085]"
                                                        />
                                                    ))}
                                            </button>

                                            {course && !isCourseDisabled && (
                                                <div className="absolute left-0 right-0 top-[56px] bg-white border border-[#D0D5DD] rounded-[11px] shadow-lg overflow-hidden z-[60] max-h-[280px] overflow-y-auto">

                                                    {courseList.map((courseName, index) => (
                                                        <button
                                                            key={index}
                                                            value={courseName}
                                                            type="button"
                                                            className="flex items-center gap-3 py-3 px-4 hover:bg-[#F5F8FF] hover:text-[#034FE3] w-full text-left text-[12px] text-[#475467] transition-colors"
                                                            onClick={() => {
                                                                setFormData((prev) => ({
                                                                    ...prev,
                                                                    course: courseName,
                                                                }));

                                                                const mappedTrack = courseTrackMapping[courseName];

                                                                if (mappedTrack) {
                                                                    setActiveTab(mappedTrack);
                                                                }

                                                                setCourse(false);
                                                            }}
                                                        >
                                                            <span className="w-[6px] h-[6px] rounded-full bg-[#D0D5DD]" />
                                                            {courseName}
                                                        </button>
                                                    ))}

                                                </div>
                                            )}
                                        </div>

                                        {isCourseDisabled && (
                                            <p className="text-[10px] text-[#98A2B3]">
                                                Track has been preselected based on your previous selection.
                                            </p>
                                        )}

                                        {selectCourse && (
                                            <p className="text-[12px] font-[500] text-red-500">
                                                Please select a track
                                            </p>
                                        )}
                                    </section>

                                    {/* Enrollment Package - NEW */}
                                    <section className="flex flex-col gap-2">
                                        <label className="text-[11px] sm:text-[12px] font-[500] text-[#475467]">
                                            Enrollment Package <span className="text-red-500">*</span>
                                        </label>

                                        <select
                                            required
                                            value={formData.enrollmentPackage || ""}
                                            onChange={(e) => {
                                                const value = e.target.value;

                                                setFormData((prev) => ({
                                                    ...prev,
                                                    enrollmentPackage: value,
                                                }));

                                                const mappedPackage = packageMapping[value];

                                                if (mappedPackage) {
                                                    setSelectedPackage(mappedPackage);
                                                }
                                            }}
                                            className="w-full h-[50px] px-4 border border-[#D0D5DD] rounded-[11px] bg-white text-[13px] text-[#344054] outline-none transition-all focus:border-[#034FE3] focus:ring-[3px] focus:ring-[#034FE3]/10 appearance-none"
                                        >
                                            <option value="" disabled>
                                                Select enrollment package
                                            </option>
                                            <option value="Basic">Basic</option>
                                            <option value="Global Talent">Global Talent</option>
                                        </select>
                                    </section>

                                    {/* How did you hear about us - NEW */}
                                    <section className="flex flex-col gap-2">
                                        <label className="text-[11px] sm:text-[12px] font-[500] text-[#475467]">
                                            How did you hear about Zion Tech Hub?
                                        </label>

                                        <select
                                            value={formData.heardAboutUs || ""}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    heardAboutUs: e.target.value,
                                                })
                                            }
                                            className="w-full h-[50px] px-4 border border-[#D0D5DD] rounded-[11px] bg-white text-[13px] text-[#344054] outline-none transition-all focus:border-[#034FE3] focus:ring-[3px] focus:ring-[#034FE3]/10 appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>
                                                Select an option
                                            </option>

                                            <option value="LinkedIn">LinkedIn</option>
                                            <option value="Instagram">Instagram</option>
                                            <option value="Facebook">Facebook</option>
                                            <option value="X">X</option>
                                            <option value="Google">Google</option>
                                            <option value="Friend or Referral">
                                                Friend or Referral
                                            </option>
                                            <option value="WhatsApp">WhatsApp</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </section>

                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="
                w-full
                h-[52px]
                rounded-[11px]
                bg-[#034FE3]
                hover:bg-[#023DB0]
                text-white
                text-[13px]
                sm:text-[14px]
                font-[600]
                flex
                items-center
                justify-center
                gap-2
                transition-all
                shadow-[0_3px_8px_rgba(3,79,227,0.2)]
                disabled:opacity-60
                disabled:cursor-not-allowed

                z-40
              "
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                    ) : (
                                        <>
                                            <span>Proceed to Enrollment</span>
                                        </>
                                    )}
                                </button>

                                {/* Security Note */}
                                <div className="flex flex-col items-center justify-center gap-2 text-center z-40">
                                    <span className="text-[13px] text-[#034FE3]"><Lock fontSize="small" /></span>

                                    <p className="text-[10px] sm:text-[11px] text-[#98A2B3]">
                                        Secure registration • 256-bit SSL encrypted • Instant confirmation
                                    </p>
                                </div>

                            </form>
                        ) : (
                            <div className="py-10 text-center">
                                <p className="text-[16px] font-bold text-red-500">
                                    <Warning />
                                    <br />
                                    Registration for Partnership Program
                                    <br />
                                    has ended.
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
