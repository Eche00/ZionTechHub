import React, { useState } from "react";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { db } from "../../lib/Config/firebase";
import { Check } from "@mui/icons-material";
function Links() {
  // Hooks and refs
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "Title",
    enrollLink: "hackathonlink link",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input field changes
  const handleChange = (e) => {
    setError(false);
    setSuccess(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form data to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const docRef = doc(db, "enroll", "main");

      await setDoc(docRef, {
        title: formData.title,
        enrollLink: formData.enrollLink,
        updatedAt: serverTimestamp(),
      });

      // Reset form after success
      setFormData({
        title: "",
        enrollLink: "",
      });
      setSuccess(true);
      setLoading(false);

      // Clear success state after 2s
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      // navigate("/blog"); // Uncomment if redirection is needed
    } catch (e) {
      console.error("Error adding document: ", e);
      setError(true);
      setSuccess(false);
      setLoading(false);
    }
  };

  return (
    <div className="h-fit p-10 w-full">
      <main className="relative">
        {success && (
          <div className="fixed left-0 top-0 w-full h-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center">
            <p className="bg-[#034FE3] border-3 border-[#034FE3] font-bold text-[20px] px-[70px] py-[20px] rounded-[10px] backdrop-blur-sm flex flex-col items-center justify-center gap-[15px] ">
              <span className=" border-2 border-white px-4 py-2 rounded-full">
                <Check />
              </span>
              {formData?.title} Updated!{" "}
            </p>
          </div>
        )}
        <div className="flex items-center gap-[20px] border-b-2 border-gray-700 py-[10px] mb-5">
          <h1 className="text-3xl font-bold text-white">Enroll Link</h1>
          <Link
            to="/enroll"
            className="bg-transparent text-gray-500 border-2 border-gray-700 px-4 py-2 rounded-full hover:scale-[102%] transition">
            Enroll
          </Link>
        </div>
        {/* Title / Enroll link schedule  */}
        <form className=" w-full flex flex-col gap-4 " onSubmit={handleSubmit}>
          {/* Title  */}
          <div className="flex flex-col gap-[5px]  w-full ">
            <p className="text-gray-500 ">Title</p>
            <input
              className=" border-3 bg-black border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 outline-none text-gray-500"
              type="text"
              name="title"
              onChange={handleChange}
              value={formData.title}
              required
            />
          </div>
          {/* Enroll link  */}

          <div className="flex flex-1 flex-col gap-[5px] ">
            <p className="text-gray-500 ">Enroll Link</p>
            <input
              className=" border-3 bg-black border-2  border-gray-700 w-full rounded-[10px] px-5 py-4 outline-none text-gray-500"
              type="text"
              name="enrollLink"
              onChange={handleChange}
              value={formData.enrollLink}
              required
            />
          </div>

          <button
            className="bg-[#034FE3] py-[15px] text-[16px] font-bold text-white rounded-[10px] my-[10px] w-full"
            type="submit">
            {loading ? "Submiting..." : "Submit"}
          </button>

          {error && (
            <p className="text-lg py-[5px] text-red-600 text-center font-bold">
              Error Submiting <br />
              <span className="text-sm text-white">Please try again!</span>
            </p>
          )}
        </form>
      </main>
    </div>
  );
}

export default Links;
