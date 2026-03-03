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

function Affliates() {
  // React states
  const [affliates, setAffliates] = useState([]);
  const [copied, setCopied] = useState(null);
  const pdfRef = useRef();
  const [viewModal, setViewModal] = useState(false);
  const [selectedAffiliate, setSelectedAffiliate] = useState(null);

  // Getting affliate lists
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "affliates"),
      (snapshot) => {
        const updated = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAffliates(updated);
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

  // Delete/clear affliates
  const clearAffliates = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "affliates"));

      const deletePromises = querySnapshot.docs.map((docSnap) =>
        deleteDoc(doc(db, "affliates", docSnap.id))
      );

      await Promise.all(deletePromises);
      console.log("All affliates cleared!");
      toast.success("All affliates cleared successfully");
    } catch (error) {
      console.error("Error clearing affliates:", error);
      toast.error("Failed to clear affliates");
    }
  };

  const viewAffliate = async (id) => {
    try {
      const docRef = doc(db, "affliates", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSelectedAffiliate({ id: docSnap.id, ...docSnap.data() });
        setViewModal(true);
      } else {
        toast.error("Affiliate not found");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch affiliate");
    }
  };
  const approveAffliate = async (id) => {
    const toastId = toast.loading("Approving affiliate...");

    try {
      const affiliateRef = doc(db, "affliates", id);

      await updateDoc(affiliateRef, {
        approved: true,
      });

      setSelectedAffiliate((prev) => ({
        ...prev,
        approved: true,
      }));

      toast.success("Affiliate approved successfully", {
        id: toastId,
      });

    } catch (error) {
      console.error(error);

      toast.error("Failed to approve affiliate", {
        id: toastId,
      });
    }
  };

  return (
    <div className="  py-10 px-4 h-[100vh] overflow-scroll">
      <div className="flex items-center gap-[20px] border-b-2 border-gray-700 py-[10px]">
        <h1 className="text-3xl font-bold text-white">Affliates</h1>

        <button className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full cursor-default">
          Affliate Marketers
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
          Attendes:{" "}
          <span className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-1 rounded-[10px] ">
            {affliates.length}
          </span>
        </p>

        <button
          onClick={clearAffliates}
          className="bg-red-600/80 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300">
          Clear Affiliates
        </button>
      </section>
      <div
        ref={pdfRef}
        className="flex flex-col w-full  gap-[10px]  bg-black border-2  border-gray-700 rounded-[10px]  overflow-scroll h-[600px] relative ">
        <div className=" text-white font-bold w-full bg-gray-700  sticky top-0 left-0 py-[20px]  grid grid-cols-5 gap-4 items-center px-14 h-fit">
          <p>Name</p>
          <p>Email</p>
          <p>Phone</p>
          <p>country</p>
          <p className="flex items-center justify-end pr-10">Direct Mail</p>
        </div>
        {affliates.map((affliate) => (
          <div
            className="grid grid-cols-5 gap-4 items-center border-b border-gray-500   p-4 w-full  px-10 py-4  text-white   h-fit"
            key={affliate.id}>
            <h2 className="text-gray-500 ">{affliate.username}</h2>
            <p
              className="text-gray-600 text-sm border-l-2 border-gray-500 pl-2 cursor-pointer hover:text-white transition-all duration-300 flex items-center gap-[10px]"
              id="copyEmail"
              onClick={() => handleCopy(affliate.id, affliate.email)}>
              {affliate.email}
              {/* copied  */}
              {copied === affliate.id && (
                <span className=" bg-gray-700 rounded-[5px] text-white px-3 py-[3px]">
                  Copied
                </span>
              )}
            </p>
            <p className="text-gray-500 text-sm">{affliate.phone}</p>
            <p className="text-gray-500 text-sm"><Public /> {affliate.country}</p>
            {/* buttons  */}
            <div className="flex items-center gap-2 justify-end">
              <button
                onClick={() => viewAffliate(affliate.id)}
                className=" text-[#034FE3] underline font-[500] rounded-full text-[14px] w-[100px] py-[8px] flex items-center justify-center">
                <Visibility fontSize="small" /> View
              </button>
              <a
                href={`mailto:${affliate.email}`}
                className=" bg-[#034FE3] text-white font-[500] rounded-full text-[14px] w-[100px] py-[8px] flex items-center justify-center">
                Mail
              </a>
            </div>
          </div>
        ))}
      </div>
      {viewModal && selectedAffiliate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="bg-[#1F1F1F] text-gray-400 p-6 rounded-lg w-[95%] max-w-lg max-h-[90vh] overflow-y-auto">
            <div className=" flex items-center justify-between mb-4">

              <h2 className="text-xl font-bold text-white">
                {selectedAffiliate.username}
              </h2>
              <button
                onClick={() => {
                  setViewModal(false);
                  setSelectedAffiliate(null);
                }}
                className="  cursor-pointer"
              >
                <Close fontSize="medium" />
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> {selectedAffiliate.email}</p>
              <p><strong>Phone:</strong> {selectedAffiliate.phone}</p>
              <p><strong>Country:</strong> {selectedAffiliate.country}</p>
              <p><strong>Referral Code:</strong> {selectedAffiliate.referralCode}</p>
              <p><strong>Referral Link:</strong> https://ziontechub.com/enroll/?affliate={selectedAffiliate.referralCode}</p>
              <p>
                <strong>Status:</strong>{" "}
                {selectedAffiliate.approved ? (
                  <span className="text-green-600">Approved</span>
                ) : (
                  <span className="text-yellow-600">Pending</span>
                )}
              </p>
            </div>

            {/* Approve Button */}
            {!selectedAffiliate.approved && (
              <button
                onClick={() => approveAffliate(selectedAffiliate.id)}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full"
              >
                Approve Affiliate
              </button>
            )}

            {/* Referrals Section */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">
                Referrals ({selectedAffiliate.referrals?.length || 0})
              </h3>

              {selectedAffiliate.referrals?.length > 0 ? (
                <div className="space-y-3">
                  {selectedAffiliate.referrals.map((ref, index) => (
                    <div
                      key={index}
                      className=" p-3 rounded-xl bg-gray-700 text-sm"
                    >
                      <p><strong>Name:</strong> {ref.name}</p>
                      <p><strong>Email:</strong> {ref.email}</p>
                      <p><strong>Course:</strong> {ref.course}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-200 text-sm">
                  No referrals yet.
                </p>
              )}
            </div>


          </div>
        </div>
      )}
    </div>
  );
}

export default Affliates;
