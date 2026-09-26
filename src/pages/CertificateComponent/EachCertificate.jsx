import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import {
    collection,
    query,
    where,
    getDocs,
} from "firebase/firestore";


import {
    Verified,
    Download,
    Share,
    Print,
    ContentCopy,
    HourglassEmpty,
} from "@mui/icons-material";
import { db } from "../../lib/Config/firebase";
import toast from "react-hot-toast";

function EachCertificate() {

    const { slug } = useParams();

    const [loading, setLoading] = useState(true);

    const [certificate, setCertificate] = useState(null);

    useEffect(() => {

        const getCertificate = async () => {

            try {

                const q = query(
                    collection(db, "certificates"),
                    where("slug", "==", slug)
                );

                const snapshot = await getDocs(q);

                if (!snapshot.empty) {

                    setCertificate({
                        id: snapshot.docs[0].id,
                        ...snapshot.docs[0].data(),
                    });

                }

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        getCertificate();

    }, [slug]);

    const copyLink = () => {

        navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied!");

    };
    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center ">

                <div className="text-center">

                    <div className="h-20 w-20 rounded-full border-4 border-[#034FE3] border-t-transparent animate-spin mx-auto mb-6" />

                    <h2 className="text-2xl font-semibold">

                        Verifying Certificate...

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Please wait while we retrieve the certificate.

                    </p>

                </div>

            </div>

        );

    }

    if (!certificate) {

        return (

            <div className="min-h-screen flex items-center justify-center px-6">

                <Helmet>

                    <title>

                        Certificate Not Found | Zion Tech Hub

                    </title>

                </Helmet>

                <div className="text-center max-w-lg">

                    <HourglassEmpty
                        sx={{
                            fontSize: 75,
                            color: "#9CA3AF",
                        }}
                    />

                    <h1 className="text-4xl font-bold mt-6">

                        Certificate Not Found

                    </h1>

                    <p className="text-gray-500 mt-4 leading-7">

                        This certificate doesn't exist or may have been removed.

                    </p>

                </div>

            </div>

        );

    }

    return (

        <>

            <Helmet>

                <title>

                    {certificate.studentName} | Certificate Verification

                </title>

            </Helmet>

            {/* HERO */}

            <section className="pt-28 pb-16 border-b bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] bg-[size:80px_80px] ">

                <motion.div

                    initial={{ opacity: 0, y: 20 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: .6 }}

                    className="w-[90%] mx-auto text-center pt-10"

                >

                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium">

                        <Verified fontSize="small" />

                        Verified Certificate

                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold mt-8">

                        {certificate.studentName}

                    </h1>

                    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg">

                        This certificate has been officially issued and verified by
                        <span className="font-semibold">

                            {" "}Zion Tech Hub

                        </span>.

                    </p>

                </motion.div>

            </section>

            {/* CONTENT STARTS HERE */}
            <section className="w-[90%] max-w-7xl mx-auto py-16">

                <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr]  gap-8 items-start">

                    {/*  IMAGE  */}

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6 }}
                        className="sticky top-28"
                    >

                        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm px-5">

                            <div className="h-[560px] rounded-2xl bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden">

                                <img
                                    src={certificate.image}
                                    alt={certificate.studentName}
                                    className="max-w-full max-h-full object-contain rounded-xl"
                                />

                            </div>

                        </div>

                    </motion.div>

                    {/*  RIGHT SIDE  */}

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6 }}
                        className="space-y-5"
                    >

                        {/* DETAILS */}

                        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

                            {/* Header */}

                            <div className="px-6 py-5 border-b flex items-center justify-between bg-gradient-to-r from-[#034FE3]/5 to-indigo-50">

                                <div>

                                    <h2 className="text-xl font-bold text-[#1A1A1A]">
                                        Certificate Details
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Issued by Zion Tech Hub
                                    </p>

                                </div>

                                <span
                                    className={`px-4 py-2 rounded-full text-xs font-semibold capitalize
                        ${certificate.status === "verified"
                                            ? "bg-green-100 text-green-700"
                                            : certificate.status === "revoked"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {certificate.status}
                                </span>

                            </div>

                            {/* Student */}

                            <div className="px-6 py-5 border-b">

                                <p className="text-xs uppercase tracking-wider text-gray-400">
                                    Certificate Holder
                                </p>

                                <h2 className="text-2xl font-bold text-[#1A1A1A] mt-1 leading-tight">
                                    {certificate.studentName}
                                </h2>

                            </div>

                            {/* Information */}

                            <div className="grid grid-cols-2">

                                {[
                                    {
                                        label: "Programme",
                                        value: certificate.program,
                                    },
                                    {
                                        label: "Instructor",
                                        value: certificate.instructor,
                                    },
                                    {
                                        label: "Organization",
                                        value: certificate.organization,
                                    },
                                    {
                                        label: "Issue Date",
                                        value: certificate.issueDate,
                                    },
                                ].map((item) => (

                                    <div
                                        key={item.label}
                                        className="p-5 border-b even:border-l"
                                    >

                                        <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">

                                            {item.label}

                                        </p>

                                        <h4 className="font-semibold text-[#1A1A1A] leading-relaxed">

                                            {item.value}

                                        </h4>

                                    </div>

                                ))}

                            </div>

                            {/* Certificate ID */}

                            <div className="p-6">

                                <div className="rounded-2xl border border-[#034FE3]/10 bg-[#034FE3]/5 px-5 py-4">

                                    <p className="text-xs uppercase tracking-widest text-[#034FE3] mb-2">

                                        Certificate ID

                                    </p>

                                    <h3 className="font-mono text-lg md:text-xl font-bold text-[#034FE3] break-all">

                                        {certificate.certificateId}

                                    </h3>

                                </div>

                            </div>

                        </div>

                        {/* ACTIONS */}

                        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                            <h2 className="font-bold text-lg mb-5">

                                Quick Actions

                            </h2>

                            <div className="grid sm:grid-cols-3 gap-3">

                                <button
                                    onClick={() => window.open(certificate.image)}
                                    className="bg-[#034FE3] hover:bg-[#023bb0] text-white rounded-xl py-3 flex items-center justify-center gap-2 transition"
                                >

                                    <Download fontSize="small" />

                                    Download

                                </button>

                                <button
                                    onClick={copyLink}
                                    className="border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition"
                                >

                                    <ContentCopy fontSize="small" />

                                    Copy Link

                                </button>

                                <button
                                    onClick={() => {

                                        if (navigator.share) {

                                            navigator.share({
                                                title: "Certificate Verification",
                                                url: window.location.href,
                                            });

                                        } else {

                                            copyLink();

                                        }

                                    }}
                                    className="border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition"
                                >

                                    <Share fontSize="small" />

                                    Share

                                </button>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </section>

        </>

    );

}

export default EachCertificate;