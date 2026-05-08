import React, { useRef, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storageF } from "../../lib/Config/firebase";
import { Check } from "@mui/icons-material";

function CreateBlog() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    creator: "",
    slug: "",
    metadescription: "",
    alt: "",
    category: "",
    details: "",
    image: [],
    toc: [],
    createdAt: "",
  });

  const [files, setFiles] = useState([]);
  const imageRef = useRef();

  const [error, setError] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSucesss] = useState(false);
  const [toc, setToc] = useState([]);

  const handleImageChange = (e) => {
    setImgError(false);
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const storageRef = ref(storageF, `images/${selectedFile.name}`);
      const previewUrl = URL.createObjectURL(selectedFile);
      setFiles([{ url: previewUrl, file: selectedFile }]);

      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progressPercentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressPercentage.toFixed(0));
        },
        (error) => {
          console.error(error);
          setImgError(true);
          setSucesss(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData((prevData) => ({
              ...prevData,
              image: [{ file: selectedFile, url: downloadURL }],
            }));
            setFiles([{ url: downloadURL, file: selectedFile }]);
          });
        }
      );
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditorChange = (value) => {
    const tocHeaders = [];
    const doc = new DOMParser().parseFromString(value, "text/html");
    const h2Elements = doc.querySelectorAll("h2");

    h2Elements.forEach((header, index) => {
      tocHeaders.push({
        id: `toc-${index}`,
        title: header.innerText,
      });
    });

    setFormData((prev) => ({
      ...prev,
      details: value,
      toc: tocHeaders,
    }));

    setToc(tocHeaders);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.image?.[0]?.url) {
      setImgError(true);
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "blogs"), {
        title: formData.title,
        slug: formData.slug,
        metadescription: formData.metadescription,
        alt: formData.alt,
        creator: formData.creator,
        category: formData.category,
        details: formData.details,
        toc: formData.toc,
        imageUrl: formData.image[0].url,
        createdAt: serverTimestamp(),
      });

      setSucesss(true);
      setLoading(false);

      setTimeout(() => {
        navigate("/dashboard/viewblogs");
      }, 2000);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-y-auto bg-[#050814] text-white p-4 md:p-6 space-y-6 mb-2">
      {success && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-blue-600 rounded-2xl p-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center">
              <Check />
            </div>
            <p className="text-xl font-bold">Blog Created Successfully</p>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Create Blog</h2>
            <p className="text-gray-400 text-sm">
              Publish blog posts with SEO fields, image upload and TOC generation
            </p>
          </div>

          <Link
            to="/dashboard/viewblogs"
            className="px-4 py-2 bg-[#0b1220] border border-white/10 rounded-full text-sm"
          >
            View Blogs
          </Link>
        </div>
      </div>

      {/* INFO */}
      <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 text-sm text-gray-400">
        <ul className="list-disc pl-5 space-y-2">
          <li>Upload only one image per blog.</li>
          <li>H2 tags automatically generate your table of contents.</li>
          <li>Do not use H1 tags inside blog details.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* IMAGE */}
        <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-5">
          <label
            htmlFor="image"
            className="inline-block px-4 py-2 bg-blue-600 rounded-full cursor-pointer text-sm"
          >
            Upload Blog Image
          </label>

          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />

          {progress > 0 && (
            <p className="text-sm text-green-400 mt-3">
              Upload Progress: {progress}%
            </p>
          )}

          {imgError && (
            <p className="text-red-500 text-sm mt-2">Image upload failed</p>
          )}

          {files.length > 0 && (
            <img
              src={files[0].url}
              alt="preview"
              className="w-full h-[300px] object-cover rounded-xl mt-4"
            />
          )}
        </div>

        {/* INPUT GRID */}
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "title",
            "slug",
            "metadescription",
            "alt",
            "creator",
          ].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field}
              className="bg-[#0b1220] border border-white/10 px-4 py-3 rounded-xl outline-none"
              required
            />
          ))}

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="bg-[#0b1220] border border-white/10 px-4 py-3 rounded-xl"
            required
          >
            <option value="">Select Category</option>

            {/* Existing Categories */}
            <option value="Data Analytics">Data Analytics</option>
            <option value="Data Science">Data Science</option>
            <option value="Web Development">Web Development</option>
            <option value="Cloud Computing & DevOps">
              Cloud Computing & DevOps
            </option>
            <option value="Machine Learning">Machine Learning</option>

            {/* Added from image */}
            <option value="Healthcare Data Analytics">
              Healthcare Data Analytics
            </option>
            <option value="Financial Data Analytics">
              Financial Data Analytics
            </option>
            <option value="Sales & Marketing Data Analytics">
              Sales & Marketing Data Analytics
            </option>
            <option value="Supply Chain Analytics">
              Supply Chain Analytics
            </option>
            <option value="Data Science and AI">
              Data Science and AI
            </option>
            <option value="AI Automation">
              AI Automation
            </option>
          </select>
        </div>

        {/* TOC */}
        {toc.length > 0 && (
          <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-5">
            <h3 className="font-semibold mb-3">Generated Table of Contents</h3>
            <ul className="space-y-2 text-blue-400 text-sm">
              {toc.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        )}

        {/* QUILL */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <ReactQuill
            value={formData.details}
            onChange={handleEditorChange}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
              ],
            }}
            className="h-96 text-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-blue-600 rounded-2xl font-bold "
        >
          {loading ? "Creating Blog..." : "Create Blog"}
        </button>

        {error && (
          <p className="text-red-500 text-center">
            Error uploading blog. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default CreateBlog;
