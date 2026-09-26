import React, { useEffect, useState } from "react";

import {
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    serverTimestamp,
} from "firebase/firestore";

import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";

import { db, storage } from "../../lib/Config/firebase";

import {
    Add,
    Visibility,
    Delete,
    Edit,
    ContentCopy,
    CheckCircle,
    Cancel,
    Search,
} from "@mui/icons-material";

import { format } from "date-fns";
import toast from "react-hot-toast";

function Certificates() {

    const [certificates, setCertificates] = useState([]);
    const [filteredCertificates, setFilteredCertificates] = useState([]);

    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const [programFilter, setProgramFilter] = useState("all");

    const [statusFilter, setStatusFilter] = useState("all");

    const [page, setPage] = useState(0);

    const rowsPerPage = 10;

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const [showForm, setShowForm] = useState(false);

    const [uploading, setUploading] = useState(false);

    const [certificateImage, setCertificateImage] = useState(null);

    const [formData, setFormData] = useState({

        studentName: "",

        certificateId: "",

        slug: "",

        program: "",

        instructor: "",

        organization: "Zion Tech Hub",

        issueDate: "",

        status: "verified",

        image: "",

    });

    const programs = [

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

            const data = snapshot.docs.map((doc) => ({

                id: doc.id,

                ...doc.data(),

            }));

            setCertificates(data);

            setLoading(false);

        });

    }, []);

    useEffect(() => {

        let filtered = certificates;

        if (programFilter !== "all") {

            filtered = filtered.filter(

                (item) => item.program === programFilter

            );

        }

        if (statusFilter !== "all") {

            filtered = filtered.filter(

                (item) => item.status === statusFilter

            );

        }

        if (searchTerm) {

            const s = searchTerm.toLowerCase();

            filtered = filtered.filter((item) =>

                item.studentName?.toLowerCase().includes(s) ||

                item.certificateId?.toLowerCase().includes(s) ||

                item.slug?.toLowerCase().includes(s) ||

                item.program?.toLowerCase().includes(s)

            );

        }

        setFilteredCertificates(filtered);

    }, [

        certificates,

        searchTerm,

        statusFilter,

        programFilter,

    ]);

    const stats = {

        total: certificates.length,

        verified: certificates.filter(

            (c) => c.status === "verified"

        ).length,

        revoked: certificates.filter(

            (c) => c.status === "revoked"

        ).length,

        expired: certificates.filter(

            (c) => c.status === "expired"

        ).length,

    };

    const copyLink = (slug) => {

        navigator.clipboard.writeText(

            `${window.location.origin}/certificates/${slug}`

        );

        toast.success("Link copied");

    };
    const generateCertificateId = () => {
        const random = Math.floor(100000 + Math.random() * 900000);
        return `ZTH-${random}`;
    };

    const generateSlug = (name, certificateId) => {
        if (!name || !certificateId) return "";

        return `${name
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")}-${certificateId.toLowerCase()}`;
    };
    const resetForm = () => {

        const certId = generateCertificateId();

        setFormData({

            studentName: "",

            certificateId: certId,

            slug: "",

            program: "",

            instructor: "",

            organization: "Zion Tech Hub",

            issueDate: "",

            status: "verified",

            image: "",

        });

        setCertificateImage(null);

    };

    const openCertificate = (certificate) => {

        setSelectedCertificate(certificate);

    };
    const createCertificate = async () => {
        try {

            if (!formData.studentName.trim()) {
                return toast.error("Student name is required");
            }

            if (!formData.program) {
                return toast.error("Please select a program");
            }

            if (!formData.issueDate) {
                return toast.error("Please select an issue date");
            }

            if (!certificateImage) {
                return toast.error("Please upload the certificate image");
            }

            setUploading(true);

            // Upload image to Firebase Storage
            const storageRef = ref(
                storage,
                `certificates/${formData.certificateId}-${Date.now()}`
            );

            await uploadBytes(storageRef, certificateImage);

            const imageUrl = await getDownloadURL(storageRef);

            // Save to Firestore
            await addDoc(collection(db, "certificates"), {
                ...formData,
                image: imageUrl,
                createdAt: serverTimestamp(),
            });

            toast.success("Certificate created successfully");

            resetForm();
            setShowForm(false);

        } catch (error) {

            console.error(error);

            toast.error("Failed to create certificate");

        } finally {

            setUploading(false);

        }
    };
    const deleteCertificate = async (certificate) => {

        try {

            // Delete image from Firebase Storage
            if (certificate.image) {

                const imageRef = ref(storage, certificate.image);

                await deleteObject(imageRef);

            }

            // Delete Firestore document
            await deleteDoc(
                doc(db, "certificates", certificate.id)
            );

            toast.success("Certificate deleted successfully");

        } catch (error) {

            console.error(error);

            toast.error("Failed to delete certificate");

        }

    };
    return (

        <div className="h-screen overflow-y-auto bg-[#050814] text-white p-4 md:p-6 space-y-6">

            {/* HEADER */}

            <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 flex justify-between items-center">

                <div>

                    <h2 className="text-2xl font-bold">
                        Certificate Management
                    </h2>

                    <p className="text-gray-400 text-sm">
                        Create, manage and verify certificates
                    </p>

                </div>

                <button
                    onClick={() => {

                        resetForm();

                        setShowForm(!showForm);

                    }}
                    className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl flex items-center gap-2"
                >

                    {!showForm && <Add />}

                    {showForm ? "Close Form" : "Create Certificate"}

                </button>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {[
                    {
                        label: "Total",
                        value: stats.total
                    },

                    {
                        label: "Verified",
                        value: stats.verified
                    },

                    {
                        label: "Revoked",
                        value: stats.revoked
                    },

                    {
                        label: "Expired",
                        value: stats.expired
                    }

                ].map((item, index) => (

                    <div
                        key={index}
                        className="bg-[#0b1220] border border-white/10 rounded-2xl p-5"
                    >

                        <p className="text-gray-400 text-xs">

                            {item.label}

                        </p>

                        <h2 className="text-3xl font-bold mt-2">

                            {item.value}

                        </h2>

                    </div>

                ))}

            </div>

            {/* FILTERS */}

            <div className="flex flex-col lg:flex-row gap-3">

                <input

                    placeholder="Search student, certificate ID, slug..."

                    value={searchTerm}

                    onChange={(e) => setSearchTerm(e.target.value)}

                    className="bg-[#0b1220] border border-white/10 rounded-full px-5 py-3 flex-1"

                />

                <select

                    value={programFilter}

                    onChange={(e) => setProgramFilter(e.target.value)}

                    className="bg-[#0b1220] border border-white/10 rounded-full px-5 py-3"

                >

                    <option value="all">

                        All Programs

                    </option>

                    {programs.map(program => (

                        <option
                            key={program}
                            value={program}
                        >

                            {program}

                        </option>

                    ))}

                </select>

                <select

                    value={statusFilter}

                    onChange={(e) => setStatusFilter(e.target.value)}

                    className="bg-[#0b1220] border border-white/10 rounded-full px-5 py-3"

                >

                    <option value="all">

                        All Status

                    </option>

                    <option value="verified">

                        Verified

                    </option>

                    <option value="revoked">

                        Revoked

                    </option>

                    <option value="expired">

                        Expired

                    </option>

                </select>

            </div>

            {/* TABLE */}
            {showForm ? (

                <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6">

                    <div className="flex justify-between items-center mb-8">

                        <div>

                            <h2 className="text-2xl font-bold">
                                Create Certificate
                            </h2>

                            <p className="text-gray-400 text-sm">
                                Upload a certificate and enter its verification details.
                            </p>

                        </div>



                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Student */}

                        <div>

                            <label className="text-sm text-gray-400 mb-2 block">
                                Student Name
                            </label>

                            <input
                                type="text"
                                value={formData.studentName}
                                onChange={(e) => {

                                    const studentName = e.target.value;

                                    setFormData((prev) => ({

                                        ...prev,

                                        studentName,

                                        slug: generateSlug(studentName, prev.certificateId),

                                    }));

                                }}
                                className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3"
                                placeholder="John Doe"
                            />

                        </div>



                        {/* Program */}

                        <div>

                            <label className="text-sm text-gray-400 mb-2 block">
                                Program Track
                            </label>

                            <select
                                value={formData.program}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        program: e.target.value
                                    })
                                }
                                className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3"
                            >

                                <option value="">
                                    Select Program
                                </option>

                                {programs.map(program => (

                                    <option
                                        key={program}
                                        value={program}
                                    >
                                        {program}
                                    </option>

                                ))}

                            </select>

                        </div>

                        {/* Instructor */}

                        <div>

                            <label className="text-sm text-gray-400 mb-2 block">
                                Instructor
                            </label>

                            <input
                                value={formData.instructor}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        instructor: e.target.value
                                    })
                                }
                                className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3"
                                placeholder="John Smith"
                            />

                        </div>

                        {/* Organization */}

                        <div>

                            <label className="text-sm text-gray-400 mb-2 block">
                                Organization
                            </label>

                            <input
                                value={formData.organization}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        organization: e.target.value
                                    })
                                }
                                className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3"
                            />

                        </div>

                        {/* Issue Date */}

                        <div>

                            <label className="text-sm text-gray-400 mb-2 block">
                                Issue Date
                            </label>

                            <input
                                type="date"
                                value={formData.issueDate}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        issueDate: e.target.value
                                    })
                                }
                                className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3"
                            />

                        </div>

                        {/* Status */}

                        <div>

                            <label className="text-sm text-gray-400 mb-2 block">
                                Status
                            </label>

                            <select
                                value={formData.status}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        status: e.target.value
                                    })
                                }
                                className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3"
                            >

                                <option value="verified">
                                    Verified
                                </option>

                                <option value="revoked">
                                    Revoked
                                </option>

                                <option value="expired">
                                    Expired
                                </option>

                            </select>

                        </div>

                    </div>

                    {/* Upload */}

                    <div className="mt-8">

                        <label className="text-sm text-gray-400 mb-2 block">
                            Certificate Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setCertificateImage(e.target.files[0])}
                            className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3"
                        />

                        {certificateImage &&

                            <div className="mt-4">

                                <img
                                    src={URL.createObjectURL(certificateImage)}
                                    alt=""
                                    className="rounded-xl border border-white/10 max-h-72 object-contain"
                                />

                            </div>

                        }

                    </div>

                    {/* Buttons */}

                    <div className="flex justify-end gap-4 mt-10">

                        <button
                            onClick={() => {
                                resetForm();
                                setShowForm(false);
                            }}
                            className="px-6 py-3 rounded-xl border border-white/10"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={createCertificate}
                            disabled={uploading}
                            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed px-8 py-3 rounded-xl font-semibold"
                        >
                            {uploading ? "Uploading..." : "Upload"}
                        </button>

                    </div>

                </div>

            ) : (<>
                <div className="overflow-x-auto rounded-2xl border border-white/10">

                    <table className="min-w-[1200px] w-full text-sm">

                        <thead className="bg-[#0b1220]">

                            <tr>

                                <th className="p-4 text-left">

                                    Student

                                </th>

                                <th className="p-4 text-left">

                                    Program

                                </th>

                                <th className="p-4 text-left">

                                    Certificate ID

                                </th>

                                <th className="p-4 text-left">

                                    Issue Date

                                </th>

                                <th className="p-4 text-left">

                                    Status

                                </th>

                                <th className="p-4 text-left">

                                    Actions

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredCertificates

                                .slice(

                                    page * rowsPerPage,

                                    page * rowsPerPage + rowsPerPage

                                )

                                .map((certificate) => (

                                    <tr

                                        key={certificate.id}

                                        className="border-b border-white/5 hover:bg-white/5"

                                    >

                                        <td className="p-4">

                                            <div>

                                                <p className="font-semibold">

                                                    {certificate.studentName}

                                                </p>

                                                <p className="text-xs text-gray-500">

                                                    {certificate.slug}

                                                </p>

                                            </div>

                                        </td>

                                        <td className="p-4">

                                            {certificate.program}

                                        </td>

                                        <td className="p-4 font-mono text-blue-400">

                                            {certificate.certificateId}

                                        </td>

                                        <td className="p-4 text-gray-400">

                                            {

                                                certificate.issueDate

                                                    ?

                                                    format(

                                                        new Date(certificate.issueDate),

                                                        "dd MMM yyyy"

                                                    )

                                                    :

                                                    "-"

                                            }

                                        </td>

                                        <td className="p-4">

                                            {certificate.status === "verified" && (

                                                <span className="text-green-400 flex items-center gap-1">

                                                    <CheckCircle fontSize="small" />

                                                    Verified

                                                </span>

                                            )}

                                            {certificate.status === "revoked" && (

                                                <span className="text-red-400 flex items-center gap-1">

                                                    <Cancel fontSize="small" />

                                                    Revoked

                                                </span>

                                            )}

                                            {certificate.status === "expired" && (

                                                <span className="text-yellow-400">

                                                    Expired

                                                </span>

                                            )}

                                        </td>

                                        <td className="p-4">

                                            <div className="flex gap-2">



                                                <select
                                                    value={certificate.status}
                                                    onChange={async (e) => {

                                                        try {

                                                            await updateDoc(
                                                                doc(db, "certificates", certificate.id),
                                                                {
                                                                    status: e.target.value,
                                                                }
                                                            );

                                                            toast.success("Status updated");

                                                        } catch {

                                                            toast.error("Failed to update");

                                                        }

                                                    }}
                                                    className="bg-[#0b1220] border border-white/10 rounded-lg px-2 py-1 text-xs"
                                                >

                                                    <option value="verified">
                                                        Verified
                                                    </option>

                                                    <option value="revoked">
                                                        Revoked
                                                    </option>

                                                    <option value="expired">
                                                        Expired
                                                    </option>

                                                </select>

                                                <button
                                                    onClick={() => deleteCertificate(certificate)}
                                                    className="bg-red-600 hover:bg-red-700 p-2 rounded-lg"
                                                >
                                                    <Delete fontSize="small" />
                                                </button>

                                                <button

                                                    onClick={() => copyLink(certificate.slug)}

                                                    className="bg-purple-600 p-2 rounded-lg"

                                                >

                                                    <ContentCopy fontSize="small" />

                                                </button>
                                                <a

                                                    href={`/certificates/${certificate.slug}`}

                                                    className="bg-blue-600 p-2 rounded-lg"

                                                >

                                                    <Visibility fontSize="small" />

                                                </a>
                                            </div>

                                        </td>

                                    </tr>

                                ))}

                        </tbody>

                    </table>

                </div>

                {/* PAGINATION */}

                <div className="flex justify-between text-sm text-gray-400">

                    <p>

                        Showing {page * rowsPerPage + 1} -

                        {Math.min(

                            (page + 1) * rowsPerPage,

                            filteredCertificates.length

                        )}

                        {" "}of{" "}

                        {filteredCertificates.length}

                    </p>

                    <div className="flex gap-2">

                        <button

                            onClick={() => setPage(Math.max(page - 1, 0))}

                            className="bg-[#0b1220] border border-white/10 rounded-lg px-4 py-2"

                        >

                            Prev

                        </button>

                        <button

                            onClick={() => setPage(page + 1)}

                            className="bg-[#0b1220] border border-white/10 rounded-lg px-4 py-2"

                        >

                            Next

                        </button>

                    </div>

                </div>
            </>)
            }
        </div>

    )
}



export default Certificates