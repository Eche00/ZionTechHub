import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../../lib/Config/firebase";

function Recent() {
  const { slug } = useParams(); // get :id from URL
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // fetching blogs
  useEffect(() => {
    const fetchBlogAndBlogs = async () => {
      setLoading(true);
      try {
        // Fetch latest 2 blogs
        const allQuery = await getDocs(collection(db, "blogs"));
        const allBlogs = [];
        allQuery.forEach((doc) => {
          allBlogs.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(
          allBlogs
            .sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds)
            .slice(0, 2)
        );
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogAndBlogs();
  }, []);

  // handling navigate
  const handleNavigate = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className=" w-full">
      {/* recommended articles  */}
      <section className=" flex flex-col gap-[20px] ">
        <div className="flex items-center justify-between">
          <h2 className=" text-[] sm:text-[40px] font-[600] text-white">
            Recent Articles
          </h2>
          <Link
            to="/dashboard/viewblogs"
            className="bg-[#034FE3] text-white px-4 py-2 rounded-full flex items-center justify-center cursor-pointer w-[120px] hover:scale-[105%] transition-all duration-300">
            View
          </Link>
        </div>
        <div className=" w-full  flex sm:flex-row flex-col items-center justify-center  gap-[24px] overflow-scroll">
          {blogs?.map((blog) => (
            <div
              className="sm:max-w-[364px] w-full flex flex-col gap-[24px] cursor-pointer"
              onClick={() => handleNavigate(blog?.slug)}>
              {/* image  */}
              <div className=" w-full relative">
                <img
                  src={blog?.imageUrl}
                  alt=""
                  className="w-full h-[270px] object-cover  border-[5px] border-gray-500 rounded-[10px]"
                />
                <span className=" absolute bottom-0 left-0 text-[#1A1A1AB2] text-[14px] font-bold bg-[#FFFFFF] py-[6px] px-[10px]">
                  {blog?.category}
                </span>
              </div>
              {/* info  */}
              <div className="flex flex-col gap-[14px]">
                <h3 className=" text-gray-500 text-[24px] font-[600] min-h-[62px] leading-[130%] sm:w-[400px] w-full">
                  {blog?.title.slice(0, 50)}...
                </h3>
                <p className="flex items-center text-[18px] font-[400] text-white gap-[5px]">
                  {blog.createdAt.toDate().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  by
                  <span className=" text-[#034FE3]">{blog?.creator}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Recent;
