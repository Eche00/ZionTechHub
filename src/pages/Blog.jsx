import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import blogs from "../lib/Blog";
function Blog() {
  const dot = (
    <svg
      width="9"
      height="8"
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="4.5" cy="4" r="4" fill="#034FE3" />
    </svg>
  );
  const arrowLeft = (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.67483 0.633138L0.335937 5.9998L5.67483 11.3665C5.72304 11.4298 5.7843 11.482 5.85445 11.5196C5.92461 11.5572 6.00202 11.5793 6.08144 11.5843C6.16087 11.5894 6.24046 11.5773 6.31482 11.549C6.38918 11.5206 6.45658 11.4766 6.51245 11.4199C6.56832 11.3632 6.61137 11.2952 6.63867 11.2205C6.66597 11.1457 6.67689 11.0659 6.67068 10.9866C6.66448 10.9073 6.64131 10.8302 6.60272 10.7606C6.56414 10.691 6.51105 10.6304 6.44705 10.5831L2.4526 6.55536L13.0804 6.55536C13.2277 6.55536 13.369 6.49683 13.4732 6.39264C13.5774 6.28846 13.6359 6.14715 13.6359 5.9998C13.6359 5.85246 13.5774 5.71115 13.4732 5.60697C13.369 5.50278 13.2277 5.44425 13.0804 5.44425L2.4526 5.44425L6.44705 1.41647C6.55092 1.31186 6.60899 1.17026 6.60847 1.02284C6.60795 0.875416 6.54888 0.734236 6.44427 0.63036C6.33966 0.526484 6.19806 0.468419 6.05064 0.46894C5.90322 0.46946 5.76204 0.528525 5.65816 0.633138H5.67483Z"
        fill="#1A1A1A"
      />
    </svg>
  );
  const arrowRight = (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.32517 11.3669L13.6641 6.0002L8.32517 0.633528C8.27696 0.57021 8.2157 0.51799 8.14555 0.480405C8.07539 0.442819 7.99798 0.420746 7.91856 0.415678C7.83913 0.410611 7.75954 0.422668 7.68518 0.451032C7.61082 0.479397 7.54342 0.523408 7.48755 0.580085C7.43168 0.636762 7.38863 0.704783 7.36133 0.779541C7.33403 0.8543 7.32311 0.934052 7.32932 1.0134C7.33552 1.09274 7.35869 1.16983 7.39728 1.23944C7.43586 1.30905 7.48895 1.36955 7.55295 1.41686L11.5474 5.44464L0.919619 5.44464C0.772276 5.44464 0.630969 5.50317 0.526782 5.60736C0.422595 5.71154 0.364063 5.85285 0.364063 6.0002C0.364063 6.14754 0.422595 6.28885 0.526782 6.39303C0.630969 6.49722 0.772276 6.55575 0.919619 6.55575L11.5474 6.55575L7.55295 10.5835C7.44908 10.6881 7.39101 10.8297 7.39153 10.9772C7.39205 11.1246 7.45112 11.2658 7.55573 11.3696C7.66034 11.4735 7.80194 11.5316 7.94936 11.5311C8.09678 11.5305 8.23796 11.4715 8.34184 11.3669H8.32517Z"
        fill="#1A1A1A"
      />
    </svg>
  );
  const search = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5951 18.6541L20.5231 21.5836C20.6646 21.7202 20.854 21.7958 21.0507 21.7941C21.2473 21.7924 21.4354 21.7135 21.5745 21.5745C21.7135 21.4354 21.7924 21.2473 21.7941 21.0507C21.7958 20.854 21.7202 20.6646 21.5836 20.5231L18.6541 17.5936C20.2943 15.6793 21.1292 13.204 20.9838 10.6873C20.8383 8.17065 19.7237 5.80812 17.8739 4.0955C16.024 2.38287 13.5828 1.45329 11.0624 1.50181C8.54193 1.55032 6.13825 2.57317 4.35571 4.35571C2.57317 6.13825 1.55032 8.54193 1.50181 11.0624C1.45329 13.5828 2.38287 16.024 4.0955 17.8739C5.80812 19.7237 8.17065 20.8383 10.6873 20.9838C13.204 21.1292 15.6793 20.2943 17.5936 18.6541H17.5951ZM19.5001 11.2501C19.5001 13.4382 18.6309 15.5366 17.0838 17.0838C15.5366 18.6309 13.4382 19.5001 11.2501 19.5001C9.06209 19.5001 6.96367 18.6309 5.41649 17.0838C3.86932 15.5366 3.00012 13.4382 3.00012 11.2501C3.00012 9.06209 3.86932 6.96367 5.41649 5.41649C6.96367 3.86932 9.06209 3.00012 11.2501 3.00012C13.4382 3.00012 15.5366 3.86932 17.0838 5.41649C18.6309 6.96367 19.5001 9.06209 19.5001 11.2501Z"
        fill="#1A1A1A"
      />
    </svg>
  );

  return (
    <div>
      <Helmet>
        <title>
          Register for Our Hackathon, Build & Win Big | Zion Tech Hub{" "}
        </title>
        <meta
          name="description"
          content="Explore our blog for the latest in tech, innovation, and career tips. Fresh insights every week—click now and fuel your knowledge!"
        />
      </Helmet>
      <span className="  md:h-[104px] md:w-[104px] h-[50px] w-[50px]   bg-[#034FE30D] absolute md:top-[50px] md:right-[640px] top-[150px] right-[60px] "></span>
      <span className="  md:h-[104px] md:w-[104px] w-[50px] h-[50px]  bg-[#034FE30D] absolute md:top-[400px] md:left-[314px] top-[300px] left-0  "></span>
      {/* hero section  */}
      <div className=" pt-[130px]    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] overflow-hidden  sm:h-[100vh]  flex  items-center  w-full border-b">
        {/* container   */}
        <motion.div
          initial={{ opacity: 0.45 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className=" w-[90%] mx-auto flex sm:flex-row flex-col justify-between  sm:gap-0 gap-[50px] md:flex-row">
          {/* left hero section  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "linear" }}
            className=" flex-1   flex items-center justify-center sm:pt-0 pt-[80px] ">
            <div className=" flex flex-col items-center justify-center gap-[24px]">
              <p className=" sm:text-[14px] text-[12px]  font-[400] py-[10px] sm:px-[24px] px-[14px] border rounded-full w-fit  flex items-center justify-center gap-[10px]">
                {dot} Blog
              </p>
              <h1 className=" text-[#1A1A1A] font-[700] sm:text-[110px] text-[64px] sm:w-full w-[320px] sm:whitespace-nowrap sm:leading-[130%] sm:tracker-[1.28px] leading-[120%] tracker-[0.8px]">
                Inside{" "}
                <span className=" text-[#034FE3]"> Data Analytics: </span>
              </h1>
              <p className=" text-[#1A1A1A] font-[500] sm:text-[64px] text-[24px] sm:w-[712px] w-[325px] text-center">
                Stories and Interviews
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Blog section  */}
      <main className=" w-[90%] mx-auto flex flex-col">
        {/* Blog section  */}
        <section className="flex items-start justify-between mt-32">
          <div className=" w-[1000px] flex items-center justify-between flex-wrap text-white gap-y-[85px]">
            {blogs.map((blog) => (
              <div className="w-[487px] flex flex-col gap-[24px]">
                {/* image  */}
                <div className=" w-full relative">
                  <img
                    src={blog.image}
                    alt=""
                    className="w-full h-[316px] object-cover "
                  />
                  <span className=" absolute bottom-0 left-0 text-[#1A1A1AB2] text-[14px] font-[400] bg-[#FFFFFF] py-[6px] px-[10px]">
                    {blog.category}
                  </span>
                </div>
                {/* info  */}
                <div className="flex flex-col gap-[14px]">
                  <h3 className=" text-[#1A1A1AB2] text-[24px] font-[600] h-[62px] leading-[130%]">
                    {blog.title}
                  </h3>
                  <p className="flex items-center text-[18px] font-[400] text-[#1A1A1AB2] gap-[5px]">
                    {blog.date} by
                    <span className=" text-[#034FE3]">{blog.author}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* search / category  */}
          <div className=" w-[368px] flex flex-col gap-[30px]">
            {/* search  */}
            <div className=" border-[1px] border-[#1A1A1A66] rounded-[5px] py-[15px] px-[10px] flex items-center gap-[10px]">
              {search}{" "}
              <input
                type="text"
                className=" flex flex-1 border-none outline-none placeholder:text-[#1A1A1A99] text-[18px] font-[500] bg-transparent"
                placeholder="Search..."
              />
            </div>
            {/* category  */}
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[#1A1A1A] text-[24px] font-[600]">
                Categories
              </h2>
              {/* list  */}
              <ul className="flex flex-col gap-[10px]">
                <li className="text-[#034FE3] text-[20px] font-[400] cursor-pointer">
                  Data Analytics
                </li>
                <li className="text-[#1A1A1A] text-[20px] font-[400] cursor-pointer">
                  Data Science
                </li>
                <li className="text-[#1A1A1A] text-[20px] font-[400] cursor-pointer">
                  Web Development
                </li>
                <li className="text-[#1A1A1A] text-[20px] font-[400] cursor-pointer">
                  Cloud Computing & DevOps
                </li>
                <li className="text-[#1A1A1A] text-[20px] font-[400] cursor-pointer">
                  Machine Learning
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* bottom section  */}
        <section className="flex items-center justify-between my-32">
          <button className=" border-[#1A1A1ACC] border-[1px] rounded-[5px] px-[24px] py-[10px] text-[16px] font-[600] flex items-center gap-[10px]">
            {arrowLeft} Previous
          </button>

          <div className="flex items-center gap-[16px]">
            <p className=" border-b-[#034FE3] border-b-[3px] px-[20px] py-[10px] text-[#034FE3] text-[20px] font-[600] cursor-pointer">
              1
            </p>
            <p className="  px-[20px] py-[10px] text-[#1A1A1A] text-[20px] font-[600] cursor-pointer">
              2
            </p>
            <p className="  px-[20px] py-[10px] text-[#1A1A1A] text-[20px] font-[600] cursor-pointer">
              3
            </p>
            <p className="  px-[20px] py-[10px] text-[#1A1A1A] text-[20px] font-[600] cursor-pointer">
              4
            </p>
            <p className="  px-[20px] py-[10px] text-[#1A1A1A] text-[20px] font-[600] cursor-pointer">
              5
            </p>
          </div>

          <button className=" border-[#1A1A1ACC] border-[1px] rounded-[5px] px-[24px] py-[10px] text-[16px] font-[600] flex items-center gap-[10px]">
            Next {arrowRight}
          </button>
        </section>
      </main>
    </div>
  );
}

export default Blog;
