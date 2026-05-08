import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../lib/Config/firebase";
import { format } from "date-fns";
import jsPDF from "jspdf";
import toast from "react-hot-toast";

function ViewBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [confirmingId, setConfirmingId] = useState(null);

  // new features
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const navigate = useNavigate();

  // Fetch Blogs
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "blogs"), (snapshot) => {
      const blogData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const sortedBlogs = blogData.sort(
        (a, b) => b.createdAt?.seconds - a.createdAt?.seconds
      );

      setBlogs(sortedBlogs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = blogs;

    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.creator?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCategory !== "all") {
      filtered = filtered.filter(
        (blog) => blog.category === filterCategory
      );
    }

    setFilteredBlogs(filtered);
    setPage(0);
  }, [blogs, searchTerm, filterCategory]);

  const handleView = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const handleDelete = async (id) => {
    try {
      if (confirmingId === id) {
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Blog deleted successfully");
        setConfirmingId(null);
      }
    } catch (error) {
      console.error("Couldn't Delete Blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  // Export blogs to CSV
  const exportToCSV = () => {
    const headers = ["Title", "Creator", "Category", "Created At"];

    const rows = filteredBlogs.map((blog) => [
      blog.title,
      blog.creator,
      blog.category,
      blog.createdAt?.toDate()
        ? format(blog.createdAt.toDate(), "dd/MM/yyyy")
        : "N/A",
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `blogs-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();

    URL.revokeObjectURL(url);

    toast.success("CSV exported successfully");
  };

  // Export single blog PDF
  const generateBlogPDF = (blog) => {
    const pdf = new jsPDF();

    pdf.setFontSize(20);
    pdf.text("Blog Details", 20, 20);

    pdf.setFontSize(12);
    pdf.text(`Title: ${blog.title}`, 20, 40);
    pdf.text(`Creator: ${blog.creator}`, 20, 50);
    pdf.text(`Category: ${blog.category}`, 20, 60);
    pdf.text(
      `Created At: ${blog.createdAt?.toDate()
        ? format(blog.createdAt.toDate(), "dd/MM/yyyy HH:mm")
        : "N/A"
      }`,
      20,
      70
    );

    pdf.save(`${blog.title}.pdf`);
    toast.success("PDF downloaded");
  };

  const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="h-screen overflow-y-auto bg-[#050814] text-white p-4 md:p-6 space-y-6">

      {/* HEADER */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
        <h2 className="text-2xl font-bold">Blogs</h2>
        <p className="text-gray-400 text-sm">
          Manage blogs, search, export & delete
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/10">
          <p className="text-gray-400 text-xs">Total Blogs</p>
          <h3 className="text-2xl font-bold">{blogs.length}</h3>
        </div>

        <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/10">
          <p className="text-gray-400 text-xs">Categories</p>
          <h3 className="text-2xl font-bold">{categories.length}</h3>
        </div>

        <Link
          to="/dashboard/create-blog"
          className="bg-blue-600 flex items-center justify-center rounded-2xl font-medium"
        >
          Create Blog
        </Link>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Search title or creator..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#0b1220] border border-white/10 px-4 py-2 rounded-full w-full md:w-80"
        />

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="bg-[#0b1220] border border-white/10 px-4 py-2 rounded-full"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button
          onClick={exportToCSV}
          className="px-4 py-2 bg-green-600 rounded-full text-sm"
        >
          Export CSV
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto border border-white/10 rounded-2xl">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-[#0b1220] text-gray-300">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Creator</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBlogs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((blog) => (
                <tr key={blog.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-3">
                    <img
                      src={blog.imageUrl}
                      alt="blog"
                      className="w-14 h-10 rounded-md object-cover cursor-pointer"
                      onClick={() => handleView(blog.slug)}
                    />
                  </td>

                  <td className="p-3 cursor-pointer" onClick={() => handleView(blog.slug)}>
                    {blog.title?.slice(0, 30)}...
                  </td>

                  <td className="p-3">{blog.creator}</td>
                  <td className="p-3">{blog.category}</td>

                  <td className="p-3">
                    {blog.createdAt?.toDate()
                      ? format(blog.createdAt.toDate(), "dd/MM/yyyy")
                      : "N/A"}
                  </td>

                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => generateBlogPDF(blog)}
                      className="px-3 py-1 bg-blue-600 rounded-lg text-xs"
                    >
                      PDF
                    </button>

                    {confirmingId === blog.id ? (
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="px-3 py-1 bg-red-700 rounded-lg text-xs"
                      >
                        Confirm
                      </button>
                    ) : (
                      <button
                        onClick={() => setConfirmingId(blog.id)}
                        className="px-3 py-1 bg-red-600 rounded-lg text-xs"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between text-sm text-gray-400">
        <p>
          Showing {page * rowsPerPage + 1} - {Math.min((page + 1) * rowsPerPage, filteredBlogs.length)} of {filteredBlogs.length}
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
                (p + 1) * rowsPerPage < filteredBlogs.length ? p + 1 : p
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

export default ViewBlogs;
