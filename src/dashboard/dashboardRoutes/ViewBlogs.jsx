import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../lib/Config/firebase";

function ViewBlogs() {
  //  React State
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [confirmingId, setConfirmingId] = useState(null);

  const navigate = useNavigate();

  // Fetch Blogs from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "blogs"), (snapshot) => {
      const blogData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const sortedBlogs = blogData.sort((a, b) => b.createdAt - a.createdAt);
      setBlogs(sortedBlogs);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  //  Navigate to Blog Detail Page
  const handleView = (slug) => {
    navigate(`/blog/${slug}`);
  };

  // handling delete blog
  const handleDelete = async (id) => {
    try {
      if (confirmingId === id) {
        await deleteDoc(doc(db, "blogs", id));
        setConfirmingId(null);
      }
    } catch (error) {
      console.error("Could't Delete Blog:", error);
    }
  };
  return (
    <div className="  py-10 px-4 h-[100vh] overflow-scroll">
      <div className="  w-full">
        <div className="flex items-center gap-[20px] border-b-2 border-gray-700 py-[10px]">
          <h1 className="text-3xl font-bold text-white">Blogs</h1>
          <Link
            to="/dashboard/create-blog"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full hover:scale-[102%] transition">
            Create Blog
          </Link>
          <button className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full cursor-default">
            Categorized / Courses
          </button>
        </div>
        {/* message  */}
        <ul className="text-gray-500  list-disc pl-5 pt-2">
          <li>You can click the images on each blog to view specifically. </li>
          <li>You can click the delete and confirm to delete blogs. </li>
        </ul>
        <section className=" flex items-center justify-between mt-[80px] py-6">
          <p className=" text-white font-bold flex items-center gap-[10px]">
            Blogs:{" "}
            <span className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-1 rounded-[10px] ">
              {blogs.length}
            </span>
          </p>
        </section>
        {/* db  */}
        <div className="flex flex-col w-full  gap-[10px]  bg-black border-2  border-gray-700 rounded-[10px]  overflow-scroll h-[600px] relative ">
          <div className=" text-white font-bold w-full bg-gray-700  sticky top-0 left-0 py-[20px]  grid grid-cols-6 gap-4 items-center px-14 h-fit">
            <p>Image</p>
            <p>Title</p>
            <p>Creator</p>
            <p>Category</p>
            <p>CreatedAt</p>
            <p className="flex items-center justify-end pr-10">Delete</p>
          </div>
          {blogs.map((blog) => (
            <div
              className="grid grid-cols-6 gap-4 items-center border-b border-gray-500   p-4 w-full  px-10 py-4  text-white   h-fit cursor-pointer bg-opacity-5"
              key={blog?.id}>
              <div className="text-gray-500 ">
                <img
                  src={blog?.imageUrl}
                  alt=""
                  className="w-14 h-10 rounded-md border-2 border-gray-700 object-cover"
                  onClick={() => handleView(blog?.slug)}
                />
              </div>
              <p
                className="text-gray-600 text-sm border-l-2 border-gray-500 pl-2 cursor-pointer hover:text-white transition-all duration-300 flex items-center gap-[10px]"
                onClick={() => handleView(blog?.slug)}>
                {blog?.title.slice(0, 10)}...
              </p>
              <p className="text-gray-500 text-sm"> {blog?.creator}</p>
              <p className="text-gray-500 text-sm"> {blog?.category}</p>
              <p className="text-gray-500 text-sm">
                {" "}
                {blog?.createdAt.toDate().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              {/* buttons  */}
              <div className="flex items-center gap-[20px] justify-end">
                {confirmingId === blog.id ? (
                  <button
                    onClick={() => handleDelete(blog?.id)}
                    className=" bg-[#e30303] text-white font-[500] rounded-full text-[14px] w-[120px] py-[8px] flex items-center justify-center">
                    Confirm
                  </button>
                ) : (
                  <button
                    onClick={() => setConfirmingId(blog?.id)}
                    className=" bg-[#e30303] text-white font-[500] rounded-full text-[14px] w-[120px] py-[8px] flex items-center justify-center">
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewBlogs;
