import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
  getDocs,
} from "firebase/firestore";

import { db } from "../../lib/Config/firebase";

import {
  ContentCopy,
  CheckCircle,
  Cancel,
  Email,
  WhatsApp,
  Visibility,
} from "@mui/icons-material";

import { format } from "date-fns";
import toast from "react-hot-toast";
import jsPDF from "jspdf";

function Partners() {

  const [partners, setPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);

  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const [selectedPartner, setSelectedPartner] = useState(null);

  const [referrals, setReferrals] = useState([]);

  // FETCH
  useEffect(() => {
    const q = query(
      collection(db, "partnership-registrants"),
      orderBy("createdAt", "desc")
    );

    return onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPartners(data);
      setLoading(false);
    });
  }, []);

  // FILTERS
  useEffect(() => {
    let filtered = partners;

    if (filterStatus !== "all") {

      if (filterStatus === "approved") {
        filtered = filtered.filter(
          (p) => p.approved === true
        );
      }

      if (filterStatus === "pending") {
        filtered = filtered.filter(
          (p) =>
            p.approved === null ||
            p.approved === undefined
        );
      }

      if (filterStatus === "declined") {
        filtered = filtered.filter(
          (p) => p.approved === false
        );
      }
    }

    if (searchTerm) {
      filtered = filtered.filter((p) => {

        const s =
          searchTerm.toLowerCase();

        return (
          p.name?.toLowerCase().includes(s) ||
          p.email?.toLowerCase().includes(s) ||
          p.phone?.includes(s) ||
          p.referralCode
            ?.toLowerCase()
            .includes(s)
        );
      });
    }

    setFilteredPartners(filtered);

  }, [partners, searchTerm, filterStatus]);

  // STATS
  const stats = {
    total: partners.length,

    approved: partners.filter(
      (p) => p.approved === true
    ).length,

    pending: partners.filter(
      (p) =>
        p.approved === null ||
        p.approved === undefined
    ).length,

    declined: partners.filter(
      (p) => p.approved === false
    ).length,
  };

  // COPY
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  // REFERRAL LINK
  const getReferralLink = (code) => {
    return `https://ziontechhub.com/register?ref=${code}`;
  };

  // EMAIL
  const sendEmail = (partner) => {

    const subject = encodeURIComponent(
      "Zion Tech Hub Partnership"
    );

    const body = encodeURIComponent(`
Hello ${partner.name},

Welcome to Zion Tech Hub Partnership Program.

Your Referral ID:
${partner.referralCode}

Your Referral Link:
${getReferralLink(partner.referralCode)}

Share your referral link and earn rewards.

Best regards,
Zion Tech Hub
`);

    window.location.href =
      `mailto:${partner.email}?subject=${subject}&body=${body}`;
  };

  // WHATSAPP
  const sendWhatsApp = (partner) => {

    const message =
      `🎉 Hello ${partner.name}! 🎉%0a%0a` +
      `Welcome to Zion Tech Hub Partnership Program.%0a%0a` +
      `🔑 Referral ID: ${partner.referralCode}%0a` +
      `🔗 Referral Link:%0a${getReferralLink(partner.referralCode)}%0a%0a` +
      `Share your link and earn rewards.%0a%0a` +
      `Best regards,%0aZion Tech Hub`;

    window.open(
      `https://wa.me/${partner.phone}?text=${message}`,
      "_blank"
    );
  };

  // APPROVE
  const approvePartner = async (partner) => {

    if (
      partner.approved === true ||
      partner.approved === false
    ) {
      toast.error(
        "Status can no longer be changed"
      );
      return;
    }

    try {

      await updateDoc(
        doc(
          db,
          "partnership-registrants",
          partner.id
        ),
        {
          approved: true,
        }
      );

      toast.success("Approved");

    } catch (error) {
      toast.error("Error approving");
    }
  };

  // DECLINE
  const declinePartner = async (partner) => {

    if (
      partner.approved === true ||
      partner.approved === false
    ) {
      toast.error(
        "Status can no longer be changed"
      );
      return;
    }

    try {

      await updateDoc(
        doc(
          db,
          "partnership-registrants",
          partner.id
        ),
        {
          approved: false,
        }
      );

      toast.success("Declined");

    } catch (error) {
      toast.error("Error declining");
    }
  };

  // VIEW REFERRALS
  const openPartner = async (partner) => {

    setSelectedPartner(partner);

    try {

      const q = query(
        collection(
          db,
          "course-registrants"
        ),
        where(
          "referralId",
          "==",
          partner.referralCode
        )
      );

      const snap = await getDocs(q);

      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReferrals(data);

    } catch (error) {
      console.log(error);
    }
  };

  // PDF
  const generateSinglePDF = (partner) => {

    const docPdf = new jsPDF();

    let y = 20;

    docPdf.setFontSize(22);

    docPdf.text(
      "ZION TECH HUB",
      105,
      y,
      { align: "center" }
    );

    y += 15;

    const addField = (label, value) => {

      docPdf.setFontSize(11);

      docPdf.text(
        `${label}:`,
        20,
        y
      );

      docPdf.text(
        String(value || "N/A"),
        80,
        y
      );

      y += 10;
    };

    addField("Name", partner.name);
    addField("Email", partner.email);
    addField("Phone", partner.phone);
    addField("Country", partner.country);

    addField(
      "Referral ID",
      partner.referralCode
    );

    addField(
      "Referral Link",
      getReferralLink(
        partner.referralCode
      )
    );

    addField(
      "Status",
      partner.approved === true
        ? "Approved"
        : partner.approved === false
          ? "Declined"
          : "Pending"
    );

    addField(
      "Date",
      partner.createdAt?.toDate()
        ? format(
          partner.createdAt.toDate(),
          "dd/MM/yyyy HH:mm"
        )
        : "N/A"
    );

    docPdf.save(
      `${partner.name}_partnership.pdf`
    );

    toast.success("PDF Downloaded");
  };

  return (
    <div className="h-screen overflow-y-auto bg-[#050814] text-white p-4 md:p-6 space-y-6">

      {/* HEADER */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">

        <h2 className="text-2xl font-bold">
          Partnership Management
        </h2>

        <p className="text-gray-400 text-sm">
          Manage partners, referrals & approvals
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
            label: "Approved",
            value: stats.approved
          },
          {
            label: "Pending",
            value: stats.pending
          },
          {
            label: "Declined",
            value: stats.declined
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
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="bg-[#0b1220] border border-white/10 px-4 py-2 rounded-full text-sm w-full md:w-80"
        />

        <select
          value={filterStatus}
          onChange={(e) =>
            setFilterStatus(e.target.value)
          }
          className="bg-[#0b1220] border border-white/10 px-4 py-2 rounded-full text-sm"
        >

          <option value="all">
            All
          </option>

          <option value="approved">
            Approved
          </option>

          <option value="pending">
            Pending
          </option>

          <option value="declined">
            Declined
          </option>

        </select>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto border border-white/10 rounded-2xl">

        <table className="min-w-[1100px] w-full text-sm">

          <thead className="bg-[#0b1220] text-gray-300">

            <tr>

              <th className="p-3 text-left">
                User
              </th>

              <th className="p-3 text-left">
                Referral
              </th>

              <th className="p-3 text-left">
                Country
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

            {filteredPartners
              .slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
              .map((partner) => (

                <tr
                  key={partner.id}
                  className="border-b border-white/5 hover:bg-white/5"
                >

                  {/* USER */}
                  <td className="p-3">

                    <div>

                      <p className="font-medium">
                        {partner.name}
                      </p>

                      <p className="text-xs text-gray-400">
                        {partner.email}
                      </p>

                      <p className="text-xs text-gray-500">
                        {partner.phone}
                      </p>

                    </div>

                  </td>

                  {/* REFERRAL */}
                  <td className="p-3">

                    <div className="flex items-center gap-2">

                      <span className="font-mono text-xs text-blue-400">
                        {partner.referralCode}
                      </span>

                      <button
                        onClick={() =>
                          copyToClipboard(
                            partner.referralCode
                          )
                        }
                      >
                        <ContentCopy fontSize="small" />
                      </button>

                    </div>

                    <p className="text-[10px] text-gray-500 truncate max-w-[200px]">
                      {getReferralLink(
                        partner.referralCode
                      )}
                    </p>

                  </td>

                  {/* COUNTRY */}
                  <td className="p-3 text-xs text-gray-400">
                    {partner.country || "N/A"}
                  </td>

                  {/* DATE */}
                  <td className="p-3 text-xs text-gray-400">

                    {partner.createdAt?.toDate()
                      ? format(
                        partner.createdAt.toDate(),
                        "dd/MM/yy HH:mm"
                      )
                      : "N/A"}

                  </td>

                  {/* STATUS */}
                  <td className="p-3">

                    {partner.approved === true && (
                      <span className="text-green-400 text-xs flex items-center gap-1">
                        <CheckCircle fontSize="small" />
                        Approved
                      </span>
                    )}

                    {partner.approved === false && (
                      <span className="text-red-400 text-xs flex items-center gap-1">
                        <Cancel fontSize="small" />
                        Declined
                      </span>
                    )}

                    {(partner.approved === null ||
                      partner.approved === undefined) && (
                        <span className="text-yellow-400 text-xs">
                          Pending
                        </span>
                      )}

                  </td>

                  {/* ACTIONS */}
                  <td className="p-3">

                    <div className="flex gap-2 flex-wrap">

                      <button
                        onClick={() =>
                          openPartner(partner)
                        }
                        className="p-2 bg-blue-600 rounded-lg"
                      >
                        <Visibility fontSize="small" />
                      </button>

                      <button
                        onClick={() =>
                          sendWhatsApp(partner)
                        }
                        className="p-2 bg-green-600 rounded-lg"
                      >
                        <WhatsApp fontSize="small" />
                      </button>

                      <button
                        onClick={() =>
                          sendEmail(partner)
                        }
                        className="p-2 bg-red-500 rounded-lg"
                      >
                        <Email fontSize="small" />
                      </button>

                      <button
                        onClick={() =>
                          generateSinglePDF(partner)
                        }
                        className="p-2 bg-purple-600 rounded-lg text-xs"
                      >
                        PDF
                      </button>

                      {(partner.approved === null ||
                        partner.approved === undefined) && (
                          <>
                            <button
                              onClick={() =>
                                approvePartner(partner)
                              }
                              className="p-2 bg-emerald-600 rounded-lg"
                            >
                              ✓
                            </button>

                            <button
                              onClick={() =>
                                declinePartner(partner)
                              }
                              className="p-2 bg-red-700 rounded-lg"
                            >
                              ✕
                            </button>
                          </>
                        )}

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
            filteredPartners.length
          )} of{" "}
          {filteredPartners.length}
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

      {/* MODAL */}
      {selectedPartner && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">

          <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">

            <div className="flex justify-between items-start">

              <div>

                <h2 className="text-2xl font-bold">
                  {selectedPartner.name}
                </h2>

                <p className="text-gray-400 text-sm">
                  {selectedPartner.email}
                </p>

              </div>

              <button
                onClick={() =>
                  setSelectedPartner(null)
                }
                className="text-gray-400"
              >
                ✕
              </button>

            </div>

            <div className="mt-6 space-y-3 text-sm">

              <div>
                <span className="text-gray-400">
                  Referral ID:
                </span>{" "}
                {selectedPartner.referralCode}
              </div>

              <div>
                <span className="text-gray-400">
                  Referral Link:
                </span>

                <p className="text-blue-400 break-all">
                  {getReferralLink(
                    selectedPartner.referralCode
                  )}
                </p>
              </div>

            </div>

            {/* REFERRALS */}
            <div className="mt-8">

              <h3 className="text-lg font-semibold mb-4">
                People Registered With This Code
              </h3>

              {referrals.length === 0 ? (

                <p className="text-gray-500 text-sm">
                  No referrals yet
                </p>

              ) : (

                <div className="space-y-3">

                  {referrals.map((r) => (

                    <div
                      key={r.id}
                      className="bg-[#050814] border border-white/10 rounded-xl p-4"
                    >

                      <p className="font-medium">
                        {r.name}
                      </p>

                      <p className="text-xs text-gray-400">
                        {r.email}
                      </p>

                      <p className="text-xs text-gray-500">
                        {r.mobile}
                      </p>

                    </div>
                  ))}

                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Partners;