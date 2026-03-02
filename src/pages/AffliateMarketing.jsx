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
} from 'firebase/firestore'
import { db } from '../lib/Config/firebase'

function AffliateMarketing() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [showSuccessPopup, setShowSuccessPopup] = useState(false)
    const [generatedCode, setGeneratedCode] = useState('')
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        country: "",
        role: "Affiliate",
        approved: false,
        referralCode: "",
        referrals: [],
        createdAt: serverTimestamp(),
    })

    //  handle inputs
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    //  generate affiliate code
    const generateReferralCode = (name) => {
        const clean = name.replace(/\s/g, '').toUpperCase()
        const random = Math.floor(1000 + Math.random() * 9000)
        return `ZTH-${clean.slice(0, 4)}${random}`
    }

    //  submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setError('')
        setSuccessMessage('')

        try {

            // check if user already exists
            const q = query(
                collection(db, "users"),
                where("email", "==", formData.email)
            )

            const snapshot = await getDocs(q)

            //  USER EXISTS
            if (!snapshot.empty) {

                const userDoc = snapshot.docs[0].data()

                //  already an affiliate
                if (
                    userDoc.referralCode &&
                    userDoc.referralCode.trim() !== ""
                ) {
                    setError("You are already registered as an affiliate.")
                    setLoading(false)
                    return
                }
            }

            //  generate new referral code
            const referralCode = generateReferralCode(formData.username)

            await addDoc(collection(db, "users"), {
                ...formData,
                referralCode,
                createdAt: serverTimestamp(),
            })

            setGeneratedCode(referralCode)
            setShowSuccessPopup(true)

            // reset form
            setFormData({
                username: "",
                email: "",
                country: "",
                role: "Affiliate",
                referralCode: "",
                approved: false,
                referrals: [],
                createdAt: serverTimestamp(),
            })

        } catch (err) {
            console.error(err)
            setError("Something went wrong. Try again.")
        }

        setLoading(false)
    }
    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(generatedCode)
        } catch (err) {
            console.error("Copy failed")
        }
    }
    return (
        <div className="w-full flex flex-col bg-[#F5F5F5]">

            <Helmet>
                <title>
                    Join Our Affiliate Marketing program | Zion Tech Hub
                </title>
                <meta name="description" content="Don’t miss our power-packed Learn in-demand tech skills from experts. Click now to reserve your spot—spaces fill fast!" />
            </Helmet>
            <span className=" md:h-[104px] md:w-[104px] h-[50px] w-[50px] bg-[#034FE30D] absolute md:top-[50px] md:right-[640px] top-[150px] right-[60px] "></span> <span className=" md:h-[104px] md:w-[104px] w-[50px] h-[50px] bg-[#034FE30D] absolute md:top-[400px] md:left-[314px] top-[300px] left-0 "></span>
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
                                Affiliate <span className='text-[#034FE3]'>Marketing</span>
                            </h1>

                            {/* Description */}
                            <p className="text-[#4A4A4A] font-normal text-[16px] sm:text-[20px] leading-[160%]">
                                Join our affiliate marketing workshop and learn how to earn passive income by promoting products and services online.
                                Our expert-led sessions will teach you proven strategies and practical tools to succeed in the world of affiliate marketing.
                                Don’t miss this opportunity to boost your income potential.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-6">
                                <button className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white sm:py-[20px] sm:px-[36px] py-[12px] px-[24px] sm:text-[18px] text-[16px] font-[500]">
                                    Learn More
                                </button>

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
                                ZTH Affiliate Program
                            </h2>

                            {/* EMAIL */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="border py-[18px] px-[16px] rounded-[10px]"
                            />

                            {/* NAME */}
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="UserName"
                                required
                                className="border py-[18px] px-[16px] rounded-[10px]"
                            />

                            {/* COUNTRY */}
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country"
                                required
                                className="border py-[18px] px-[16px] rounded-[10px]"
                            />

                            {/* BUTTON */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#034FE3] text-white py-[16px]"
                            >
                                {loading ? "Registering..." : "Register Now"}
                            </button>

                            {/* ERROR */}
                            {error && (
                                <p className="text-red-500 font-bold text-center">
                                    {error}
                                </p>
                            )}

                            {/* SUCCESS */}
                            {successMessage && (
                                <p className="text-green-500 font-bold text-center">
                                    {successMessage}
                                </p>
                            )}

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

                        <h2 className="text-[24px] font-bold mb-3 text-[#034FE3]">
                            Registration Pending
                        </h2>

                        <p className="text-[#555] mb-4">
                            Copy your referral code below and await approval
                            to become an Affiliate Marketer.
                        </p>

                        {/* CODE BOX */}
                        <div className="border rounded-[10px] flex items-center justify-between px-4 py-3 mb-4 bg-gray-50">
                            <span className="font-bold text-lg">
                                {generatedCode}
                            </span>

                            <button
                                onClick={copyCode}
                                className="bg-[#034FE3] text-white px-3 py-1 rounded-md text-sm"
                            >
                                Copy
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 mb-5">
                            Approval usually takes a short while.
                            You will be notified via email once approved.
                        </p>

                        <button
                            onClick={() => setShowSuccessPopup(false)}
                            className="w-full bg-[#034FE3] text-white py-3 rounded-[10px]"
                        >
                            Close
                        </button>

                    </motion.div>
                </div>
            )}
        </div>
    )
}

export default AffliateMarketing