import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
    collection,
    onSnapshot,
    query,
    orderBy,
} from "firebase/firestore";

import { db } from "../lib/Config/firebase";

import {
    Search,
    ContentCopy,
    HourglassEmpty,
} from "@mui/icons-material";
import toast from "react-hot-toast";

function Certificate() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [certificates, setCertificates] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");

    const [selectedProgram, setSelectedProgram] = useState("All");

    const [currentPage, setCurrentPage] = useState(1);

    const certificatesPerPage = 9;

    const programs = [

        "All",

        "Healthcare Data Analytics",

        "Sales and Marketing Data Analytics",

        "Data Science and AI",

        "Financial Data Analytics",

    ];

    useEffect(() => {

        const q = query(

            collection(db, "certificates"),

            orderBy("createdAt", "desc")

        );

        return onSnapshot(q, (snapshot) => {

            const data = snapshot.docs.map(doc => ({

                id: doc.id,

                ...doc.data()

            }));

            setCertificates(data);

            setLoading(false);

        });

    }, []);

    const filteredCertificates = useMemo(() => {

        let data = [...certificates];

        if (selectedProgram !== "All") {

            data = data.filter(

                item => item.program === selectedProgram

            );

        }

        if (searchQuery) {

            const s = searchQuery.toLowerCase();

            data = data.filter(item =>

                item.studentName?.toLowerCase().includes(s) ||

                item.program?.toLowerCase().includes(s) ||

                item.certificateId?.toLowerCase().includes(s)

            );

        }

        return data;

    }, [

        certificates,

        selectedProgram,

        searchQuery,

    ]);

    const indexOfLast = currentPage * certificatesPerPage;

    const indexOfFirst = indexOfLast - certificatesPerPage;

    const currentCertificates = filteredCertificates.slice(

        indexOfFirst,

        indexOfLast

    );

    const totalPages = Math.ceil(

        filteredCertificates.length /

        certificatesPerPage

    );



    const copyLink = (slug) => {

        navigator.clipboard.writeText(

            `${window.location.origin}/certificates/${slug}`

        );
        toast.success("Link copied");

    };

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (

        <div className="min-h-screen bg-white">

            <Helmet>

                <title>

                    Certificate Verification | Zion Tech Hub

                </title>

            </Helmet>

            {/* HERO */}

            <section className="pt-32 pb-20 border-b bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] bg-[size:80px_80px]">

                <motion.div

                    initial={{ opacity: 0, y: 20 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    transition={{ duration: .6 }}

                    className="w-[90%] mx-auto text-center"

                >

                    <span className="inline-flex px-4 py-2 rounded-full border text-sm mb-6">

                        Certificate Verification

                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold">

                        Students

                        <span className="text-[#034FE3]">

                            {" "}Certificates

                        </span>

                    </h1>

                    <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">

                        Search certificates issued by Zion Tech Hub using a student's name,

                        certificate ID or programme track.

                    </p>

                </motion.div>

            </section>

            {/* FILTERS */}

            <section className="w-[90%] mx-auto mt-12 flex flex-col md:flex-row gap-5">

                <div className="flex items-center gap-3 border rounded-xl px-5 py-4 flex-1">

                    <Search />

                    <input

                        placeholder="Search student, certificate ID..."

                        value={searchQuery}

                        onChange={(e) => {

                            setCurrentPage(1);

                            setSearchQuery(e.target.value);

                        }}

                        className="flex-1 bg-transparent outline-none"

                    />

                </div>

                <select

                    value={selectedProgram}

                    onChange={(e) => {

                        setCurrentPage(1);

                        setSelectedProgram(e.target.value);

                    }}

                    className="border border-gray-200 rounded-xl px-5 py-4 cursor-pointer"

                >

                    {programs.map(program => (

                        <option

                            key={program}

                            value={program}

                        >

                            {program}

                        </option>

                    ))}

                </select>

            </section>

            {/* CERTIFICATE STARTS HERE */}
            <section className="w-[90%] mx-auto py-12">

                {loading ? (

                    <div className="flex flex-wrap items-center justify-center gap-8">

                        {skeletons.map((item) => (

                            <div
                                key={item}
                                className="border rounded-2xl overflow-hidden animate-pulse"
                            >

                                <div className="w-[347px] h-[260px] bg-gray-200" />

                            </div>

                        ))}

                    </div>

                ) : currentCertificates.length > 0 ? (

                    <div className="flex flex-wrap items-center justify-center gap-8">

                        {currentCertificates.map((certificate) => (

                            <motion.div
                                key={certificate.id}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                            >

                                <div className="w-fit h-fit relative bg-gray-100 ">

                                    <img
                                        src={certificate.image}
                                        alt={certificate.studentName}
                                        className="w-[347px] h-[260px] object-cover"
                                    />

                                    <div className="absolute bottom-0 left-0 right-0  gap-3 p-3 hidden group-hover:flex">

                                        <a
                                            href={`/certificates/${certificate.slug}`}
                                            className="flex-1 bg-[#034FE3] text-white text-center rounded-xl py-3 text-sm hover:bg-[#023bb0] transition"
                                        >

                                            View Certificate

                                        </a>

                                        <button
                                            onClick={() =>
                                                copyLink(certificate.slug)
                                            }
                                            className="border rounded-xl px-4 hover:bg-gray-100 transition"
                                        >

                                            <ContentCopy fontSize="small" />

                                        </button>

                                    </div>

                                </div>



                            </motion.div>

                        ))}

                    </div>

                ) : (

                    <div className="py-28 flex justify-center">

                        <div className="text-center max-w-md">

                            <HourglassEmpty
                                sx={{
                                    fontSize: 65,
                                    color: "#b0b0b0",
                                }}
                            />

                            <h2 className="text-2xl font-bold mt-5">

                                No Certificates Found

                            </h2>

                            <p className="text-gray-500 mt-3">

                                We couldn't find any certificate matching
                                your search or selected programme.

                            </p>

                        </div>

                    </div>

                )}

            </section>

            {/* PAGINATION */}

            {!loading && totalPages > 1 && (

                <section className="w-[90%] mx-auto pb-20 flex justify-center items-center gap-3 flex-wrap">

                    <button
                        disabled={currentPage === 1}
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.max(prev - 1, 1)
                            )
                        }
                        className="px-5 py-3 border rounded-xl disabled:opacity-40"
                    >

                        Previous

                    </button>

                    {Array.from(
                        { length: totalPages },
                        (_, i) => i + 1
                    ).map((page) => (

                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-11 h-11 rounded-xl transition ${currentPage === page
                                ? "bg-[#034FE3] text-white"
                                : "border hover:bg-gray-100"
                                }`}
                        >

                            {page}

                        </button>

                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        className="px-5 py-3 border rounded-xl disabled:opacity-40"
                    >

                        Next

                    </button>

                </section>

            )}

        </div>

    );

}

export default Certificate;