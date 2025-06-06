import React, { useEffect, useState, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { db } from "../lib/Config/firebase";

function Preview() {
  const [attendees, setAttendees] = useState([]);
  const pdfRef = useRef();

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "workshopattendees")
        );
        const attendeeData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAttendees(attendeeData);
      } catch (error) {
        console.error("Error fetching attendees:", error);
      }
    };

    fetchAttendees();
  }, []);

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

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Event Attendees</h1>

      <div
        ref={pdfRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {attendees.map((attendee) => (
          <div
            key={attendee.id}
            className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold text-blue-700">
              {attendee.Name}
            </h2>
            <p className="text-gray-600">📧 {attendee.Email}</p>
            <p className="text-gray-500">🌍 {attendee.Country}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-6">
        <button
          onClick={downloadPDF}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default Preview;
