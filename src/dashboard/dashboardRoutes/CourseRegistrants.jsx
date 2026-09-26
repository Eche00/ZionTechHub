import React, { useState, useEffect } from 'react';
import {
  collection,
  query,
  getDocs,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../../lib/Config/firebase';
import {
  Email
} from '@mui/icons-material';
import {
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';

import { format } from 'date-fns';
import toast from 'react-hot-toast';
import jsPDF from 'jspdf';
import emailjs from '@emailjs/browser';

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

function CourseRegistrants() {
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  const [selectedReg, setSelectedReg] = useState(null);
  const [messageType, setMessageType] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    byCourse: {}
  });

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    setLoading(true);

    try {
      const q = query(
        collection(db, 'course-registrants'),
        orderBy('registeredAt', 'desc')
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setRegistrations(data);
      calculateStats(data);
      applyFilters(data);

    } catch (error) {
      console.error('Error fetching registrations:', error);
      showSnackbar('Error fetching data', 'error');
    }

    setLoading(false);
  };

  const calculateStats = (data) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const todayRegs = data.filter(reg => {
      const date = reg.registeredAt?.toDate();
      return date && date >= today;
    }).length;

    const weekRegs = data.filter(reg => {
      const date = reg.registeredAt?.toDate();
      return date && date >= weekAgo;
    }).length;

    const courseCount = {};

    data.forEach(reg => {
      courseCount[reg.course] =
        (courseCount[reg.course] || 0) + 1;
    });

    setStats({
      total: data.length,
      today: todayRegs,
      thisWeek: weekRegs,
      byCourse: courseCount
    });
  };

  const applyFilters = (data) => {
    let filtered = data;

    if (searchTerm) {
      filtered = filtered.filter(reg =>
        reg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.mobile?.includes(searchTerm)
      );
    }

    if (filterCourse !== 'all') {
      filtered = filtered.filter(
        reg => reg.course === filterCourse
      );
    }

    setFilteredRegistrations(filtered);
  };

  useEffect(() => {
    applyFilters(registrations);
  }, [searchTerm, filterCourse, registrations]);

  const showSnackbar = (message, severity) => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      const docRef = doc(db, 'course-registrants', id);

      await updateDoc(docRef, {
        status,
        updatedAt: serverTimestamp()
      });

      showSnackbar(
        'Status updated successfully',
        'success'
      );

      fetchRegistrations();

    } catch (error) {
      showSnackbar('Error updating status', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (
      window.confirm(
        'Are you sure you want to delete this registration?'
      )
    ) {
      try {
        await deleteDoc(
          doc(db, 'course-registrants', id)
        );

        showSnackbar(
          'Registration deleted successfully',
          'success'
        );

        fetchRegistrations();

      } catch (error) {
        showSnackbar(
          'Error deleting registration',
          'error'
        );
      }
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  // Send WhatsApp Message
  const sendWhatsAppMessage = (phoneNumber, name) => {
    const message =
      ` Hello ${name}! %0a%0a` +
      `Thank you for registering with Zion Tech Hub!%0a%0a` +
      `Course: ${selectedReg?.course || 'Data Analytics'}%0a%0a` +
      `Need help? Contact us anytime.%0a%0a` +
      `Best regards,%0a` +
      `Zion Tech Hub Team`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      '_blank'
    );
  };

  // Send Bulk WhatsApp Messages
  const sendBulkWhatsApp = () => {
    const numbers = filteredRegistrations
      .map(reg => reg.mobile)
      .filter(Boolean);

    if (numbers.length === 0) {
      showSnackbar(
        'No phone numbers found',
        'error'
      );
      return;
    }

    const message =
      `Hello! This is a message from Zion Tech Hub.%0a%0a` +
      `We have exciting updates and opportunities coming soon.%0a%0a` +
      `Stay tuned for more updates.%0a%0a` +
      `Best regards,%0a` +
      `Zion Tech Hub Team`;

    window.open(
      `https://wa.me/${numbers[0]}?text=${message}`,
      '_blank'
    );

    showSnackbar(
      `Opening WhatsApp for the first contact.`,
      'info'
    );
  };

  // Send Email
  const sendEmail = (email, name, course) => {
    const subject = encodeURIComponent(
      'Zion Tech Hub Registration'
    );

    const body = encodeURIComponent(`
Hello ${name},

Thank you for registering with Zion Tech Hub!

Course: ${course}
Registration Date: ${format(new Date(), 'dd/MM/yyyy')}

Need assistance? Reply to this email.

Best regards,
Zion Tech Hub Team
  `);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  // Send Bulk Emails
  const sendBulkEmails = async () => {
    const recipients = filteredRegistrations.filter(
      reg => reg.email
    );

    if (recipients.length === 0) {
      showSnackbar(
        'No email addresses found',
        'error'
      );

      return;
    }

    setSendingMessage(true);

    let successCount = 0;
    let failCount = 0;

    for (const reg of recipients) {
      try {
        await sendEmail(reg.email, reg.name);

        successCount++;

        await new Promise(resolve =>
          setTimeout(resolve, 1000)
        );

      } catch (error) {
        failCount++;
      }
    }

    setSendingMessage(false);

    showSnackbar(
      `Emails sent: ${successCount} successful, ${failCount} failed`,
      'info'
    );
  };

  const sendCustomMessage = async () => {
    if (!messageContent.trim()) {
      showSnackbar(
        'Please enter a message',
        'error'
      );

      return;
    }

    setSendingMessage(true);

    if (messageType === 'whatsapp') {
      const encodedMessage =
        encodeURIComponent(messageContent);

      window.open(
        `https://wa.me/${selectedReg.mobile}?text=${encodedMessage}`,
        '_blank'
      );

      showSnackbar(
        'WhatsApp opened with your message',
        'success'
      );

    } else if (messageType === 'email') {
      try {
        const templateParams = {
          to_email: selectedReg.email,
          to_name: selectedReg.name,
          from_name: "Zion Tech Hub",
          message: messageContent,
          reply_to: "info@ziontechub.com"
        };

        await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          templateParams
        );

        showSnackbar(
          `Email sent to ${selectedReg.email}`,
          'success'
        );

      } catch (error) {
        console.error('Email sending failed:', error);

        showSnackbar(
          'Failed to send email.',
          'error'
        );
      }
    }

    setSendingMessage(false);
  };

  // PDF TABLE
  const generatePDFTable = (doc, data, startY) => {
    const headers = [
      'Name',
      'Email',
      'Mobile',
      'Course',
      'Date',
      'Status'
    ];

    const columnWidths = [
      40,
      50,
      35,
      45,
      35,
      25
    ];

    let y = startY;

    doc.setFillColor(59, 130, 246);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');

    let x = 14;

    headers.forEach((header, i) => {
      doc.rect(x, y, columnWidths[i], 8, 'F');
      doc.text(header, x + 2, y + 5);
      x += columnWidths[i];
    });

    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');

    y += 8;

    data.forEach((row, rowIndex) => {
      let xPos = 14;

      const rowData = [
        row.name || '',
        row.email || '',
        row.mobile || '',
        row.course || '',
        row.registeredAt?.toDate()
          ? format(
            row.registeredAt.toDate(),
            'dd/MM/yy'
          )
          : 'N/A',
        row.status || 'active'
      ];

      if (rowIndex % 2 === 0) {
        doc.setFillColor(245, 245, 245);
        doc.rect(14, y, 270, 8, 'F');
      }

      rowData.forEach((value, i) => {
        doc.text(String(value), xPos + 2, y + 5);
        xPos += columnWidths[i];
      });

      y += 8;

      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    return y;
  };

  const generateSingleRegistrationPDF = (reg) => {
    const doc = new jsPDF();

    let yPos = 20;

    doc.setFontSize(22);
    doc.setTextColor(59, 130, 246);

    doc.text(
      'ZION TECH HUB',
      105,
      yPos,
      { align: 'center' }
    );

    yPos += 10;

    doc.setFontSize(16);

    doc.text(
      'Registration Details',
      105,
      yPos,
      { align: 'center' }
    );

    yPos += 10;

    const addField = (label, value) => {
      doc.setFontSize(11);

      doc.text(label + ':', 20, yPos);

      doc.text(
        value || 'N/A',
        70,
        yPos
      );

      yPos += 8;
    };

    addField('Full Name', reg.name);
    addField('Email Address', reg.email);
    addField('Mobile Number', reg.mobile);
    addField('Course', reg.course);
    addField(
      'Registration ID',
      reg.registrationId || 'N/A'
    );

    addField(
      'Status',
      reg.status || 'active'
    );

    addField(
      'Payment Status',
      reg.paymentStatus || 'pending'
    );

    addField(
      'Registration Date',
      reg.registeredAt?.toDate()
        ? format(
          reg.registeredAt.toDate(),
          'dd/MM/yyyy HH:mm:ss'
        )
        : 'N/A'
    );

    const fileName =
      `${reg.name?.replace(/\s/g, '_') || 'Registration'}_${format(new Date(), 'yyyy-MM-dd')}.pdf`;

    doc.save(fileName);

    showSnackbar(
      'Registration PDF downloaded successfully!',
      'success'
    );
  };

  const exportToCSV = () => {
    const headers = [
      'Name',
      'Email',
      'Mobile',
      'Course',
      'Registration Date',
      'Status',
      'Payment Status'
    ];

    const csvData = filteredRegistrations.map(reg => [
      reg.name,
      reg.email,
      reg.mobile,
      reg.course,
      reg.registeredAt?.toDate()
        ? format(
          reg.registeredAt.toDate(),
          'yyyy-MM-dd HH:mm:ss'
        )
        : 'N/A',
      reg.status || 'active',
      reg.paymentStatus || 'pending'
    ]);

    const csvContent =
      [headers, ...csvData]
        .map(row => row.join(','))
        .join('\n');

    const blob = new Blob(
      [csvContent],
      { type: 'text/csv' }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement('a');

    a.href = url;

    a.download =
      `course-registrations-${format(new Date(), 'yyyy-MM-dd')}.csv`;

    a.click();

    URL.revokeObjectURL(url);

    showSnackbar(
      'Export completed',
      'success'
    );
  };
  const exportToExcel = () => {
    try {
      const excelData = filteredRegistrations.map((reg, index) => ({
        "S/N": index + 1,
        Name: reg.name || "",
        Email: reg.email || "",
        Mobile: reg.mobile || "",
        Course: reg.course || "",
        Status: reg.status || "active",
        PaymentStatus: reg.paymentStatus || "pending",

        RegistrationDate: reg.registeredAt?.toDate()
          ? format(
            reg.registeredAt.toDate(),
            "dd/MM/yyyy HH:mm"
          )
          : "N/A",
      }));

      // create worksheet
      const worksheet =
        XLSX.utils.json_to_sheet(excelData);

      // create workbook
      const workbook =
        XLSX.utils.book_new();

      // append sheet
      XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "Registrations"
      );

      // generate excel buffer
      const excelBuffer = XLSX.write(
        workbook,
        {
          bookType: "xlsx",
          type: "array",
        }
      );

      // create blob
      const data = new Blob(
        [excelBuffer],
        {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        }
      );

      // save file
      saveAs(
        data,
        `course-registrations-${format(
          new Date(),
          "yyyy-MM-dd"
        )}.xlsx`
      );

      showSnackbar(
        "Excel exported successfully",
        "success"
      );

    } catch (error) {
      console.error(error);

      showSnackbar(
        "Failed to export excel",
        "error"
      );
    }
  };
  return (
    <div className="h-screen overflow-y-auto bg-[#050814] text-white p-4 md:p-6 space-y-6">

      {/* HEADER */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
        <h2 className="text-2xl font-bold">
          Course Registrations
        </h2>

        <p className="text-gray-400 text-sm">
          Manage enrollments & communications
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total",
            value: stats.total
          },
          {
            label: "Today",
            value: stats.today
          },
          {
            label: "This Week",
            value: stats.thisWeek
          },
          {
            label: "Courses",
            value: Object.keys(stats.byCourse).length
          },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-[#0b1220] border border-white/10 rounded-2xl p-4"
          >
            <p className="text-gray-400 text-xs">
              {s.label}
            </p>

            <h3 className="text-2xl font-bold">
              {s.value}
            </h3>
          </div>
        ))}
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-3">
        <input
          placeholder="Search name, email, phone..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="bg-[#0b1220] border border-white/10 px-4 py-2 rounded-full text-sm w-full md:w-80"
        />

        <select
          value={filterCourse}
          onChange={(e) =>
            setFilterCourse(e.target.value)
          }
          className="bg-[#0b1220] border border-white/10 px-4 py-2 rounded-full text-sm"
        >
          <option value="all">
            All Courses
          </option>

          {Object.keys(stats.byCourse).map((c) => (
            <option
              key={c}
              value={c}
            >
              {c}
            </option>
          ))}
        </select>

        <button
          onClick={fetchRegistrations}
          className="px-4 py-2 bg-blue-600 rounded-full text-sm"
        >
          Refresh
        </button>
        <button
          onClick={exportToExcel}
          className="px-4 py-2 bg-blue-600 rounded-full text-sm"
        >
          Export Excel
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto border border-white/10 rounded-2xl">
        <table className="min-w-[900px] w-full text-sm">

          <thead className="bg-[#0b1220] text-gray-300">
            <tr>
              <th className="p-3 text-left">
                User
              </th>

              <th className="p-3 text-left">
                Course
              </th>

              <th className="p-3 text-left">
                Date
              </th>

              <th className="p-3 text-left">
                Status
              </th>

              <th className="p-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredRegistrations
              .slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
              .map((reg) => (
                <tr
                  key={reg.id}
                  className="border-b border-white/5 hover:bg-white/5"
                >

                  {/* USER */}
                  <td className="p-3">
                    <div>
                      <p className="font-medium">
                        {reg.name}
                      </p>

                      <p className="text-xs text-gray-400">
                        {reg.email}
                      </p>

                      <p className="text-xs text-gray-500">
                        {reg.mobile}
                      </p>
                    </div>
                  </td>

                  {/* COURSE */}
                  <td className="p-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-600/30">
                      {reg.course}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="p-3 text-xs text-gray-400">
                    {reg.registeredAt?.toDate()
                      ? format(
                        reg.registeredAt.toDate(),
                        "dd/MM/yy HH:mm"
                      )
                      : "N/A"}
                  </td>

                  {/* STATUS */}
                  <td className="p-3">
                    <select
                      value={reg.status || "active"}
                      onChange={(e) =>
                        handleUpdateStatus(
                          reg.id,
                          e.target.value
                        )
                      }
                      className="bg-[#0b1220] border border-white/10 px-2 py-1 rounded text-xs"
                    >
                      <option value="active">
                        Active
                      </option>

                      <option value="completed">
                        Completed
                      </option>

                      <option value="cancelled">
                        Cancelled
                      </option>
                    </select>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3">
                    <div className="flex gap-2 flex-wrap">

                      <button
                        onClick={() =>
                          sendWhatsAppMessage(
                            reg.mobile,
                            reg.name
                          )
                        }
                        className="p-2 bg-green-600 rounded-lg"
                      >
                        <WhatsAppIcon fontSize="small" />
                      </button>

                      <button
                        onClick={() =>
                          sendEmail(
                            reg.email,
                            reg.name,
                            reg.course
                          )
                        }
                        className="p-2 bg-red-500 rounded-lg"
                      >
                        <Email fontSize="small" />
                      </button>

                      <button
                        onClick={() =>
                          generateSingleRegistrationPDF(reg)
                        }
                        className="p-2 bg-blue-600 rounded-lg text-xs"
                      >
                        PDF
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(reg.id)
                        }
                        className="p-2 bg-red-700 rounded-lg"
                      >
                        ✕
                      </button>

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
          Showing {page * rowsPerPage + 1} -{" "}
          {Math.min(
            (page + 1) * rowsPerPage,
            filteredRegistrations.length
          )}{" "}
          of {filteredRegistrations.length}
        </p>

        <div className="flex gap-2">

          <button
            onClick={() =>
              setPage((p) =>
                Math.max(p - 1, 0)
              )
            }
            className="px-3 py-1 bg-[#0b1220] border border-white/10 rounded"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setPage((p) => p + 1)
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

export default CourseRegistrants;