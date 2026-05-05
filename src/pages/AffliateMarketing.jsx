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
    // VERSION CHECK
    console.log("✅ VERSION 2.0 - MULTIPLE REGISTRATIONS ALLOWED! No duplicate checks!");

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

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const generateReferralCode = (name) => {
        const clean = name.replace(/\s/g, '').toUpperCase()
        const random = Math.floor(1000 + Math.random() * 9000)
        const timestamp = Date.now().toString().slice(-6)
        return `ZTH-${clean.slice(0, 4)}${timestamp}${random}`
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log("Form submitted - NO duplicate check running!");
        
        setLoading(true);
        const loadingToast = toast.loading("Processing your registration...");

        try {
            const normalizedEmail = formData.email.toLowerCase().trim();
            const fullname = formData.fullname.trim();
            const referralCode = generateReferralCode(fullname);

            // DIRECT SAVE - NO CHECK FOR EXISTING EMAIL
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
            toast.success(`✅ Registration Successful!\nYour referral code: ${referralCode}`, { duration: 5000 });
            await navigator.clipboard.writeText(referralCode);
            toast.success("📋 Referral code copied to clipboard!", { duration: 2000 });

            // Reset form
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
                <title>Join Our Zion Tech Hub Partnership Program | Zion Tech Hub</title>
                <meta name="description" content="Partnership Program - Register multiple times for multiple referral codes!" />
            </Helmet>
            
            {/* VERSION BADGE - Shows if new code is running */}
            <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                v2.0 - Unlimited Registrations
            </div>
            
            <div className=" pt-[130px] bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px] overflow-hidden sm:h-[100vh] flex items-center w-full border-b">
                <div className="w-[90%] mx-auto flex sm:flex-row flex-col gap-[50px]">
                    <div className="flex-1 flex flex-col justify-center pt-[80px] sm:pt-0">
                        <div className="flex flex-col gap-6 max-w-[720px]">
                            <h1 className="text-[#111111] font-bold text-[42px] sm:text-[64px] leading-[115%] tracking-tight">
                                Partnership <span className='text-[#034FE3]'>Program</span>
                            </h1>
                            <p className="text-[#4A4A4A] font-normal text-[16px] sm:text-[20px] leading-[160%]">
                                Register multiple times with the SAME email. Each registration gives you a NEW referral code to share and earn commissions!
                            </p>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <p className="text-green-700 text-sm font-medium">✅ Unlimited Registrations Allowed!</p>
                                <p className="text-green-600 text-xs mt-1">You can register as many times as you want. Each time = New referral code!</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex justify-center">
                        <form onSubmit={handleSubmit} className="bg-[#F9F9F9] sm:w-[451px] w-full p-[21px] rounded-[17px] flex flex-col gap-[12px] shadow-lg">
                            <h2 className="text-[32px] font-[600] text-center">Partnership Program</h2>
                            <p className="text-xs text-green-600 text-center -mt-2 font-bold">✨ Register as many times as you want! ✨</p>
                            
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3]" />
                            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Full Name" required className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3]" />
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3]" />
                            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3]" />
                            
                            <button type="submit" disabled={loading} className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white py-[16px] hover:bg-[#023bb5] disabled:opacity-50 transition-colors">
                                {loading ? "Registering..." : "Register Now"}
                            </button>
                            
                            <p className="text-xs text-gray-500 text-center">⭐ Register again for another referral code!</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AffliateMarketing
