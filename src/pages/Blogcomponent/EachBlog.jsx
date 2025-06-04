import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../lib/Config/firebase";
import DOMPurify from "dompurify";

function EachBlog() {
  const { slug } = useParams(); // get :id from URL
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const shareUrl = window.location.href;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBlogAndBlogs = async () => {
      setLoading(true);
      try {
        // Fetch blog by slug
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const blogDoc = querySnapshot.docs[0];
          setBlog({ id: blogDoc.id, ...blogDoc.data() });
        } else {
          console.log("No blog found with this slug.");
        }

        // Fetch latest 3 blogs
        const allQuery = await getDocs(collection(db, "blogs"));
        const allBlogs = [];
        allQuery.forEach((doc) => {
          allBlogs.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(
          allBlogs
            .sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds)
            .slice(0, 3)
        );
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlogAndBlogs();
  }, [slug]);

  if (loading)
    return (
      <div className=" pt-[130px]    overflow-hidden   flex  items-center justify-center  w-full border-b h-[100vh]">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-[#034FE3]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  {
    /* image  */
  }
  <div className=" w-[90%] mx-auto ">
    <span className="bg-gray-300  w-[200px] sm:h-[652px] h-[200px] object-cover rounded-[20px]"></span>
  </div>;
  if (!blog) return navigate("/");

  const dot = (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" fill="#D9D9D9" />
    </svg>
  );
  const ig = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#040505" fill-opacity="0.1" />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        stroke="#040505"
        stroke-opacity="0.24"
      />
      <path
        d="M23.493 11.6665H16.5096C13.4763 11.6665 11.668 13.4748 11.668 16.5082V23.4832C11.668 26.5248 13.4763 28.3332 16.5096 28.3332H23.4846C26.518 28.3332 28.3263 26.5248 28.3263 23.4915V16.5082C28.3346 13.4748 26.5263 11.6665 23.493 11.6665ZM20.0013 23.2332C18.218 23.2332 16.768 21.7832 16.768 19.9998C16.768 18.2165 18.218 16.7665 20.0013 16.7665C21.7846 16.7665 23.2346 18.2165 23.2346 19.9998C23.2346 21.7832 21.7846 23.2332 20.0013 23.2332ZM24.9346 15.7332C24.893 15.8332 24.8346 15.9248 24.7596 16.0082C24.6763 16.0832 24.5846 16.1415 24.4846 16.1832C24.3846 16.2248 24.2763 16.2498 24.168 16.2498C23.943 16.2498 23.7346 16.1665 23.5763 16.0082C23.5013 15.9248 23.443 15.8332 23.4013 15.7332C23.3596 15.6332 23.3346 15.5248 23.3346 15.4165C23.3346 15.3082 23.3596 15.1998 23.4013 15.0998C23.443 14.9915 23.5013 14.9082 23.5763 14.8248C23.768 14.6332 24.0596 14.5415 24.3263 14.5998C24.3846 14.6082 24.4346 14.6248 24.4846 14.6498C24.5346 14.6665 24.5846 14.6915 24.6346 14.7248C24.6763 14.7498 24.718 14.7915 24.7596 14.8248C24.8346 14.9082 24.893 14.9915 24.9346 15.0998C24.9763 15.1998 25.0013 15.3082 25.0013 15.4165C25.0013 15.5248 24.9763 15.6332 24.9346 15.7332Z"
        fill="#040505"
      />
    </svg>
  );
  const fb = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#040505" fill-opacity="0.1" />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        stroke="#040505"
        stroke-opacity="0.24"
      />
      <path
        d="M28.3346 23.4915C28.3346 26.5248 26.5263 28.3332 23.493 28.3332H22.5013C22.043 28.3332 21.668 27.9582 21.668 27.4998V22.6915C21.668 22.4665 21.8513 22.2748 22.0763 22.2748L23.543 22.2498C23.6596 22.2415 23.7596 22.1582 23.7846 22.0415L24.0763 20.4498C24.1013 20.2998 23.9846 20.1582 23.8263 20.1582L22.0513 20.1832C21.818 20.1832 21.6346 19.9998 21.6263 19.7748L21.593 17.7332C21.593 17.5998 21.7013 17.4832 21.843 17.4832L23.843 17.4498C23.9846 17.4498 24.093 17.3415 24.093 17.1998L24.0596 15.1998C24.0596 15.0582 23.9513 14.9498 23.8096 14.9498L21.5596 14.9832C20.1763 15.0082 19.0763 16.1415 19.1013 17.5248L19.143 19.8165C19.1513 20.0498 18.968 20.2332 18.7346 20.2415L17.7346 20.2582C17.593 20.2582 17.4846 20.3665 17.4846 20.5082L17.5096 22.0915C17.5096 22.2332 17.618 22.3415 17.7596 22.3415L18.7596 22.3248C18.993 22.3248 19.1763 22.5082 19.1846 22.7332L19.2596 27.4832C19.268 27.9498 18.893 28.3332 18.4263 28.3332H16.5096C13.4763 28.3332 11.668 26.5248 11.668 23.4832V16.5082C11.668 13.4748 13.4763 11.6665 16.5096 11.6665H23.493C26.5263 11.6665 28.3346 13.4748 28.3346 16.5082V23.4915Z"
        fill="#040505"
      />
    </svg>
  );
  const twitter = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#040505" fill-opacity="0.1" />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        stroke="#040505"
        stroke-opacity="0.24"
      />
      <path
        d="M29.1931 16.0671L26.8572 18.403C26.3853 23.8733 21.772 28.1249 16.251 28.1249C15.1166 28.1249 14.1814 27.9452 13.4713 27.5905C12.8986 27.3038 12.6642 26.9967 12.6056 26.9092C12.5534 26.8309 12.5195 26.7417 12.5066 26.6485C12.4936 26.5552 12.5019 26.4602 12.5308 26.3706C12.5598 26.2809 12.6086 26.199 12.6736 26.1309C12.7386 26.0628 12.8182 26.0102 12.9064 25.9772C12.9267 25.9694 14.8002 25.2499 15.99 23.8803C15.3302 23.3378 14.7541 22.7007 14.2806 21.9897C13.3119 20.5514 12.2275 18.053 12.5619 14.3194C12.5725 14.2008 12.6168 14.0876 12.6895 13.9933C12.7623 13.899 12.8604 13.8274 12.9725 13.787C13.0845 13.7467 13.2058 13.7391 13.322 13.7653C13.4382 13.7916 13.5444 13.8504 13.6283 13.935C13.6556 13.9624 16.2283 16.521 19.3736 17.3506V16.8749C19.3724 16.376 19.4711 15.8818 19.6637 15.4216C19.8564 14.9614 20.1392 14.5444 20.4955 14.1952C20.8415 13.8497 21.2532 13.5769 21.7063 13.3931C22.1595 13.2093 22.6448 13.1181 23.1338 13.1249C23.7897 13.1313 24.4327 13.3074 25.0005 13.636C25.5682 13.9645 26.0412 14.4344 26.3736 14.9999H28.751C28.8746 14.9998 28.9956 15.0364 29.0984 15.105C29.2013 15.1737 29.2815 15.2714 29.3288 15.3856C29.3762 15.4999 29.3886 15.6256 29.3644 15.7469C29.3403 15.8682 29.2806 15.9796 29.1931 16.0671Z"
        fill="#040505"
      />
    </svg>
  );

  // handling navigate
  const handleNavigate = (slug) => {
    navigate(`/blog/${slug}`);
  };

  // handling share
  const handleInstagramShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "title",
          text: "shareText",
          url: shareUrl,
        })
        .catch((err) => console.error("Share failed:", err));
    } else {
      alert("Sharing is not supported on this device");
    }
  };
  return (
    <div>
      <Helmet>
        <title>{blog?.title} | Zion Tech Hub </title>
        <meta name="description" content={blog?.metadescription} />
      </Helmet>

      {/* hero section  */}
      <div className=" pt-[130px]    overflow-hidden  sm:h-[70vh]  flex  items-center  w-full pb-[10px]">
        {/* container   */}
        <motion.div
          initial={{ opacity: 0.45 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className=" w-[90%] mx-auto flex sm:flex-row flex-col justify-between  sm:gap-0 gap-[50px] md:flex-row ">
          {/* left hero section  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "linear" }}
            className=" flex-1   flex items-center justify-center sm:pt-0 pt-[80px] ">
            <div className=" flex flex-col items-center justify-center gap-[24px]">
              <p className=" sm:text-[14px] text-[12px]  font-[400] py-[10px] sm:px-[24px] px-[14px] border rounded-full w-fit  ">
                {blog?.category}
              </p>
              <h2 className=" text-[#1A1A1AB2] font-[600] sm:text-[64px] text-[32px] sm:w-[941px] w-[320px]  sm:leading-[130%] sm:tracker-[1.28px] leading-[120%] tracker-[0.8px] text-center">
                {blog?.title}
              </h2>
              <p className=" text-[#1A1A1A] font-[300] sm:text-[20px] text-[14px] text-center flex items-center gap-[10px]">
                {blog.createdAt.toDate().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                {dot} {blog?.creator}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* image  */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "linear" }}
        viewport={{ once: true }}
        className=" w-[90%] mx-auto ">
        <img
          src={blog?.imageUrl}
          alt={blog?.alt}
          className="bg-black  w-full sm:h-[652px] h-[200px] object-cover rounded-[20px]"
        />
      </motion.div>
      {/* info section  */}
      <main className=" sm:w-[90%] w-[95%] sm:mx-auto  my-32">
        {/* topics/article  */}
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-[24px] items-start justify-between w-[90%] ml-auto">
          {/* topics  */}
          <section className=" w-[340px] flex flex-col gap-[30px] ">
            {/* hello  */}
            <div className="list-disc pl-5 flex flex-col gap-[36px] border-l border-[#034FE31A] relative">
              <span className=" w-[3px] h-[30px]  bg-[#034FE3] absolute top-0 -left-[1.5px]"></span>

              <a className="text-[18px] font-[600] text-black">
                {blog.toc[0].title}
              </a>

              {blog.toc.slice(1).map((item, index) => (
                <p key={index}>
                  <a
                    href={`#${item.id}`}
                    className="text-[18px] font-[400] text-[#1A1A1A99]">
                    {item.title}
                  </a>
                </p>
              ))}
            </div>
            {/* share article  */}
            <div className="flex flex-col gap-[30px]">
              <p className=" text-[#1A1A1A] font-[600] sm:text-[18px] text-[14px] ">
                Share Article
              </p>
              <ul className="flex items-center gap-[12px]">
                <a onClick={handleInstagramShare}>{ig}</a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {fb}
                </a>
                <a
                  href={`https://www.x.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {twitter}
                </a>
              </ul>
            </div>
          </section>

          {/* article */}
          <section
            className="blog-content sm:w-[929px] w-full flex flex-col items-start "
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog?.details || ""),
            }}></section>
        </div>
      </main>

      {/* recommended articles  */}
      <section className=" flex flex-col gap-[32px] w-[90%] mx-auto">
        <h2 className=" text-[] sm:text-[40px] font-[600] text-[#1A1A1A]">
          Recommended Articles
        </h2>
        <div className=" w-full  flex items-center justify-between flex-wrap mb-32 gap-[24px]">
          {blogs.map((blog) => (
            <div
              className="sm:w-[464px] w-full flex flex-col gap-[24px] cursor-pointer"
              onClick={() => handleNavigate(blog?.slug)}>
              {/* image  */}
              <div className=" w-full relative">
                <img
                  src={blog?.imageUrl}
                  alt=""
                  className="w-full h-[316px] object-cover "
                />
                <span className=" absolute bottom-0 left-0 text-[#1A1A1AB2] text-[14px] font-[400] bg-[#FFFFFF] py-[6px] px-[10px]">
                  {blog?.category}
                </span>
              </div>
              {/* info  */}
              <div className="flex flex-col gap-[14px]">
                <h3 className=" text-[#1A1A1AB2] text-[24px] font-[600] h-[62px] leading-[130%] w-[400px]">
                  {blog?.title}
                </h3>
                <p className="flex items-center text-[18px] font-[400] text-[#1A1A1AB2] gap-[5px]">
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

export default EachBlog;
