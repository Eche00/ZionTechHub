import React, { useEffect, useState, useRef } from "react";
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/Config/firebase";
import { Close, Public, Visibility } from "@mui/icons-material";
import toast from "react-hot-toast";

function CourseRegistrants() {
    // React states
    const [registrants, setRegistrants] = useState([]);
    const [copied, setCopied] = useState(null);
    const pdfRef = useRef();
    const [viewModal, setViewModal] = useState(false);
    const [selectedAffiliate, setSelectedAffiliate] = useState(null);

    // Getting registrants lists
    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "course-registrants"),
            (snapshot) => {
                const updated = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setRegistrants(updated);
            }
        );

        return () => unsubscribe();
    }, []);


    // copy email
    const handleCopy = (id, email) => {
        navigator.clipboard
            .writeText(email)
            .then(() => {
                setCopied(id);
                setTimeout(() => {
                    setCopied(null);
                }, 1000);
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };

    // Delete/clear registrantts
    const clearRegistrants = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "course-registrants"));

            const deletePromises = querySnapshot.docs.map((docSnap) =>
                deleteDoc(doc(db, "course-registrants", docSnap.id))
            );

            await Promise.all(deletePromises);
            console.log("All registrants cleared!");
            toast.success("All registrants cleared successfully");
        } catch (error) {
            console.error("Error clearing registrants:", error);
            toast.error("Failed to clear registrants");
        }
    };



    return (
        <div className="  py-10 px-4 h-[100vh] overflow-scroll">
            <div className="flex items-center gap-[20px] border-b-2 border-gray-700 py-[10px]">
                <h1 className="text-3xl font-bold text-white">Registrants</h1>

                <button className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full cursor-default">
                    Course Registrants
                </button>
            </div>
            {/* message  */}
            <ul className="text-gray-500  list-disc pl-5 pt-2">
                <li>You can click the email to copy to clipboard.</li>

                <li>
                    Click 'send' to send direct emails with the email currently on your
                    mailbox{" "}
                </li>
            </ul>
            <section className=" flex items-center justify-between mt-[80px] py-6">
                <p className=" text-white font-bold flex items-center gap-[10px]">
                    Registrants:{" "}
                    <span className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-1 rounded-[10px] ">
                        {registrants.length}
                    </span>
                </p>

                <button
                    onClick={clearRegistrants}
                    className="bg-red-600/80 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300">
                    Clear Registrants
                </button>
            </section>
            <div
                ref={pdfRef}
                className="flex flex-col w-full  gap-[10px]  bg-black border-2  border-gray-700 rounded-[10px]  overflow-scroll h-[600px] relative ">
                <div className=" text-white font-bold w-full bg-gray-700  sticky top-0 left-0 py-[20px]  grid sm:grid-cols-5 grid-cols-3 gap-4 items-center sm:px-14 px-4 h-fit">
                    <p>Name</p>
                    <p>Email</p>
                    <p className="sm:flex hidden">Phone</p>
                    <p className="sm:flex hidden">Course</p>
                    <p className="flex items-center justify-end sm:pr-10">Direct Mail</p>
                </div>
                {registrants.map((registrant) => (
                    <div
                        className="grid sm:grid-cols-5 grid-cols-3 gap-4 items-center border-b border-gray-500   p-4 w-full  sm:px-10 px-2 py-4  text-white   h-fit"
                        key={registrant.id}>
                        <h2 className="text-gray-500 ">{registrant.name}</h2>
                        <p
                            className="text-gray-600 text-sm border-l-2 border-gray-500 pl-2 cursor-pointer hover:text-white transition-all duration-300 flex items-center gap-[10px]"
                            id="copyEmail"
                            onClick={() => handleCopy(registrant.id, registrant.email)}>
                            {registrant.email}
                            {/* copied  */}
                            {copied === registrant.id && (
                                <span className=" bg-gray-700 rounded-[5px] text-white px-3 py-[3px]">
                                    Copied
                                </span>
                            )}
                        </p>
                        <p className="text-gray-500 text-sm sm:flex hidden">{registrant.mobile}</p>
                        <p className="text-gray-500 text-sm sm:flex hidden">{registrant.course}</p>
                        {/* buttons  */}
                        <div className="flex items-center gap-2 justify-end">

                            <a
                                href={`mailto:${registrant.email}`}
                                className=" bg-[#034FE3] text-white font-[500] rounded-full text-[14px] w-[100px] py-[8px]  items-center justify-center sm:flex hidden">
                                Mail
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CourseRegistrants;
