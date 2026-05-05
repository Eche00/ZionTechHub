'use client'

import { ArrowForward } from '@mui/icons-material'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    serverTimestamp,
    orderBy,
    limit
} from 'firebase/firestore'
import { db } from '../lib/Config/firebase'
import toast from 'react-hot-toast'

function AffliateMarketing() {

    const [loading, setLoading] = useState(false)
    const [showSuccessPopup, setShowSuccessPopup] = useState(false)
    const [generatedCode, setGeneratedCode] = useState('')
    const [applicationCount, setApplicationCount] = useState(0)
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        country: "",
        role: "Partnership",
        approved: null,
        referralCode: "",
        referrals: [],
        createdAt: serverTimestamp(),
    })

    // handle inputs
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    // generate Partnership code with count (unique for each registration)
    const generateReferralCode = (name, count) => {
        const clean = name.replace(/\s/g, '').toUpperCase()
        const random = Math.floor(1000 + Math.random() * 9000)
        const timestamp = Date.now().toString().slice(-6)
        const countSuffix = count > 0 ? `-V${count + 1}` : ''
        return `ZTH-${clean.slice(0, 4)}${timestamp}${random}${countSuffix}`
    }

    // Get user's registration count (for display only, not to block)
    const getUserRegistrationCount = async (email) => {
        try {
            const q = query(
                collection(db, "affliates"),
                where("email", "==", email.toLowerCase()),
                orderBy("createdAt", "desc")
            )
            const snapshot = await getDocs(q)
            return snapshot.size
        } catch (error) {
            console.error("Error getting count:", error)
            return 0
        }
    }

    // submit - ALLOWING UNLIMITED REGISTRATIONS (NO CHECKS)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const loadingToast = toast.loading("Processing your registration...");

        try {
            const normalizedEmail = formData.email.toLowerCase().trim();
            const fullname = formData.fullname.trim();

            // Get count for display purposes only (NOT to block)
            const existingCount = await getUserRegistrationCount(normalizedEmail);
            const newCount = existingCount + 1;
            setApplicationCount(newCount);

            // Generate unique referral code for THIS registration
            const referralCode = generateReferralCode(fullname, existingCount);

            // Create registration data
            const registrationData = {
                fullname: formData.fullname,
                email: normalizedEmail,
                phone: formData.phone,
                country: formData.country,
                role: "Partnership",
                approved: null,
                referralCode: referralCode,
                referrals: [],
                createdAt: serverTimestamp(),
                registrationNumber: newCount,
                registrationId: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                previousRegistrations: existingCount,
                status: "pending_review"
            };

            await addDoc(collection(db, "affliates"), registrationData);

            toast.dismiss(loadingToast);

            // Show success message
            toast.success(
                `Registration #${newCount} successful! You've registered ${newCount} time(s) with this email.`,
                { duration: 5000 }
            );

            // Show popup with code
            setGeneratedCode(referralCode);
            setShowSuccessPopup(true);

            // RESET FORM
            setFormData({
                fullname: "",
                email: "",
                phone: "",
                country: "",
                role: "Partnership",
                approved: null,
                referralCode: "",
                referrals: [],
            });

        } catch (err) {
            console.error(err);
            toast.dismiss(loadingToast);
            toast.error("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    const getOrdinalSuffix = (n) => {
        if (n === 1) return "st";
        if (n === 2) return "nd";
        if (n === 3) return "rd";
        return "th";
    };

    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(generatedCode)
            toast.success("Referral code copied to clipboard");
        } catch (err) {
            console.error("Copy failed")
            toast.error("Failed to copy referral code");
        }
    }

    return (
        <div className="w-full flex flex-col bg-[#F5F5F5]">

            <Helmet>
                <title>
                    Join Our Zion Tech Hub Partnership Program | Zion Tech Hub
                </title>
                <meta name="description" content="Our Partnership Program empowers alumni and data professionals in our network to refer aspiring learners to our programs and earn a 10% cash reward for every successful enrollment. It’s our way of rewarding you for creating opportunities and growing the community together" />
            </Helmet>
            
            <span className=" md:h-[104px] md:w-[104px] h-[50px] w-[50px] bg-[#034FE30D] absolute md:top-[50px] md:right-[640px] top-[150px] right-[60px] "></span> 
            <span className=" md:h-[104px] md:w-[104px] w-[50px] h-[50px] bg-[#034FE30D] absolute md:top-[400px] md:left-[314px] top-[300px] left-0 "></span>
            
            {/* HERO */}
            <div className=" pt-[130px] bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] overflow-hidden sm:h-[100vh] flex items-center w-full border-b">

                <motion.div
                    className="w-[90%] mx-auto flex sm:flex-row flex-col gap-[50px]"
                >

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 flex flex-col justify-center pt-[80px] sm:pt-0"
                    >
                        <div className="flex flex-col gap-6 max-w-[720px]">

                            {/* Badge */}
                            <p className=" sm:text-[14px] text-[12px]  font-[400] py-[10px] sm:px-[24px] px-[14px] border rounded-full w-fit ">
                                GROWTH OPPORTUNITY
                            </p>

                            {/* Heading */}
                            <h1 className="text-[#111111] font-bold text-[42px] sm:text-[64px] leading-[115%] tracking-tight">
                                Partnership <span className='text-[#034FE3]'>Program</span>
                            </h1>

                            {/* Description */}
                            <p className="text-[#4A4A4A] font-normal text-[16px] sm:text-[20px] leading-[160%]">
                                Our Partnership Program empowers alumni and data professionals in our network to refer aspiring learners to our programs and earn a 10% cash reward for every successful enrollment. It’s our way of rewarding you for creating opportunities and growing the community together
                            </p>

                            {/* Multiple Registrations Notice */}
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                                <p className="text-green-700 text-sm font-medium">
                                    ✨ Unlimited Registrations Allowed! ✨
                                </p>
                                <p className="text-green-600 text-xs mt-1">
                                    You can register as many times as you want with the same email. 
                                    Each registration gives you a BRAND NEW referral code!
                                </p>
                            </div>

                        </div>
                    </motion.div>
                    
                    {/* RIGHT FORM */}
                    <motion.div className="flex-1 flex justify-center">

                        <form
                            onSubmit={handleSubmit}
                            className="bg-[#F9F9F9] sm:w-[451px] w-full p-[21px] rounded-[17px] flex flex-col gap-[12px] shadow-lg"
                        >

                            <h2 className="text-[32px] font-[600] text-center">
                                ZTH Partnership Program
                            </h2>

                            <p className="text-xs text-green-600 text-center -mt-2 font-medium">
                                🚀 Register unlimited times - NEW referral code EACH time!
                            </p>

                            {/* EMAIL */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3] transition-colors"
                            />

                            {/* NAME */}
                            <input
                                type="text"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3] transition-colors"
                            />

                            {/* PHONE */}
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                                className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3] transition-colors"
                            />
                            
                            {/* COUNTRY */}
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country"
                                required
                                className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3] transition-colors"
                            />

                            {/* BUTTON */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white py-[16px] hover:bg-[#023bb5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Processing...
                                    </>
                                ) : (
                                    "Register Now"
                                )}
                            </button>

                            <p className="text-xs text-gray-400 text-center mt-2">
                                ✨ Register as many times as you want! Each registration gives you a 
                                <span className="text-green-600 font-medium"> NEW referral code</span> to share and earn from.
                            </p>

                            <p className="text-xs text-gray-400 text-center">
                                By registering, you agree to our partnership terms and conditions.
                            </p>

                        </form>

                    </motion.div>
                </motion.div>
            </div>

            {/* SUCCESS POPUP */}
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

                    <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white rounded-[16px] p-6 max-w-[420px] w-full text-center shadow-xl"
                    >

                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h2 className="text-[24px] font-bold mb-2 text-[#034FE3]">
                            Registration #{applicationCount} Successful!
                        </h2>

                        <p className="text-[#555] mb-4">
                            {applicationCount === 1 
                                ? "Welcome to the Partnership Program!" 
                                : `You've successfully registered ${applicationCount} time(s) with this email!`}
                        </p>

                        <p className="text-sm text-gray-600 mb-2">
                            Your NEW referral code for this registration:
                        </p>

                        {/* CODE BOX */}
                        <div className="border rounded-[10px] flex items-center justify-between px-4 py-3 mb-4 bg-gray-50">
                            <span className="font-bold text-lg font-mono text-[#034FE3]">
                                {generatedCode}
                            </span>

                            <button
                                onClick={copyCode}
                                className="bg-[#034FE3] text-white px-3 py-1 rounded-md text-sm hover:bg-[#023bb5] transition-colors"
                            >
                                Copy
                            </button>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                            <p className="text-sm text-green-700">
                                🎉 Ready to earn!
                            </p>
                            <p className="text-xs text-green-600 mt-1">
                                Share your referral code with friends and earn 10% commission on every successful enrollment.
                                You can register again anytime for another referral code!
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setShowSuccessPopup(false);
                                    // Reset form for another registration
                                    setFormData({
                                        fullname: "",
                                        email: "",
                                        phone: "",
                                        country: "",
                                        role: "Partnership",
                                        approved: null,
                                        referralCode: "",
                                        referrals: [],
                                    });
                                    // Scroll to form
                                    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="flex-1 bg-[#034FE3] text-white py-3 rounded-[10px] hover:bg-[#023bb5] transition-colors"
                            >
                                Register Again
                            </button>
                            <button
                                onClick={() => setShowSuccessPopup(false)}
                                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-[10px] hover:bg-gray-300 transition-colors"
                            >
                                Close
                            </button>
                        </div>

                    </motion.div>
                </div>
            )}
        </div>
    )
}

export default AffliateMarketing
