import React, { useEffect, useState, useRef } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
  query,
  orderBy
} from "firebase/firestore";
import { db } from "../../lib/Config/firebase";
import { Close, Public, Visibility, ContentCopy, CheckCircle, Cancel, Email, WhatsApp } from "@mui/icons-material";
import toast from "react-hot-toast";

function Affliates() {
  // React states
  const [affliates, setAffliates] = useState([]);
  const [copied, setCopied] = useState(null);
  const [copiedCode, setCopiedCode] = useState(null);
  const pdfRef = useRef();
  const [viewModal, setViewModal] = useState(false);
  const [selectedAffiliate, setSelectedAffiliate] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all"); // all, approved, pending, declined
  const [searchTerm, setSearchTerm] = useState("");

  // Getting affliate lists (ALL registrations - no restrictions)
  useEffect(() => {
    const q = query(collection(db, "affliates"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updated = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        // Ensure these fields exist for display
        username: doc.data().fullname || doc.data().username || "Unknown",
        email: doc.data().email || "",
        phone: doc.data().phone || "",
        country: doc.data().country || "",
        referralCode: doc.data().referralCode || "",
        approved: doc.data().approved !== undefined ? doc.data().approved : null,
        registrationNumber: doc.data().registrationNumber || 1,
      }));
      setAffliates(updated);
    });

    return () => unsubscribe();
  }, []);

  // Filter affiliates based on status and search
  const filteredAffiliates = affliates.filter(affiliate => {
    // Status filter
    if (filterStatus !== "all") {
      if (filterStatus === "approved" && affiliate.approved !== true) return false;
      if (filterStatus === "pending" && affiliate.approved !== null) return false;
      if (filterStatus === "declined" && affiliate.approved !== false) return false;
    }
    
    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        affiliate.username?.toLowerCase().includes(searchLower) ||
        affiliate.email?.toLowerCase().includes(searchLower) ||
        affiliate.referralCode?.toLowerCase().includes(searchLower) ||
        affiliate.phone?.includes(searchTerm)
      );
    }
    
    return true;
  });

  // Copy email
  const handleCopy = (id, email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(id);
        setTimeout(() => setCopied(null), 1500);
        toast.success("Email copied!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy");
      });
  };

  // Copy referral code
  const copyReferralCode = (id, code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(null), 1500);
        toast.success("Referral code copied!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy");
      });
  };

  // Clear all affiliates
  const clearAffliates = async () => {
    if (!window.confirm("Are you sure you want to clear ALL affiliates? This cannot be undone!")) {
      return;
    }
    
    try {
      const querySnapshot = await getDocs(collection(db, "affliates"));
      const deletePromises = querySnapshot.docs.map((docSnap) =>
        deleteDoc(doc(db, "affliates", docSnap.id))
      );
      await Promise.all(deletePromises);
      toast.success("All affiliates cleared successfully");
    } catch (error) {
      console.error("Error clearing affiliates:", error);
      toast.error("Failed to clear affiliates");
    }
  };

  // Delete single affiliate
  const deleteAffiliate = async (id, name) => {
    if (!window.confirm(`Delete ${name}? This cannot be undone.`)) {
      return;
    }
    
    try {
      await deleteDoc(doc(db, "affliates", id));
      toast.success(`${name} deleted successfully`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete affiliate");
    }
  };

  // View affiliate details
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

  // Approve affiliate
  const approveAffliate = async (id) => {
    const toastId = toast.loading("Approving affiliate...");

    try {
      const affiliateRef = doc(db, "affliates", id);
      await updateDoc(affiliateRef, { approved: true });

      setSelectedAffiliate((prev) => ({ ...prev, approved: true }));
      toast.success("Affiliate approved successfully", { id: toastId });
    } catch (error) {
      console.error(error);
      toast.error("Failed to approve affiliate", { id: toastId });
    }
  };

  // Decline affiliate
  const declineAffliate = async (id) => {
    const toastId = toast.loading("Declining affiliate...");

    try {
      const affiliateRef = doc(db, "affliates", id);
      await updateDoc(affiliateRef, { approved: false });

      setSelectedAffiliate((prev) => ({ ...prev, approved: false }));
      toast.success("Affiliate declined successfully", { id: toastId });
    } catch (error) {
      console.error(error);
      toast.error("Failed to decline affiliate", { id: toastId });
    }
  };

  // Send WhatsApp message
  const sendWhatsApp = (affiliate) => {
    const message = `Hello ${affiliate.username}!%0a%0a` +
      `Your Partnership Program details:%0a` +
      `Referral Code: ${affiliate.referralCode}%0a` +
      `Referral Link: https://ziontechhub.com/enroll/?affliate=${affiliate.referralCode}%0a%0a` +
      `Status: ${affiliate.approved === true ? "Approved ✅" : affiliate.approved === false ? "Pending Review" : "Under Review"}%0a%0a` +
      `Thank you for being part of Zion Tech Hub!`;
    
    window.open(`https://wa.me/${affiliate.phone}?text=${message}`, '_blank');
  };

  // Send email
  const mailAffiliateDetails = (affiliate) => {
    const subject = "Your Partnership Details - Zion Tech Hub";
    const body = `
Hello ${affiliate.username},

Here are your Partnership Details:

Name: ${affiliate.username}
Email: ${affiliate.email}
Phone: ${affiliate.phone}
Country: ${affiliate.country}

Referral Code: ${affiliate.referralCode}
Referral Link: https://ziontechhub.com/enroll/?affliate=${affiliate.referralCode}

Status: ${affiliate.approved === true ? "Approved" : affiliate.approved === false ? "Declined" : "Pending Approval"}

Total Referrals: ${affiliate.referrals?.length || 0}

Best regards,
Zion Tech Hub
`;

    const mailtoLink = `mailto:${affiliate.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Get status badge
  const getStatusBadge = (approved) => {
    if (approved === true) {
      return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400"><CheckCircle sx={{ fontSize: 12 }} /> Approved</span>;
    } else if (approved === false) {
      return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400"><Cancel sx={{ fontSize: 12 }} /> Declined</span>;
    } else {
      return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">⏳ Pending</span>;
    }
  };

  // Statistics
  const stats = {
    total: affliates.length,
    approved: affliates.filter(a => a.approved === true).length,
    pending: affliates.filter(a => a.approved === null).length,
    declined: affliates.filter(a => a.approved === false).length,
  };

  return (
    <div className="py-6 px-4 min-h-screen bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Affiliates Management</h1>
          <p className="text-gray-400 text-sm mt-1">Manage all partnership program registrations</p>
        </div>
        <button
          onClick={clearAffliates}
          className="bg-red-600/80 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
        >
          Clear All
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Total Registrations</p>
          <p className="text-2xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-green-700">
          <p className="text-green-400 text-sm">Approved</p>
          <p className="text-2xl font-bold text-green-400">{stats.approved}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-yellow-700">
          <p className="text-yellow-400 text-sm">Pending</p>
          <p className="text-2xl font-bold text-yellow-400">{stats.pending}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-red-700">
          <p className="text-red-400 text-sm">Declined</p>
          <p className="text-2xl font-bold text-red-400">{stats.declined}</p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
        <p className="text-blue-400 text-sm">
          📊 Showing ALL registrations. Multiple entries from same email are allowed and tracked separately.
          Total unique registrations: <strong>{affiliates.length}</strong>
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setFilterStatus("all")}
          className={`px-4 py-2 rounded-lg transition-all ${filterStatus === "all" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
        >
          All ({stats.total})
        </button>
        <button
          onClick={() => setFilterStatus("approved")}
          className={`px-4 py-2 rounded-lg transition-all ${filterStatus === "approved" ? "bg-green-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
        >
          Approved ({stats.approved})
        </button>
        <button
          onClick={() => setFilterStatus("pending")}
          className={`px-4 py-2 rounded-lg transition-all ${filterStatus === "pending" ? "bg-yellow-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
        >
          Pending ({stats.pending})
        </button>
        <button
          onClick={() => setFilterStatus("declined")}
          className={`px-4 py-2 rounded-lg transition-all ${filterStatus === "declined" ? "bg-red-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
        >
          Declined ({stats.declined})
        </button>
        
        <div className="flex-1"></div>
        
        <input
          type="text"
          placeholder="Search by name, email or code..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 w-full md:w-64"
        />
      </div>

      {/* Affiliates Table */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-white font-semibold">#</th>
                <th className="px-4 py-3 text-left text-white font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-white font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-white font-semibold hidden md:table-cell">Phone</th>
                <th className="px-4 py-3 text-left text-white font-semibold hidden lg:table-cell">Country</th>
                <th className="px-4 py-3 text-left text-white font-semibold">Referral Code</th>
                <th className="px-4 py-3 text-left text-white font-semibold hidden sm:table-cell">Status</th>
                <th className="px-4 py-3 text-left text-white font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredAffiliates.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-4 py-8 text-center text-gray-500">
                    No affiliates found
                  </td>
                </tr>
              ) : (
                filteredAffiliates.map((affiliate, index) => (
                  <tr key={affiliate.id} className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-4 py-3 text-gray-500">{index + 1}</td>
                    <td className="px-4 py-3 text-gray-200">{affiliate.username}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleCopy(affiliate.id, affiliate.email)}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        {affiliate.email.length > 25 ? affiliate.email.substring(0, 25) + "..." : affiliate.email}
                        {copied === affiliate.id ? (
                          <CheckCircle sx={{ fontSize: 14, color: "#10b981" }} />
                        ) : (
                          <ContentCopy sx={{ fontSize: 14 }} />
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-gray-400 hidden md:table-cell">{affiliate.phone || "N/A"}</td>
                    <td className="px-4 py-3 text-gray-400 hidden lg:table-cell">
                      <Public sx={{ fontSize: 14, marginRight: 0.5 }} /> {affiliate.country || "N/A"}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => copyReferralCode(affiliate.id, affiliate.referralCode)}
                        className="font-mono text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        {affiliate.referralCode}
                        {copiedCode === affiliate.id ? (
                          <CheckCircle sx={{ fontSize: 14, color: "#10b981" }} />
                        ) : (
                          <ContentCopy sx={{ fontSize: 14 }} />
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      {getStatusBadge(affiliate.approved)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => viewAffliate(affiliate.id)}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          title="View Details"
                        >
                          <Visibility sx={{ fontSize: 20 }} />
                        </button>
                        <button
                          onClick={() => sendWhatsApp(affiliate)}
                          className="text-green-400 hover:text-green-300 transition-colors"
                          title="Send WhatsApp"
                        >
                          <WhatsApp sx={{ fontSize: 20 }} />
                        </button>
                        <button
                          onClick={() => mailAffiliateDetails(affiliate)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                          title="Send Email"
                        >
                          <Email sx={{ fontSize: 20 }} />
                        </button>
                        <button
                          onClick={() => deleteAffiliate(affiliate.id, affiliate.username)}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Cancel sx={{ fontSize: 20 }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {viewModal && selectedAffiliate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 text-gray-300 p-6 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">
                {selectedAffiliate.username}
              </h2>
              <button
                onClick={() => {
                  setViewModal(false);
                  setSelectedAffiliate(null);
                }}
                className="text-gray-400 hover:text-white"
              >
                <Close fontSize="medium" />
              </button>
            </div>
            
            <div className="space-y-3 text-sm">
              <p><strong className="text-gray-400">Email:</strong> {selectedAffiliate.email}</p>
              <p><strong className="text-gray-400">Phone:</strong> {selectedAffiliate.phone || "N/A"}</p>
              <p><strong className="text-gray-400">Country:</strong> {selectedAffiliate.country || "N/A"}</p>
              <p><strong className="text-gray-400">Registration #:</strong> {selectedAffiliate.registrationNumber || 1}</p>
              <p><strong className="text-gray-400">Referral Code:</strong> 
                <code className="ml-2 text-blue-400">{selectedAffiliate.referralCode}</code>
                <button onClick={() => copyReferralCode(selectedAffiliate.id, selectedAffiliate.referralCode)} className="ml-2 text-gray-400 hover:text-white">
                  <ContentCopy sx={{ fontSize: 14 }} />
                </button>
              </p>
              <p><strong className="text-gray-400">Referral Link:</strong> 
                <a href={`https://ziontechub.com/enroll/?affliate=${selectedAffiliate.referralCode}`} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-400 text-xs break-all">
                  https://ziontechub.com/enroll/?affliate={selectedAffiliate.referralCode}
                </a>
              </p>
              <p><strong className="text-gray-400">Status:</strong> {getStatusBadge(selectedAffiliate.approved)}</p>
              <p><strong className="text-gray-400">Registered:</strong> {selectedAffiliate.createdAt?.toDate?.()?.toLocaleString() || "N/A"}</p>
            </div>

            {/* Approve/Decline Buttons */}
            {selectedAffiliate?.approved === null && (
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => approveAffliate(selectedAffiliate.id)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Approve
                </button>
                <button
                  onClick={() => declineAffliate(selectedAffiliate.id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Decline
                </button>
              </div>
            )}

            {/* Referrals Section */}
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-3">
                Referrals ({selectedAffiliate.referrals?.length || 0})
              </h3>
              {selectedAffiliate.referrals?.length > 0 ? (
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {selectedAffiliate.referrals.map((ref, index) => (
                    <div key={index} className="bg-gray-700 p-3 rounded-lg">
                      <p><strong>Name:</strong> {ref.name}</p>
                      <p><strong>Email:</strong> {ref.email}</p>
                      <p><strong>Course:</strong> {ref.course}</p>
                      <p><strong>Date:</strong> {new Date(ref.registeredAt).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No referrals yet.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Affliates;
