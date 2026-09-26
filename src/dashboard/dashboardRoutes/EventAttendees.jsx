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
import { Public, Email } from "@mui/icons-material";
import toast from "react-hot-toast";

function EventAttendees() {
  const [attendees, setAttendees] = useState([]);
  const [filteredAttendees, setFilteredAttendees] = useState([]);
  const [copied, setCopied] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const pdfRef = useRef();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "workshopattendees"),
      (snapshot) => {
        const updated = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAttendees(updated);
        setFilteredAttendees(updated);
      }
    );

    return () => unsubscribe();
  }, []);

  // Search functionality
  useEffect(() => {
    let filtered = attendees;

    if (searchTerm) {
      filtered = attendees.filter(
        (attendee) =>
          attendee.Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          attendee.Email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          attendee.Country?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredAttendees(filtered);
    setPage(0);
  }, [searchTerm, attendees]);

  // PDF Download
  const downloadPDF = () => {
    const input = pdfRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("event-attendees.pdf");
    });

    toast.success("PDF downloaded successfully");
  };

  // Export CSV
  const exportCSV = () => {
    const headers = ["Name", "Email", "Country"];

    const rows = filteredAttendees.map((attendee) => [
      attendee.Name,
      attendee.Email,
      attendee.Country,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "event-attendees.csv";
    a.click();

    URL.revokeObjectURL(url);
    toast.success("CSV exported successfully");
  };

  const handleCopy = (id, email) => {
    navigator.clipboard.writeText(email);
    setCopied(id);

    toast.success("Email copied");

    setTimeout(() => {
      setCopied(null);
    }, 1000);
  };

  const clearAttendees = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "workshopattendees"));

      const deletePromises = querySnapshot.docs.map((docSnap) =>
        deleteDoc(doc(db, "workshopattendees", docSnap.id))
      );

      await Promise.all(deletePromises);
      toast.success("All attendees cleared successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to clear attendees");
    }
  };

  return (
    <div className="h-screen overflow-y-auto bg-[#050814] text-white p-4 md:p-6 space-y-6">

      {/* HEADER */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
        <h2 className="text-2xl font-bold">Event Attendees</h2>
        <p className="text-gray-400 text-sm">
          Manage webinar & workshop attendees
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/10">
          <p className="text-gray-400 text-xs">Total Attendees</p>
          <h3 className="text-2xl font-bold">{attendees.length}</h3>
        </div>

        <button
          onClick={downloadPDF}
          className="bg-blue-600 rounded-2xl font-medium"
        >
          Download PDF
        </button>

        <button
          onClick={exportCSV}
          className="bg-green-600 rounded-2xl font-medium"
        >
          Export CSV
        </button>
      </div>

      {/* SEARCH + ACTIONS */}
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Search name, email, country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#0b1220] border border-white/10 px-4 py-2 rounded-full w-full md:w-96"
        />

        <button
          onClick={clearAttendees}
          className="px-4 py-2 bg-red-600 rounded-full"
        >
          Clear Attendees
        </button>
      </div>

      {/* TABLE */}
      <div
        ref={pdfRef}
        className="overflow-x-auto border border-white/10 rounded-2xl"
      >
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-[#0b1220] text-gray-300">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredAttendees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((attendee) => (
                <tr
                  key={attendee.id}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="p-3">{attendee.Name}</td>

                  <td
                    className="p-3 cursor-pointer text-blue-400"
                    onClick={() => handleCopy(attendee.id, attendee.Email)}
                  >
                    {attendee.Email}
                    {copied === attendee.id && (
                      <span className="ml-2 text-green-400 text-xs">
                        Copied
                      </span>
                    )}
                  </td>

                  <td className="p-3 flex items-center gap-2">
                    <Public fontSize="small" />
                    {attendee.Country}
                  </td>

                  <td className="p-3">
                    <a
                      href={`mailto:${attendee.Email}`}
                      className="px-3 py-2 bg-blue-600 rounded-lg inline-flex items-center gap-2"
                    >
                      <Email fontSize="small" /> Send
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between text-sm text-gray-400">
        <p>
          Showing {page * rowsPerPage + 1} - {Math.min(
            (page + 1) * rowsPerPage,
            filteredAttendees.length
          )} of {filteredAttendees.length}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            className="px-3 py-1 bg-[#0b1220] border border-white/10 rounded"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setPage((p) =>
                (p + 1) * rowsPerPage < filteredAttendees.length ? p + 1 : p
              )
            }
            className="px-3 py-1 bg-[#0b1220] border border-white/10 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventAttendees;
