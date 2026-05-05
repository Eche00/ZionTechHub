'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import {
    collection,
    addDoc,
    serverTimestamp,
} from 'firebase/firestore'
import { db } from '../lib/Config/firebase'
import toast from 'react-hot-toast'

function AffliateMarketing() {

    const [loading, setLoading] = useState(false)
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

    // generate unique referral code for each registration
    const generateReferralCode = (name) => {
        const clean = name.replace(/\s/g, '').toUpperCase()
        const random = Math.floor(1000 + Math.random() * 9000)
        const timestamp = Date.now().toString().slice(-6)
        return `ZTH-${clean.slice(0, 4)}${timestamp}${random}`
    }

    // submit - NO DUPLICATE CHECK - UNLIMITED REGISTRATIONS
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const loadingToast = toast.loading("Processing your registration...");

        try {
            const normalizedEmail = formData.email.toLowerCase().trim();
            const fullname = formData.fullname.trim();

            // Generate unique referral code
            const referralCode = generateReferralCode(fullname);

            // Save registration - NO CHECK for existing email
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
                registrationId: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            };

            await addDoc(collection(db, "affliates"), registrationData);

            toast.dismiss(loadingToast);
            
            // Success toast with referral code
            toast.success(
                `✅ Registration successful!\n` +
                `Your referral code: ${referralCode}\n` +
                `Code copied to clipboard!`,
                { duration: 5000 }
            );

            // Auto copy to clipboard
            await navigator.clipboard.writeText(referralCode);
            toast.success("📋 Referral code copied!", { duration: 2000 });

            // RESET FORM for next registration
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

    return (
        <div className="w-full flex flex-col bg-[#F5F5F5]">

            <Helmet>
                <title>
                    Join Our Zion Tech Hub Partnership Program | Zion Tech Hub
                </title>
                <meta name="description" content="Our Partnership Program empowers alumni and data professionals in our network to refer aspiring learners to our programs and earn a 10% cash reward for every successful enrollment." />
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
                                Our Partnership Program empowers alumni and data professionals in our network to refer aspiring learners to our programs and earn a 10% cash reward for every successful enrollment. It's our way of rewarding you for creating opportunities and growing the community together
                            </p>

                            {/* Multiple Registrations Notice */}
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                                <p className="text-green-700 text-sm font-medium">
                                    🚀 Register Unlimited Times!
                                </p>
                                <p className="text-green-600 text-xs mt-1">
                                    You can register as many times as you want with the SAME email. 
                                    Each registration gives you a NEW referral code!
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
                                ✨ Register unlimited times - NEW code EACH time! ✨
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
                                        Registering...
                                    </>
                                ) : (
                                    "Register Now"
                                )}
                            </button>

                            <p className="text-xs text-gray-400 text-center mt-2">
                                🎯 Register as many times as you want! 
                                <span className="text-green-600 font-medium"> Each registration = NEW referral code!</span>
                            </p>

                            <p className="text-xs text-gray-400 text-center">
                                Your referral code will be automatically copied to your clipboard.
                            </p>

                        </form>

                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default AffliateMarketing
