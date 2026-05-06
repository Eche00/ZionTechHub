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

    // WhatsApp Group Link
    const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/DnsEcvW3w3NDD13DmQnKmr"

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
                whatsappGroupInvited: true,
                whatsappGroupLink: WHATSAPP_GROUP_LINK,
            };

            await addDoc(collection(db, "affliates"), registrationData);
            
            toast.dismiss(loadingToast);
            
            // Show success with WhatsApp group link
            toast.success(
                `✅ Registration Successful!\nYour referral code: ${referralCode}`,
                { duration: 4000 }
            );
            
            await navigator.clipboard.writeText(referralCode);
            toast.success("📋 Referral code copied to clipboard!", { duration: 2000 });

            // Open WhatsApp group in new tab AFTER registration
            setTimeout(() => {
                window.open(WHATSAPP_GROUP_LINK, '_blank');
                toast.success("🎉 WhatsApp group opened! Join to connect with other partners!", { duration: 5000 });
            }, 1500);

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
            
            {/* VERSION BADGE */}
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
                              Our Partnership Program empowers alumni and data professionals in our network to refer aspiring learners to our programs and earn a 10% cash reward for every successful enrollment. It’s our way of rewarding you for creating opportunities and growing the community together    </p>
                            
                        </div>
                    </div>
                    
                    <div className="flex-1 flex justify-center">
                        <form onSubmit={handleSubmit} className="bg-[#F9F9F9] sm:w-[451px] w-full p-[21px] rounded-[17px] flex flex-col gap-[12px] shadow-lg">
                            <h2 className="text-[32px] font-[600] text-center">Partnership Program</h2>
                    
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Email Address" 
                                required 
                                className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3]" 
                            />
                            <input 
                                type="text" 
                                name="fullname" 
                                value={formData.fullname} 
                                onChange={handleChange} 
                                placeholder="Full Name" 
                                required 
                                className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3]" 
                            />
                            <input 
                                type="tel" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                placeholder="Phone Number" 
                                required 
                                className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3]" 
                            />
                            <input 
                                type="text" 
                                name="country" 
                                value={formData.country} 
                                onChange={handleChange} 
                                placeholder="Country" 
                                required 
                                className="border py-[18px] px-[16px] rounded-[10px] focus:outline-none focus:border-[#034FE3]" 
                            />
                            
                            <button 
                                type="submit" 
                                disabled={loading} 
                                className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#25D366] text-white py-[16px] hover:bg-[#20b859] disabled:opacity-50 transition-colors"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Registering...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 2.02.886 3.115.887h.01c3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.766-5.766zm0 10.53h-.008c-1.133-.001-2.246-.296-3.209-.844l-.23-.136-1.453.38.39-1.422-.15-.238c-.6-.962-.924-2.08-.924-3.248.001-2.88 2.343-5.222 5.225-5.222 2.882 0 5.222 2.342 5.223 5.222.001 2.88-2.342 5.222-5.224 5.222zm2.836-3.917c-.153-.077-.904-.446-1.044-.497-.14-.051-.242-.077-.344.077-.102.154-.396.497-.485.599-.089.102-.178.115-.33.038-.152-.077-.642-.236-1.222-.753-.452-.403-.756-.9-.845-1.052-.09-.152-.01-.234.067-.31.069-.069.153-.179.23-.269.077-.09.103-.154.154-.256.05-.103.025-.192-.013-.269-.038-.077-.344-.828-.47-1.134-.124-.297-.252-.256-.344-.262-.089-.005-.19-.006-.29-.006-.103 0-.269.039-.41.192-.14.154-.537.525-.537 1.28 0 .756.55 1.486.627 1.59.077.103 1.082 1.652 2.62 2.316.366.158.651.252.874.322.367.117.701.1.966.06.295-.044.904-.369 1.031-.727.128-.358.128-.665.09-.729-.038-.064-.14-.103-.292-.18z"/>
                                        </svg>
                                        Register
                                    </>
                                )}
                            </button>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AffliateMarketing
