import React, { useEffect, useState, useRef } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { db } from "../../lib/Config/firebase";
// import { db } from "../lib/Config/firebase";

function EventAttendees() {
  // React states
  const [attendees, setAttendees] = useState([]);
  const [copied, setCopied] = useState(null);
  const pdfRef = useRef();

  // Getting attendee lists
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "workshopattendees"),
      (snapshot) => {
        const updated = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAttendees(updated);
      }
    );

    return () => unsubscribe();
  }, []);

  // Downloading as pdf
  const downloadPDF = () => {
    const input = pdfRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("attendees.pdf");
    });
  };

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

  // Delete/clear Attendees
  const clearAttendees = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "workshopattendees"));

      const deletePromises = querySnapshot.docs.map((docSnap) =>
        deleteDoc(doc(db, "workshopattendees", docSnap.id))
      );

      await Promise.all(deletePromises);
      console.log("All attendees cleared!");
    } catch (error) {
      console.error("Error clearing attendees:", error);
    }
  };
  return (
    <div className="  py-10 px-4">
      <div className="flex items-center gap-[20px] border-b-2 border-gray-700 py-[10px]">
        <h1 className="text-3xl font-bold text-white">Event Attendees</h1>
        <button
          className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full hover:scale-[102%] transition"
          onClick={downloadPDF}>
          Download as PDF
        </button>
        <button className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full cursor-default">
          Webinar / Workshop Attendees
        </button>
      </div>
      {/* message  */}
      <p className="text-gray-500 ">
        You can click the email to copy or click send to send direct emails..
      </p>
      <section className=" flex items-center justify-between mt-[80px] py-6">
        <p className=" text-white font-bold flex items-center gap-[10px]">
          Attendes:{" "}
          <span className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-1 rounded-[10px] ">
            {attendees.length}
          </span>
        </p>

        <button
          onClick={clearAttendees}
          className="bg-red-600/80 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300">
          Clear Attendees
        </button>
      </section>
      <div
        ref={pdfRef}
        className="flex flex-col w-full  gap-[10px]  bg-black border-2  border-gray-700 rounded-[10px]  overflow-scroll h-[600px] relative ">
        <div className=" text-white font-bold w-full bg-gray-700  sticky top-0 left-0 py-[20px]  grid grid-cols-4 gap-4 items-center px-14 h-fit">
          <p>Name</p>
          <p>Email</p>
          <p>country</p>
          <p className="flex items-center justify-end pr-10">Direct Mail</p>
        </div>
        {attendees.map((attendee) => (
          <div
            className="grid grid-cols-4 gap-4 items-center border-b border-gray-500   p-4 w-full  px-10 py-4  text-white   h-fit"
            key={attendee.id}>
            <h2 className="text-gray-500 ">{attendee.Name}</h2>
            <p
              className="text-gray-600 text-sm border-l-2 border-gray-500 pl-2 cursor-pointer hover:text-white transition-all duration-300 flex items-center gap-[10px]"
              id="copyEmail"
              onClick={() => handleCopy(attendee.id, attendee.Email)}>
              {attendee.Email}
              {/* copied  */}
              {copied === attendee.id && (
                <span className=" bg-gray-700 rounded-[5px] text-white px-3 py-[3px]">
                  Copied
                </span>
              )}
            </p>
            <p className="text-gray-500 text-sm">🌍 {attendee.Country}</p>
            {/* buttons  */}
            <div className="flex items-center gap-[20px] justify-end">
              <a
                href={`mailto:${attendee.Email}`}
                className=" bg-[#034FE3] text-white font-[500] rounded-full text-[14px] w-[120px] py-[8px] flex items-center justify-center">
                Send
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventAttendees;
